import { useEffect, useRef, useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const BottomCta = () => {
  const sectionRef = useRef();
  const isOnScreen = useOnScreen(sectionRef, '0px');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOnScreen && !animate) {
      setAnimate(true);
    }
  }, [isOnScreen, animate]);

  const baseClasses = 'relative px-4 sm:px-6 lg:px-8';
  const sectionClasses = `
    bg-background-white
    ${baseClasses}
    ${animate ? 'opacity-100 translate-y-0 transition-all duration-500 ease_out' : 'opacity-0 translate-y-4'}
  `;

  const headingClasses = `
    text-2xl font-bold text-main-heading
    mb-8
    text-center
  `;

  const containerClasses = `
    max-w-7xl mx-auto
  `;

  const cardsClasses = `
    grid gap-6
    sm:grid-cols-1
    lg:grid-cols-2
  `;

  const cardClasses = `
    rounded-xl card-lg
    p-8
    shadow-soft
    transition-transform duration-300
    hover:-translate-y-2
  `;
  const darkCardClasses = `
    bg-deep-navy
    text-white-text
  `;
  const lightCardClasses = `
    bg-background-white
    text-body-text
  `;
  const cardTitleClasses = `
    text-xl font-semibold mb-4
  `;
  const cardTextClasses = `
    text-lg mb-6
    leading-relaxed
  `;
  const darkButtonClasses = `
    inline-flex items-center
    bg-white-text text-deep-navy
    px-5 py-3 rounded-md button-md
    text-sm font-medium
    border border-white-text
    hover:bg-white-text/90
    transition-colors duration-200
    w-full
    justify-center
  `;
  const lightButtonClasses = `
    inline-flex items-center
    bg-primary-blue text-white-text
    px-5 py-3 rounded-md button-md
    text-sm font-medium
    hover:bg-light-ui-blue
    transition-colors duration-200
    w-full
    justify-center
  `;

  return (
    <section ref={sectionRef} className={sectionClasses}>
      <div className="max-w-7xl mx-auto py-24">
        <h2 className={headingClasses}>
          Trusted by Industry Leaders
        </h2>
        <div className={containerClasses}>
          <div className={cardsClasses}>
            <div className={`${cardClasses} ${darkCardClasses}`}>
              <h3 className={cardTitleClasses}>
                Enterprise-Grade Security
              </h3>
              <p className={cardTextClasses}>
                Protect your data with advanced encryption, compliance controls, and enterprise-grade security features that meet the highest industry standards.
              </p>
              <button className={darkButtonClasses}>
                Learn More
              </button>
            </div>
            <div className={`${cardClasses} ${lightCardClasses}`}>
              <h3 className={cardTitleClasses}>
                Award-Winning Support
              </h3>
              <p className={cardTextClasses}>
                Get 24/7 expert assistance, personalized onboarding, and ongoing support to ensure your team succeeds from day one.
              </p>
              <button className={lightButtonClasses}>
                See Support Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomCta;