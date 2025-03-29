import React from 'react';
import { X } from 'lucide-react';
import { CountryData } from '../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';

interface CountryModalProps {
  country: CountryData;
  onClose: () => void;
}

export const CountryModal: React.FC<CountryModalProps> = ({ country, onClose }) => {
  const { t } = useTranslation();

  // Generate historical data (last 10 years)
  const historicalData = Array.from({ length: 10 }, (_, i) => ({
    year: new Date().getFullYear() - (9 - i),
    population: Math.round(country.population * (1 - (0.011 * (9 - i))))
  }));

  // Generate projected data (next 5 years)
  const projectedData = Array.from({ length: 5 }, (_, i) => ({
    year: new Date().getFullYear() + (i + 1),
    population: Math.round(country.population * (1 + (0.011 * (i + 1))))
  }));

  const allData = [...historicalData, {
    year: new Date().getFullYear(),
    population: country.population
  }, ...projectedData];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <img
                src={country.flagUrl}
                alt={`${country.country} flag`}
                className="w-20 h-15 object-cover rounded shadow"
              />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {country.country}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                {t('populationTrends')}
              </h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={allData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="population"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                  {t('yearlyStatistics')}
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>{t('births')}: {Math.round(country.population * 0.0185).toLocaleString()}</li>
                  <li>{t('deaths')}: {Math.round(country.population * 0.0075).toLocaleString()}</li>
                  <li>{t('netChange')}: {country.netChange.toLocaleString()}</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                  {t('countryDetails')}
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>{t('density')}: {country.density}/km²</li>
                  <li>{t('totalArea')}: {country.area.toLocaleString()} km²</li>
                  <li>{t('languages')}: {country.languages?.join(', ')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};