import { motion } from "framer-motion";
import { Button } from "@/components/ui/enhanced-button";
import { Shield, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('problem-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,white_2px,transparent_2px)] bg-[length:50px_50px]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Academic Integrity Solution</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Fighting Academic{" "}
            <span className="text-accent-light">Forgery</span>{" "}
            with Technology
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            A digital platform to detect and prevent fake degrees, certificates, 
            and documents across Jharkhand's higher education system.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="accent" size="xl" className="min-w-48">
              Get Started
            </Button>
            <Button variant="outline_white" size="xl" className="min-w-48">
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-light mb-2">99.8%</div>
              <div className="text-white/80">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-light mb-2">50+</div>
              <div className="text-white/80">Partner Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-light mb-2">24/7</div>
              <div className="text-white/80">Real-time Validation</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default Hero;