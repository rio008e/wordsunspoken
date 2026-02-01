import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

interface BackgroundMusicProps {
  src?: string;
}

const BackgroundMusic = ({ src }: BackgroundMusicProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Subtle volume
      audioRef.current.loop = true;
    }
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    
    setHasInteracted(true);
    setShowPrompt(false);

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Audio playback failed:", error);
      }
    }
  };

  const startMusic = async () => {
    if (!audioRef.current) return;
    
    setHasInteracted(true);
    setShowPrompt(false);

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.log("Audio playback failed:", error);
    }
  };

  // Zara Zara piano instrumental BGM
  const audioSource = src || "/zara-zara-bgm.mp3";

  return (
    <>
      <audio ref={audioRef} src={audioSource} preload="auto" />
      
      {/* Initial prompt to start music */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="text-center p-8 max-w-md"
            >
              <motion.div
                className="mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Music className="w-16 h-16 text-primary mx-auto" />
              </motion.div>
              
              <h2 className="font-display text-3xl text-cream mb-4">
                Before we begin...
              </h2>
              
              <p className="font-body text-lg text-muted-foreground mb-8">
                This experience is best enjoyed with music. 
                Would you like to play "Zara Zara" as you read?
              </p>
              
              <div className="flex flex-col gap-4 items-center">
                <motion.button
                  onClick={startMusic}
                  className="px-8 py-3 rounded-full bg-primary/20 border border-primary/40 
                             text-primary font-display text-lg tracking-wide
                             hover:bg-primary/30 hover:border-primary/60 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-3">
                    <Volume2 className="w-5 h-5" />
                    Play with music
                  </span>
                </motion.button>
                
                <button
                  onClick={() => {
                    setShowPrompt(false);
                    setHasInteracted(true);
                  }}
                  className="text-muted-foreground/60 font-body text-sm hover:text-muted-foreground transition-colors"
                >
                  Continue without music
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating music control */}
      {hasInteracted && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={togglePlay}
          className="fixed bottom-6 right-6 z-40 p-4 rounded-full 
                     bg-secondary/80 backdrop-blur-sm border border-border/50
                     text-muted-foreground hover:text-foreground hover:bg-secondary
                     transition-all duration-300 shadow-romantic"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title={isPlaying ? "Mute music" : "Play music"}
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5" />
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
          
          {/* Animated rings when playing */}
          {isPlaying && (
            <>
              <motion.span
                className="absolute inset-0 rounded-full border border-primary/30"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.span
                className="absolute inset-0 rounded-full border border-primary/20"
                animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              />
            </>
          )}
        </motion.button>
      )}
    </>
  );
};

export default BackgroundMusic;
