import React from 'react';
import { BarChart, Users, Map, Globe2 } from 'lucide-react';
import { CountryData } from '../types';
import { useTranslation } from 'react-i18next';

interface CountryCardProps {
  data: CountryData;
  onClick: () => void;
}

export const CountryCard: React.FC<CountryCardProps> = ({ data, onClick }) => {
  const { t } = useTranslation();

  return (
    <div 
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
    >
      <div className="flex items-start space-x-4">
        <img
          src={data.flagUrl}
          alt={`${data.country} flag`}
          className="w-16 h-12 object-cover rounded shadow"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{data.country}</h3>
            <span className="text-sm font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
              {data.code}
            </span>
          </div>
          
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('population')}</p>
                <p className="font-semibold text-gray-900 dark:text-white">{data.population.toLocaleString()}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <BarChart className="w-5 h-5 text-green-600 dark:text-green-400" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('yearlyChange')}</p>
                <p className="font-semibold text-gray-900 dark:text-white">{data.yearlyChange.toFixed(1)}%</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Map className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t('density')}</p>
                <p className="font-semibold text-gray-900 dark:text-white">{data.density}/km²</p>
              </div>
            </div>

            {data.languages && (
              <div className="flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t('languages')}</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {data.languages.join(', ')}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};