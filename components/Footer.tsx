import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="h-6 w-6 text-herb-primary" />
              <span className="font-serif font-bold text-xl">本草宇宙</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              数字化沉浸式中医药文化体验馆。让千年智慧焕发新生，做中医药年轻化与国际化的领军品牌。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">关于我们</Link></li>
              <li><Link to="/experience" className="hover:text-white transition-colors">体验流程</Link></li>
              <li><Link to="/themes" className="hover:text-white transition-colors">季度主题</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">票务预订</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> 18126933302
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> teihc@qq.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> 广东外语外贸大学
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              {/* Mock Social Icons */}
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-herb-primary cursor-pointer transition-colors">
                <span className="text-xs">WX</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 cursor-pointer transition-colors">
                <span className="text-xs">XHS</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; 2025 本草宇宙护卫队. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;