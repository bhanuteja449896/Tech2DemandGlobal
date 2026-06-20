import { useEffect, useRef, useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const Header = () => {
  const headerRef = useRef();
  const isOnScreen = useOnScreen(headerRef, '0px');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOnScreen && !animate) {
      setAnimate(true);
    }
  }, [isOnScreen, animate]);

  const baseClasses = 'relative z-10 px-4 sm:px-6 lg:px-8';
  const headerClasses = `
    bg-background-white
    shadow-soft
    ${baseClasses}
    ${animate ? 'opacity-100 translate-y-0 transition-all duration-500 ease-out' : 'opacity-0 translate-y-4'}
  `;

  const navClasses = 'hidden sm:flex sm:items-center sm:space-x-8';
  const navLinkClasses = `
    text-sm font-medium text-body-text hover:text-primary-blue
    transition-colors duration-200
  `;
  const ctaButtonClasses = `
    flex-shrink-0
    bg-primary-blue text-white-text
    px-4 py-2 rounded-md button-md
    text-sm font-medium
    hover:bg-light-ui-blue
    transition-colors duration-200
    sm:ml-4
  `;
  const logoClasses = `
    text-xl font-bold text-primary-blue
    tracking-tighter
  `;

  return (
    <header ref={headerRef} className={headerClasses}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className={logoClasses}>
              Logo
            </div>
          </div>
          <div className={navClasses}>
            <nav className="flex space-x-8">
              <a href="#" className={navLinkClasses}>
                Features
              </a>
              <a href="#" className={navLinkClasses}>
                Product
              </a>
              <a href="#" className={navLinkClasses}>
                Pricing
              </a>
              <a href="#" className={navLinkClasses}>
                Resources
              </a>
            </nav>
          </div>
          <div className="flex items-center">
            <button className={ctaButtonClasses}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;