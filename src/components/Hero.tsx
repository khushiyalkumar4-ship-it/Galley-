import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 bg-primary overflow-hidden">
       {/* Background Image with Overlay */}
       <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-50 scale-105 animate-slow-zoom"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1920&q=80")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-left text-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Open Until Late • Akbarpur</span>
          </div>
          <h1 className="text-white text-5xl md:text-8xl font-extrabold mb-8 leading-[0.9] tracking-tighter">
            The Golden<br /> 
            <span className="text-accent underline decoration-accent/20 underline-offset-12">Standard.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-medium">
            Experience the signature warmth and artisanal brilliance of Galley Restaurant & Bakehouse. A culinary landmark redefined for the modern connoisseur.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a 
              href="#menu" 
              className="w-full sm:w-auto px-10 py-4 bg-accent text-primary rounded-md font-extrabold text-sm tracking-widest uppercase hover:brightness-110 transition-all shadow-xl shadow-accent/20"
            >
              Order Online
            </a>
            <a 
              href="#about" 
              className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white rounded-md font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all backdrop-blur-md"
            >
              Our Story
            </a>
          </div>
        </motion.div>
      </div>

      <div className="mt-24 relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Quality Guaranteed', desc: 'SLA backed freshness and taste for every single bite.' },
            { title: 'Local Ingredients', desc: 'Sourced from the best local farms with full traceability.' },
            { title: 'Expert Chefs', desc: 'World-class expertise in artisanal baking and gourmet cooking.' }
          ].map((item, i) => (
             <div key={i} className="bg-white p-8 rounded-xl border border-border shadow-professional">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center mb-6 font-bold">0{i+1}</div>
                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
