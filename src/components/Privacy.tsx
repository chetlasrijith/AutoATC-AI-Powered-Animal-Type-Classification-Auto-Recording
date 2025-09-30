import { motion } from "framer-motion";
import { Shield, Lock, Server, Wifi } from "lucide-react";
import { Card } from "@/components/ui/card";

const privacyFeatures = [
  {
    icon: Shield,
    title: "Consent-First",
    description: "Images never shared without explicit farmer consent",
  },
  {
    icon: Lock,
    title: "Data Minimization",
    description: "Option to store only JSON measurements, not source images",
  },
  {
    icon: Server,
    title: "Offline-First",
    description: "Local processing with optional cloud sync",
  },
  {
    icon: Wifi,
    title: "Low Bandwidth Mode",
    description: "Optimized for rural connectivity conditions",
  },
];

const Privacy = () => {
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
            Data Privacy & Field Usability
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Built with farmer privacy and rural connectivity in mind
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {privacyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 text-center card-shadow hover-lift">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="mx-auto max-w-2xl p-6 card-shadow">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Commitment:</strong> All data processing adheres to Indian data protection guidelines. Farmers retain full ownership of their animal data and can request deletion at any time.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;
