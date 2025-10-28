// Page Contact avec formulaire validé et coordonnées
import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Schéma de validation
const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom est trop long"),
  email: z.string().trim().email("Email invalide").max(255, "L'email est trop long"),
  phone: z.string().trim().optional(),
  subject: z.string().trim().min(1, "Le sujet est requis").max(200, "Le sujet est trop long"),
  message: z.string().trim().min(10, "Le message doit contenir au moins 10 caractères").max(1000, "Le message est trop long"),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Validation côté client
      const validatedData = contactSchema.parse(formData);

      // Simulation d'envoi (pas de backend)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Message envoyé avec succès !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });

      // Reset du formulaire
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Erreur de validation",
          description: "Veuillez corriger les erreurs dans le formulaire.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative w-full h-[350px] md:h-[400px]">
        <img src="./image1.jpg" alt="" className="w-full h-[350px] md:h-[400px] object-cover relative"/>
        <div className="container-max px-4 absolute z-10 bg-black/60 w-full h-full flex items-center justify-center top-0">
          <AnimatedSection>
            <div className="text-center text-white max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Contactez-nous</h1>
              <p className="text-lg md:text-xl opacity-90">
                Discutons de votre projet et donnons vie ensemble à <span className="text-gradient font-bold">vos idées créatives</span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Informations de contact */}
            <div className="lg:col-span-2">
              <AnimatedSection className="shadow-soft bg-white p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-6">Nos coordonnées</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  N'hésitez pas à nous contacter par téléphone, email ou en remplissant le
                  formulaire ci-contre. Nous serons ravis d'échanger avec vous !
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-primary text-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        123 Rue de la Créativité
                        <br />
                        75001 Paris, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-primary text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Téléphone</h3>
                      <a
                        href="tel:+33123456789"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +33 1 23 45 67 89
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-primary text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <a
                        href="mailto:contact@atelier-creatif.fr"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@atelier-creatif.fr
                      </a>
                    </div>
                  </div>
                </div>

              </AnimatedSection>
              <AnimatedSection>
                {/* Carte simulée */}
                <div className="mt-8 rounded-2xl overflow-hidden h-64 shadow-soft bg-white">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-muted-foreground">Carte Google Maps</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={100}>
                <div className="card">
                  <h2 className="text-3xl font-bold mb-6">Envoyez-nous un message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block font-medium mb-2">
                        Nom complet <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name ? "border-destructive" : "border-input"
                        } focus:outline-none focus:ring-2 focus:ring-primary bg-background`}
                        placeholder="Votre nom"
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-medium mb-2">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email ? "border-destructive" : "border-input"
                        } focus:outline-none focus:ring-2 focus:ring-primary bg-background`}
                        placeholder="votre@email.com"
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-medium mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                        placeholder="+33 1 23 45 67 89"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block font-medium mb-2">
                        Sujet <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.subject ? "border-destructive" : "border-input"
                        } focus:outline-none focus:ring-2 focus:ring-primary bg-background`}
                        placeholder="Sujet de votre demande"
                      />
                      {errors.subject && (
                        <p className="text-destructive text-sm mt-1">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-medium mb-2">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message ? "border-destructive" : "border-input"
                        } focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none`}
                        placeholder="Décrivez votre projet..."
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary py-3 w-full inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
