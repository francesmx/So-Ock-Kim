import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { useState } from "react";

const ITEMS_PER_PAGE = 8;
const SWIPE_THRESHOLD = 50;

function PaginatedWorksList({ works }: { works: string[] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalPages = Math.ceil(works.length / ITEMS_PER_PAGE);
  const needsPagination = works.length > ITEMS_PER_PAGE;
  
  const visibleWorks = needsPagination 
    ? works.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE)
    : works;

  const paginate = (newDirection: number) => {
    const newPage = currentPage + newDirection;
    if (newPage >= 0 && newPage < totalPages) {
      setDirection(newDirection);
      setCurrentPage(newPage);
    }
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD && currentPage < totalPages - 1) {
      paginate(1);
    } else if (info.offset.x > SWIPE_THRESHOLD && currentPage > 0) {
      paginate(-1);
    }
  };

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction > 0 ? -100 : 100, opacity: 0 }),
  };

  return (
    <div>
      <div className="overflow-hidden min-h-[320px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.ul
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
            drag={needsPagination ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="space-y-3 cursor-grab active:cursor-grabbing"
          >
            {visibleWorks.map((work) => (
              <li key={work} className="text-muted-foreground font-light text-sm border-b border-border/40 pb-2 last:border-0 select-none">
                {work}
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
      
      {needsPagination && (
        <div className="flex justify-center gap-2 mt-6 pt-4 border-t border-border/20">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentPage ? 1 : -1);
                setCurrentPage(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentPage 
                  ? "bg-primary w-4" 
                  : "bg-border hover:bg-primary/50"
              }`}
              aria-label={`Page ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function Repertoire() {
  const repertoire = [
    {
      category: "Orchestral",
        works: [
          "Bach: Violin Concertos No. 1 & No. 2; Concerto for Two Violins",
          "Bartók: Violin Concerto No. 2",
          "Beethoven: Violin Concerto in D major; Triple Concerto",
          "Berg: Violin Concerto",
          "Brahms: Violin Concerto in D major; Double Concerto",
          "Bruch: Violin Concerto No. 1 in G minor",
          "Chausson: Poème",
          "Dvořák: Violin Concerto",
          "Haydn: Violin Concerto in C major",
          "Kabalevsky: Violin Concerto",
          "Lalo: Symphonie espagnole",
          "MacMillan: Violin Concerto; Deep and Dazzling Darkness",
          "Mendelssohn: Violin Concertos No. 1 & No. 2",
          "Mozart: Violin Concertos No. 2-5 & No. 7; Sinfonia Concertante",
          "Nielsen: Violin Concerto",
          "Paganini: Violin Concertos No. 1 & No. 2",
          "Penderecki: Violin Concerto No. 2",
          "Prokofiev: Violin Concertos No. 1 & No. 2",
          "Ravel: Tzigane",
          "Saint-Saëns: Violin Concerto No. 3",
          "Sibelius: Violin Concerto",
          "Szymanowski: Violin Concertos No. 1 & No. 2",
          "Spohr: Violin Concertos",
          "Tchaikovsky: Violin Concerto",
          "Vaughan Williams: The Lark Ascending",
          "Vivaldi: The Four Seasons; Violin Concertos",
          "Walton: Violin Concerto",
          "Wieniawski: Violin Concerto No. 2, Faust Fantasy; Légende; Polonaise No. 1"
        ]
      },
      {
        category: "Sonatas",
        works: [
          "Beethoven: Sonata No. 5 in F major 'Spring'",
          "Beethoven: Sonata No. 9 in A major 'Kreutzer'",
          "Brahms: Sonata No. 3 in D minor",
          "Debussy: Sonata in G minor",
          "Franck: Sonata in A major"
        ]
      },
      {
        category: "Solo",
        works: [
          "Bach: Sonatas and Partitas for Solo Violin",
          "Ysaÿe: Six Sonatas for Solo Violin",
          "Paganini: 24 Caprices"
        ]
      }
  ];

  return (
    <section id="repertoire" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">Repertoire</h2>
          <div className="w-12 h-[1px] bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {repertoire.map((section, idx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card p-8 shadow-sm border-t-2 border-accent/20 hover:border-accent transition-colors duration-500"
            >
              <h3 className="text-2xl font-serif mb-6 text-primary">{section.category}</h3>
              <PaginatedWorksList works={section.works} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
