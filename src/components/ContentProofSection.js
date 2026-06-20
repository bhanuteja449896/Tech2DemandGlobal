import { useEffect, useRef, useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const ContentProofSection = () => {
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
    mb-12
    text-center
  `;

  const gridClasses = `
    grid gap-6
    sm:grid-cols-2
    lg:grid-cols-3
  `;

  const cardClasses = `
    bg-background-white
    rounded-xl card-lg
    p-6
    shadow-soft
    transition-transform duration-300
    hover:-translate-y-2
  `;
  const cardHeaderClasses = `
    flex items-center space-x-3 mb-4
  `;
  const avatarClasses = `
    w-10 h-10
    bg-primary-blue
    rounded-full
    flex
    items-center
    justify-center
    text-white-text
    font-bold
  `;
  const cardTitleClasses = `
    text-lg font-semibold text-main-heading
  `;
  const cardSubtitleClasses = `
    text-sm text-body-text
  `;
  const cardBodyClasses = `
    mt-4
    space-y-3
  `;
  const metricClasses = `
    flex items-center justify-between
    p-3
    bg-primary-blue/10
    rounded-lg card-sm
  `;
  const metricLabelClasses = `
    text-xs text-body-text
  `;
  const metricValueClasses = `
    text-lg font-semibold text-main-heading
  `;

  const cards = [
    {
      avatar: 'JD',
      title: 'John Doe',
      subtitle: 'Sales Manager',
      metrics: [
        { label: 'Calls Today', value: '24' },
        { label: 'Meetings', value: '5' },
        { label: 'Deals Closed', value: '3' },
      ],
    },
    {
      avatar: 'AS',
      title: 'Anna Smith',
      subtitle: 'Marketing Director',
      metrics: [
        { label: 'Leads', value: '128' },
        { label: 'Conversion', value: '12.5%' },
        { label: 'Campaign ROI', value: '3.4x' },
      ],
    },
    {
      avatar: 'MK',
      title: 'Michael Kim',
      subtitle: 'Product Lead',
      metrics: [
        { label: 'Active Users', value: '12.4K' },
        { label: 'Feature Requests', value: '42' },
        { label: 'Satisfaction Score', value: '4.8/5' },
      ],
    },
    {
      avatar: 'SR',
      title: 'Sarah Ruiz',
      subtitle: 'Customer Success',
      metrics: [
        { label: 'Tickets Resolved', value: '37' },
        { label: 'CSAT Score', value: '4.9/5' },
        { label: 'Retention Rate', value: '96%' },
      ],
    },
    {
      avatar: 'LT',
      title: 'Lisa Tan',
      subtitle: 'Operations Manager',
      metrics: [
        { label: 'Inventory', value: '1,240 units' },
        { label: 'Shipments', value: '89' },
        { label: 'Delivery Time', value: '2.1 days' },
      ],
    },
    {
      avatar: 'KM',
      title: 'Kevin Martinez',
      subtitle: 'Finance Controller',
      metrics: [
        { label: 'Monthly Expenses', value: '$84K' },
        { label: 'Revenue', value: '$156K' },
        { label: 'Profit Margin', value: '22%' },
      ],
    },
  ];

  return (
    <section ref={sectionRef} className={sectionClasses}>
      <div className="max-w-7xl mx-auto py-24">
        <h2 className={headingClasses}>
          See How Teams Succeed with Our Platform
        </h2>
        <div className={gridClasses}>
          {cards.map((card, index) => (
            <div key={index} className={cardClasses}>
              <div className={cardHeaderClasses}>
                <div className={avatarClasses}>
                  {card.avatar}
                </div>
                <div>
                  <p className={cardTitleClasses}>
                    {card.title}
                  </p>
                  <p className={cardSubtitleClasses}>
                    {card.subtitle}
                  </p>
                </div>
              </div>
              <div className={cardBodyClasses}>
                {card.metrics.map((metric, idx) => (
                  <div key={idx} className={metricClasses}>
                    <span className={metricLabelClasses}>
                      {metric.label}
                    </span>
                    <span className={metricValueClasses}>
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentProofSection;