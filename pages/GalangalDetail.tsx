import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Anchor, Coffee, Sun } from 'lucide-react';

const GalangalDetail: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 pt-20 pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://picsum.photos/1920/800?random=galangal" 
          alt="Zhanjiang Galangal Fields" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <span className="inline-block py-1 px-3 border border-white/50 rounded-full text-sm mb-4 backdrop-blur-sm">
            季度主题 · 2025 Q1
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            湛江良姜：海上丝路的守护者
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            从徐闻的红土地到远洋的商船，探寻“中国姜王”跨越千年的传奇旅程。
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <Link to="/" className="inline-flex items-center text-white hover:text-herb-light mb-8 transition-colors drop-shadow-md">
          <ArrowLeft className="h-4 w-4 mr-2" /> 返回首页
        </Link>

        {/* Intro Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                为什么是良姜？
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                徐闻良姜，被誉为“中国姜王”，不仅产量占全国90%以上，更承载着深厚的海洋文化。
                在古代，它是海上丝绸之路的重要物资。相传明代商船因风浪搁浅，船员湿寒交加，
                正是随船携带的良姜煮水救了全船人的性命。
              </p>
              <p className="text-gray-600 leading-relaxed">
                本季度，我们与<strong>湛江市徐闻县龙塘镇</strong>深度合作，
                将这段被遗忘的历史搬进体验馆，带你重温那段波澜壮阔的海上岁月。
              </p>
              <div className="flex items-center gap-6 mt-8 text-sm text-gray-500">
                <span className="flex items-center gap-2"><MapPin className="text-herb-primary"/> 产地：广东湛江徐闻</span>
                <span className="flex items-center gap-2"><Sun className="text-herb-secondary"/> 特性：温中散寒</span>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-gray-100 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-herb-primary mb-2">90%</div>
              <p className="text-sm text-gray-500 mb-6">徐闻良姜占全国产量</p>
              <div className="text-4xl font-bold text-herb-secondary mb-2">No.1</div>
              <p className="text-sm text-gray-500">国家地理标志保护产品</p>
            </div>
          </div>
        </div>

        {/* Experience Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="group relative overflow-hidden rounded-2xl h-80 shadow-lg">
            <img 
              src="https://picsum.photos/600/400?random=candy" 
              alt="Candied Galangal DIY" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Anchor className="h-5 w-5 text-yellow-400"/> 丝路药香馆体验
              </h3>
              <p className="text-gray-200 text-sm">
                亲手体验古法“九蒸九晒”工艺的一部分，制作“姜王蜜饯”。感受良姜从辛辣到甘甜的转化，正如先民在海上的艰辛与收获。
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl h-80 shadow-lg">
            <img 
              src="https://picsum.photos/600/400?random=tea" 
              alt="Galangal Tea" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <Coffee className="h-5 w-5 text-yellow-400"/> 特调：海上丝路奶茶
              </h3>
              <p className="text-gray-200 text-sm">
                打破传统，我们将良姜汁与椰奶融合，创造出独特的“湛江味道”。温润驱寒，是冬日里的最佳慰藉。
              </p>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-herb-light rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">乡村振兴 · 价值共生</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            您购买的每一份良姜文创产品，我们将提取 <strong>5%</strong> 的收益作为“品牌共建基金”，
            直接反哺给徐闻龙塘镇的种植合作社，用于支持生态种植与非遗技艺传承。
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/shop" className="px-8 py-3 bg-herb-primary text-white rounded-full hover:bg-green-800 transition-colors shadow-lg">
              购买良姜主题礼盒
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GalangalDetail;