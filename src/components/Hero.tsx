import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="h-4 w-4 text-gold-400" />
              <span className="text-sm font-medium">Global Fashion Excellence</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-luxury text-5xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Where African
              <span className="block text-gradient">Heritage</span>
              Meets Global Style
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-white/90 mb-8 max-w-lg leading-relaxed"
            >
              Discover exquisite fashion that celebrates the rich traditions of Africa
              while embracing contemporary English elegance. Every piece tells a story
              of cultural fusion and timeless beauty.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="btn-secondary text-black hover:bg-gold-600 hover:text-white">
                Explore Collections
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Our Story
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1583846792160-e1aa6c2ae3bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="African Fashion Model"
                className="w-full h-[600px] object-cover rounded-2xl luxury-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
              >
                <h3 className="font-luxury text-xl font-semibold text-white mb-2">
                  Kente Elegance Collection
                </h3>
                <p className="text-white/80 text-sm">
                  Handcrafted pieces that honor traditional African artistry
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-6 luxury-shadow"
            >
              <div className="text-center">
                <div className="font-luxury text-2xl font-bold text-primary mb-1">150+</div>
                <div className="text-sm text-gray-600">Unique Designs</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="animate-bounce text-center">
          <div className="text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto">
            <div className="w-1 h-3 bg-white/70 rounded-full mx-auto mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;