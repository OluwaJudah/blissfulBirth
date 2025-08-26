'use client';

import { useEffect, useRef, useState } from 'react';

interface PullToRefreshProps {
  onRefresh?: () => void | Promise<void>;
  threshold?: number; // how far to pull down to trigger refresh (in px)
  children: React.ReactNode;
}

export default function PullToRefresh({
  onRefresh,
  threshold = 80,
  children,
}: PullToRefreshProps) {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const startY = useRef<number | null>(null);
  const isPulling = useRef(false);

  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      if (window.scrollY === 0 && !isRefreshing) {
        startY.current = e.touches[0].clientY;
        isPulling.current = true;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isPulling.current || startY.current === null) return;
      const currentY = e.touches[0].clientY;
      const distance = currentY - startY.current;
      if (distance > 0) {
        e.preventDefault(); // prevent scroll
        setPullDistance(distance > threshold * 2 ? threshold * 2 : distance);
      }
    };

    const onTouchEnd = async () => {
      if (pullDistance >= threshold) {
        setIsRefreshing(true);
        setPullDistance(threshold);
        try {
          if (onRefresh) await onRefresh();
          else location.reload(); // default action
        } finally {
          setTimeout(() => {
            setIsRefreshing(false);
            setPullDistance(0);
          }, 1000);
        }
      } else {
        setPullDistance(0);
      }
      startY.current = null;
      isPulling.current = false;
    };

    document.addEventListener('touchstart', onTouchStart, { passive: false });
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onTouchEnd);

    return () => {
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, [pullDistance, threshold, onRefresh, isRefreshing]);

  return (
    <div className="relative">
      <div
        className="flex justify-center items-center text-sm text-gray-600 transition-all duration-200"
        style={{
          height: `${pullDistance}px`,
        }}
      >
        {isRefreshing ? (
          <span className="animate-spin">🔄</span>
        ) : pullDistance > 0 ? (
          <span>⬇️ Pull to refresh</span>
        ) : null}
      </div>
      <div>{children}</div>
    </div>
  );
}
