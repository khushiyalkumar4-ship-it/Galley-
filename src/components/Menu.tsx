import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';
import { Plus, Leaf } from 'lucide-react';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

const CATEGORIES = ['All', 'Bakery', 'Fast Food', 'Pizza', 'Chinese', 'Beverages'] as const;

export default function Menu({ onAddToCart }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-primary text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Our Curated Menu</h2>
        <p className="text-text-light max-w-xl mx-auto mb-10">Select from our signature collections, prepared with enterprise-grade quality standards.</p>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-md text-xs font-bold tracking-wider uppercase transition-all ${
                activeCategory === cat 
                ? 'bg-accent text-white shadow-md' 
                : 'bg-white text-text-light border border-border hover:bg-bg-site'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode='popLayout'>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-professional border border-border transition-all hover:border-accent/30 group flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white shadow-sm border border-border px-3 py-1 rounded-md flex items-center space-x-1">
                  {item.isVeg && <Leaf size={12} className="text-green-500" />}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-primary font-bold text-xl mb-2">
                  {item.name}
                </h3>
                <p className="text-text-light text-sm leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-extrabold text-primary">₹{item.price}</span>
                  <button
                    onClick={() => onAddToCart(item)}
                    className="flex items-center space-x-2 px-4 py-2 bg-accent text-primary rounded-md text-sm font-black tracking-widest uppercase hover:brightness-110 transition-all active:scale-95 shadow-sm"
                  >
                    <Plus size={16} />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
