import { useEffect, useRef, useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const Footer = () => {
  const footerRef = useRef();
  const isOnScreen = useOnScreen(footerRef, '0px');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOnScreen && !animate) {
      setAnimate(true);
    }
  }, [isOnScreen, animate]);

  const baseClasses = 'relative px-4 sm:px-6 lg:px-8';
  const footerClasses = `
    bg-deep-navy
    text-white-text
    ${baseClasses}
    ${animate ? 'opacity-100 translate-y-0 transition-all duration-500 ease-out' : 'opacity-0 translate-y-4'}
  `;

  const containerClasses = `
    max-w-7xl mx-auto
    py-12
  `;

  const gridClasses = `
    grid gap-8
    sm:grid-cols-2
    lg:grid-cols-4
  `;

  const columnClasses = `
    space-y-4
  `;
  const logoClasses = `
    text-xl font-bold text-primary-blue
    mb-2
  `;
  const descriptionClasses = `
    text-sm text-white-text/80
    max-w-sm
  `;
  const headingClasses = `
    text-sm font-semibold text-white-text
    mb-4
    tracking-wider
    uppercase
  `;
  const linkClasses = `
    text-sm text-white-text/60
    hover:text-primary-blue
    transition-colors duration-200
    hover:underline
  `;
  const copyrightClasses = `
    mt-8
    pt-6
    border-t border-white-text/10
    text-center
    text-xs
    text-white-text/50
  `;

  return (
    <footer ref={footerRef} className={footerClasses}>
      <div className={containerClasses}>
        <div className={gridClasses}>
          <div className={columnClasses}>
            <div className={logoClasses}>
              Logo
            </div>
            <p className={descriptionClasses}>
              Transforming how businesses leverage data to make smarter decisions and drive growth.
            </p>
          </div>
          <div className={columnClasses}>
            <p className={headingClasses}>
              Product
            </p>
            <a href="#" className={linkClasses}>
              Overview
            </a>
            <a href="#" className={linkClasses}>
              Features
            </a>
            <a href="#" className={linkClasses}>
              Integrations
            </a>
            <a href="#" className={linkClasses}>
              Pricing
            </a>
          </div>
          <div className={columnClasses}>
            <p className={headingClasses}>
              Company
            </p>
            <a href="#" className={linkClasses}>
              About
            </a>
            <a href="#" className={linkClasses}>
              Careers
            </a>
            <a href="#" className={linkClasses}>
              Blog
            </a>
            <a href="#" className={linkClasses}>
              Contact
            </a>
          </div>
          <div className={columnClasses}>
            <p className={headingClasses}>
              Resources
            </p>
            <a href="#" className={linkClasses}>
              Documentation
            </a>
            <a href="#" className={linkClasses}>
              Guides
            </a>
            <a href="#" className={linkClasses}>
              Webinars
            </a>
            <a href="#" className={linkClasses}>
              Case Studies
            </a>
          </div>
        </div>
        <p className={copyrightClasses}>
          © 2026 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;