// Page Services avec cartes détaillées
import { Link } from "react-router-dom";
import {
  Palette,
  Sparkles,
  Layout,
  Film,
  Package,
  Megaphone,
  ArrowRight,
  Check,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Services = () => {
  const services = [
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Design Graphique",
      description:
        "Créations visuelles percutantes pour supports print et digital, adaptées à votre image de marque.",
      features: [
        "Affiches et flyers",
        "Brochures et catalogues",
        "Supports publicitaires",
        "Design éditorial",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Identité Visuelle",
      description:
        "Construction d'une image de marque forte et cohérente qui vous démarque de la concurrence.",
      features: [
        "Création de logo",
        "Charte graphique complète",
        "Typographie et couleurs",
        "Guides d'utilisation",
      ],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Layout className="w-10 h-10" />,
      title: "UX/UI Design",
      description:
        "Interfaces web et mobile intuitives centrées sur l'expérience utilisateur et la conversion.",
      features: [
        "Wireframes et prototypes",
        "Design d'interface",
        "Tests utilisateurs",
        "Design system",
      ],
      gradient: "from-purple-500 to-cyan-500",
    },
    {
      icon: <Film className="w-10 h-10" />,
      title: "Motion Design",
      description:
        "Animations et vidéos créatives qui donnent vie à votre message et captivent votre audience.",
      features: [
        "Vidéos explicatives",
        "Animations logo",
        "Motion graphics",
        "Publicités animées",
      ],
      gradient: "from-pink-500 to-purple-500",
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: "Design Packaging",
      description:
        "Emballages créatifs qui séduisent les consommateurs et renforcent l'identité de vos produits.",
      features: [
        "Design d'emballage",
        "Étiquettes produits",
        "Packaging éco-responsable",
        "Prototypes 3D",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Marketing Visuel",
      description:
        "Stratégie et création de contenus visuels pour booster votre présence sur tous les canaux.",
      features: [
        "Réseaux sociaux",
        "Campagnes publicitaires",
        "Infographies",
        "Contenus marketing",
      ],
      gradient: "from-cyan-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      {/* Hero */}
      <section className="relative w-full h-[350px] md:h-[400px]">
        <img src="./image1.jpg" alt="" className="w-full h-[350px] md:h-[400px] object-cover relative"/>
        <div className="container-max px-4 absolute z-10 bg-black/70 w-full h-full flex items-center justify-center top-0">
          <AnimatedSection>
            <div className="text-center text-white max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Nos services</h1>
              <p className="text-lg md:text-xl opacity-90">
                Des solutions créatives complètes pour <span className="text-gradient font-bold">donner vie à vos projets</span> et propulser votre
                marque
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="card h-full flex flex-col group">
                  <div
                    className={`inline-flex p-2 md:p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Notre processus</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Une méthodologie éprouvée pour des résultats exceptionnels
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Découverte",
                description: "Analyse de vos besoins et objectifs",
              },
              {
                step: "02",
                title: "Conception",
                description: "Création des concepts et moodboards",
              },
              {
                step: "03",
                title: "Développement",
                description: "Réalisation des designs finaux",
              },
              {
                step: "04",
                title: "Livraison",
                description: "Finalisation et accompagnement",
              },
            ].map((phase, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="text-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="text-5xl font-bold text-gradient mb-4">{phase.step}</div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection>
            <div className="card bg-gradient-hero text-white text-center p-12">
              <h2 className="text-4xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Discutons de vos besoins et créons ensemble quelque chose d'exceptionnel
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg rounded-full font-semibold hover:scale-105 transition-transform duration-300"
              >
                Contactez-nous
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Services;
