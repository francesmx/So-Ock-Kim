import { motion } from "framer-motion";
import { Mail, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

// From https://formspree.io
const FORMSPREE_ID = "mbdddlaj";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Contact</h2>
          <p className="text-muted-foreground font-light">
            For booking enquiries and concert availability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 bg-muted/30 p-8 rounded-sm"
          >
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground">London, United Kingdom</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-muted-foreground font-dark">
                So-Ock only performs for charitable purposes.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-12">
                <CheckCircle className="w-16 h-16 text-green-600" />
                <h3 className="text-2xl font-serif text-primary">Message Sent</h3>
                <p className="text-muted-foreground">Thank you for your enquiry. We'll be in touch soon.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setStatus("idle")}
                  className="mt-4"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                    <Input 
                      id="name" 
                      name="name"
                      required
                      placeholder="Your name" 
                      className="bg-transparent border-input focus:border-primary rounded-none" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      required
                      placeholder="Your email" 
                      className="bg-transparent border-input focus:border-primary rounded-none" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs uppercase tracking-widest text-muted-foreground">Subject</label>
                  <Input 
                    id="subject" 
                    name="subject"
                    required
                    placeholder="Subject of enquiry" 
                    className="bg-transparent border-input focus:border-primary rounded-none" 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                  <Textarea 
                    id="message" 
                    name="message"
                    required
                    placeholder="Your message..." 
                    className="min-h-[150px] bg-transparent border-input focus:border-primary rounded-none resize-none" 
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                )}

                <Button 
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-12 uppercase tracking-widest text-xs font-bold"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
