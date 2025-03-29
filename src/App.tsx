import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Search, Globe, Moon, Sun } from 'lucide-react';
import { CountryData, PopulationStats, CountryDetails } from './types';
import { CountryCard } from './components/CountryCard';
import { GlobalStats } from './components/GlobalStats';
import { CountryModal } from './components/CountryModal';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [globalStats, setGlobalStats] = useState<PopulationStats>({
    total: 0,
    yearly: { births: 0, deaths: 0 },
    today: { births: 0, deaths: 0 }
  });
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesResponse = await axios.get('https://restcountries.com/v3.1/all');
        
        const transformedCountries: CountryData[] = countriesResponse.data
          .map((country: any) => ({
            country: country.name.common,
            code: country.cca2,
            population: country.population,
            yearlyChange: ((country.population * 0.011) / country.population) * 100,
            density: Math.round(country.population / country.area),
            area: country.area,
            netChange: Math.round(country.population * 0.011),
            languages: Object.values(country.languages || {}),
            flagUrl: country.flags.svg
          }))
          .sort((a: CountryData, b: CountryData) => b.population - a.population);

        setCountries(transformedCountries);

        const totalPopulation = transformedCountries.reduce((acc, curr) => acc + curr.population, 0);
        const birthRate = 18.5;
        const deathRate = 7.5;
        
        const yearlyBirths = Math.round((totalPopulation * birthRate) / 1000);
        const yearlyDeaths = Math.round((totalPopulation * deathRate) / 1000);
        
        setGlobalStats({
          total: totalPopulation,
          yearly: {
            births: yearlyBirths,
            deaths: yearlyDeaths
          },
          today: {
            births: Math.round(yearlyBirths / 365),
            deaths: Math.round(yearlyDeaths / 365)
          }
        });

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCountries = countries.filter(country =>
    country.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gray-50 dark:bg-gray-900`}>
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">
                {t('title')}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <select
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg px-3 py-1"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="zh">中文</option>
                <option value="ar">العربية</option>
                <option value="ja">日本語</option>
                <option value="hi">हिंदी</option>
              </select>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <GlobalStats stats={globalStats} />

        <div className="mt-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6">
            {filteredCountries.map((country) => (
              <CountryCard
                key={country.code}
                data={country}
                onClick={() => setSelectedCountry(country)}
              />
            ))}
          </div>
        </div>
      </main>

      {selectedCountry && (
        <CountryModal
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
        />
      )}
    </div>
  );
}

export default App;