import React from 'react';
import { CheckCircle, AlertTriangle, Info } from 'lucide-react';

interface ConceptCardProps {
  title: string;
  description: string;
  characteristics: string[];
  color: 'orange' | 'blue' | 'green';
}

const ConceptCard: React.FC<ConceptCardProps> = ({ title, description, characteristics, color }) => {
  const colorClasses = {
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      icon: 'text-orange-600',
      text: 'text-orange-900',
      accent: 'bg-orange-100'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200', 
      icon: 'text-blue-600',
      text: 'text-blue-900',
      accent: 'bg-blue-100'
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'text-green-600', 
      text: 'text-green-900',
      accent: 'bg-green-100'
    }
  };

  const getIcon = () => {
    switch (color) {
      case 'orange':
        return AlertTriangle;
      case 'blue':
        return Info;
      case 'green':
        return CheckCircle;
    }
  };

  const Icon = getIcon();
  const styles = colorClasses[color];

  return (
    <div className={`${styles.bg} ${styles.border} border-2 rounded-xl p-6`}>
      <div className="flex items-start space-x-4">
        <div className={`${styles.accent} p-2 rounded-lg`}>
          <Icon className={`w-6 h-6 ${styles.icon}`} />
        </div>
        <div className="flex-1">
          <h2 className={`text-xl font-bold ${styles.text} mb-2`}>{title}</h2>
          <p className={`${styles.text} opacity-80 mb-4 leading-relaxed`}>{description}</p>
          
          <div className="space-y-2">
            <h4 className={`text-sm font-semibold ${styles.text} uppercase tracking-wide`}>
              Key Characteristics:
            </h4>
            <ul className="space-y-1">
              {characteristics.map((characteristic, index) => (
                <li key={index} className={`text-sm ${styles.text} opacity-80 flex items-center`}>
                  <span className={`w-1.5 h-1.5 ${styles.icon === 'text-orange-600' ? 'bg-orange-400' : styles.icon === 'text-blue-600' ? 'bg-blue-400' : 'bg-green-400'} rounded-full mr-3 flex-shrink-0`}></span>
                  {characteristic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptCard;