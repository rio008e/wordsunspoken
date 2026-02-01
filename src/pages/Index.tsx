import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideSection from "@/components/SlideSection";
import FadeText from "@/components/FadeText";
import ResponseButtons from "@/components/ResponseButtons";
import ResponseScreens from "@/components/ResponseScreens";

// Import images
import romanticWalk from "@/assets/romantic-walk.jpeg";
import mistySilhouette from "@/assets/misty-silhouette.jpeg";
import reachingFlowers from "@/assets/reaching-flowers.jpeg";
import eternalLove from "@/assets/eternal-love.jpeg";

const Index = () => {
  const [response, setResponse] = useState<"yes" | "think" | "no" | null>(null);
  const [showResponse, setShowResponse] = useState(false);

  const handleResponse = (res: "yes" | "think" | "no") => {
    setResponse(res);
    setTimeout(() => setShowResponse(true), 100);
  };

  if (showResponse && response) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="response"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ResponseScreens response={response} />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="relative">
      {/* Section 1: Opening */}
      <SlideSection backgroundImage={mistySilhouette} overlay="dark">
        <div className="text-center min-h-[60vh] flex flex-col justify-center">
          <FadeText delay={0.5}>
            <p className="font-body text-lg text-muted-foreground tracking-[0.3em] uppercase mb-8">
              A confession, long overdue
            </p>
          </FadeText>
          
          <FadeText delay={1}>
            <h1 className="font-display text-6xl md:text-8xl text-cream mb-6 amber-glow">
              Neha
            </h1>
          </FadeText>
          
          <FadeText delay={1.5}>
            <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto italic">
              There are words I've carried with me for far too long. 
              Tonight, I finally set them free.
            </p>
          </FadeText>
          
          <FadeText delay={2}>
            <motion.div 
              className="mt-16"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="font-body text-sm text-muted-foreground/60 tracking-widest">
                Scroll to continue
              </p>
              <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/40 to-transparent mx-auto mt-4" />
            </motion.div>
          </FadeText>
        </div>
      </SlideSection>

      {/* Section 2: Why I Adore You */}
      <SlideSection backgroundImage={romanticWalk} overlay="medium">
        <div className="text-center">
          <FadeText delay={0}>
            <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-6">
              Chapter One
            </p>
          </FadeText>
          
          <FadeText delay={0.2}>
            <h2 className="font-display text-4xl md:text-5xl text-cream mb-12">
              Why I Adore You
            </h2>
          </FadeText>
          
          <div className="space-y-8 max-w-2xl mx-auto">
            <FadeText delay={0.4}>
              <p className="font-body text-xl text-muted-foreground leading-relaxed">
                You're <span className="text-primary font-display italic">cute</span> — 
                not in the way the word gets thrown around carelessly, but genuinely, 
                effortlessly adorable. The kind of cute that catches me off guard 
                in ordinary moments and makes me forget what I was saying.
              </p>
            </FadeText>
            
            <FadeText delay={0.6}>
              <p className="font-body text-xl text-muted-foreground leading-relaxed">
                You're <span className="text-primary font-display italic">attentive</span> — 
                you notice the small things. The shift in someone's mood. The unspoken 
                words hanging in the air. When you listen, you truly listen, and 
                that's rarer than you know.
              </p>
            </FadeText>
            
            <FadeText delay={0.8}>
              <p className="font-body text-xl text-muted-foreground leading-relaxed">
                You're <span className="text-primary font-display italic">caring</span> — 
                in a way that feels like a warm blanket on a cold night. Your kindness 
                isn't performative; it flows from you naturally, touching everyone 
                lucky enough to be in your orbit.
              </p>
            </FadeText>
          </div>
        </div>
      </SlideSection>

      {/* Section 3: The Moment I Fell */}
      <SlideSection backgroundImage={reachingFlowers} overlay="medium">
        <div className="text-center">
          <FadeText delay={0}>
            <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-6">
              Chapter Two
            </p>
          </FadeText>
          
          <FadeText delay={0.2}>
            <h2 className="font-display text-4xl md:text-5xl text-cream mb-12">
              The Moment I Fell
            </h2>
          </FadeText>
          
          <div className="space-y-8 max-w-2xl mx-auto">
            <FadeText delay={0.4}>
              <p className="font-body text-xl text-muted-foreground leading-relaxed">
                It was your eyes — those <span className="text-primary font-display italic">
                delusional amber eyes</span> that seem to hold entire universes within them. 
                The way they catch the light, shifting between honey and gold, 
                as if they can't quite decide which shade of beautiful to be.
              </p>
            </FadeText>
            
            <FadeText delay={0.6}>
              <p className="font-body text-xl text-muted-foreground leading-relaxed">
                And then there's <span className="text-primary font-display italic">your smile</span>. 
                Oh, that smile. It doesn't just appear — it blooms, slowly, like dawn 
                breaking over still water. Every time you smile, my heart forgets 
                its rhythm and has to learn it all over again.
              </p>
            </FadeText>
            
            <FadeText delay={0.8}>
              <p className="font-body text-xl text-muted-foreground leading-relaxed">
                I didn't choose to fall for you. It wasn't a decision made in the mind. 
                It happened the way seasons change — gradually, then all at once — 
                until one day I looked at you and realized I was already gone.
              </p>
            </FadeText>
            
            <FadeText delay={1}>
              <p className="font-display text-2xl text-cream italic mt-12">
                And this? This is barely one percent of everything you make me feel.
              </p>
            </FadeText>
          </div>
        </div>
      </SlideSection>

      {/* Section 4: The Question */}
      <SlideSection backgroundImage={eternalLove} overlay="dark">
        <div className="text-center">
          <FadeText delay={0}>
            <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-6">
              Chapter Three
            </p>
          </FadeText>
          
          <FadeText delay={0.2}>
            <h2 className="font-display text-4xl md:text-5xl text-cream mb-8">
              So here I am, asking...
            </h2>
          </FadeText>
          
          <FadeText delay={0.5}>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
              I'm not asking for forever — not yet. I'm asking for a chance. 
              A chance to make you laugh. To hold your hand on cold evenings. 
              To be the person you call when the day has been too long.
            </p>
          </FadeText>
          
          <FadeText delay={0.7}>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              And if you feel I'm not the right one — that's okay. Truly. 
              Your happiness matters more than my hope. If you need time 
              to think, I'll wait. No pressure. No expectations.
            </p>
          </FadeText>
          
          <FadeText delay={0.9}>
            <p className="font-display text-3xl md:text-4xl text-cream mb-16">
              Neha, would you go out with me?
            </p>
          </FadeText>
          
          <FadeText delay={1.2}>
            <ResponseButtons onResponse={handleResponse} />
          </FadeText>
        </div>
      </SlideSection>
    </div>
  );
};

export default Index;
