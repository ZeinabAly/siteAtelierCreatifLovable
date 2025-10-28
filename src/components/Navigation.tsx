// Navigation principale avec menu mobile responsive
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Palette } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [slideOut, setSlideOut] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/about", label: "À propos" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`header-shadow fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      {/* A AFFICHER LORSQU'ON CLIQUE SUR LE BOUTON MENU POUR FLOUER LE RESTE DE LA PAGE */}
      {isOpen && <div className="overlay bg-black/70 w-full min-h-screen top-20 absolute transition-700"></div>}
      
      {/* FIN OVERLAY */}
      <nav className="container-max">
        <div className={`flex items-center justify-between h-20 px-4 ${isScrolled ? "bg-white" : "bg-black/30"}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-primary p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">Atelier Créatif</span>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 relative group ${
                  location.pathname === link.path
                    ? "text-primary"
                    : isScrolled ? "text-black" : "text-white hover:text-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-primary transition-transform duration-300 ${
                    location.pathname === link.path
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))} 
            <Link to="/contact" className="btn-primary">
              Démarrer un projet
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg hover:bg-muted hover:text-purple-500 transition-colors ${isScrolled ? "text-purple" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X
              className={`w-6 h-6 cursor-pointer transition-all duration-300 ${
                slideOut ? "animate-slide-out" : ""
              }`}
              onClick={() => setSlideOut(true)} 
            /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <div className="md:hidden absolute z-100 left-0 right-0 top-0 w-[70%] pt-10 h-screen bg-background border-t border-border shadow-lg animate-slide-in">
            {/* INSERTION DU LOGO */}
            <div className="mb-2 flex justify-center">
              <Link to="/" className="flex items-center gap-2 group">
                <img src="./public/logo.png" className="w-[150px] m-0 bg-red-500 rounded-full" alt="logo" />                
              </Link>
            </div>
            {/* FIN LOGO */}
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 font-medium transition-colors border-b  ${
                    location.pathname === link.path
                      ? "text-primary bg-muted border-primary"
                      : "hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary mt-2 py-3 mx-4 text-center mt-5">
                Démarrer un projet
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
