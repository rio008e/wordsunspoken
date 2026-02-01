import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Clock, X } from "lucide-react";

interface ResponseButtonsProps {
  onResponse: (response: "yes" | "think" | "no") => void;
}

const ResponseButtons = ({ onResponse }: ResponseButtonsProps) => {
  const [noHovered, setNoHovered] = useState(false);
  const [noClicks, setNoClicks] = useState(0);

  const handleNoClick = () => {
    setNoClicks(prev => prev + 1);
  };

  const noMessages = [
    "Are you certain?",
    "Perhaps reconsider?",
    "My heart aches...",
    "One more chance?",
    "If you must..."
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Yes Button */}
      <motion.button
        onClick={() => onResponse("yes")}
        className="group relative px-12 py-4 rounded-full bg-primary/20 border border-primary/40 
                   text-primary font-display text-xl tracking-wide overflow-hidden
                   hover:bg-primary/30 hover:border-primary/60 transition-all duration-500"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10 flex items-center gap-3">
          <Heart className="w-5 h-5 animate-heartbeat" />
          Yes, I'd love that
          <Heart className="w-5 h-5 animate-heartbeat" />
        </span>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.button>

      {/* Think Button */}
      <motion.button
        onClick={() => onResponse("think")}
        className="group px-10 py-3 rounded-full bg-secondary/30 border border-muted-foreground/30 
                   text-muted-foreground font-display text-lg tracking-wide
                   hover:bg-secondary/50 hover:text-foreground hover:border-muted-foreground/50 
                   transition-all duration-500"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <span className="flex items-center gap-3">
          <Clock className="w-4 h-4" />
          I need some time to think
        </span>
      </motion.button>

      {/* No Button - Dramatic */}
      <motion.div 
        className="relative mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {noClicks < 4 ? (
          <motion.button
            onClick={handleNoClick}
            onMouseEnter={() => setNoHovered(true)}
            onMouseLeave={() => setNoHovered(false)}
            className="relative px-8 py-2.5 rounded-full border border-destructive/30 
                       text-destructive/70 font-body text-base tracking-wide
                       hover:border-destructive/50 transition-all duration-300"
            animate={noHovered ? { 
              x: [0, -3, 3, -3, 3, 0],
              transition: { duration: 0.5 }
            } : {}}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <X className="w-4 h-4" />
              {noClicks === 0 ? "No, I don't feel the same" : noMessages[noClicks - 1]}
            </span>
          </motion.button>
        ) : (
          <motion.button
            onClick={() => onResponse("no")}
            className="px-8 py-2.5 rounded-full border border-destructive/50 
                       text-destructive/80 font-body text-base"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <span className="flex items-center gap-2">
              <X className="w-4 h-4" />
              I understand, goodbye...
            </span>
          </motion.button>
        )}
        
        {noClicks > 0 && noClicks < 4 && (
          <motion.p 
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground/60 
                       font-body italic whitespace-nowrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ({4 - noClicks} more {4 - noClicks === 1 ? "click" : "clicks"} to confirm)
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default ResponseButtons;
