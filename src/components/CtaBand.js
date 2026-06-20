import { useEffect, useRef, useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const CtaBand = () => {
  const ctaRef = useRef();
  const isOnScreen = useOnScreen(ctaRef, '0px');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOnScreen && !animate) {
      setAnimate(true);
    }
  }, [isOnScreen, animate]);

  const baseClasses = 'relative px-4 sm:px-6 lg:px-8';
  const ctaClasses = `
    bg-deep-navy
    ${baseClasses}
    ${animate ? 'opacity-100 translate-y-0 transition-all duration-500 ease-out' : 'opacity-0 translate-y-4'}
  `;

  const innerClasses = `
    max-w-7xl mx-auto
    py-12
    text-center
  `;

  const headingClasses = `
    text-2xl font-bold text-white-text
    mb-6
  `;
  const buttonClasses = `
    inline-flex items-center
    bg-white-text text-deep-navy
    px-6 py-3 rounded-md button-md
    text-sm font-medium
    border border-white-text
    hover:bg-white-text/90
    transition-colors duration-200
  `;

  return (
    <section ref={ctaRef} className={ctaClasses}>
      <div className={innerClasses}>
        <h2 className={headingClasses}>
          Ready to Transform Your Business?
        </h2>
        <button className={buttonClasses}>
          Start Free Trial
        </button>
      </div>
    </section>
  );
};

export default CtaBand;