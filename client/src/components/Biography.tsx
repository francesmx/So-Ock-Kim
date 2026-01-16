import { motion } from "framer-motion";

export function Biography() {
  return (
    <section id="biography" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[2/3] overflow-hidden rounded-sm shadow-2xl">
            <img 
              src="/attached_assets/so-ock-photo-straight-on.webp" 
              alt="So-Ock Kim with Violin" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border border-primary/20 -z-10 rounded-sm"></div>
        </motion.div>

        {/* Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Biography</h2>
          <div className="w-16 h-[1px] bg-accent mb-8"></div>
          
          <div className="space-y-4 text-muted-foreground font-light leading-relaxed text-lg text-justify">
            <p>
            So-Ock Kim is an internationally acclaimed violinist born in Seoul in 1982 and raised in London from the age of three. At just 15, she became the youngest-ever winner of the prestigious Shell/LSO Competition, performing the Tchaikovsky Violin Concerto with the London Symphony Orchestra at the Barbican. She was later selected for the Young Concert Artists Trust at 19.
</p><p>
She has performed extensively at major venues including Wigmore Hall, Royal Festival Hall and the Barbican, and has toured widely across Asia, Europe and the United States. Her appearances span leading international festivals such as the BBC Proms, Schleswig-Holstein, Ravinia, Aldeburgh and Seoul Spring Festival. Many performances have been broadcast worldwide on major radio and television networks.
</p><p>
So-Ock has collaborated with many of the world’s leading orchestras and conductors, including the Philharmonia Orchestra, Royal Philharmonic Orchestra, Orchestre Philharmonique de Radio France, Seoul Philharmonic, and English Chamber Orchestra, working with artists such as Vladimir Ashkenazy, Krzysztof Penderecki and Vassily Petrenko.
</p><p>
A passionate advocate of contemporary music, she has given numerous world premieres, with recordings released on Universal and Naxos. An active chamber musician, she is also violin professor at the Royal Academy of Music in London and serves as a string consultant at Millfield School.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
