import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartProps) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          
          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col border-l border-border"
          >
            <div className="p-6 border-b border-border flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="text-accent" />
                <h2 className="text-primary font-extrabold text-2xl tracking-tight">Active Order</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-bg-site rounded-md transition-colors text-text-light">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-bg-site rounded-lg flex items-center justify-center mb-4 border border-border">
                    <ShoppingBag size={24} className="text-text-light/30" />
                  </div>
                  <p className="text-text-main font-bold">Your cart is empty</p>
                  <p className="text-text-light text-xs mt-1">Add items from the menu to see them here.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border border-border">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-0.5">
                        <h4 className="font-bold text-primary text-sm">{item.name}</h4>
                        <button 
                          onClick={() => onRemove(item.id)} 
                          className="text-text-light hover:text-red-600 p-1.5 rounded-md hover:bg-red-50 transition-all"
                          title="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-accent font-bold text-sm mb-3">₹{item.price}</p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center bg-bg-site rounded-md border border-border p-1">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:text-accent transition-colors text-text-light"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-6 text-center font-bold text-xs text-primary">{item.quantity}</span>
                          <button 
                             onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:text-accent transition-colors text-text-light"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 bg-bg-site border-t border-border space-y-4">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-text-light uppercase tracking-widest text-[10px]">Net Total</span>
                  <span className="text-xl text-primary">₹{total}</span>
                </div>
                <button 
                  onClick={() => alert(`Order for ₹${total} received! Packaging your artisan items now.`)}
                  className="w-full py-3.5 bg-accent text-white rounded-md font-bold text-sm tracking-wide uppercase hover:opacity-90 transition-all shadow-md"
                >
                  Commit Order
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
