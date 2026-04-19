import { motion } from 'motion/react';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-professional border-b border-border' : 'bg-white border-b border-border'
    }`}>
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        <a href="#" className="flex flex-col leading-tight group">
          <div className="flex items-center">
            <span className="font-extrabold text-2xl tracking-tighter text-primary group-hover:text-accent transition-colors">Galley</span>
            <span className="text-2xl font-black text-accent">.</span>
          </div>
          <span className="text-[8px] uppercase font-bold tracking-[0.3em] text-text-light/60 -mt-1 ml-0.5">Systems & Bakehouse</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-bold tracking-widest uppercase text-text-light hover:text-accent transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={onCartClick}
            className="relative p-2 text-text-light hover:text-accent transition-colors"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-accent text-primary text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button className="bg-accent text-primary px-6 py-2.5 rounded-md text-xs font-black tracking-widest uppercase hover:brightness-110 transition-all shadow-md shadow-accent/10">
            Secure Entry
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
           <button
            onClick={onCartClick}
            className="relative p-2 text-text-light hover:text-accent transition-colors"
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-primary text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-primary hover:text-accent transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white absolute top-full left-0 right-0 py-6 px-6 shadow-xl border-t border-gray-100"
        >
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-semibold tracking-widest uppercase text-primary hover:text-accent"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
