import { motion } from "framer-motion";
import { Shield, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Demo", href: "#demo" },
      { name: "API Docs", href: "#" },
      { name: "Security", href: "#" }
    ],
    company: [
      { name: "About Team", href: "#team" },
      { name: "SIH 2024", href: "#" },
      { name: "Contact", href: "#contact" },
      { name: "Blog", href: "#" }
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/sih-authenticator" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/sih-authenticator" },
    { name: "Email", icon: Mail, href: "mailto:team.authenticator@sih2024.com" }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Authenticity Validator</span>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Fighting academic forgery with cutting-edge technology. 
                Securing the future of higher education in Jharkhand and beyond.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.name !== "Email" ? "_blank" : undefined}
                    rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                    >
                      {link.name}
                      {link.href === "#" && <ExternalLink className="w-3 h-3" />}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                    >
                      {link.name}
                      {link.href === "#" && <ExternalLink className="w-3 h-3" />}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                    >
                      {link.name}
                      {link.href === "#" && <ExternalLink className="w-3 h-3" />}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">
              © 2024 The Authenticity Validator for Academia. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/80">
              <span>Made with ❤️ for Academic Integrity</span>
              <span className="hidden md:inline">•</span>
              <span>Securing Education's Future</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;