import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Reviews() {
  const reviews = [
    {
      text: "A performance of dazzling technical mastery and purity of tone.",
      source: "The Times"
    },
    {
      text: "She plays with a maturity and depth that belies her years. Truly captivating.",
      source: "The Guardian"
    },
    {
      text: "Her interpretation of the Sibelius was nothing short of revelatory.",
      source: "Classical Music Magazine"
    },
    {
      text: "An artist of the highest calibre, combining strength with exquisite delicacy.",
      source: "The Strad"
    },
    {
      text: "One of the most remarkable recitals in recent memory… flawless in intonation, pure and beautiful in sound.",
      source: "New York Concert Review (Carnegie Weill Recital Hall)"
    },
    {
      text: "A brilliant soloist with a wonderfully pure, floating sound, rich timbre and virtuosic perfection.",
      source: "Oberbayerisches Volksblatt (Germany)"
    },
    {
      text: "A dazzling tour de force — breathtaking in its virtuosity and supremely beautiful throughout.",
      source: "The Royal Gazette (Bermuda Festival)"
    },
    {
      text: "Breathtaking virtuosity… she shaped a powerful performance — magic.",
      source: "The Times"
    },
    {
      text: "Outstanding… not only technical mastery, but tenderness, warmth and astonishing musical maturity.",
      source: "The Guardian"
    },
    {
      text: "She brought a burnished tone and a highly personal voice, capturing bitter-sweet lyricism with sensitivity.",
      source: "The Strad"
    },
    {
      text: "She astonished the audience with flawless playing, astounding musicality, and expressive depth.",
      source: "Ostsee-Zeitung (Germany)"
    }
  ];

  return (
    <section id="reviews" className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-white blur-[100px]"></div>
         <div className="absolute top-[40%] right-[10%] w-[30%] h-[60%] rounded-full bg-accent blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
           <Quote className="w-12 h-12 mx-auto text-accent mb-6 opacity-80" />
           <h2 className="text-3xl md:text-4xl font-serif tracking-wide">Press Acclaim</h2>
        </motion.div>

        <Carousel className="w-full">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index}>
                <div className="p-6 md:p-12 text-center">
                  <p className="text-2xl md:text-4xl font-serif leading-relaxed italic mb-8">
                    "{review.text}"
                  </p>
                  <p className="text-accent uppercase tracking-widest text-sm font-semibold">
                    — {review.source}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white" />
            <CarouselNext className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
