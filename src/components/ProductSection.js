import { useEffect, useRef, useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const ProductSection = () => {
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
    bg-soft-light
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
    h-[400px]
  `;
  const widgetClasses = `
    bg-background-white
    rounded-xl card-lg
    p-6
    shadow-soft
    transition-transform duration-300
    hover:-translate-y-1
  `;
  const widgetTitleClasses = `
    mb-2
    text-lg font-semibold text-main-heading
  `;
  const widgetDescriptionClasses = `
    text-sm text-body-text
  `;

  // Positions for the floating widgets
  const widgetPositions = [
    { top: '0', left: '0' },
    { top: '8', left: '4' },
    { top: '16', left: '0' },
  ];

  return (
    <section ref={sectionRef} className={sectionClasses}>
      <div className="max-w-7xl mx-auto py-24">
        <h2 className={headingClasses}>
          Product Intelligence
        </h2>
        <div className={containerClasses}>
          <div className={columnsClasses}>
            <div className={leftClasses}>
              <h3 className={leftHeadingClasses}>
                Turn Data into Strategic Advantage
              </h3>
              <p className={leftParagraphClasses}>
                Our platform combines advanced analytics, AI, and intuitive workflows to help you uncover hidden patterns, predict outcomes, and drive informed decisions across your organization.
              </p>
              <ul className={listClasses}>
                <li className={listItemClasses}>
                  <span className={listItemIconClasses}></span>
                  <span className={listItemTextClasses}>
                    Real-time data processing and visualization
                  </span>
                </li>
                <li className={listItemClasses}>
                  <span className={listItemIconClasses}></span>
                  <span className={listItemTextClasses}>
                    Predictive analytics and forecasting
                  </span>
                </li>
                <li className={listItemClasses}>
                  <span className={listItemIconClasses}></span>
                  <span className={listItemTextClasses}>
                    Customizable dashboards and reports
                  </span>
                </li>
                <li className={listItemClasses}>
                  <span className={listItemIconClasses}></span>
                  <span className={listItemTextClasses}>
                    Collaboration and sharing features
                  </span>
                </li>
              </ul>
            </div>
            <div className={rightClasses}>
              {widgetPositions.map((pos, index) => (
                <div
                  key={index}
                  className={`${widgetClasses} absolute`}
                  style={{ top: pos.top, left: pos.left }}
                >
                  <div className={widgetTitleClasses}>
                    Widget {index + 1}
                  </div>
                  <p className={widgetDescriptionClasses}>
                    This is a sample widget displaying key metrics and insights.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;