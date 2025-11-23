import React from 'react';
import { Link } from 'react-router-dom';
import { Book, MessageCircle, Coffee, Award, Globe, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HerbPassport: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    zh: {
      title: 'Herb Passport 国际体验计划',
      subtitle: '连接中医药与世界的跨文化桥梁',
      heroDesc: '针对外国留学生与游客特别设计的“双语通行证”。集章打卡、跨文化茶会、寻找中医药的全球知音。',
      section1Title: '什么是 Herb Passport?',
      section1Desc: 'Herb Passport（草本护照）不仅是一本导览手册，更是一场游戏化的文化探索之旅。每完成一个体验任务，即可获得一枚专属草药印章。',
      features: [
        { title: '双语指引', desc: '全程中英双语服务，打破语言障碍，轻松理解中医智慧。' },
        { title: '任务集章', desc: '在“感知”、“创造”等环节完成任务，收集五行能量印章。' },
        { title: '限定奖励', desc: '集满5枚印章，即可兑换“草药猎人”徽章与草本皂。' },
      ],
      teaTalkTitle: 'Tea & Talk 草本茶话会',
      teaTalkDesc: '一场味觉与思想的碰撞。在这里，茶不仅是饮品，更是媒介。',
      teaTalkPoints: [
        '品鉴特调草本茶（如：海上丝路良姜奶茶）。',
        '由广外“文化转译员”引导的中英双语对话。',
        '分享不同文化背景下的“草本故事”。',
      ],
      cta: '预订双语体验套餐',
    },
    en: {
      title: 'Herb Passport International Program',
      subtitle: 'A Cross-Cultural Bridge Connecting TCM to the World',
      heroDesc: 'A bilingual "pass" designed for international students and tourists. Collect stamps, join tea parties, and discover the global resonance of herbal medicine.',
      section1Title: 'What is Herb Passport?',
      section1Desc: 'The Herb Passport is not just a guidebook, but a gamified cultural exploration journey. Complete tasks to collect exclusive herbal stamps.',
      features: [
        { title: 'Bilingual Guide', desc: 'Full English & Chinese service to break language barriers and decode TCM wisdom.' },
        { title: 'Stamp Collection', desc: 'Complete tasks in "Sense" and "Create" zones to collect Five-Element Energy stamps.' },
        { title: 'Exclusive Rewards', desc: 'Collect 5 stamps to redeem a "Herbal Hunter" badge and herbal soap.' },
      ],
      teaTalkTitle: 'Tea & Talk Session',
      teaTalkDesc: 'A collision of taste and thought. Here, tea is not just a drink, but a medium.',
      teaTalkPoints: [
        'Taste signature herbal teas (e.g., Maritime Silk Road Galangal Milk Tea).',
        'Bilingual dialogue guided by "Cultural Translators" from GDUFS.',
        'Share "Herbal Stories" from different cultural backgrounds.',
      ],
      cta: 'Book Bilingual Package',
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-16">
      {/* Hero Section */}
      <div className="relative bg-herb-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3">
            <Globe className="w-96 h-96 text-white" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold mb-6 border border-white/30">
            Global Connection
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto font-light">
            {t.subtitle}
          </p>
          <p className="mt-6 text-base md:text-lg text-green-50 max-w-2xl mx-auto">
            {t.heroDesc}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section 1: Passport Concept */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:w-1/2 relative">
            <div className="bg-white p-4 rounded-2xl shadow-2xl rotate-3 border border-gray-200">
                <div className="bg-[#2C3E50] rounded-lg h-80 flex items-center justify-center text-center p-8 relative overflow-hidden">
                    <div className="absolute top-4 right-4 w-16 h-16 rounded-full border-2 border-yellow-500 opacity-50 flex items-center justify-center rotate-12">
                        <span className="text-yellow-500 text-xs font-bold">VISA</span>
                    </div>
                    <div>
                        <div className="mb-4 flex justify-center"><Book className="text-yellow-500 w-12 h-12" /></div>
                        <h3 className="text-3xl font-serif font-bold text-white mb-2">HERB PASSPORT</h3>
                        <p className="text-gray-400 text-sm">Republic of Herbal Universe</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">{t.section1Title}</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {t.section1Desc}
            </p>
            <div className="space-y-6">
                {t.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-herb-primary">
                            {idx === 0 ? <Globe className="w-5 h-5"/> : idx === 1 ? <CheckCircle className="w-5 h-5"/> : <Award className="w-5 h-5"/>}
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900">{feature.title}</h4>
                            <p className="text-gray-500">{feature.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>

        {/* Section 2: Tea & Talk */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-16 flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
               <img 
                src="https://picsum.photos/600/400?random=tea-party" 
                alt="Tea and Talk" 
                className="rounded-2xl shadow-md w-full h-auto object-cover"
               />
            </div>
            <div className="w-full md:w-1/2">
                <div className="inline-flex items-center gap-2 text-herb-secondary font-bold mb-4 uppercase tracking-wider">
                    <Coffee className="w-5 h-5" /> Tea & Talk
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">{t.teaTalkTitle}</h2>
                <p className="text-gray-600 mb-8 text-lg">
                    {t.teaTalkDesc}
                </p>
                <ul className="space-y-4 mb-10">
                    {t.teaTalkPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                            <span className="w-1.5 h-1.5 bg-herb-secondary rounded-full mt-2.5"></span>
                            {point}
                        </li>
                    ))}
                </ul>
                <Link to="/shop" className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg">
                    {t.cta}
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HerbPassport;