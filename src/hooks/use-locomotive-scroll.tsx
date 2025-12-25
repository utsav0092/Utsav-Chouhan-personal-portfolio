import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export const useLocomotiveScroll = () => {
  useEffect(() => {
    const scrollElement = document.querySelector('[data-scroll-container]');
    
    if (!scrollElement) return;

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollElement,
      smooth: true,
      multiplier: 1,
      lerp: 0.1,
      smartphone: {
        smooth: true,
        lerp: 0.1,
      },
      tablet: {
        smooth: true,
        lerp: 0.1,
      },
    });

    // Update scroll on window resize
    window.addEventListener('resize', () => {
      locomotiveScroll.update();
    });

    return () => {
      window.removeEventListener('resize', () => {
        locomotiveScroll.update();
      });
      locomotiveScroll.destroy();
    };
  }, []);
};
