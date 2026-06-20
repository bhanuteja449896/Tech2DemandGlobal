import { useEffect, useRef, useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const FeatureSection = () => {
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
    mb-12
    text-center
  `;

  const gridClasses = `
    grid gap-8
    sm:grid-cols-2
    lg:grid-cols-3
  `;

  const cardClasses = `
    bg-background-white
    rounded-xl card-lg
    p-8
    shadow-soft
    flex
    flex-col
    items-center
    text-center
    transition-transform duration-300
    hover:-translate-y-2
  `;
  const iconClasses = `
    w-12 h-12 mb-4
    bg-primary-blue/10
    rounded-xl
    flex
    items-center
    justify-center
  `;
  const iconTextClasses = `
    text-2xl
    text-primary-blue
  `;
  const titleClasses = `
    mt-4
    text-xl font-semibold text-main-heading
  `;
  const descriptionClasses = `
    mt-2
    text-sm text-body-text
    max-w-md
  `;

  const features = [
    {
      icon: '⚡',
      title: 'Real-time Analytics',
      description:
        'Get instant insights from your data with our streaming analytics engine.',
    },
    {
      icon: '🎯',
      title: 'AI-Powered Predictions',
      description:
        'Leverage machine learning to forecast trends and make proactive decisions.',
    },
    {
      icon: '📊',
      title: 'Customizable Dashboards',
      description:
        'Create personalized views of your data with drag-and-drop widgets.',
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description:
        'Protect your data with advanced security features and compliance controls.',
    },
    {
      icon: '🔄',
      title: 'Seamless Integrations',
      description:
        'Connect with all your favorite tools and platforms via our API ecosystem.',
    },
    {
      icon: '📈',
      title: 'Advanced Reporting',
      description:
        'Generate comprehensive reports with customizable templates and scheduling.',
    },
  ];

  return (
    <section ref={sectionRef} className={sectionClasses}>
      <div className="max-w-7xl mx-auto py-24">
        <h2 className={headingClasses}>
          Powerful Features for Modern Businesses
        </h2>
        <div className={gridClasses}>
          {features.map((feature, index) => (
            <div key={index} className={cardClasses}>
              <div className={iconClasses}>
                <span className={iconTextClasses}>{feature.icon}</span>
              </div>
              <h3 className={titleClasses}>{feature.title}</h3>
              <p className={descriptionClasses}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;