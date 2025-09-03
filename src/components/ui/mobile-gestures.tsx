'use client';

import { motion, PanInfo } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';

// Swipeable card component
interface SwipeableCardProps {
  children: ReactNode;
  className?: string;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  threshold?: number;
  disabled?: boolean;
}

export function SwipeableCard({
  children,
  className = '',
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 50,
  disabled = false,
}: SwipeableCardProps) {
  const [dragDirection, setDragDirection] = useState<'x' | 'y' | null>(null);

  const handleDragStart = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (disabled) return;
    
    const { offset } = info;
    if (Math.abs(offset.x) > Math.abs(offset.y)) {
      setDragDirection('x');
    } else {
      setDragDirection('y');
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (disabled) return;
    
    const { offset } = info;
    const { x, y } = offset;
    
    // Check if drag distance exceeds threshold
    if (Math.abs(x) > threshold || Math.abs(y) > threshold) {
      if (dragDirection === 'x') {
        if (x > 0 && onSwipeRight) {
          onSwipeRight();
        } else if (x < 0 && onSwipeLeft) {
          onSwipeLeft();
        }
      } else if (dragDirection === 'y') {
        if (y > 0 && onSwipeDown) {
          onSwipeDown();
        } else if (y < 0 && onSwipeUp) {
          onSwipeUp();
        }
      }
    }
    
    setDragDirection(null);
  };

  return (
    <motion.div
      className={cn('cursor-grab active:cursor-grabbing', className)}
      drag={!disabled}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.1}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
}

// Pull to refresh component
interface PullToRefreshProps {
  children: ReactNode;
  onRefresh: () => Promise<void>;
  threshold?: number;
  className?: string;
}

export function PullToRefresh({
  children,
  onRefresh,
  threshold = 100,
  className = '',
}: PullToRefreshProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);

  const handleDragEnd = async (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset } = info;
    
    if (offset.y > threshold && !isRefreshing) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
        setPullDistance(0);
      }
    } else {
      setPullDistance(0);
    }
  };

  return (
    <motion.div
      className={cn('relative', className)}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={{ top: 0.2, bottom: 0 }}
      onDrag={(event, info) => setPullDistance(Math.max(0, info.offset.y))}
      onDragEnd={handleDragEnd}
    >
      {/* Pull indicator */}
      <motion.div
        className="absolute top-0 left-0 right-0 flex items-center justify-center bg-slate-50 border-b border-slate-200"
        style={{ height: Math.min(pullDistance, threshold) }}
        animate={{ opacity: pullDistance > 20 ? 1 : 0 }}
      >
        {isRefreshing ? (
          <div className="flex items-center gap-2 text-slate-600">
            <div className="w-4 h-4 border-2 border-slate-300 border-t-ms-blue rounded-full animate-spin" />
            <span className="text-sm">Refreshing...</span>
          </div>
        ) : (
          <div className="text-slate-500 text-sm">
            {pullDistance > threshold ? 'Release to refresh' : 'Pull to refresh'}
          </div>
        )}
      </motion.div>
      
      <div style={{ transform: `translateY(${Math.min(pullDistance, threshold)}px)` }}>
        {children}
      </div>
    </motion.div>
  );
}

// Mobile-friendly carousel with touch gestures
interface MobileCarouselProps {
  children: ReactNode[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

export function MobileCarousel({
  children,
  className = '',
  autoPlay = false, // eslint-disable-line @typescript-eslint/no-unused-vars
  autoPlayInterval = 5000, // eslint-disable-line @typescript-eslint/no-unused-vars
  showDots = true,
  showArrows = false,
}: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;
    const threshold = 50;
    
    if (Math.abs(offset.x) > threshold || Math.abs(velocity.x) > 500) {
      if (offset.x > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    
    setIsDragging(false);
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        animate={{ x: -currentIndex * 100 + '%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>

      {/* Dots indicator */}
      {showDots && (
        <div className="flex justify-center mt-4 space-x-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-200',
                index === currentIndex
                  ? 'bg-ms-blue scale-125'
                  : 'bg-slate-300 hover:bg-slate-400'
              )}
            />
          ))}
        </div>
      )}

      {/* Arrow navigation */}
      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
          >
            →
          </button>
        </>
      )}
    </div>
  );
}

// Mobile-optimized modal with swipe to close
interface MobileModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  swipeToClose?: boolean;
}

export function MobileModal({
  children,
  isOpen,
  onClose,
  className = '',
  swipeToClose = true,
}: MobileModalProps) {
  if (!isOpen) return null;

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (swipeToClose && info.offset.y > 100) {
      onClose();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Modal content */}
      <motion.div
        className={cn(
          'relative bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden',
          className
        )}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        drag={swipeToClose ? 'y' : false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.2 }}
        onDragEnd={handleDragEnd}
      >
        {/* Drag handle */}
        {swipeToClose && (
          <div className="flex justify-center pt-2 pb-4">
            <div className="w-8 h-1 bg-slate-300 rounded-full" />
          </div>
        )}
        
        {children}
      </motion.div>
    </motion.div>
  );
}
