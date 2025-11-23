import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scan, Leaf, Activity, PenTool, Gift, TrendingUp, Anchor, HeartHandshake, BookOpen, Lightbulb } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?blur=2" 
            alt="Herbal Universe Atmosphere" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-wide">
            重启 · 本草宇宙
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 font-light">
            中医药数字化互动体验馆
          </p>
          <p className="text-md md:text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
            在这里，你不是观众，而是“能量修复师”。集齐五行能量，修复宇宙元气，开启一场穿越千年的治愈之旅。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/experience" 
              className="px-8 py-3 bg-herb-primary text-white rounded-full font-medium hover:bg-green-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              开启探索 <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              to="/themes/galangal" 
              className="px-8 py-3 bg-white/20 backdrop-blur-md border border-white/50 text-white rounded-full font-medium hover:bg-white/30 transition-all"
            >
              本季主题：湛江良姜
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition - 5 Steps Preview */}
      <section className="py-20 bg-herb-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">五大剧场化体验</h2>
            <div className="w-20 h-1 bg-herb-secondary mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600">从“被动参观”到“主动修复”，沉浸式体验中医药文化</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { icon: <Scan />, title: "启程", desc: "领取探险手册，绑定数字身份" },
              { icon: <Leaf />, title: "感知", desc: "五感寻宝，实体草药拓印" },
              { icon: <Activity />, title: "理解", desc: "经络漫游，体感互动" },
              { icon: <PenTool />, title: "创造", desc: "调香制囊，定制专属配方" },
              { icon: <Gift />, title: "带走", desc: "情感记忆，文化衍生品" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="w-12 h-12 mx-auto bg-green-50 rounded-full flex items-center justify-center text-herb-primary mb-4 group-hover:bg-herb-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Highlight - Linked to Galangal Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-herb-accent/20 rounded-full z-0"></div>
              <img 
                src="https://picsum.photos/600/400" 
                alt="Seasonal Theme" 
                className="relative z-10 rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20 hidden md:block">
                <p className="text-sm font-bold text-herb-primary">当前季度</p>
                <p className="text-xs text-gray-500">湛江 · 海上丝路</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-herb-secondary font-semibold tracking-wider text-sm uppercase">一村一品一故事</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6 font-serif">
                湛江良姜：海上丝路的守护者
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                本季度，我们将带你走进湛江徐闻。探索被誉为“中国姜王”的良姜，了解它如何在古代商船上救治伤病，成为海上丝路的重要物资。
                结合 AI 互动与全息投影，重现千年前的海上传奇。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-herb-primary rounded-full"></span>
                  特调饮品：海上丝路良姜奶茶
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-herb-primary rounded-full"></span>
                  限定体验：古法良姜蜜饯制作
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-herb-primary rounded-full"></span>
                  双语活动：Herb Passport 打卡计划
                </li>
              </ul>
              <Link to="/themes/galangal" className="text-herb-primary font-medium hover:text-green-800 flex items-center gap-1">
                进入主题世界 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages / Why Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">我们的独特优势</h2>
            <p className="text-gray-400">为什么选择「本草宇宙」？</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-herb-primary transition-colors">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-blue-400 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">轻资产 · 快复制</h3>
              <p className="text-gray-400 text-sm">
                摒弃昂贵硬件，采用模块化设计与成熟商用技术（如 Leap Motion），实现低成本快速落地与商圈快闪复制。
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-herb-primary transition-colors">
              <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <Activity className="text-purple-400 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">文化乐园 · 非博物馆</h3>
              <p className="text-gray-400 text-sm">
                彻底打破静态展示，通过“叙事+互动”将中医药变为可玩的文化乐园，精准契合Z世代的“体验式消费”需求。
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-herb-primary transition-colors">
              <div className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center mb-4">
                <Anchor className="text-herb-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">乡村合伙人</h3>
              <p className="text-gray-400 text-sm">
                独创“季度主题机制”，深度绑定乡村合作社。每一季都是一次精准的品牌赋能与乡村振兴实践。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Value Section - New Addition */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">我们的社会价值</h2>
            <div className="w-20 h-1 bg-herb-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600">不仅仅是商业，更是对“百千万工程”与“文化传承”的青年答卷</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-herb-primary mb-6">
                <HeartHandshake className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">乡村振兴 · 价值共生</h3>
              <p className="text-gray-600 leading-relaxed">
                我们是乡村的“品牌合伙人”。通过利润反哺机制，将文创收益回馈种植基地。从初级农产品到高附加值文创，
                助力缩小城乡收入差距，实现“千村未来、万村共富”。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center text-herb-secondary mb-6">
                <BookOpen className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">文化传承 · 青年转译</h3>
              <p className="text-gray-600 leading-relaxed">
                我们是文化的“跨界翻译官”。将深邃的中医药智慧，转译为Z世代喜爱的国潮语言。
                解决“文化理解难”痛点，让传统文化在年轻群体中活起来、火起来。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-6">
                <Lightbulb className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">创新驱动 · 科技赋能</h3>
              <p className="text-gray-600 leading-relaxed">
                我们是行业的“数字化先锋”。响应国家文化数字化战略，利用 AI 与 AR 技术打造沉浸式新场景，
                推动中医药产业与现代服务业的深度融合与升级。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-herb-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-green-200 text-sm uppercase tracking-wider">合作乡村基地</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-200 text-sm uppercase tracking-wider">原创文化IP</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1.2w+</div>
              <div className="text-green-200 text-sm uppercase tracking-wider">体验人次</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-green-200 text-sm uppercase tracking-wider">用户好评率</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;