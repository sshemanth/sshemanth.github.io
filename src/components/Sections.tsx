import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import {
  about, certifications, education, now, otherProjects, principles, profile,
  projects, publications, skills, vision, type Project,
} from '../data/content';
import { Reveal, rise, stagger } from './Motion';
import { Sticker } from './Stickers';

const v = (vars: Record<string, string>) => vars as CSSProperties;

function Head({ kicker, color, title, text }: { kicker: string; color?: string; title: string; text?: string }) {
  return (
    <Reveal className="head">
      <span className="kicker" style={color ? v({ '--k': color }) : undefined}>{kicker}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}

const ext = { target: '_blank', rel: 'noopener' } as const;

/* ---------------- About ---------------- */
export function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Head kicker="About me" title="Reliable AI for medicine" />
        <div className="about-grid">
          <Reveal className="card about-text">
            {about.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          </Reveal>
          <Reveal className="card" delay={0.1}>
            <motion.ul className="ways" aria-label="How I work" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {principles.map((p, i) => (
                <motion.li key={p.title} variants={rise}>
                  <span className="dot" style={v({ '--s': p.soft, '--c': p.color })}>{i + 1}</span>
                  <div><b>{p.title}</b><span>{p.text}</span></div>
                </motion.li>
              ))}
            </motion.ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Vision ---------------- */
export function Vision() {
  return (
    <section id="vision">
      <div className="wrap">
        <Head kicker="Research vision" color="var(--teal)" title="What I want to study in a PhD" text={vision.intro} />
        <motion.div className="qs" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -10% 0px' }}>
          {vision.questions.map((q, i) => (
            <motion.div key={q.q} className="q" style={v({ '--c': q.color, '--s': q.soft })} variants={rise} whileHover={{ y: -6 }}>
              <div className="q-top"><span className="qn">Question {i + 1}</span><Sticker name={q.icon} size={58} rotate={i % 2 ? 7 : -7} float={i} drag={false} /></div>
              <b>{q.q}</b>
              <p>{q.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Research ---------------- */
function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <motion.article
      className={`proj p-${p.theme}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i === 0 ? 0 : 0.05 }}
      whileHover={{ y: -4 }}
    >
      <div className="side">
        <span className="tagline">{p.tagline}</span>
        <p className="big">{p.big}<small>{p.bigLabel}</small></p>
        <div className="minis">
          {p.minis.map(([k, val]) => <div key={k}><span>{k}</span><span>{val}</span></div>)}
        </div>
        <div className="side-sticker"><Sticker name={p.sticker} size={88} rotate={i % 2 ? 8 : -8} float={i} label={p.tagline} /></div>
      </div>
      <div className="main">
        <h3>{p.title}</h3>
        {p.where && <p className="where">{p.where}</p>}
        {p.id === 'brain' && profile.supervisor && <p className="where">{profile.supervisor}</p>}
        <ul>{p.points.map((t) => <li key={t.slice(0, 24)}>{t}</li>)}</ul>
        <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
        {p.links.length > 0 && (
          <div className="links">{p.links.map((l) => <a key={l.href} href={l.href} {...ext}>{l.label}</a>)}</div>
        )}
      </div>
    </motion.article>
  );
}

export function Research() {
  return (
    <section id="research">
      <div className="wrap">
        <Head kicker="Research" color="var(--pink)" title="What I have been building" text="Four projects across brain MRI, knee MRI, skin images and drug discovery, each with results on held-out or external data." />
        <div className="projects">
          {projects.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Publications ---------------- */
export function Publications() {
  return (
    <section id="publications">
      <div className="wrap">
        <Head kicker="Publications and outputs" color="var(--violet)" title="Papers, preprints and software" />
        <motion.ol className="pubs" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -10% 0px' }}>
          {publications.map((p) => (
            <motion.li key={p.title} style={v({ '--c': p.color })} variants={rise} whileHover={{ x: 6 }}>
              <span className="status">{p.status}</span>
              <b>{p.title}</b>
              <span className="auth">{p.authors}</span>
              {p.links.length > 0 && <span className="plinks">{p.links.map((l) => <a key={l.href} href={l.href} {...ext}>{l.label}</a>)}</span>}
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

/* ---------------- Now ---------------- */
export function Now() {
  return (
    <section id="now">
      <div className="wrap">
        <Reveal className="card tint-amber">
          <span className="kicker" style={v({ '--k': 'var(--amber)' })}>Now</span>
          <h3 style={{ marginTop: 8 }}>Current work</h3>
          <ul>{now.map((t) => <li key={t}>{t}</li>)}</ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Background ---------------- */
const tone: Record<string, string> = { violet: 'sk1', teal: 'sk2', blue: 'sk3', coral: 'sk4' };

export function Background() {
  return (
    <section id="background">
      <div className="wrap">
        <Head kicker="Background" color="var(--blue)" title="Education, certifications and skills" />
        <div className="two">
          <Reveal className="card edu">
            <span className="kicker" style={v({ '--k': 'var(--violet)' })}>Education</span>
            <ol className="timeline">
              {education.map((e) => (
                <li key={e.title} style={v({ '--c': e.color })}>
                  <span className="when">{e.when}</span><b>{e.title}</b><small>{e.where}</small>
                </li>
              ))}
            </ol>
            <span className="kicker" style={v({ '--k': 'var(--amber)' })}>Certifications</span>
            <ul className="certs">
              {certifications.map((c) => (
                <li key={c.title} style={v({ '--c': c.color })}><b>{c.title}</b><small>{c.where}</small></li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="card skills" delay={0.1}>
            {skills.map((s) => (
              <div key={s.group} className={tone[s.tone]}>
                <span className="kicker">{s.group}</span>
                <div className="pills">{s.items.map((i) => <span key={i}>{i}</span>)}</div>
              </div>
            ))}
          </Reveal>
        </div>
        <Reveal className="others">
          <span className="kicker" style={v({ '--k': 'var(--muted)' })}>Other projects</span>
          <p>
            {otherProjects.map((o, i) => (
              <span key={o.href}>{i > 0 && ' · '}<a href={o.href} {...ext}>{o.label}</a> {o.note}</span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
export function Contact({ onCopied }: { onCopied: (msg: string) => void }) {
  const copy = () => {
    const done = () => onCopied('Email copied');
    const fallback = () => {
      const el = document.getElementById('mail');
      if (!el) return;
      const r = document.createRange(); r.selectNodeContents(el);
      const s = window.getSelection(); s?.removeAllRanges(); s?.addRange(r);
      onCopied('Selected: press Ctrl+C');
    };
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(profile.email).then(done, fallback);
    else fallback();
  };
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <Reveal className="cbox">
          <div className="cbox-stickers" aria-hidden="true">
            <Sticker name="cap" size={92} rotate={-10} float={1} />
            <Sticker name="spark" size={70} rotate={12} float={2} />
            <Sticker name="brain" size={84} rotate={6} float={3} />
          </div>
          <h2>Let&rsquo;s work on medical AI together</h2>
          <p>I welcome messages about PhD positions, research assistant roles and collaborations in medical image analysis.</p>
          <div className="mailrow">
            <a className="mail" id="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
            <motion.button className="copy" type="button" onClick={copy} whileTap={{ scale: 0.95 }}>Copy email</motion.button>
          </div>
          <div className="links">
            <a href={profile.links.github} {...ext}>GitHub</a>
            <a href={profile.links.linkedin} {...ext}>LinkedIn</a>
            <a href={profile.cv} {...ext}>CV (PDF)</a>
            {profile.links.orcid && <a href={profile.links.orcid} {...ext}>ORCID</a>}
            {profile.links.scholar && <a href={profile.links.scholar} {...ext}>Google Scholar</a>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- small helpers ---------------- */
export function Toast({ msg }: { msg: string }) {
  return (
    <AnimatePresence>
      {msg && (
        <motion.div className="toast" role="status" initial={{ opacity: 0, y: 20, x: '-50%' }} animate={{ opacity: 1, y: 0, x: '-50%' }} exit={{ opacity: 0, y: 20, x: '-50%' }}>
          {msg}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 900);
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button className="totop" type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} whileHover={{ y: -3 }}>
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function Footer({ children }: { children?: ReactNode }) {
  return (
    <footer><div className="wrap"><span>© {new Date().getFullYear()} {profile.name}</span><span>Sydney, Australia</span>{children}</div></footer>
  );
}
