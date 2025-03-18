import { motion } from "framer-motion";
import { ContactForm } from "@/components/ui/contact-form";
import SocialLinks from "@/components/SocialLinks";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { gradientText, gradientBg, glowEffect } from "@/lib/utils";
import { useLanguage } from "@/lib/languageContext";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 mb-2 tracking-wider uppercase font-medium">{t.contact.subtitle}</p>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${gradientText}`}>{t.contact.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-600/50 rounded-lg blur opacity-75"></div>
              <div className="relative futuristic-card p-8 overflow-hidden">
                <div className={`${gradientBg} h-1 absolute top-0 left-0 right-0`}></div>
                <ContactForm />
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 rounded-lg blur opacity-75"></div>
              <div className="relative futuristic-card p-8 h-full overflow-hidden">
                <div className={`${gradientBg} h-1 absolute top-0 left-0 right-0`}></div>
                <h3 className={`text-2xl font-bold mb-6 ${gradientText}`}>{t.contact.info.title}</h3>

                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-zinc-900 border border-cyan-500/30 rounded-lg flex items-center justify-center mr-4 group-hover:border-cyan-400 transition-colors duration-300">
                      <MailIcon className="text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-white">{t.contact.info.email}</h4>
                      <a href="mailto:xavier@xavidigi.com" className="text-gray-400 hover:text-cyan-400 transition duration-300">
                        xavier@xavidigi.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-zinc-900 border border-cyan-500/30 rounded-lg flex items-center justify-center mr-4 group-hover:border-cyan-400 transition-colors duration-300">
                      <PhoneIcon className="text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-white">{t.contact.info.phone}</h4>
                      <a href="tel:+8108090743217" className="text-gray-400 hover:text-cyan-400 transition duration-300">
                        +81 08090743217
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-zinc-900 border border-cyan-500/30 rounded-lg flex items-center justify-center mr-4 group-hover:border-cyan-400 transition-colors duration-300">
                      <MapPinIcon className="text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-white">{t.contact.info.location}</h4>
                      <p className="text-gray-400">Nagoya, Japan</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-zinc-800">
                    <h4 className="text-lg font-medium mb-6 text-white">{t.contact.info.connect}</h4>
                    <SocialLinks variant="contact" addLinkedIn={"https://www.linkedin.com/in/xavierkf10/"} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}