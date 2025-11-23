import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FlaskConical, PenTool, Smile, Smartphone } from 'lucide-react';

const WorkshopDetail: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 pt-20 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/experience" className="inline-flex items-center text-gray-500 hover:text-herb-primary mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" /> 返回核心体验
        </Link>

        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="w-full md:w-1/2">
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold uppercase tracking-wider">
              Step 4: Create
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-gray-900">
              创造 · 调香制囊工坊
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              在这里，每个人都是自己的“生活调香师”。参照“能量配方板”，亲手触摸、称量、混合道地药材，制作一个专属的草药香囊。
            </p>
            <div className="flex flex-wrap gap-2">
               <span className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-600">#治未病</span>
               <span className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-600">#非遗手作</span>
               <span className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-600">#湛江良姜染</span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src="https://picsum.photos/600/400?random=workshop" 
              alt="DIY Workshop" 
              className="rounded-2xl shadow-2xl object-cover w-full h-80"
            />
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h2 className="text-2xl font-serif font-bold text-center mb-12">体验流程</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

            <div className="bg-white p-6 rounded-xl text-center border border-gray-100 shadow-sm">
              <div className="w-16 h-16 mx-auto bg-herb-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">1</div>
              <h3 className="font-bold text-lg mb-2">获取配方</h3>
              <p className="text-sm text-gray-500">
                查看墙上的“能量配方板”，或通过小程序AI问答，获取适合你体质的草药组合（如安神、驱蚊）。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center border border-gray-100 shadow-sm">
              <div className="w-16 h-16 mx-auto bg-herb-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">2</div>
              <h3 className="font-bold text-lg mb-2">称重抓药</h3>
              <p className="text-sm text-gray-500">
                手持戥子（小秤），亲手抓取灵芝、薄荷、艾叶等原料，感受药材的质感与分量。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center border border-gray-100 shadow-sm">
              <div className="w-16 h-16 mx-auto bg-herb-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">3</div>
              <h3 className="font-bold text-lg mb-2">混合装袋</h3>
              <p className="text-sm text-gray-500">
                将草药研磨混合，装入特制的香囊袋中。本季特色：使用湛江高良姜汁染色的布料，制作石狗纹香囊。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center border border-gray-100 shadow-sm">
              <div className="w-16 h-16 mx-auto bg-blue-400 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">4</div>
              <h3 className="font-bold text-lg mb-2">数字化留念</h3>
              <p className="text-sm text-gray-500">
                扫描成品上的二维码，生成个人的“能量修复成功”海报，分享至社交媒体。
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Feature */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
           <div className="w-full md:w-1/3 flex justify-center">
              <Smartphone className="w-32 h-32 text-herb-primary opacity-80" />
           </div>
           <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FlaskConical className="text-herb-primary"/> 
                科技赋能：AI 能量配方
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                不知道选什么药材？我们的 "AI 本草助手" 可以帮忙。在工坊的互动屏或小程序上输入你的近期状态（如"熬夜"、"压力大"、"食欲不振"），
                系统将基于中医药知识库，智能推荐最适合你的调理配方比例。
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-white rounded shadow-sm text-sm font-medium text-gray-700">🌿 熬夜修护方</div>
                <div className="px-4 py-2 bg-white rounded shadow-sm text-sm font-medium text-gray-700">🌙 安神助眠方</div>
                <div className="px-4 py-2 bg-white rounded shadow-sm text-sm font-medium text-gray-700">🌬️ 祛湿清热方</div>
              </div>
           </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link to="/shop" className="px-8 py-4 bg-gray-900 hover:bg-black text-white rounded-full font-medium transition-colors shadow-lg">
            购买深度体验套票 (含DIY)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkshopDetail;