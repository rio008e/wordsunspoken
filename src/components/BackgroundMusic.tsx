import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

interface BackgroundMusicProps {
  src?: string;
}

// Store music state globally so it persists across component remounts
let globalAudioElement: HTMLAudioElement | null = null;
let globalIsPlaying = false;
let globalHasStarted = false;

const BackgroundMusic = ({ src }: BackgroundMusicProps) => {
  const [isPlaying, setIsPlaying] = useState(globalIsPlaying);
  const [showPrompt, setShowPrompt] = useState(!globalHasStarted);
  const [hasInteracted, setHasInteracted] = useState(globalHasStarted);

  // Zara Zara piano instrumental BGM
  const audioSource = src || "/zara-zara-bgm.mp3";

  useEffect(() => {
    // Create or reuse the global audio element
    if (!globalAudioElement) {
      globalAudioElement = new Audio(audioSource);
      globalAudioElement.volume = 0.3;
      globalAudioElement.loop = true;
    }

    // Sync local state with global state
    setIsPlaying(globalIsPlaying);
    setHasInteracted(globalHasStarted);
    setShowPrompt(!globalHasStarted);

    return () => {
      // Don't clean up - we want audio to persist
    };
  }, [audioSource]);

  const togglePlay = async () => {
    if (!globalAudioElement) return;

    if (globalIsPlaying) {
      globalAudioElement.pause();
      globalIsPlaying = false;
      setIsPlaying(false);
    } else {
      try {
        await globalAudioElement.play();
        globalIsPlaying = true;
        setIsPlaying(true);
      } catch (error) {
        console.log("Audio playback failed:", error);
      }
    }
  };

  const startMusic = async () => {
    if (!globalAudioElement) return;
    
    globalHasStarted = true;
    setHasInteracted(true);
    setShowPrompt(false);

    try {
      await globalAudioElement.play();
      globalIsPlaying = true;
      setIsPlaying(true);
    } catch (error) {
      console.log("Audio playback failed:", error);
    }
  };

  return (
    <>
      {/* Initial prompt to start music - mandatory */}
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
                This experience is meant to be felt with music.
                <br />
                <span className="text-primary italic">"Zara Zara"</span> will play as you read.
              </p>
              
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
                  Begin
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating music control - only for mute/unmute */}
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
          title={isPlaying ? "Mute music" : "Unmute music"}
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
