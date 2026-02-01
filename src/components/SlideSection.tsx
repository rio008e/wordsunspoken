import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  className?: string;
  overlay?: "dark" | "medium" | "light";
}

const SlideSection = ({ 
  children, 
  backgroundImage, 
  className = "",
  overlay = "medium"
}: SlideSectionProps) => {
  const overlayStyles = {
    dark: "bg-background/90",
    medium: "bg-background/70",
    light: "bg-background/50"
  };

  return (
    <section 
      className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden ${className}`}
    >
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ 
              backgroundImage: `url(${backgroundImage})`,
              filter: "saturate(0.8) brightness(0.6)"
            }}
          />
          <div className={`absolute inset-0 ${overlayStyles[overlay]}`} />
        </>
      )}
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, hsl(140 15% 8% / 0.7) 100%)"
        }}
      />
      
      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />
      
      <motion.div 
        className="relative z-10 w-full max-w-4xl mx-auto px-6 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SlideSection;
