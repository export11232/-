import React from 'react';
import { Users, Target, Compass, Shield, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-herb-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">关于我们</h1>
          <p className="text-xl text-herb-primary font-medium">
            本草宇宙护卫队
          </p>
          <p className="text-gray-600 mt-2">
            广东外语外贸大学 · 跨学科创业团队
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Mission & Positioning */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 border-l-4 border-herb-primary pl-4">
            团队定位
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-herb-primary mb-4">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">跨界翻译官</h3>
              <p className="text-gray-600">
                我们将自己定位为文化科技的"翻译官"。主要使命是构建一座桥梁：一端是深邃的中医药非遗文化，另一端是Z世代的消费习惯与全球化的沟通语境。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-herb-secondary mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">乡村振兴青年尖兵</h3>
              <p className="text-gray-600">
                服务"百千万工程"。继承广外"瑶篮"精神，深入田野，做优秀乡土文化的挖掘者、转译者与全球传播者。
              </p>
            </div>
          </div>
        </section>

        {/* Team Structure */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 border-l-4 border-herb-primary pl-4">
            核心执行团队：特种作战
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            我们的战略并非单点突破，而是发挥跨学科背景优势，进行精准协同的"特种作战"。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                <Users className="w-4 h-4 text-herb-primary"/> 前沿侦察 (新传学院)
              </h4>
              <p className="text-sm text-gray-600">
                负责趋势洞察、内容造浪与品牌传播，确保我们的"翻译"是市场想听、爱听的。
              </p>
            </div>
            <div className="p-5 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-herb-primary"/> 文化解码 (英教学院)
              </h4>
              <p className="text-sm text-gray-600">
                负责核心内容的"信达雅"转译，为未来的文化出海扫清语言与文化障碍。
              </p>
            </div>
            <div className="p-5 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                <Target className="w-4 h-4 text-herb-primary"/> 战略规划 (公管学院)
              </h4>
              <p className="text-sm text-gray-600">
                确保每一步都踩在国家政策与区域发展的鼓点上，最大化社会价值。
              </p>
            </div>
            <div className="p-5 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                <Compass className="w-4 h-4 text-herb-primary"/> 商业引擎 (商学院/经贸)
              </h4>
              <p className="text-sm text-gray-600">
                将创意与流量转化为可持续的商业模式，负责攻城略地。
              </p>
            </div>
            <div className="p-5 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                <Shield className="w-4 h-4 text-herb-primary"/> 合规风控 (法学院)
              </h4>
              <p className="text-sm text-gray-600">
                为项目构建安全的运营边界，尤其在产品出海与知识产权领域保驾护航。
              </p>
            </div>
          </div>
        </section>

        {/* Expert Advisors */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-8 w-8 text-yellow-400" />
            <h2 className="text-2xl font-serif font-bold">专家顾问团</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-blue-300 mb-2">一线临床专家</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                特邀怀安堂中医师林哲瀚、扶元堂中医师李溥春担任内容顾问。确保体验馆的所有中医药知识、养生方案科学、准确。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-300 mb-2">在地产业与政策支持</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                与湛江吴川市中医院建立正式联系，获得专业知识指导。获得湛江吴川市中医药宣传科支持，助力在地文化传播与政策协同。
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 border-l-4 border-herb-primary pl-4">
            发展规划
          </h2>
          <div className="relative border-l-2 border-green-200 ml-4 space-y-10">
            <div className="relative pl-8">
              <span className="absolute -left-[9px] top-0 w-4 h-4 bg-herb-primary rounded-full border-4 border-white"></span>
              <h4 className="text-lg font-bold text-gray-900">启动期 (第1年)</h4>
              <p className="text-gray-500 text-sm mb-2">市场验证与模型奠基</p>
              <p className="text-gray-600">以快闪试点为核心，验证"体验+零售"模式。完成首个季度主题（湛江良姜）内容开发。</p>
            </div>
            <div className="relative pl-8">
              <span className="absolute -left-[9px] top-0 w-4 h-4 bg-herb-secondary rounded-full border-4 border-white"></span>
              <h4 className="text-lg font-bold text-gray-900">推广期 (第2年)</h4>
              <p className="text-gray-500 text-sm mb-2">品牌塑造与区域复制</p>
              <p className="text-gray-600">开设首家旗舰体验馆，建立会员体系。在大湾区内复制2-3家小型体验中心。推出"Herb Passport"国际化套餐。</p>
            </div>
            <div className="relative pl-8">
              <span className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-400 rounded-full border-4 border-white"></span>
              <h4 className="text-lg font-bold text-gray-900">品牌化与国际化 (第3-5年)</h4>
              <p className="text-gray-500 text-sm mb-2">模式输出与价值引领</p>
              <p className="text-gray-600">全国核心城市复制。自有品牌产品出海（东南亚/北美）。与海外中国文化中心合作，举办海外快闪活动。</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;