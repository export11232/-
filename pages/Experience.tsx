import React from 'react';
import { Link } from 'react-router-dom';
import { ExperienceStep } from '../types';
import { Map, Fingerprint, Activity, PenTool, ShoppingBag } from 'lucide-react';

const steps: ExperienceStep[] = [
  {
    id: 1,
    title: "启程 · 探险家手册",
    subtitle: "Role-Playing Start",
    icon: "Map",
    description: "领取手绘风格《本草探险家手册》，获取'能量修复师'身份，开启寻找五行能量的旅程。",
    path: "/experience/handbook"
  },
  {
    id: 2,
    title: "感知 · 实体寻宝",
    subtitle: "Sensory Exploration",
    icon: "Fingerprint",
    description: "在'本草秘境'中，看形、闻气、触质。找到对应草药箱，完成拓印盖章任务。",
    path: "/experience/treasure-hunt"
  },
  {
    id: 3,
    title: "理解 · 经络漫游",
    subtitle: "Digital Interaction",
    icon: "Activity",
    description: "利用 Leap Motion 体感技术与数字孪生，隔空操控经络运行，点亮人体穴位。",
    path: "/experience/meridian"
  },
  {
    id: 4,
    title: "创造 · 调香工坊",
    subtitle: "DIY Workshop",
    icon: "PenTool",
    description: "根据AI生成的个性化'能量配方'，亲手制作草药香囊，不仅是手作，更是疗愈。",
    path: "/experience/workshop"
  },
  {
    id: 5,
    title: "带走 · 情感延续",
    subtitle: "Cultural Souvenir",
    icon: "ShoppingBag",
    description: "手册兑换专属纪念品，扫描二维码查看每一味药材背后的乡村故事。",
    path: "/shop"
  }
];

const Experience: React.FC = () => {
  return (
    <div className="pt-16 bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-herb-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">核心体验流程</h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            融合数字科技与传统智慧，五大环节带你重构对中医药的认知。
          </p>
        </div>
      </div>

      {/* Timeline / Steps */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gray-200 relative h-48 md:h-auto">
                <img 
                  src={`https://picsum.photos/400/300?random=${step.id}`} 
                  alt={step.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-herb-primary">
                  STEP 0{step.id}
                </div>
              </div>
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
                  {/* Icon Rendering */}
                  <div className="text-herb-secondary">
                    {step.icon === 'Map' && <Map />}
                    {step.icon === 'Fingerprint' && <Fingerprint />}
                    {step.icon === 'Activity' && <Activity />}
                    {step.icon === 'PenTool' && <PenTool />}
                    {step.icon === 'ShoppingBag' && <ShoppingBag />}
                  </div>
                </div>
                <p className="text-sm text-herb-secondary font-semibold uppercase tracking-wide mb-3">
                  {step.subtitle}
                </p>
                <p className="text-gray-600 mb-6">
                  {step.description}
                </p>
                
                {/* Conditional Linking based on available pages */}
                {(step.path === '/experience/meridian' || step.path === '/experience/handbook' || step.path === '/experience/workshop' || step.path === '/shop') ? (
                  <Link 
                    to={step.path}
                    className="inline-flex items-center text-herb-primary font-semibold hover:underline"
                  >
                    查看详情 &rarr;
                  </Link>
                ) : (
                  <span className="text-gray-400 text-sm cursor-not-allowed">现场体验项目</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;