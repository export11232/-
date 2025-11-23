import React from 'react';
import { ShoppingCart, Star, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Shop: React.FC = () => {
  const { t, language } = useLanguage();

  const products = [
    {
      id: 'passport',
      nameKey: 'prod.passport.name',
      price: 88,
      tagKey: 'prod.tag.social',
      image: "https://picsum.photos/300/300?random=99",
      descKey: 'prod.passport.desc',
      highlight: true // Special styling for this item
    },
    {
      id: 'ticket',
      nameKey: 'prod.ticket.name',
      price: 148,
      tagKey: 'prod.tag.hot',
      image: "https://picsum.photos/300/300?random=10",
      descKey: 'prod.ticket.desc'
    },
    {
      id: 'basic',
      nameKey: 'prod.basic.name',
      price: 58,
      tagKey: 'prod.tag.basic',
      image: "https://picsum.photos/300/300?random=11",
      descKey: 'prod.basic.desc'
    },
    {
      id: 'tea',
      nameKey: 'prod.tea.name',
      price: 128,
      tagKey: 'prod.tag.limited',
      image: "https://picsum.photos/300/300?random=12",
      descKey: 'prod.tea.desc'
    },
    {
      id: 'notebook',
      nameKey: 'prod.notebook.name',
      price: 45,
      tagKey: 'prod.tag.culture',
      image: "https://picsum.photos/300/300?random=13",
      descKey: 'prod.notebook.desc'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-serif font-bold text-gray-900">{t('shop.title')}</h1>
          <p className="text-gray-600 mt-2">{t('shop.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
                key={product.id} 
                className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col ${product.highlight ? 'ring-2 ring-herb-primary ring-offset-2' : ''}`}
            >
              <div className="relative h-48">
                <img src={product.image} alt={t(product.nameKey)} className="w-full h-full object-cover" />
                {product.tagKey && (
                  <span className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded ${product.highlight ? 'bg-blue-600 text-white' : 'bg-herb-accent text-gray-900'}`}>
                    {t(product.tagKey)}
                  </span>
                )}
                {product.highlight && (
                    <span className="absolute bottom-2 left-2 bg-white/90 backdrop-blur text-blue-800 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                        <Globe className="w-3 h-3" /> Bilingual
                    </span>
                )}
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t(product.nameKey)}</h3>
                <p className="text-gray-500 text-sm mb-4 flex-grow">{t(product.descKey)}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-herb-primary">{t('shop.currency')}{product.price}</span>
                  <button className="p-2 bg-gray-100 rounded-full hover:bg-herb-primary hover:text-white transition-colors" title={t('shop.buy')}>
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Membership Promo */}
        <div className="mt-16 bg-gradient-to-r from-herb-primary to-green-800 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
                <Star className="fill-yellow-400 text-yellow-400"/> {t('member.title')}
              </h2>
              <p className="text-green-100">
                {t('member.desc')}
              </p>
            </div>
            <button className="px-8 py-3 bg-white text-herb-primary font-bold rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap">
              {t('member.btn')}
            </button>
          </div>
          {/* Decorative circle */}
          <div className="absolute -right-12 -bottom-24 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Shop;