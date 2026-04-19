import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="relative"
        >
          <div className="aspect-video rounded-xl overflow-hidden shadow-professional border border-border">
            <img 
              src="https://images.unsplash.com/photo-1556210331-09bb3fe8679c?auto=format&fit=crop&w=1000&q=80" 
              alt="Artisan Baker" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 p-6 bg-accent text-primary rounded-lg shadow-xl hidden md:block border border-accent">
            <span className="text-3xl font-extrabold block mb-1">12</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-primary/70">Years in Akbarpur</span>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight">
            Professional Standards. <br /> <span className="text-accent">Artisanal Roots.</span>
          </h2>
          <div className="space-y-6 text-text-light leading-relaxed text-lg">
            <p>
              Galley Restaurant & Bake House represents the pinnacle of digital age hospitality. We've modernized the traditional bakery model to ensure unparalleled reliability in our production pipelines.
            </p>
            <p>
              Our infrastructure is built on quality. From redundant ingredient sourcing to automated temperature control, we ensure every product meets our rigorous internal service level agreements for taste and health.
            </p>
          </div>
          <div className="mt-12 flex justify-between py-10 border-t border-border">
            <div className="text-center">
              <span className="block text-3xl font-extrabold text-primary mb-1">450k+</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-text-light">Loaves Baked</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-extrabold text-primary mb-1">12ms</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-text-light">Avg. Prep Time</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-extrabold text-primary mb-1">24/7</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-text-light">Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
