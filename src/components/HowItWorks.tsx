import { motion } from "framer-motion";
import { Camera, Target, Ruler, BarChart3, Database } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Capture side-profile photo",
    description: "Take a photo showing the animal's complete side profile. Include a reference object (A4 paper, meter stick, or use phone AR) for accurate calibration.",
  },
  {
    icon: Target,
    title: "Detect & landmark",
    description: "YOLOv8 AI model automatically detects keypoints including withers, pin bone, hip, and tail base with high precision.",
  },
  {
    icon: Ruler,
    title: "Pixel → cm calibration",
    description: "Convert pixel measurements to centimeters using the reference object dimensions or smartphone AR capabilities.",
  },
  {
    icon: BarChart3,
    title: "Compute measurements & scores",
    description: "Calculate body length, wither height, chest width, and rump angle. Map each measurement to ICAR 1-9 classification scores.",
  },
  {
    icon: Database,
    title: "Auto-export & save",
    description: "Generate structured JSON/CSV output and automatically save records to Bharat Pashudhan App database.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-background py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Five simple steps from photo capture to standardized ICAR scores
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6"
              >
                {/* Step number and icon */}
                <div className="relative flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground card-shadow">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -bottom-6 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-12">
                  <div className="rounded-2xl border border-border bg-card p-6 card-shadow transition-all hover:border-primary/50">
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
