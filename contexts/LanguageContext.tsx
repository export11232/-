import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  'nav.home': { zh: '首页', en: 'Home' },
  'nav.experience': { zh: '核心体验', en: 'Experience' },
  'nav.themes': { zh: '季度主题', en: 'Themes' },
  'nav.shop': { zh: '文创商店', en: 'Shop' },
  'nav.about': { zh: '关于我们', en: 'About Us' },
  'nav.passport': { zh: '草本护照', en: 'Passport' },
  'nav.book': { zh: '预约购票', en: 'Book Now' },

  // Shop
  'shop.title': { zh: '文创商店 & 票务', en: 'Creative Shop & Tickets' },
  'shop.subtitle': { zh: '把故事和健康带回家', en: 'Bring health and stories home' },
  'shop.buy': { zh: '购买', en: 'Buy' },
  'shop.currency': { zh: '¥', en: 'CNY ' },
  
  // Products
  'prod.ticket.name': { zh: '深度体验套票 (含DIY)', en: 'Full Experience Ticket (w/ DIY)' },
  'prod.ticket.desc': { zh: '含入场门票 + 探险家手册 + 调香工坊DIY材料包 + 草药拓印体验。', en: 'Includes admission, Explorer Handbook, DIY Sachet Kit, and Herbal Rubbing experience.' },
  'prod.basic.name': { zh: '基础参观票', en: 'Basic Admission' },
  'prod.basic.desc': { zh: '含入场门票 + 探险家手册。适合仅想游览打卡的游客。', en: 'Includes admission and Explorer Handbook. Perfect for sightseeing.' },
  'prod.tea.name': { zh: '“海上丝路”良姜茶礼盒', en: '"Maritime Silk Road" Galangal Tea' },
  'prod.tea.desc': { zh: '严选徐闻良姜，搭配红糖与红枣。包装含AR扫码故事功能。', en: 'Premium Xuwen Galangal with brown sugar. Features AR story packaging.' },
  'prod.notebook.name': { zh: '本草探险家手账本', en: 'Explorer Journal' },
  'prod.notebook.desc': { zh: '精装手绘风手账，内含百草图谱与留白创作区。', en: 'Hardcover hand-drawn style journal with herbal illustrations and creative space.' },
  'prod.passport.name': { zh: '草本护照双语茶会套票', en: 'Herb Passport & Tea Party Set' },
  'prod.passport.desc': { zh: '含双语护照 + Tea&Talk 茶会入场券 + 限定徽章。适合国际友人。', en: 'Includes Bilingual Passport, Tea & Talk entry, and limited badge. Great for international friends.' },
  'prod.tag.hot': { zh: '热销', en: 'HOT' },
  'prod.tag.basic': { zh: '入门', en: 'BASIC' },
  'prod.tag.limited': { zh: '湛江限定', en: 'LIMITED' },
  'prod.tag.culture': { zh: '文创', en: 'CULTURE' },
  'prod.tag.social': { zh: '社交首选', en: 'SOCIAL' },

  // Shop Member
  'member.title': { zh: '加入“能量修复师”会员', en: 'Join "Energy Healer" Membership' },
  'member.desc': { zh: '年费 ¥199/年。享受全年无限次入馆，DIY项目8折，新品优先体验权。', en: '¥199/Year. Unlimited access, 20% off DIY, priority access to new products.' },
  'member.btn': { zh: '立即开通', en: 'Join Now' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
