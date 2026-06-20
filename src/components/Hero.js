import { useEffect, useRef, useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const Hero = () => {
  const heroRef = useRef();
  const isOnScreen = useOnScreen(heroRef, '0px');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOnScreen && !animate) {
      setAnimate(true);
    }
  }, [isOnScreen, animate]);

  const baseClasses = 'relative px-4 sm:px-6 lg:px-8';
  const heroClasses = `
    bg-background-white
    ${baseClasses}
    ${animate ? 'opacity-100 translate-y-0 transition-all duration-500 ease-out' : 'opacity-0 translate-y-4'}
  `;

  const headingClasses = `
    text-5xl font-bold text-main-heading
    leading-tight
    mb-4
  `;
  const subheadingClasses = `
    text-lg text-body-text
    mb-6
    max-w-xl
  `;
  const buttonClasses = `
    inline-flex items-center
    bg-primary-blue text-white-text
    px-5 py-3 rounded-md button-md
    text-sm font-medium
    hover:bg-light-ui-blue
    transition-colors duration-200
    flex-shrink-0
  `;

  const dashboardClasses = `
    bg-secondary-blue
    rounded-xl card-lg
    p-6
    shadow-soft
    h-[400px]
    flex
    flex-col
    gap-4
  `;

  const dashboardHeaderClasses = `
    flex justify-between items-start
  `;
  const dashboardTitleClasses = `
    text-lg font-semibold text-main-heading
  `;
  const dashboardSubtitleClasses = `
    text-sm text-body-text
  `;
  const chartClasses = `
    bg-white
    rounded-lg card-md
    p-4
    flex-1
    shadow-inner
  `;
  const metricClasses = `
    flex items-center justify-between
    p-3
    bg-white
    rounded-lg card-sm
  `;
  const metricLabelClasses = `
    text-xs text-body-text
  `;
  const metricValueClasses = `
    text-lg font-semibold text-main-heading
  `;

  return (
    <section ref={heroRef} className={heroClasses}>
      <div className="max-w-7xl mx-auto py-24">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className={headingClasses}>
              Transform Your Data into Actionable Insights
            </h1>
            <p className={subheadingClasses}>
              Our platform helps businesses make smarter decisions with real-time analytics and AI-powered insights.
            </p>
            <button className={buttonClasses}>
              Get Started Free
            </button>
          </div>
          <div className="md:w-1/2 md:mt-12 md:md:mt-0">
            <div className={dashboardClasses}>
              <div className={dashboardHeaderClasses}>
                <div>
                  <h2 className={dashboardTitleClasses}>
                    Dashboard Overview
                  </h2>
                  <p className={dashboardSubtitleClasses}>
                    Last updated 2 minutes ago
                  </p>
                </div>
                <button className="text-sm text-primary-blue hover:underline">
                  Edit
                </button>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className={chartClasses}>
                    <div className="h-16 bg-primary-blue/20 rounded-lg"></div>
                  </div>
                  <div className={chartClasses}>
                    <div className="h-16 bg-primary-blue/20 rounded-lg"></div>
                  </div>
                  <div className={chartClasses}>
                    <div className="h-16 bg-primary-blue/20 rounded-lg"></div>
                  </div>
                  <div className={chartClasses}>
                    <div className="h-16 bg-primary-blue/20 rounded-lg"></div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className={metricClasses}>
                  <span className={metricLabelClasses}>Active Users</span>
                  <span className={metricValueClasses}>12.4K</span>
                </div>
                <div className={metricClasses}>
                  <span className={metricLabelClasses}>Conversion Rate</span>
                  <span className={metricValueClasses}>3.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;