import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Collections = () => {
  const africanCollection = [
    {
      id: 1,
      title: "Kente Elegance",
      description: "Handwoven Kente patterns with modern silhouettes",
      image: "https://images.unsplash.com/photo-1594736797933-d0a9ba80cdba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: "£250"
    },
    {
      id: 2,
      title: "Ankara Royalty",
      description: "Bold Ankara prints in contemporary designs",
      image: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: "£180"
    },
    {
      id: 3,
      title: "Dashiki Dreams",
      description: "Traditional Dashiki reimagined for modern wear",
      image: "https://images.unsplash.com/photo-1583846792170-e3ccb73ccae1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: "£320"
    }
  ];

  const englishCollection = [
    {
      id: 4,
      title: "Savile Row Inspired",
      description: "Classic tailoring with African textile accents",
      image: "https://images.unsplash.com/photo-1594736797933-d0a9ba80cdba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: "£450"
    },
    {
      id: 5,
      title: "Garden Party Chic",
      description: "English countryside meets African sophistication",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: "£380"
    },
    {
      id: 6,
      title: "Royal Fusion",
      description: "Regal designs celebrating two cultures",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: "£520"
    }
  ];

  const ProductCard = ({ product, index }: { product: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="fashion-card group cursor-pointer border-0">
        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-4 right-4 bg-white/90 hover:bg-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <Button className="w-full bg-white text-black hover:bg-gray-100">
              Quick View
            </Button>
          </motion.div>
        </div>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-luxury text-xl font-semibold text-gray-900">
              {product.title}
            </h3>
            <span className="font-bold text-primary text-lg">
              {product.price}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            {product.description}
          </p>
          <Button className="btn-outline w-full">
            Add to Cart
            <ArrowRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-luxury text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the perfect fusion of African heritage and English sophistication
            in every carefully crafted piece
          </p>
        </motion.div>

        <div id="african" className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <h3 className="font-luxury text-3xl font-semibold text-gray-900">
              African Heritage Collection
            </h3>
            <Button className="btn-primary">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {africanCollection.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>

        <div id="english">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <h3 className="font-luxury text-3xl font-semibold text-gray-900">
              English Elegance Collection
            </h3>
            <Button className="btn-primary">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {englishCollection.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;