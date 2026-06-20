import { useEffect, useRef, useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const AnalyticsSection = () => {
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
    ${animate ? 'opacity-100 translate-y-0 transition-all duration-500 ease-out' : 'opacity-0 translate-y-4'}
  `;

  const headingClasses = `
    text-3xl font-bold text-main-heading
    mb-8
    text-center
  `;

  const containerClasses = `
    max-w-7xl mx-auto py-24
  `;

  const columnsClasses = `
    md:flex md:items-start md:gap-8
  `;

  const leftClasses = `
    md:w-1/2
    space-y-6
  `;
  const leftHeadingClasses = `
    text-2xl font-semibold text-main-heading
  `;
  const leftParagraphClasses = `
    text-lg text-body-text
    max-w-xl
  `;
  const listClasses = `
    space-y-3
    pl-5
  `;
  const listItemClasses = `
    flex items-start
  `;
  const listItemIconClasses = `
    flex-shrink-0
    w-3 h-3
    bg-primary-blue
    rounded-full
    mt-1
    mr-3
  `;
  const listItemTextClasses = `
    text-sm text-body-text
  `;

  const rightClasses = `
    md:w-1/2
    relative
  `;
  const dashboardClasses = `
    bg-secondary-blue
    rounded-xl card-lg
    p-8
    shadow-soft
    h-[500px]
    flex
    flex-col
    justify-between
  `;
  const dashboardHeaderClasses = `
    flex justify-between items-start
  `;
  const dashboardTitleClasses = `
    text-xl font-semibold text-main-heading
  `;
  const dashboardSubtitleClasses = `
    text-sm text-body-text
  `;
  const chartClasses = `
    bg-white
    rounded-lg card-md
    p-6
    flex-1
    shadow-inner
    mb-6
  `;
  const metricClasses = `
    flex items-center justify-between
    p-4
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
    <section ref={sectionRef} className={sectionClasses}>
      <div className="max-w-7xl mx-auto py-24">
        <h2 className={headingClasses}>
          Gain Deeper Insights with Advanced Analytics
        </h2>
        <div className={containerClasses}>
          <div className={columnsClasses}>
            <div className={leftClasses}>
              <h3 className={leftHeadingClasses}>
                See the Full Picture of Your Business
              </h3>
              <p className={leftParagraphClasses}>
                Our analytics engine processes data from multiple sources to provide a unified view of your business performance, customer behavior, and market trends.
              </p>
              <ul className={listClasses}>
                <li className={listItemClasses}>
                  <span className={listItemIconClasses}></span>
                  <span className={listItemTextClasses}>
                    Real-time data integration from 100+ sources
                  </span>
                </li>
                <li className={listItemClasses}>
                  <span className={listItemIconClasses}></span>
                  <span className={listItemTextClasses}>
                    Advanced segmentation and cohort analysis
                  </span>
                </li>
                <li className={listItemClasses}>
                  <span className={listItemIconClasses}></span>
                  <span className={listItemTextClasses}>
                    Custom SQL queries and data modeling
                  </span>
                </li>
                <li className={listItemClasses}>
                  <span className={listItemIconClasses}></span>
                  <span className={listItemTextClasses}>
                    Automated insight generation and alerts
                  </span>
                </li>
              </ul>
            </div>
            <div className={rightClasses}>
              <div className={dashboardClasses}>
                <div className={dashboardHeaderClasses}>
                  <div>
                    <h3 className={dashboardTitleClasses}>
                      Business Performance Dashboard
                    </h3>
                    <p className={dashboardSubtitleClasses}>
                      Last updated: Just now
                    </p>
                  </div>
                  <button className="text-sm text-primary-blue hover:underline">
                    Customize
                  </button>
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-4">
                    <div className={chartClasses}>
                      <div className="h-24 bg-primary-blue/20 rounded-lg"></div>
                    </div>
                    <div className={chartClasses}>
                      <div className="h-24 bg-primary-blue/20 rounded-lg"></div>
                    </div>
                    <div className={chartClasses}>
                      <div className="h-24 bg-primary-blue/20 rounded-lg"></div>
                    </div>
                    <div className={chartClasses}>
                      <div className="h-24 bg-primary-blue/20 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className={metricClasses}>
                      <span className={metricLabelClasses}>Monthly Revenue</span>
                      <span className={metricValueClasses}>$245K</span>
                    </div>
                    <div className={metricClasses}>
                      <span className={metricLabelClasses}>Customer Churn</span>
                      <span className={metricValueClasses}>4.2%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;