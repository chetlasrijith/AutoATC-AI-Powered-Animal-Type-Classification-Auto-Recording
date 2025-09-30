import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, ArrowRight, Database, Smartphone } from "lucide-react";

const Integration = () => {
  const apiExample = `POST /predict
Content-Type: multipart/form-data

{
  "image": <file>,
  "farmer_id": "FARMER123",
  "animal_tag": "TAG456",
  "ref_type": "A4"
}

Response (200 OK):
{
  "animal_id": "TAG456",
  "measurements_cm": {
    "body_length": 145.2,
    "wither_height": 128.4,
    "chest_width": 53.1,
    "rump_angle_deg": 39.2
  },
  "scores": {
    "body_length_score": 6,
    "wither_height_score": 7,
    "chest_width_score": 5,
    "rump_angle_score": 4
  }
}`;

  return (
    <section id="integration" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Integration & API
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Simple REST API for seamless integration with existing systems
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full p-6 card-shadow">
              <h3 className="mb-6 text-xl font-semibold text-foreground">Integration Flow</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Frontend App</p>
                    <p className="text-sm text-muted-foreground">Image capture & upload</p>
                  </div>
                </div>

                <div className="ml-6 h-8 w-0.5 bg-border" />

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <Code2 className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">POST /predict</p>
                    <p className="text-sm text-muted-foreground">AI inference endpoint</p>
                  </div>
                </div>

                <div className="ml-6 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Returns measurements + scores JSON</p>
                </div>

                <div className="ml-6 h-8 w-0.5 bg-border" />

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                    <Database className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">POST /bpa/save</p>
                    <p className="text-sm text-muted-foreground">Save to BPA database</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-accent/20 bg-accent/5 p-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-accent">Integration Guide:</strong> OAuth instructions and BPA mapping documentation available in our developer portal.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* API Example */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full p-6 card-shadow">
              <h3 className="mb-6 text-xl font-semibold text-foreground">API Example</h3>
              
              <div className="overflow-auto rounded-lg bg-foreground p-4">
                <pre className="text-xs text-background">
                  <code>{apiExample}</code>
                </pre>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold text-foreground">Available Endpoints</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <code className="rounded bg-muted px-2 py-0.5">POST /predict</code> - Run inference
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-secondary" />
                      <code className="rounded bg-muted px-2 py-0.5">POST /bpa/save</code> - Save to BPA
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <code className="rounded bg-muted px-2 py-0.5">GET /health</code> - Check status
                    </li>
                  </ul>
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <a href="#contact">Request API Documentation</a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
