import { motion, useScroll, useTransform } from 'framer-motion';
import { highlights, interests, profile } from '../data/content';
import { CountUp, rise, stagger } from './Motion';
import { Sticker, StickerBoard } from './Stickers';

/** Opening section: animated aurora, staggered intro, count-up highlights. */
export function Hero() {
  const { scrollY } = useScroll();
  const auroraY = useTransform(scrollY, [0, 600], [0, 120]);
  const auroraOpacity = useTransform(scrollY, [0, 600], [1, 0.4]);
  const words = profile.first.split(' ');

  return (
    <>
      <div className="hero" id="top">
        <motion.div className="aurora-wrap" style={{ y: auroraY, opacity: auroraOpacity }} aria-hidden="true">
          <div className="aurora"><span className="a1" /><span className="a2" /><span className="a3" /><span className="a4" /><span className="a5" /></div>
        </motion.div>
        <div className="wrap hero-grid">
        <motion.div className="hero-copy" variants={stagger} initial="hidden" animate="show">
          <div className="mini-stickers" aria-hidden="true">
            {['brain', 'mri', 'knee', 'molecule', 'cap'].map((n, i) => <Sticker key={n} name={n} size={52} rotate={i % 2 ? 8 : -8} float={i} drag={false} />)}
          </div>
          <motion.span className="badge" variants={rise}>{profile.status}</motion.span>
          <motion.h1 variants={rise}>
            {words.map((w, i) => (
              <motion.span key={w + i} className="w" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                {w}{i < words.length - 1 ? ' ' : ''}
              </motion.span>
            ))}
            <br />
            <motion.span className="grad w" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}>
              {profile.last}
            </motion.span>
          </motion.h1>
          <motion.p className="lead" variants={rise}>{profile.lead}</motion.p>
          <motion.p className="meta" variants={rise}>{profile.meta}</motion.p>
          <motion.div className="cta" variants={rise}>
            <motion.a className="btn btn--main" href="#research" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>See my research</motion.a>
            <motion.a className="btn btn--ghost" href={profile.links.github} target="_blank" rel="noopener" whileHover={{ y: -2 }}>GitHub</motion.a>
            <motion.a className="btn btn--ghost" href={profile.links.linkedin} target="_blank" rel="noopener" whileHover={{ y: -2 }}>LinkedIn</motion.a>
            <motion.a className="btn btn--ghost" href={profile.cv} target="_blank" rel="noopener" whileHover={{ y: -2 }}>CV (PDF)</motion.a>
            {profile.links.orcid && <motion.a className="btn btn--ghost" href={profile.links.orcid} target="_blank" rel="noopener" whileHover={{ y: -2 }}>ORCID</motion.a>}
            {profile.links.scholar && <motion.a className="btn btn--ghost" href={profile.links.scholar} target="_blank" rel="noopener" whileHover={{ y: -2 }}>Google Scholar</motion.a>}
          </motion.div>
          <motion.ul className="chips" aria-label="Research interests" variants={stagger}>
            {interests.map((t) => <motion.li key={t} variants={rise}>{t}</motion.li>)}
          </motion.ul>
        </motion.div>
        <StickerBoard />
        </div>
      </div>

      <div className="highlights">
        <div className="wrap">
          <motion.div className="hl" aria-label="Highlights" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {highlights.map((h) => (
              <motion.div key={h.label} style={{ ['--c' as string]: h.color }} variants={rise} whileHover={{ y: -4 }}>
                <b>
                  <CountUp value={h.value} decimals={h.decimals} />
                  {h.to !== undefined && <> → <CountUp value={h.to} decimals={h.decimals} /></>}
                </b>
                <span>{h.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
