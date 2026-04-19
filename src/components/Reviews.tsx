import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Vikram Mehta",
    role: "Culinary Critic",
    content: "The consistency of their sourdough is unparalleled. It's the gold standard in Akbarpur. A true masterclass in artisanal infrastructure.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Local Food Enthusiast",
    content: "Enterprise-level service met with artisanal heart. Their Chocolate Truffle is a masterpiece of precision and flavor. Highly recommended.",
    rating: 5
  },
  {
    id: 3,
    name: "Anand Verma",
    role: "Regular Customer",
    content: "A reliable destination for gourmet cakes. The night-time ambiance at the Akbarpur branch is world-class. The Galley Special Pizza remains my benchmark.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-24 px-6 bg-bg-site border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Client Verdicts</h2>
          <p className="text-text-light max-w-xl mx-auto">High-trust reviews from our most demanding stakeholders.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: review.id * 0.1 }}
              className="bg-white p-8 rounded-xl border border-border shadow-professional relative group"
            >
              <Quote className="text-accent/10 absolute top-6 right-8 group-hover:text-accent/20 transition-colors" size={60} />
              
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-accent fill-accent" />
                ))}
              </div>

              <p className="text-text-main leading-relaxed mb-6 italic">"{review.content}"</p>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-primary font-bold text-sm">{review.name}</h4>
                  <p className="text-[10px] text-text-light uppercase tracking-widest font-bold">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
