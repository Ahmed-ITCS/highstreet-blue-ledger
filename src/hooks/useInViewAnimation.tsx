
import { useEffect, useRef, useState } from 'react';

interface UseInViewAnimationProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useInViewAnimation = (
  { threshold = 0.1, rootMargin = '0px', triggerOnce = true }: UseInViewAnimationProps = {}
) => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) observer.unobserve(currentRef);
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
};

export default useInViewAnimation;
