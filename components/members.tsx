"use client";

import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import NarayanImage from "@/app/images/members/Narayan.png";
import NayanImage from "@/app/images/members/Nayan.png";
import ShasankImage from "@/app/images/members/Shasank.png";
import SanjogImage from "@/app/images/members/Sanjog.png";
import MissionImage from "@/app/images/members/Mission.png";
import PrazwalImage from "@/app/images/members/Prazwal.png";
import RabinImage from "@/app/images/members/Rabin.png";
import SiddhantImage from "@/app/images/members/Siddhant.jpg";
import PixenexImage from "@/app/images/members/Pixenex.jpg";
import PallaviImage from "@/app/images/members/Pallavi.jpg";
import NancyImage from "@/app/images/members/Nancy.jpg";
import AnishImage from "@/app/images/members/Anish.jpg";
import {
  Github,
  Twitter,
  Globe,
  Instagram,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const members = [
  {
    id: 1,
    name: "Narayan Bhusal",
    role: "Senior Owl",
    image: NarayanImage,
    github: "https://github.com/naranbhusal02",
    twitter: "https://twitter.com/naranbhusal02",
    website: "https://naranbhusal02.me",
  },
  {
    id: 2,
    name: "Nayan Acharya",
    role: "Senior Owl",
    image: NayanImage,
    github: "https://github.com/nayan135",
    twitter: "https://twitter.com/NoOneKnows135",
    website: "https://nayan135.com.np",
  },
  {
    id: 3,
    name: "Mission Acharya",
    role: "Senior Owl",
    image: MissionImage,
    github: "https://github.com/JCT-B",
    twitter: "https://twitter.com/demo",
    website: "https://mission.xyz",
  },
  {
    id: 4,
    name: "Shasank Shrestha",
    role: "Owl",
    image: ShasankImage,
    github: "https://github.com/shasank00",
    twitter: "https://twitter.com/demo",
    website: "https://shasank.xyz",
  },
  {
    id: 5,
    name: "Sanjog Pandey",
    role: "Owl",
    image: SanjogImage,
    github: "https://github.com/sanjogpandey47",
    twitter: "https://twitter.com/demo",
    website: "https://sanjog.xyz",
  },
  {
    id: 6,
    name: "Prazwal Roka",
    role: "Owl",
    image: PrazwalImage,
    github: "https://github.com/prazwal30",
    twitter: "https://twitter.com/demo",
    website: "https://prazwal.xyz",
  },
  {
    id: 7,
    name: "Rabin Chudali",
    role: "Owl",
    image: RabinImage,
    github: "https://github.com/TechnophileCracker",
    twitter: "https://twitter.com/demo",
    website: "https://rabinchudali07.xyz",
  },
  {
    id: 8,
    name: "Siddhant Panthi",
    role: "Owl",
    image: SiddhantImage,
    github: "https://github.com/siddhantpanthi",
    twitter: "https://twitter.com/demo",
    website: "https://siddhantpanthi.xyz/",
  },
  {
    id: 9,
    name: "Pixenex",
    role: "Owl",
    image: PixenexImage,
    github: "https://github.com/codewithnaran",
    twitter: "https://twitter.com/pixenex",
    website: "https://devpost.com/pixenex",
  },
  {
    id: 10,
    name: "Pallavi Panthi",
    role: "Owlet",
    image: PallaviImage,
    /* github: "https://github.com/demo",
    twitter: "https://twitter.com/demo", */
    instagram: "https://instagram.com/pal._.avi/",
    /* website: "https://devpost.com/demo", */
  },
  {
    id: 11,
    name: "Nancy Kushwaha",
    role: "Owlet",
    image: NancyImage,
    github: "https://github.com/nancy77-1",
    /* twitter: "https://twitter.com/demo", */
    /*instagram: "https://instagram.com/nancy.kushwaha",*/
    linkedin: "https://www.linkedin.com/in/nancy-kushwaha",
    /* website: "https://devpost.com/demo", */
  },
  {
    id: 12,
    name: "Anish Gyawali",
    role: "Owlet",
    image: AnishImage,
    github: "https://github.com/iam-anish90",
    /* twitter: "https://twitter.com/demo", */
    instagram: "https://www.instagram.com/gyawali_aneesh/",
    website: "http://anishgyawali.com/",
  },
];

export default function Members() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        behavior: "smooth",
        left: scrollAmount,
      });
    }
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the talented individuals who make up our team. Each member
            brings unique skills and perspectives to our projects.
          </p>
        </motion.div>

        <div className="relative mt-8">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <AnimatePresence>
              {members.map((member) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex-shrink-0 w-[300px] snap-start"
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-lg p-6 flex flex-col items-center">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-muted-foreground mb-6">{member.role}</p>
                    <div className="flex gap-4">
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-muted transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          <span className="sr-only">GitHub</span>
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-muted transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                          <span className="sr-only">Twitter</span>
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-muted transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      )}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-muted transition-colors"
                        >
                          <Instagram className="w-5 h-5" />
                          <span className="sr-only">Instagram</span>
                        </a>
                      )}
                      {member.website && (
                        <a
                          href={member.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-muted transition-colors"
                        >
                          <Globe className="w-5 h-5" />
                          <span className="sr-only">Website</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
