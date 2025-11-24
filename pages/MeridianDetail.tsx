import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Layers, PlayCircle, Activity } from 'lucide-react';

const MeridianDetail: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/experience" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" /> 返回核心体验
        </Link>

        <div className="mb-12">
          <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider">
            Digital Twin Technology
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            无接触式经络漫游系统
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            从“观看”到“隔空驾驭”。我们利用 Leap Motion 体感设备与数字孪生技术，
            构建了一个高保真的人体经络 3D 模型。游客无需触摸屏幕，即可在虚实之间探索中医奥秘。
          </p>
        </div>

        {/* Interactive Visual Placeholder */}
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 mb-16 relative group">
          <div className="aspect-w-16 aspect-h-9 h-96 w-full relative">
             <img 
              src="https://picsum.photos/1200/600?grayscale" 
              alt="Meridian Interface" 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="w-20 h-20 text-blue-400 opacity-80 group-hover:scale-110 transition-transform duration-300" />
            </div>
            {/* UI Overlay Mockup */}
            <div className="absolute top-4 right-4 space-y-2">
                <div className="w-32 h-2 bg-blue-500/30 rounded"></div>
                <div className="w-24 h-2 bg-blue-500/30 rounded"></div>
            </div>
            <div className="absolute bottom-8 left-8">
                <p className="font-mono text-blue-300 text-sm">&gt; INITIALIZING SENSOR...</p>
                <p className="font-mono text-green-400 text-sm">&gt; HAND TRACKING ACTIVE</p>
            </div>
          </div>
        </div>

        {/* Tech Stack Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <Cpu className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">感知层</h3>
            <p className="text-gray-400 text-sm">
              使用 Leap Motion 高精度体感设备，低延迟捕捉用户手部 22 个关键点的移动和手势，实现毫米级精度识别。
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <Layers className="h-10 w-10 text-purple-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">呈现层</h3>
            <p className="text-gray-400 text-sm">
              基于 Unity/Unreal 引擎构建的数字孪生体。包含穴位属性、经络流向数据。实时渲染并响应来自体感设备的指令。
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <Activity className="h-10 w-10 text-green-400 mb-4" />
            <h3 className="text-lg font-bold mb-2">交互逻辑</h3>
            <p className="text-gray-400 text-sm">
              用户通过"抓取"、"拖拽"手势将虚拟草药放置于穴位。操作正确时，触发炫光特效与音效，直观展示气血流动。
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link to="/shop" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors shadow-lg shadow-blue-900/50">
            预约线下体验
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MeridianDetail;