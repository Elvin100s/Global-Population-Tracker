import React from 'react';
import { Globe2, Users, UserMinus, UserPlus, Calendar } from 'lucide-react';
import { PopulationStats } from '../types';
import { useTranslation } from 'react-i18next';

interface GlobalStatsProps {
  stats: PopulationStats;
}

export const GlobalStats: React.FC<GlobalStatsProps> = ({ stats }) => {
  const { t } = useTranslation();
  const currentDate = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <>
      <div className="mb-6 flex items-center justify-between bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-gray-600 dark:text-gray-300">{currentDate}</span>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {t('lastUpdated')}: {t('realTime')}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Globe2 className="w-8 h-8" />
            <h3 className="text-lg font-semibold">{t('globalPopulation')}</h3>
          </div>
          <p className="text-3xl font-bold">{stats.total.toLocaleString()}</p>
          <p className="text-sm mt-2 opacity-80">{t('asOfToday')}</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <UserPlus className="w-8 h-8" />
            <div>
              <h3 className="text-lg font-semibold">{t('births')}</h3>
              <p className="text-sm opacity-80">{t('today')}</p>
            </div>
          </div>
          <p className="text-3xl font-bold">{stats.today.births.toLocaleString()}</p>
          <p className="text-sm mt-2 opacity-80">
            {t('yearly')}: {stats.yearly.births.toLocaleString()}
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <UserMinus className="w-8 h-8" />
            <div>
              <h3 className="text-lg font-semibold">{t('deaths')}</h3>
              <p className="text-sm opacity-80">{t('today')}</p>
            </div>
          </div>
          <p className="text-3xl font-bold">{stats.today.deaths.toLocaleString()}</p>
          <p className="text-sm mt-2 opacity-80">
            {t('yearly')}: {stats.yearly.deaths.toLocaleString()}
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8" />
            <div>
              <h3 className="text-lg font-semibold">{t('netGrowth')}</h3>
              <p className="text-sm opacity-80">{t('today')}</p>
            </div>
          </div>
          <p className="text-3xl font-bold">
            {(stats.today.births - stats.today.deaths).toLocaleString()}
          </p>
          <p className="text-sm mt-2 opacity-80">
            {t('yearly')}: {(stats.yearly.births - stats.yearly.deaths).toLocaleString()}
          </p>
        </div>
      </div>
    </>
  );
};