import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: 'Global Population Tracker',
      searchPlaceholder: 'Search countries...',
      population: 'Population',
      yearlyChange: 'Yearly Change',
      density: 'Population Density',
      languages: 'Languages',
      populationTrends: 'Population Trends',
      yearlyStatistics: 'Yearly Statistics',
      births: 'Births',
      deaths: 'Deaths',
      netChange: 'Net Change',
      countryDetails: 'Country Details',
      totalArea: 'Total Area',
      globalPopulation: 'Global Population',
      netGrowth: 'Net Growth',
      today: 'Today',
      yearly: 'Yearly',
      asOfToday: 'As of today',
      lastUpdated: 'Last Updated',
      realTime: 'Real-time data'
    }
  },
  es: {
    translation: {
      title: 'Rastreador de Población Mundial',
      searchPlaceholder: 'Buscar países...',
      population: 'Población',
      yearlyChange: 'Cambio Anual',
      density: 'Densidad de Población',
      languages: 'Idiomas',
      populationTrends: 'Tendencias de Población',
      yearlyStatistics: 'Estadísticas Anuales',
      births: 'Nacimientos',
      deaths: 'Muertes',
      netChange: 'Cambio Neto',
      countryDetails: 'Detalles del País',
      totalArea: 'Área Total',
      globalPopulation: 'Población Mundial',
      netGrowth: 'Crecimiento Neto',
      today: 'Hoy',
      yearly: 'Anual',
      asOfToday: 'Al día de hoy',
      lastUpdated: 'Última Actualización',
      realTime: 'Datos en tiempo real'
    }
  },
  fr: {
    translation: {
      title: 'Suivi de la Population Mondiale',
      searchPlaceholder: 'Rechercher des pays...',
      population: 'Population',
      yearlyChange: 'Variation Annuelle',
      density: 'Densité de Population',
      languages: 'Langues',
      populationTrends: 'Tendances Démographiques',
      yearlyStatistics: 'Statistiques Annuelles',
      births: 'Naissances',
      deaths: 'Décès',
      netChange: 'Variation Nette',
      countryDetails: 'Détails du Pays',
      totalArea: 'Superficie Totale',
      globalPopulation: 'Population Mondiale',
      netGrowth: 'Croissance Nette',
      today: "Aujourd'hui",
      yearly: 'Annuel',
      asOfToday: "À ce jour",
      lastUpdated: 'Dernière Mise à Jour',
      realTime: 'Données en temps réel'
    }
  },
  zh: {
    translation: {
      title: '全球人口追踪器',
      searchPlaceholder: '搜索国家...',
      population: '人口',
      yearlyChange: '年度变化',
      density: '人口密度',
      languages: '语言',
      populationTrends: '人口趋势',
      yearlyStatistics: '年度统计',
      births: '出生',
      deaths: '死亡',
      netChange: '净变化',
      countryDetails: '国家详情',
      totalArea: '总面积',
      globalPopulation: '全球人口',
      netGrowth: '净增长',
      today: '今天',
      yearly: '年度',
      asOfToday: '截至今天',
      lastUpdated: '最后更新',
      realTime: '实时数据'
    }
  },
  ar: {
    translation: {
      title: 'متتبع السكان العالمي',
      searchPlaceholder: 'البحث عن البلدان...',
      population: 'عدد السكان',
      yearlyChange: 'التغير السنوي',
      density: 'الكثافة السكانية',
      languages: 'اللغات',
      populationTrends: 'اتجاهات السكان',
      yearlyStatistics: 'إحصائيات سنوية',
      births: 'المواليد',
      deaths: 'الوفيات',
      netChange: 'صافي التغيير',
      countryDetails: 'تفاصيل البلد',
      totalArea: 'المساحة الكلية',
      globalPopulation: 'سكان العالم',
      netGrowth: 'النمو الصافي',
      today: 'اليوم',
      yearly: 'سنوي',
      asOfToday: 'حتى اليوم',
      lastUpdated: 'آخر تحديث',
      realTime: 'بيانات في الوقت الحقيقي'
    }
  },
  ja: {
    translation: {
      title: '世界人口トラッカー',
      searchPlaceholder: '国を検索...',
      population: '人口',
      yearlyChange: '年間変化',
      density: '人口密度',
      languages: '言語',
      populationTrends: '人口動向',
      yearlyStatistics: '年間統計',
      births: '出生',
      deaths: '死亡',
      netChange: '純変化',
      countryDetails: '国の詳細',
      totalArea: '総面積',
      globalPopulation: '世界人口',
      netGrowth: '純成長',
      today: '今日',
      yearly: '年間',
      asOfToday: '本日現在',
      lastUpdated: '最終更新',
      realTime: 'リアルタイムデータ'
    }
  },
  hi: {
    translation: {
      title: 'वैश्विक जनसंख्या ट्रैकर',
      searchPlaceholder: 'देश खोजें...',
      population: 'जनसंख्या',
      yearlyChange: 'वार्षिक परिवर्तन',
      density: 'जनसंख्या घनत्व',
      languages: 'भाषाएं',
      populationTrends: 'जनसंख्या प्रवृत्तियां',
      yearlyStatistics: 'वार्षिक आंकड़े',
      births: 'जन्म',
      deaths: 'मृत्यु',
      netChange: 'शुद्ध परिवर्तन',
      countryDetails: 'देश का विवरण',
      totalArea: 'कुल क्षेत्र',
      globalPopulation: 'विश्व जनसंख्या',
      netGrowth: 'शुद्ध वृद्धि',
      today: 'आज',
      yearly: 'वार्षिक',
      asOfToday: 'आज तक',
      lastUpdated: 'अंतिम अपडेट',
      realTime: 'वास्तविक समय डेटा'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;