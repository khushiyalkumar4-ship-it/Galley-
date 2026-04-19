import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="bg-white border border-border rounded-xl overflow-hidden shadow-professional flex flex-col lg:flex-row relative">
         {/* Details */}
         <div className="lg:w-1/2 p-12 md:p-16">
            <h2 className="text-primary text-4xl font-extrabold mb-10 tracking-tight">Enterprise Infrastructure. <br /> <span className="text-accent">Global Support.</span></h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Headquarters</h4>
                  <p className="text-sm text-text-light">Main Market Road, Near Gandhi Chowk<br />Akbarpur, UP 224122</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Operational Hours</h4>
                  <p className="text-sm text-text-light">Mon - Sun: 09:00 AM - 10:30 PM (No Downtime)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Global Connect</h4>
                  <p className="text-sm text-text-light">+91 99887 76655<br />hello@galleybakery.com</p>
                </div>
              </div>
            </div>
         </div>

         {/* Form / Visual */}
         <div className="lg:w-1/2 bg-bg-site p-12 md:p-16 flex items-center justify-center border-l border-border">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="w-full max-w-sm"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Direct Integration</h3>
              <p className="text-sm text-text-light mb-8">Subscribe to our deployment logs for weekly artisan bread schedules and new feature releases.</p>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full px-5 py-3 bg-white rounded-md border border-border text-primary placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-sm transition-all"
                />
                <button className="w-full py-3.5 bg-accent text-primary rounded-md font-black tracking-[0.2em] uppercase text-xs hover:brightness-110 transition-all shadow-lg shadow-accent/10">
                  Deploy to Inbox
                </button>
              </div>
            </motion.div>
         </div>
      </div>
      
      <div className="mt-20 flex flex-col md:flex-row justify-between items-center py-10 border-t border-border gap-6">
        <p className="text-xs font-semibold text-text-light uppercase tracking-widest text-center md:text-left">
          &copy; 2026 Galley systems. Built for the Next Generation.
        </p>
        <div className="flex space-x-6 text-text-light">
          <a href="https://www.instagram.com/galleyrestaurant_bakehouse?igsh=MTVmZXd2Zm10cHgxbQ==" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://www.facebook.com/p/Galley-Restaurant-Bakehouse-61578322903020/?ref=xav_pl_fb_external_link_android&wtsid=rdr_0Rl342jO1iezho2Rc&hr=1#" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <Facebook size={20} />
          </a>
          <Twitter size={20} className="hover:text-accent cursor-pointer transition-colors" />
        </div>
      </div>
    </section>
  );
}
