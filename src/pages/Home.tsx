// Page d'accueil avec hero, services, témoignages et CTA
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Target, Star, Quote } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Home = () => {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Design Graphique",
      description: "Créations visuelles percutantes qui captivent votre audience.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Identité Visuelle",
      description: "Logos et chartes graphiques mémorables pour votre marque.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "UX/UI Design",
      description: "Interfaces intuitives centrées sur l'expérience utilisateur.",
    },
  ];

  const testimonials = [
    {
      name: "Sophie Dubois",
      role: "CEO, TechStart",
      content: "Une équipe incroyablement créative qui a transformé notre vision en réalité. Le résultat dépasse nos attentes !",
      rating: 5,
    },
    {
      name: "Marc Laurent",
      role: "Fondateur, BioVert",
      content: "Professionnalisme et créativité au rendez-vous. Notre nouvelle identité visuelle a boosté notre notoriété.",
      rating: 5,
    },
    {
      name: "Émilie Martin",
      role: "Directrice Marketing, StyleMode",
      content: "Un accompagnement personnalisé et des designs exceptionnels. Je recommande sans hésitation !",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative">
        <img src="./public/image1.jpg" alt="" className="w-full h-[450px] md:h-[550px] object-cover relative"/>
        <div className="container-max px-4 absolute z-10 bg-black/70 w-full h-full flex items-center top-0">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedSection>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-white">
                Donnez vie à vos <span className="text-gradient">idées créatives</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <p className="text-md md:text-2xl text-muted-foreground mb-8 leading-relaxed text-white">
                Une agence de design qui transforme votre vision en expériences visuelles
                exceptionnelles et mémorables.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="flex flex-row flex-wrap gap-4 justify-center">
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Démarrer votre projet
                  <ArrowRight className="" />
                </Link>
                <Link to="/services" className="btn-outline">
                  Découvrir nos services
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Aperçu */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos expertises</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Des solutions créatives complètes pour propulser votre marque
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="card group">
                  <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <div className="text-center mt-12">
              <Link to="/services" className="btn-primary inline-flex items-center gap-2">
                Voir tous nos services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ce que disent nos clients</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                La satisfaction de nos clients est notre plus belle récompense
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="card h-full flex flex-col">
                  <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container-max relative z-10">
          <AnimatedSection>
            <div className="text-center text-white max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Prêt à créer quelque chose d'extraordinaire ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Discutons de votre projet et transformons vos idées en réalité visuelle
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-xl"
              >
                Contactez-nous maintenant
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
