import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Cultural Respect",
      description: "Honoring African traditions while creating contemporary fashion"
    },
    {
      icon: Award,
      title: "Artisan Quality",
      description: "Hand-crafted pieces by skilled artisans from both continents"
    },
    {
      icon: Globe,
      title: "Global Vision",
      description: "Bridging cultures through fashion that speaks to the world"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Supporting local communities and sustainable fashion practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-luxury text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Story Behind
              <span className="block text-gradient">KikiAdewura</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              KikiAdewura was born from a vision to celebrate the rich tapestry of 
              African culture while embracing the timeless elegance of English fashion. 
              Our founder, inspired by her dual heritage, set out to create a brand 
              that would bridge two worlds through exceptional design.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Every piece in our collection tells a story - from the vibrant Kente 
              patterns that echo ancient traditions to the refined tailoring that 
              speaks to British craftsmanship. We believe fashion should be a 
              celebration of identity, heritage, and the beauty of cultural fusion.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="font-luxury text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="font-luxury text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="KikiAdewura Founder"
              className="w-full h-[600px] object-cover rounded-2xl luxury-shadow"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 luxury-shadow max-w-xs"
            >
              <h4 className="font-luxury text-lg font-semibold mb-2">
                "Fashion is the universal language of culture"
              </h4>
              <p className="text-sm text-gray-600">
                - Kiki Adewura, Founder & Creative Director
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-luxury text-3xl font-bold text-gray-900 mb-4">
            Our Values
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 border-0 luxury-shadow hover:scale-105 transition-transform duration-300">
                <CardContent className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-luxury text-xl font-semibold">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;