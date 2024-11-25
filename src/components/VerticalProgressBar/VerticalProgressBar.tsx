import React from 'react';

interface VerticalProgressBarProps {
  sections: string[];
  activeSection: number | string | undefined;
}

const VerticalProgressBar: React.FC<VerticalProgressBarProps> = ({ sections , activeSection }) => {
  return (
    <div className="vertical-progress-bar">
    {sections.map((section, index) => (
      <div
        key={index}
        className={`progress-item ${activeSection === index ? 'active' : ''}`}
      >
        <div className="progress-dot" />
      </div>
    ))}
  </div>
  );
};

export default VerticalProgressBar;
