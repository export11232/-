import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scan, Book, Zap, UserPlus } from 'lucide-react';

const HandbookDetail: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-gray-800 pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/experience" className="inline-flex items-center text-gray-500 hover:text-herb-primary mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" /> 返回核心体验
        </Link>

        <div className="mb-12 text-center">
          <span className="px-3 py-1 bg-herb-secondary/20 text-herb-secondary rounded-full text-xs font-bold uppercase tracking-wider">
            Step 1: Start
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 text-herb-primary">
            启程 · 探险家手册
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            这不仅是一本导览图，更是你作为“能量修复师”的身份证明。
            在这里，你将领取你的使命，开启一场修复宇宙元气的奇幻旅程。
          </p>
        </div>

        {/* Visual Representation */}
        <div className="bg-white p-4 rounded-2xl shadow-xl mb-16 rotate-1 hover:rotate-0 transition-transform duration-500 border border-gray-200 max-w-3xl mx-auto">
          <div className="aspect-w-16 aspect-h-10 h-96 w-full relative bg-[#e8dfd0] rounded-lg overflow-hidden flex items-center justify-center">
             <img 
              src="https://picsum.photos/800/600?random=handbook" 
              alt="Explorer Handbook Mockup" 
              className="w-full h-full object-cover opacity-90 mix-blend-multiply"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h2 className="text-4xl font-serif font-bold text-herb-primary mb-2">本草宇宙</h2>
                <p className="font-serif italic text-gray-700">探险家手册</p>
                <div className="mt-8 w-16 h-16 border-2 border-dashed border-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-xs text-gray-500">盖章处</span>
                </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl border-t-4 border-herb-primary shadow-sm">
            <UserPlus className="h-10 w-10 text-herb-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">身份转换</h3>
            <p className="text-gray-600 leading-relaxed">
              入场即领取手册，瞬间从“参观者”转变为“能量修复师”。你的核心使命是：集齐五行能量（对应五种湛江特色草药），修复失衡的宇宙元气。
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl border-t-4 border-herb-secondary shadow-sm">
            <Scan className="h-10 w-10 text-herb-secondary mb-4" />
            <h3 className="text-xl font-bold mb-3">AR 扫码互动</h3>
            <p className="text-gray-600 leading-relaxed">
              手册内印有特殊的纹样二维码。在场馆不同区域扫描手册，即可解锁草药的 3D 生长动画和背后的乡村种植故事。
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border-t-4 border-blue-400 shadow-sm">
            <Zap className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">能量收集</h3>
            <p className="text-gray-600 leading-relaxed">
              通过“寻宝”环节找到草药箱，在手册对应位置完成拓印或盖章。集满印章不仅是成就，更可兑换专属文创纪念品。
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border-t-4 border-yellow-500 shadow-sm">
            <Book className="h-10 w-10 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">手绘风设计</h3>
            <p className="text-gray-600 leading-relaxed">
              全本采用精美的手绘插图，描绘湛江地理风貌与特色草药。体验结束后，它将成为你独一无二的旅行手账。
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-500 mb-4 text-sm">准备好开始你的任务了吗？</p>
          <Link to="/shop" className="inline-block px-10 py-4 bg-herb-primary hover:bg-green-800 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            预订入场门票 (含手册)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HandbookDetail;