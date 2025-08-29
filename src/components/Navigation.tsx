import React from 'react';

interface NavigationProps {
  activeSection: 'var' | 'let' | 'const';
  setActiveSection: (section: 'var' | 'let' | 'const') => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const sections = [
    { key: 'var' as const, label: 'var', description: 'Function-scoped variables' },
    { key: 'let' as const, label: 'let', description: 'Block-scoped variables' },
    { key: 'const' as const, label: 'const', description: 'Block-scoped constants' },
  ];

  return (
    <nav className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm border border-gray-200">
      {sections.map((section) => (
        <button
          key={section.key}
          onClick={() => setActiveSection(section.key)}
          className={`flex-1 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
            activeSection === section.key
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          }`}
        >
          <div className="font-mono text-base">{section.label}</div>
          <div className="text-xs opacity-90 mt-1">{section.description}</div>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;