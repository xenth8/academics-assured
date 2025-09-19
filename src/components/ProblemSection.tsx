import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, Users, Building } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Credential Fraud",
      description: "Thousands of fake degrees and certificates circulate in the market, undermining genuine academic achievements.",
      stat: "30%+ increase yearly"
    },
    {
      icon: Building,
      title: "Institutional Trust",
      description: "Employers struggle to verify academic credentials, leading to mistrust in the hiring process.",
      stat: "45% doubt authenticity"
    },
    {
      icon: Users,
      title: "Student Impact",
      description: "Legitimate graduates face skepticism and additional verification burdens when seeking employment.",
      stat: "2x longer hiring process"
    },
    {
      icon: TrendingUp,
      title: "Economic Loss",
      description: "Fraudulent credentials cost organizations millions in poor hiring decisions and productivity losses.",
      stat: "₹500Cr+ annual loss"
    }
  ];

  return (
    <section id="problem-section" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            The Growing Crisis of Academic Fraud
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The proliferation of forged academic credentials threatens the integrity of higher education 
            and undermines public trust in academic institutions across Jharkhand and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 shadow-soft hover:shadow-elegant transition-all duration-300 border border-border"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{problem.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{problem.description}</p>
              <div className="text-accent font-semibold text-sm bg-accent/10 rounded-full px-3 py-1 inline-block">
                {problem.stat}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-subtle rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            The Time for Action is Now
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every day of delay allows more fraudulent credentials to enter the system, 
            making it harder to restore trust and integrity in academic verification.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;