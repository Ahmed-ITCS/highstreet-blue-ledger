
import React from 'react';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

type AnimationType = 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'slide-in-bottom' | 'zoom-in' | 'reveal';

interface AnimatedElementProps {
  children: React.ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  as?: React.ElementType;
  triggerOnce?: boolean;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  type = 'fade-in',
  delay = 0,
  duration = 1.2, // Increased from 0.8 to 1.2
  className = '',
  threshold = 0.1,
  as: Component = 'div',
  triggerOnce = true,
}) => {
  const { ref, isInView } = useInViewAnimation({ threshold, triggerOnce });

  const getAnimationClass = () => {
    switch (type) {
      case 'fade-in':
        return 'animate-fade-in';
      case 'slide-in-left':
        return 'animate-slide-in-left';
      case 'slide-in-right':
        return 'animate-slide-in-right';
      case 'slide-in-bottom':
        return 'animate-slide-in-bottom';
      case 'zoom-in':
        return 'animate-zoom-in';
      case 'reveal':
        return 'reveal-container';
      default:
        return 'animate-fade-in';
    }
  };

  const style = {
    opacity: isInView || type === 'reveal' ? 1 : 0,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };

  const content = type === 'reveal' ? (
    <div className="reveal-content">{children}</div>
  ) : (
    children
  );

  return (
    <Component 
      ref={ref} 
      className={`${className} ${isInView ? getAnimationClass() : ''}`} 
      style={style}
    >
      {content}
    </Component>
  );
};

export default AnimatedElement;
