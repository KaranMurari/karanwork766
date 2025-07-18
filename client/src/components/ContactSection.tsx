import { Mail, Phone, Linkedin, Instagram, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "karanmurari766@gmail.com",
      href: "mailto:karanmurari766@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8958255008",
      href: "tel:+918958255008",
      color: "text-green-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Karan Murari",
      href: "https://www.linkedin.com/in/karan-murari-576717210",
      color: "text-blue-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@karanmurari_",
      href: "https://www.instagram.com/karanmurari_",
      color: "text-pink-400"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Karan Murari"
      };

      await emailjs.send(
        'service_bvv7ecy',
        'template_45jugis', 
        templateParams,
        'Gz-ABENUGJdBSndu4'
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="bg-cyber-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and cybersecurity. Feel free to 
                reach out through any of the channels below.
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((contact, index) => (
                <Card
                  key={index}
                  className="bg-card-gradient border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-cyber group"
                >
                  <CardContent className="p-6">
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 group-hover:scale-105 transition-transform duration-300"
                    >
                      <div className={`p-3 bg-background/50 rounded-lg ${contact.color}`}>
                        <contact.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{contact.label}</h4>
                        <p className="text-muted-foreground text-sm">{contact.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Location */}
            <Card className="bg-card-gradient border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-background/50 rounded-lg text-orange-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Location</h4>
                    <p className="text-muted-foreground text-sm">Kashipur, Uttarakhand, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card-gradient border-border/50 hover:border-accent/30 transition-all duration-300">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Send a Message
                  </h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-accent"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-accent"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="bg-background/50 border-border/50 focus:border-accent resize-none"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-cyber transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;