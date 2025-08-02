import { Heart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerLinks = {
    Collections: [
      "African Heritage",
      "English Elegance", 
      "Fusion Pieces",
      "Accessories"
    ],
    Company: [
      "About Us",
      "Our Story",
      "Careers",
      "Press"
    ],
    Support: [
      "Size Guide",
      "Shipping Info",
      "Returns",
      "FAQ"
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="font-luxury text-3xl font-bold text-gradient">
              KikiAdewura
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Celebrating the fusion of African heritage and English elegance 
              through exceptional fashion design.
            </p>
            <div className="space-y-4">
              <h4 className="font-semibold">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 KikiAdewura. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for fashion lovers worldwide</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;