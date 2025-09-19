import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Import Valorant character images
import valorantJett from "@/assets/valorant-jett.jpg";
import valorantSage from "@/assets/valorant-sage.jpg";
import valorantPhoenix from "@/assets/valorant-phoenix.jpg";
import valorantViper from "@/assets/valorant-viper.jpg";
import valorantReyna from "@/assets/valorant-reyna.jpg";
import valorantKilljoy from "@/assets/valorant-killjoy.jpg";

const TeamSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Function to get avatar image based on Valorant agent
  const getAvatarImage = (valorantAgent: string) => {
    const avatarMap: { [key: string]: string } = {
      "Jett": valorantJett,
      "Sage": valorantSage,
      "Phoenix": valorantPhoenix,
      "Viper": valorantViper,
      "Reyna": valorantReyna,
      "Killjoy": valorantKilljoy
    };
    return avatarMap[valorantAgent] || valorantJett;
  };

  const teamMembers = [
    {
      name: "Aditya Sharma",
      role: "Web Developer",
      university: "JECRC Foundation",
      email: "aditya.sharma@email.com",
      github: "adityasharma",
      linkedin: "adityasharma",
      valorantAgent: "Jett"
    },
    {
      name: "Adamya Pareek",
      role: "Team Lead & Communication Specialist",
      university: "JECRC Foundation",
      email: "adamya.pareek@email.com",
      github: "adamyapareek",
      linkedin: "adamyapareek-ai",
      valorantAgent: "Sage"
    },
    {
      name: "Amit Sharma",
      role: "Blockchain Developer",
      university: "JECRC Foundation",
      email: "amit.sharma@email.com",
      github: "amitsharma",
      linkedin: "amitsharma-blockchain",
      valorantAgent: "Phoenix"
    },
    {
      name: "Kaitri Karadiya",
      role: "UI/UX Designer",
      university: "JECRC Foundation",
      email: "kaitri.karadiya@email.com",
      github: "kaitridesign",
      linkedin: "kaitri-karadiya-design",
      valorantAgent: "Viper"
    },
    {
      name: "Anvi Singh",
      role: "Security Specialist",
      university: "JECRC Foundation",
      email: "anvi.singh@email.com",
      github: "anvisec",
      linkedin: "anvi-security",
      valorantAgent: "Reyna"
    },
    {
      name: "Deshna Modi",
      role: "Product Manager",
      university: "JECRC Foundation",
      email: "deshna.modi@email.com",
      github: "deshnapm",
      linkedin: "deshna-product-manager",
      valorantAgent: "Killjoy"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (placeholder)
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Meet Our SIH 2024 Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A dedicated team of students from Jharkhand's premier institutions, 
            working together to revolutionize academic credential verification.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 border border-border group"
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-2 border-primary/20">
                  <img 
                    src={getAvatarImage(member.valorantAgent)} 
                    alt={`${member.name} - ${member.valorantAgent}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
                <p className="text-accent font-medium mb-1">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.university}</p>
                
                <div className="flex justify-center gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://linkedin.com/in/${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-primary mb-6">Get in Touch</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Have questions about our project or want to collaborate? 
              We'd love to hear from you and discuss how we can work together 
              to improve academic integrity.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Email</p>
                  <p className="text-muted-foreground">team.authenticator@sih2024.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-primary">Phone</p>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-primary">GitHub</p>
                  <p className="text-muted-foreground">github.com/sih-authenticator</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 shadow-soft border border-border"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">Subject</label>
                <Input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" variant="accent" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;