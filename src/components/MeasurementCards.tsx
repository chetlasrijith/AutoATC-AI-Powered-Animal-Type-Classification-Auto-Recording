import { motion } from "framer-motion";
import { Ruler, ArrowUpDown, Maximize2, Triangle } from "lucide-react";
import { Card } from "@/components/ui/card";

const measurements = [
  {
    icon: Ruler,
    title: "Body Length",
    description: "Distance from withers to pin bone",
    range: "130-160 cm",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ArrowUpDown,
    title: "Wither Height",
    description: "Vertical distance from ground to withers",
    range: "115-135 cm",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Maximize2,
    title: "Chest Width",
    description: "Horizontal width across chest",
    range: "45-60 cm",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Triangle,
    title: "Rump Angle",
    description: "Angle from hip to pin bone",
    range: "30-45 degrees",
    color: "bg-earth/10 text-earth",
  },
];

const MeasurementCards = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Measurement Details
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Four key traits mapped to ICAR standardized scores (1-9)
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {measurements.map((measurement, index) => (
            <motion.div
              key={measurement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full p-6 transition-all hover:border-primary/50 hover-lift card-shadow">
                <div className={`mb-4 inline-flex rounded-2xl p-4 ${measurement.color}`}>
                  <measurement.icon className="h-8 w-8" />
                </div>
                
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {measurement.title}
                </h3>
                
                <p className="mb-4 text-sm text-muted-foreground">
                  {measurement.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between rounded-lg bg-muted px-3 py-2">
                    <span className="text-xs font-medium text-earth">Expected Range</span>
                    <span className="text-sm font-semibold text-foreground">
                      {measurement.range}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Scoring Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Card className="mx-auto max-w-3xl p-6 card-shadow">
            <h3 className="mb-4 text-center text-xl font-semibold text-foreground">
              ICAR Scoring System
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-2xl font-bold text-destructive">1-3</div>
                <p className="text-sm text-muted-foreground">Below Standard</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-2xl font-bold text-secondary">4-6</div>
                <p className="text-sm text-muted-foreground">Average</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-2xl font-bold text-primary">7-9</div>
                <p className="text-sm text-muted-foreground">Above Standard</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default MeasurementCards;
