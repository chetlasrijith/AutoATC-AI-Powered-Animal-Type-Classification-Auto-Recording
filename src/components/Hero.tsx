import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-cow-profile.jpg";
import phoneMock from "@/assets/phone-demo-mock.png";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Objective animal-type classification,{" "}
              <span className="text-primary">from a single photo</span>
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl">
              Measure body length, wither height, chest width and rump angle — automatically — and save the record to Bharat Pashudhan App.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button variant="hero" size="lg" asChild>
                <a href="#demo">Capture & Analyze</a>
              </Button>
              
              <Button variant="ghost" size="lg" className="gap-2">
                <Play className="h-5 w-5" />
                Watch demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary" />
                <span>Field-Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>ICAR Compliant</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Demo Mock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Background glow effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl" />
              
              {/* Phone mock with overlay */}
              <div className="relative overflow-hidden rounded-3xl border-4 border-card bg-card card-shadow">
                <img
                  src={phoneMock}
                  alt="AutoATC mobile interface showing cattle measurement overlay with keypoints and measurements"
                  className="w-full"
                />
                
                {/* Measurement cards overlay */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="flex items-center justify-between rounded-lg bg-white/95 p-3 backdrop-blur-sm"
                  >
                    <span className="text-sm font-medium text-foreground">Body Length</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-foreground">145 cm</span>
                      <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-bold text-secondary-foreground">
                        Score 6
                      </span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="flex items-center justify-between rounded-lg bg-white/95 p-3 backdrop-blur-sm"
                  >
                    <span className="text-sm font-medium text-foreground">Wither Height</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-foreground">128 cm</span>
                      <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-bold text-secondary-foreground">
                        Score 7
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
