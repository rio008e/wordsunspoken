import { motion } from "framer-motion";
import SlideSection from "./SlideSection";
import FadeText from "./FadeText";
import eternalLove from "@/assets/eternal-love.jpeg";
import countrysideHome from "@/assets/countryside-home.jpeg";
import mistyRun from "@/assets/misty-run.jpeg";

interface ResponseScreenProps {
  response: "yes" | "think" | "no";
}

const ResponseScreens = ({ response }: ResponseScreenProps) => {
  if (response === "yes") {
    return (
      <SlideSection backgroundImage={eternalLove} overlay="medium">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <FadeText delay={0}>
              <p className="font-body text-xl text-muted-foreground mb-4">You said yes.</p>
            </FadeText>
            
            <FadeText delay={0.3}>
              <h2 className="font-display text-4xl md:text-5xl text-cream mb-8">
                And just like that, everything feels right.
              </h2>
            </FadeText>
            
            <FadeText delay={0.8}>
              <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
                No grand gestures. No fireworks in the sky. Just this quiet, overwhelming 
                warmth — the kind that settles in your chest and doesn't leave.
              </p>
            </FadeText>
            
            <FadeText delay={1.2}>
              <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                I promise to be patient with your bad days. To remember the little things 
                you mention in passing. To make you laugh when the world feels heavy. 
                To love you, simply and completely, for as long as you'll have me.
              </p>
            </FadeText>
            
            <FadeText delay={1.6}>
              <p className="font-display text-2xl text-primary italic">
                Thank you, Neha. For taking a chance on us.
              </p>
            </FadeText>
          </motion.div>
        </div>
      </SlideSection>
    );
  }

  if (response === "think") {
    return (
      <SlideSection backgroundImage={countrysideHome} overlay="dark">
        <div className="text-center">
          <FadeText delay={0}>
            <h2 className="font-display text-4xl md:text-5xl text-cream mb-8">
              Take all the time you need.
            </h2>
          </FadeText>
          
          <FadeText delay={0.4}>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
              I've waited this long to tell you how I feel. I can wait a little longer 
              for your answer. Some things in life are worth being patient for.
            </p>
          </FadeText>
          
          <FadeText delay={0.8}>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
              There's no pressure. No deadline. No expectation. Just know that 
              however long you need — whether it's days, weeks, or months — 
              my feelings won't waver.
            </p>
          </FadeText>
          
          <FadeText delay={1.2}>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              And if, after all your thinking, you realize I'm not the one — 
              that's okay too. I'd rather you be certain than rushed. 
              Your peace of mind matters more to me than any answer.
            </p>
          </FadeText>
          
          <FadeText delay={1.6}>
            <p className="font-display text-2xl text-primary italic">
              I'll be here, Neha. Whenever you're ready.
            </p>
          </FadeText>
        </div>
      </SlideSection>
    );
  }

  // response === "no"
  return (
    <SlideSection backgroundImage={mistyRun} overlay="dark">
      <div className="text-center">
        <FadeText delay={0}>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-8">
            I understand.
          </h2>
        </FadeText>
        
        <FadeText delay={0.4}>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
            The heart wants what it wants. And sometimes, what it wants 
            isn't us. That's not a tragedy — it's just life, being honest.
          </p>
        </FadeText>
        
        <FadeText delay={0.8}>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
            Thank you for letting me say what I needed to say. 
            For listening. For being graceful about something 
            that couldn't have been easy to receive.
          </p>
        </FadeText>
        
        <FadeText delay={1.2}>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            I hope you find someone who makes your heart race 
            the way you make mine. Someone deserving of those 
            amber eyes and that smile that could light up any room.
          </p>
        </FadeText>
        
        <FadeText delay={1.6}>
          <p className="font-display text-2xl text-muted-foreground italic">
            Goodbye, Neha. Thank you for everything.
          </p>
        </FadeText>
      </div>
    </SlideSection>
  );
};

export default ResponseScreens;
