import { motion } from "framer-motion";
import fieldReadyIcon from "@/assets/icon-field-ready.png";
import accurateIcon from "@/assets/icon-accurate.png";
import databaseIcon from "@/assets/icon-database.png";

const benefits = [
  {
    icon: fieldReadyIcon,
    title: "Field-ready",
    description: "Works on smartphones in farm conditions with simple photo capture",
    alt: "Smartphone icon representing field-ready mobile capture"
  },
  {
    icon: accurateIcon,
    title: "Accurate Measurements",
    description: "AI-powered keypoint detection with reference object calibration",
    alt: "Ruler icon representing accurate measurements"
  },
  {
    icon: databaseIcon,
    title: "Auto-record to BPA",
    description: "Seamlessly integrates with Bharat Pashudhan App database",
    alt: "Database icon representing automatic recording"
  },
];

const BenefitStrip = () => {
  return (
    <section className="border-y border-border bg-card py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <img 
                  src={benefit.icon} 
                  alt={benefit.alt}
                  className="h-10 w-10 object-contain" 
                />
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitStrip;
