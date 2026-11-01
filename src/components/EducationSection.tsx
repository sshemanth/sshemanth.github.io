import React from 'react';
import FadeIn from './FadeIn';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="w-full bg-transparent text-[#D7E2EA] py-16 sm:py-20 select-none relative z-10 border-t border-white/5"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span className="text-[13px] uppercase tracking-widest font-semibold text-cyan-400">
              Academic Qualifications
            </span>
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-8 sm:mb-12 text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Education
          </h2>
        </FadeIn>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Item 1: UTS */}
          <FadeIn delay={0.1} y={20} className="w-full">
            <div className="bg-[#121318] border border-[#272932] hover:border-cyan-500/30 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-3 text-[13px] font-mono text-[#c4c4cc]">
                  <span className="flex items-center gap-1.5 text-cyan-300 bg-cyan-950/60 border border-cyan-800/40 px-3 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>2025 – 2027</span>
                  </span>
                  <span className="flex items-center gap-1 text-[#c4c4cc]">
                    <MapPin className="w-3.5 h-3.5 text-[#B600A8]" />
                    <span>Sydney, Australia</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mt-1">
                  Master of Artificial Intelligence
                </h3>
                <p className="text-base font-medium text-white/90">
                  University of Technology Sydney (UTS), Australia
                </p>

                <div className="pt-3.5 border-t border-white/10 mt-3">
                  <p className="text-base text-[#c4c4cc] font-light flex items-start gap-2.5 leading-relaxed">
                    <Award className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                    <span>
                      Research supervisor: <strong className="text-white font-medium">A/Prof. Steve Ling</strong>, Head of AIVision Nexus Laboratory
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Item 2: JNTU Kakinada */}
          <FadeIn delay={0.18} y={20} className="w-full">
            <div className="bg-[#121318] border border-[#272932] hover:border-[#B600A8]/30 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-3 text-[13px] font-mono text-[#c4c4cc]">
                  <span className="flex items-center gap-1.5 text-purple-300 bg-purple-950/60 border border-purple-800/40 px-3 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>2020 – 2024</span>
                  </span>
                  <span className="flex items-center gap-1 text-[#c4c4cc]">
                    <MapPin className="w-3.5 h-3.5 text-[#B600A8]" />
                    <span>Kakinada, India</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mt-1">
                  B.Tech in Computer Science
                </h3>
                <p className="text-base font-medium text-white/90">
                  Jawaharlal Nehru Technological University (JNTU) Kakinada, India
                </p>

                <div className="pt-3.5 border-t border-white/10 mt-3">
                  <p className="text-base text-[#c4c4cc] font-light leading-relaxed">
                    Core foundations in Algorithms, Data Structures, Machine Learning, Computer Vision, and Software Engineering.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
