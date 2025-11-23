import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

const themes = [
  {
    id: 'zhanjiang',
    name: "湛江季 · 海上丝路",
    location: "广东 · 湛江 · 徐闻",
    herb: "良姜 (Galangal)",
    date: "2025 Q1",
    description: "探索被誉为'中国姜王'的良姜，重走海上丝绸之路，体验古法蜜饯制作。了解它如何在古代商船上救治伤病，成为海上丝路的重要物资。",
    image: "https://picsum.photos/800/500?random=1",
    active: true,
    link: "/themes/galangal"
  },
  {
    id: 'qingyuan',
    name: "清远季 · 瑶山韧性",
    location: "广东 · 清远 · 阳山",
    herb: "灵芝 (Reishi)",
    date: "2025 Q2",
    description: "走进瑶族深山，探寻灵芝'枯木逢春'的生命哲学，体验瑶药泡浴文化。",
    image: "https://picsum.photos/800/500?random=2",
    active: false,
    link: "#"
  }
];

const Themes: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">一村一品一故事</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们独创"季度主题合作机制"。每一季度，携手一个乡村合作社，挖掘一款道地药材的文化内核。
            这不仅是展览，更是乡村振兴的助推器。
          </p>
        </div>

        <div className="grid gap-12">
          {themes.map((theme, index) => (
            <div 
              key={theme.id} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                  <img 
                    src={theme.image} 
                    alt={theme.name} 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {theme.active && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      当前热展
                    </div>
                  )}
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4"/> {theme.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4"/> {theme.location}</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-gray-900">{theme.name}</h2>
                <h3 className="text-xl text-herb-primary font-medium">核心药材：{theme.herb}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {theme.description}
                </p>
                <div className="pt-4">
                  {theme.active ? (
                    <Link 
                      to={theme.link}
                      className="inline-flex items-center gap-2 px-6 py-2 bg-herb-primary text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      进入主题世界 <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <button className="px-6 py-2 border border-gray-300 text-gray-400 rounded-lg cursor-not-allowed">
                      敬请期待
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themes;