'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'image',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: Event) => {
      const we = e as unknown as { deltaY: number; preventDefault: () => void };
      if (mediaFullyExpanded && we.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = we.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: Event) => {
      const te = e as unknown as { touches: { clientY: number }[] };
      setTouchStartY(te.touches[0].clientY);
    };

    const handleTouchMove = (e: Event) => {
      if (!touchStartY) return;
      const te = e as unknown as { touches: { clientY: number }[]; preventDefault: () => void };
      const touchY = te.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => setTouchStartY(0);
    const handleScroll = (): void => { if (!mediaFullyExpanded) window.scrollTo(0, 0); };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => setIsMobileState(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div ref={sectionRef} style={{ overflow: 'hidden' }}>
      <section style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100dvh' }}>
        <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100dvh' }}>

          {/* Background */}
          <motion.div
            style={{ position: 'absolute', inset: 0, zIndex: 0, height: '100%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt="Background"
              width={1920}
              height={1080}
              style={{ width: '100vw', height: '100vh', objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,12,12,0.55)' }} />
          </motion.div>

          <div style={{ width: '100%', maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 10 }}>

            {/* Expanding media + split text viewport */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100dvh', position: 'relative' }}>

              {/* Expanding image/video */}
              <div
                style={{
                  position: 'absolute',
                  zIndex: 0,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0 0 80px rgba(0,0,0,0.6)',
                  borderRadius: scrollProgress < 0.5 ? '12px' : `${12 - scrollProgress * 12}px`,
                  overflow: 'hidden',
                }}
              >
                {mediaType === 'image' ? (
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                      src={mediaSrc}
                      alt={title || 'Hero'}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                    <motion.div
                      style={{ position: 'absolute', inset: 0, background: 'rgba(12,12,12,0.4)', borderRadius: 'inherit' }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    {/* Red accent gradient overlay */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(238,62,48,0.15) 0%, transparent 60%)', borderRadius: 'inherit' }} />
                  </div>
                ) : (
                  <video
                    src={mediaSrc}
                    poster={posterSrc}
                    autoPlay muted loop playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                )}
              </div>

              {/* Split title text */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: 8,
                  width: '100%',
                  position: 'relative',
                  zIndex: 10,
                  mixBlendMode: textBlend ? 'difference' : 'normal',
                }}
              >
                <motion.h1
                  style={{
                    fontFamily: 'var(--font-dm-serif), serif',
                    fontStyle: 'italic',
                    fontSize: 'clamp(56px, 9vw, 108px)',
                    color: '#F5F3EE',
                    lineHeight: 1,
                    margin: 0,
                    letterSpacing: '-0.02em',
                    transform: `translateX(-${textTranslateX}vw)`,
                    transition: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {firstWord}
                </motion.h1>
                <motion.h1
                  style={{
                    fontFamily: 'var(--font-dm-serif), serif',
                    fontStyle: 'italic',
                    fontSize: 'clamp(56px, 9vw, 108px)',
                    color: '#EE3E30',
                    lineHeight: 1,
                    margin: 0,
                    letterSpacing: '-0.02em',
                    transform: `translateX(${textTranslateX}vw)`,
                    transition: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {restOfTitle}
                </motion.h1>
              </div>

              {/* Scroll hint */}
              {scrollToExpand && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 32,
                    left: '50%',
                    transform: `translateX(-50%) translateX(${textTranslateX}vw)`,
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: 11,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(245,243,238,0.5)',
                    transition: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  {scrollToExpand}
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </motion.div>
                </div>
              )}

              {/* Eyebrow date label */}
              {date && (
                <div
                  style={{
                    position: 'absolute',
                    top: 32,
                    left: '50%',
                    transform: `translateX(-50%) translateX(-${textTranslateX}vw)`,
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: 11,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#EE3E30',
                    transition: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ display: 'inline-block', width: 20, height: 2, background: '#EE3E30' }} />
                  {date}
                </div>
              )}
            </div>

            {/* Children — visible after full expansion */}
            <motion.div
              style={{ width: '100%' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
