import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Upload, Download, Save, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DemoSection = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [referenceType, setReferenceType] = useState("A4");
  const [farmerId, setFarmerId] = useState("");
  const [animalTag, setAnimalTag] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<{
    animal_id: string;
    capture_datetime: string;
    measurements_cm: Record<string, number>;
    scores: Record<string, number>;
    keypoints: Record<string, number[]>;
    notes: string;
  } | null>(null);
  const { toast } = useToast();

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setSelectedFile(file);
        setResults(null);
        toast({
          title: "Image uploaded",
          description: "Ready for analysis",
        });
      } else {
        toast({
          title: "Invalid file",
          description: "Please upload an image file",
          variant: "destructive",
        });
      }
    }
  }, [toast]);

  const handleAnalyze = useCallback(() => {
    if (!selectedFile) {
      toast({
        title: "No image selected",
        description: "Please upload an image first",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    // Simulate API call with mock data
    setTimeout(() => {
      const mockResults = {
        animal_id: animalTag || "TAG456",
        capture_datetime: new Date().toISOString(),
        measurements_cm: {
          body_length: 145.2,
          wither_height: 128.4,
          chest_width: 53.1,
          rump_angle_deg: 39.2,
        },
        scores: {
          body_length_score: 6,
          wither_height_score: 7,
          chest_width_score: 5,
          rump_angle_score: 4,
        },
        keypoints: {
          withers: [431, 212],
          pin_bone: [612, 214],
          hip: [585, 240],
          tail_base: [640, 268],
        },
        notes: `reference=${referenceType}_${referenceType === "A4" ? "29.7cm" : "100cm"}`,
      };

      setResults(mockResults);
      setIsProcessing(false);
      toast({
        title: "Analysis complete",
        description: "Measurements extracted successfully",
      });
    }, 2000);
  }, [selectedFile, animalTag, referenceType, toast]);

  const handleDownloadJSON = useCallback(() => {
    if (!results) return;

    const blob = new Blob([JSON.stringify(results, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `autoatc-${results.animal_id}-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "JSON downloaded",
      description: "Measurement data exported successfully",
    });
  }, [results, toast]);

  const handleSaveToBPA = useCallback(() => {
    if (!results) return;

    toast({
      title: "Save to BPA (simulated)",
      description: "In production, this would save to Bharat Pashudhan App",
    });
  }, [results, toast]);

  return (
    <section id="demo" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Live Demo
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Try the AI measurement system with your own cattle images
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left - Demo Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 card-shadow">
              <h3 className="mb-6 text-xl font-semibold text-foreground">Upload & Analyze</h3>

              <div className="space-y-6">
                {/* File Upload */}
                <div>
                  <Label htmlFor="image-upload" className="mb-2 block">
                    Upload Image
                  </Label>
                  <div className="relative">
                    <Input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="cursor-pointer"
                    />
                    <Upload className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  </div>
                  {selectedFile && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      Selected: {selectedFile.name}
                    </p>
                  )}
                </div>

                {/* Reference Type */}
                <div>
                  <Label htmlFor="reference-type" className="mb-2 block">
                    Reference Object
                  </Label>
                  <Select value={referenceType} onValueChange={setReferenceType}>
                    <SelectTrigger id="reference-type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A4">A4 Paper (29.7 cm)</SelectItem>
                      <SelectItem value="meter">Meter Stick (100 cm)</SelectItem>
                      <SelectItem value="person">Person (estimate)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Optional Fields */}
                <div>
                  <Label htmlFor="farmer-id" className="mb-2 block">
                    Farmer ID (optional)
                  </Label>
                  <Input
                    id="farmer-id"
                    value={farmerId}
                    onChange={(e) => setFarmerId(e.target.value)}
                    placeholder="e.g., FARMER123"
                  />
                </div>

                <div>
                  <Label htmlFor="animal-tag" className="mb-2 block">
                    Animal Tag (optional)
                  </Label>
                  <Input
                    id="animal-tag"
                    value={animalTag}
                    onChange={(e) => setAnimalTag(e.target.value)}
                    placeholder="e.g., TAG456"
                  />
                </div>

                {/* Info Box */}
                <div className="flex gap-3 rounded-lg border border-accent/20 bg-accent/5 p-4">
                  <AlertCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                  <p className="text-sm text-muted-foreground">
                    For hackathon demo, the BPA "Save" is simulated and exports the exact JSON payload used for integration.
                  </p>
                </div>

                {/* Analyze Button */}
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={handleAnalyze}
                  disabled={!selectedFile || isProcessing}
                >
                  {isProcessing ? "Analyzing..." : "Analyze Image"}
                </Button>

                {/* Action Buttons */}
                {results && (
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={handleDownloadJSON}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download JSON
                    </Button>
                    <Button
                      variant="hero"
                      className="flex-1"
                      onClick={handleSaveToBPA}
                    >
                      <Save className="mr-2 h-4 w-4" />
                      Save to BPA
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>

          {/* Right - Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 card-shadow">
              <h3 className="mb-6 text-xl font-semibold text-foreground">Results</h3>

              {!results ? (
                <div className="flex h-64 items-center justify-center text-center text-muted-foreground">
                  Upload an image and click "Analyze" to see results
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Measurements */}
                  <div>
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-earth">
                      Measurements
                    </h4>
                    <div className="space-y-3">
                      {Object.entries(results.measurements_cm).map(([key, value]) => {
                        const scoreKey = `${key}_score`;
                        const score = results.scores[scoreKey];
                        const displayName = key
                          .split("_")
                          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                          .join(" ");

                        return (
                          <div
                            key={key}
                            className="flex items-center justify-between rounded-lg bg-muted p-3"
                          >
                            <span className="font-medium text-foreground">{displayName}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-foreground">
                                {typeof value === "number" ? value.toFixed(1) : value}
                                {key.includes("angle") ? "°" : " cm"}
                              </span>
                              {score && (
                                <span className="rounded-full bg-secondary px-3 py-1 text-sm font-bold text-secondary-foreground">
                                  Score {score}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Model Info */}
                  <div className="rounded-lg border border-border bg-card p-4">
                    <h4 className="mb-2 text-sm font-semibold text-earth">Model Information</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Model: YOLOv8 Keypoint Detection</li>
                      <li>• Backend: FastAPI</li>
                      <li>• Reference: {referenceType}</li>
                    </ul>
                  </div>

                  {/* JSON Preview */}
                  <details className="rounded-lg border border-border bg-muted p-4">
                    <summary className="cursor-pointer font-semibold text-foreground">
                      JSON Preview
                    </summary>
                    <pre className="mt-3 overflow-auto text-xs text-muted-foreground">
                      {JSON.stringify(results, null, 2)}
                    </pre>
                  </details>
                </div>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
