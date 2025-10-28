// Page À propos avec mission, équipe et valeurs
import { Heart, Users, Lightbulb, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  const team = [
    {
      name: "Léa Rousseau",
      role: "Directrice Créative",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Thomas Bernard",
      role: "Designer UI/UX",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Julie Mercier",
      role: "Designer Graphique",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "Alexandre Dubois",
      role: "Motion Designer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Nous aimons ce que nous faisons et cela se voit dans chaque projet.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Créativité",
      description: "Des idées innovantes et originales qui font la différence.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Nous travaillons main dans la main avec nos clients.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "La qualité et l'attention aux détails dans chaque création.",
    },
  ];

  const timeline = [
    { year: "2018", event: "Création de l'agence par une équipe de designers passionnés" },
    { year: "2019", event: "Premier prix du Design Innovation Award" },
    { year: "2021", event: "Expansion de l'équipe et ouverture de nouveaux bureaux" },
    { year: "2023", event: "Plus de 200 projets réalisés avec succès" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative w-full h-[350px] md:h-[400px]">
        <img src="./public/image1.jpg" alt="" className="w-full h-[350px] md:h-[400px] object-cover relative"/>
        <div className="container-max px-4 absolute z-10 bg-black/70 w-full h-full flex items-center justify-center top-0">
          <AnimatedSection>
            <div className="text-center text-white max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Notre histoire</h1>
              <p className="text-lg md:text-2xl opacity-90">
                Une équipe passionnée qui transforme les idées en <span className="text-gradient font-bold">expériences visuelles mémorables</span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre mission</h2>
                <p className="text-md md:text-lg text-muted-foreground leading-relaxed mb-4">
                  Chez <span className="text-gradient font-semibold">Atelier Créatif</span>, nous croyons que le design a le pouvoir de transformer les entreprises et de créer des connexions authentiques avec leur audience.
                </p>
                <p className="text-md md:text-lg text-muted-foreground leading-relaxed mb-4">
                  Notre mission est de donner vie aux visions de nos clients à travers des créations visuelles exceptionnelles qui allient esthétique, stratégie et innovation.
                </p>
                <p className="text-md md:text-lg text-muted-foreground leading-relaxed">
                  Nous accompagnons chaque projet avec passion, expertise et un engagement total envers l'excellence créative.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>

              <div className="relative left-[2%] md:h-96 h-[250px] rounded-2xl shadow-glow flex justify-center">
                <div className="border-4 border-purple-700 w-full h-full rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Équipe créative au travail"
                  className="w-full h-full object-cover rounded-2xl -mt-5 -ml-5 h-[250px] md:h-96"
                />

                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Nos valeurs</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Les principes qui guident notre travail au quotidien
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="card text-center">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-primary text-white mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Notre équipe</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Des créatifs talentueux passionnés par le design
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="card text-center group">
                  <div className="relative mb-4 overflow-hidden rounded-xl aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Notre parcours</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Les moments clés de notre évolution
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gradient-primary mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-xl md:text-2xl font-bold text-primary mb-2">{item.year}</p>
                    <p className="text-md md:text-lg text-muted-foreground">{item.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
