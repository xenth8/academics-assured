import { motion } from "framer-motion";
import { useState } from "react";
import { Upload, FileText, CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";

interface ValidationResult {
  valid: boolean;
  institution?: string;
  confidence?: number;
  details?: string;
  timestamp?: string;
}

const DemoSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [result, setResult] = useState<ValidationResult | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (selectedFile: File | null) => {
    setFile(selectedFile);
    setResult(null);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const validateDocument = async () => {
    if (!file) return;

    setIsValidating(true);
    
    // Simulate API call with random result
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 2000));
    
    const mockResults: ValidationResult[] = [
      {
        valid: true,
        institution: "Ranchi University",
        confidence: 98.5,
        details: "Document verified successfully. All security features match institutional standards.",
        timestamp: new Date().toISOString()
      },
      {
        valid: true,
        institution: "Birla Institute of Technology",
        confidence: 96.2,
        details: "Authentic degree certificate confirmed through blockchain verification.",
        timestamp: new Date().toISOString()
      },
      {
        valid: false,
        institution: "Unknown",
        confidence: 15.3,
        details: "Document shows signs of forgery. Watermark patterns do not match authentic specimens.",
        timestamp: new Date().toISOString()
      },
      {
        valid: true,
        institution: "National Institute of Technology, Jamshedpur",
        confidence: 99.1,
        details: "Valid certificate with verified digital signatures and security features.",
        timestamp: new Date().toISOString()
      }
    ];

    const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
    setResult(randomResult);
    setIsValidating(false);
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Try Our Verification System
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Upload a sample academic document to experience our AI-powered validation system in action. 
            See how quickly and accurately we can detect authentic credentials.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-elegant border border-border"
          >
            {/* Upload Area */}
            <div className="mb-8">
              <div
                className={`relative border-2 border-dashed rounded-xl p-8 transition-all duration-300 ${
                  dragActive 
                    ? "border-accent bg-accent/5" 
                    : "border-border hover:border-primary/50 hover:bg-primary/5"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                />
                
                <div className="text-center">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Upload Academic Document
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Drag and drop your file here, or click to browse
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Supports PDF, JPG, PNG files up to 10MB
                  </p>
                </div>
              </div>

              {file && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 flex items-center gap-4 p-4 bg-primary/5 rounded-lg border border-primary/20"
                >
                  <FileText className="w-8 h-8 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium text-primary">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <Button
                    onClick={() => handleFileChange(null)}
                    variant="ghost"
                    size="sm"
                  >
                    Remove
                  </Button>
                </motion.div>
              )}
            </div>

            {/* Validate Button */}
            {file && !result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
              >
                <Button
                  onClick={validateDocument}
                  disabled={isValidating}
                  variant="accent"
                  size="lg"
                  className="min-w-48"
                >
                  {isValidating ? (
                    <>
                      <Clock className="w-4 h-4 mr-2 animate-spin" />
                      Validating...
                    </>
                  ) : (
                    "Validate Document"
                  )}
                </Button>
              </motion.div>
            )}

            {/* Results */}
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 rounded-xl border-2 ${
                  result.valid 
                    ? "bg-accent/5 border-accent" 
                    : "bg-destructive/5 border-destructive"
                }`}
              >
                <div className="flex items-start gap-4">
                  {result.valid ? (
                    <CheckCircle className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                  )}
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 ${
                      result.valid ? "text-accent" : "text-destructive"
                    }`}>
                      {result.valid ? "Document Verified" : "Verification Failed"}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Institution</p>
                        <p className="font-medium text-foreground">{result.institution}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Confidence Score</p>
                        <p className="font-medium text-foreground">{result.confidence}%</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{result.details}</p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      Verified at {new Date(result.timestamp!).toLocaleString()}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Demo Notice */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex items-center gap-3 p-4 bg-muted rounded-lg"
            >
              <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                <strong>Demo Mode:</strong> This is a demonstration version with simulated results. 
                In production, documents are validated using our full AI and blockchain verification system.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;