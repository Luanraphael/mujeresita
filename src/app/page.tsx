import Image from "next/image";
import type { ReactNode } from "react";
import { Check, ChevronsDown, Gift, Minus, Plus, ShieldCheck, TriangleAlert } from "lucide-react";

const IMG = "/mesaposta";
// TODO: trocar pelo link de checkout da oferta Donne con Proposito (enquanto isso, os botões levam até a oferta).
const CHECKOUT_URL = "#offerta";
const display = "font-display";

/* ------------------------------------------------------------------ */
/* Conteúdo                                                            */
/* ------------------------------------------------------------------ */

const KIT = "Kit Donne con Proposito";

const HERO_BULLETS = [
  "Accesso a vita",
  "Consegna immediata via email",
  "Garanzia incondizionata di 7 giorni",
];

const INCLUDES_TOP = [
  "120 Dinamiche e Rompighiaccio con proposito per Ministeri di Donne",
  "100 Versetti Ispiratori per Donne con Proposito",
  "55 Idee di Decorazione per Eventi e Riunioni di Donne",
  "44 Idee Creative per Incontri e Ritiri di Donne",
  "24 Cartelloni per Incontri e Ritiri di Donne",
  "33 Strategie per Leader del Ministero delle Donne",
  "25 Temi Creativi per Riunioni di Donne Cristiane",
  "60 Biglietti Personalizzabili con Versetti per Decorare la Tavola",
  "Attività Guidata: Imparando a Perdonare",
];

const INCLUDES_BOTTOM = [
  "33 Schemi di Sermoni per Incontri di Donne",
  "Kit Esclusivo di Dettagli per Donne con Proposito",
  "50 Domande Profonde per Gruppi di Donne",
];

const TRUST_BADGES = [
  { label: "7 giorni di garanzia", icon: null },
  { label: "Accesso immediato", icon: "icone-acesso.png" },
  { label: "Assistenza dedicata", icon: "icone-suporte.png" },
  { label: "Soddisfazione garantita", icon: "icone-satisfacao.png" },
  { label: "Acquisto sicuro al 100%", icon: "icone-compra-segura.png" },
];

// Il 1º card mostra il titolo prima dell'immagine; gli altri, l'immagine prima del titolo.
const DELIVERABLES = [
  { title: "120 Dinamiche e Rompighiaccio con proposito per Ministeri di Donne", img: "120-dinamiche.webp", w: 1224, h: 1117, titleFirst: true },
  { title: "44 Idee Creative per Incontri e Ritiri di Donne", img: "44-idee-creative.webp", w: 1234, h: 1120 },
  { title: "33 Strategie per Leader del Ministero delle Donne", img: "33-strategie.webp", w: 1138, h: 1121 },
  { title: "55 Idee di Decorazione per Eventi e Riunioni di Donne", img: "55-idee-decorazione.webp", w: 1212, h: 1152 },
  { title: "25 Temi Creativi per Riunioni di Donne Cristiane", img: "25-temi-creativi.webp", w: 1100, h: 1158 },
  { title: "24 Cartelloni per Incontri e Ritiri di Donne", img: "24-cartelloni.webp", w: 1122, h: 1142 },
];

const BONUSES: { title: string; img: string; w: number; h: number; price: string; text?: string }[] = [
  {
    title: "Kit Esclusivo di Dettagli per Donne con Proposito",
    img: "bonus-kit-dettagli.webp",
    w: 896,
    h: 1162,
    price: "Valore €29,90",
    text: "Segnalibri ispiratori, mini Bibbie decorative e piccoli ricordi speciali pensati per accompagnare una caramella, un cioccolatino o un dolcetto.",
  },
  {
    title: "60 Biglietti Personalizzabili con Versetti per Decorare la Tavola",
    img: "bonus-60-biglietti.webp",
    w: 1189,
    h: 1136,
    price: "Valore €19,90",
  },
  {
    title: "100 Versetti Ispiratori per Donne con Proposito",
    img: "bonus-100-versetti.webp",
    w: 1182,
    h: 1143,
    price: "Valore €19,90",
    text: "Versetti ispiratori con riflessione e spazio per la preghiera, pronti da usare negli incontri, nei momenti devozionali e nel tempo personale con Dio.",
  },
  {
    title: "33 Schemi di Sermoni per Incontri di Donne",
    img: "bonus-33-schemi-sermoni.webp",
    w: 1220,
    h: 1082,
    price: "Valore €19,90",
  },
  {
    title: "50 Domande Profonde per Gruppi di Donne",
    img: "bonus-50-domande.webp",
    w: 1120,
    h: 1103,
    price: "Valore €24,90",
  },
];

const FEATURES = [
  {
    img: "icone-imprime.jpg",
    title: "Stampa",
    text: "Stampa tutto da casa, in chiesa o dove preferisci.",
  },
  {
    img: "icone-acceso-seguro.png",
    title: "Accesso sicuro e immediato",
    text: "Appena il tuo ordine viene elaborato in modo sicuro, riceverai nella tua email un link per scaricare il materiale. Avrai subito accesso a tutti i materiali.",
  },
  {
    img: "icone-download.png",
    title: "Salva",
    text: "Tutto il materiale è in alta qualità e perfettamente organizzato in cartelle per categoria: scaricalo e salvalo dove preferisci.",
  },
];

const WHY = [
  "Risparmia ore di preparazione con risorse pronte all'uso.",
  "Crea un legame emotivo e spirituale con le partecipanti.",
  "Grafiche stampabili che rendono ogni incontro più bello, curato e accogliente.",
  "Strategie pratiche per far crescere le squadre e guidare con unzione.",
  "Materiali organizzati e pianificati per semplificare il tuo lavoro.",
  "Materiale già sperimentato in ritiri, riunioni e percorsi di discepolato.",
];

const FOR_WHOM = [
  "Leader dei Ministeri delle Donne (pastore, coordinatrici, responsabili).",
  "Volontarie che organizzano incontri mensili o ritiri.",
  "Squadre di discepolato e mentori.",
  "Chiese che desiderano rinnovare le loro riunioni femminili.",
  "Piccole comunità e gruppi di sostegno femminili.",
  "Leader che accompagnano le donne in percorsi di guarigione emotiva.",
];

const OFFER_ITEMS = [
  "Tutti i materiali stampabili e modificabili.",
  "120 Dinamiche e Rompighiaccio con proposito per Ministeri di Donne",
  "100 Versetti Ispiratori per Donne con Proposito",
  "44 Idee Creative per Incontri e Ritiri di Donne",
  "24 Cartelloni per Incontri e Ritiri di Donne",
  "33 Strategie per Leader del Ministero delle Donne",
  "55 Idee di Decorazione per Eventi e Riunioni di Donne",
  "Attività Guidata: Imparando a Perdonare",
  "25 Temi Creativi per Riunioni di Donne Cristiane",
  "60 Biglietti Personalizzabili con Versetti per Decorare la Tavola",
  "Kit Esclusivo di Dettagli per Donne con Proposito",
  "33 Schemi di Sermoni per Incontri di Donne",
  "50 Domande Profonde per Gruppi di Donne",
  "Accesso a vita",
];

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: "Come riceverò l'accesso?",
    a: (
      <>
        Appena il pagamento viene confermato, <strong>riceverai automaticamente tutto il materiale</strong> nella tua
        email.
        <br />
        Non devi inviare ricevute né fare altri passaggi: il nostro sistema invia tutto{" "}
        <strong>in modo immediato e sicuro</strong>.
        <br />
        Assicurati solo di inserire correttamente la tua email al momento dell&apos;acquisto.
      </>
    ),
  },
  {
    q: "Il materiale è fisico o digitale?",
    a: (
      <>
        Il <strong>materiale è completamente digitale</strong>, ma <strong>pronto da stampare</strong> con qualsiasi
        stampante, a casa, in chiesa o in una copisteria.
        <br />
        Ogni file è in alta qualità, ordinato in cartelle e pensato perché tu possa{" "}
        <strong>stampare solo ciò che ti serve</strong>, in modo pratico ed economico.
      </>
    ),
  },
  {
    q: "Posso richiedere il rimborso?",
    a: (
      <>
        Sì, certo! 💗
        <br />
        Offriamo una <strong>garanzia incondizionata di 7 giorni</strong>.
        <br />
        Significa che puoi accedere al materiale, guardarlo con calma e, se per qualsiasi motivo non è ciò che ti
        aspettavi, richiedere il rimborso completo. Senza complicazioni e senza domande.
        <br />
        Vogliamo che tu acquisti in totale serenità.
      </>
    ),
  },
  {
    q: "A chi è consigliato questo kit?",
    a: (
      <>
        A <strong>leader e responsabili dei ministeri delle donne</strong>, pastore, coordinatrici, volontarie che
        organizzano incontri e ritiri, mentori e gruppi di discepolato.
        <br />
        Anche se è la prima volta che guidi un incontro, troverai <strong>tutto pronto da usare</strong>: dinamiche,
        temi, decorazioni e strategie per servire con creatività e proposito.
      </>
    ),
  },
  {
    q: "Ho assistenza se ho dei dubbi?",
    a: (
      <>
        Certamente!
        <br />
        Il nostro team offre <strong>assistenza personalizzata</strong> tramite Instagram.
        <br />
        Se hai domande o ti serve aiuto con il materiale, puoi scriverci direttamente a{" "}
        <strong>@laura.viscondi</strong>. Rispondiamo sempre con affetto, aiutando ogni sorella in fede che fa parte
        di questa comunità.
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Peças de clay                                                       */
/* ------------------------------------------------------------------ */

/** Sezione rosa: equivale alle sezioni colorate della pagina originale. */
function PinkSlab({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`clay-red-slab relative w-full overflow-hidden py-14 text-white ${className}`}>
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/** Sezione chiara: equivale alle sezioni bianche della pagina originale. */
function LightSection({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`relative w-full py-16 ${className}`}>
      {children}
    </section>
  );
}

function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[680px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

/** Evidenziazione dorata sul rosa. */
function Mark({ children }: { children: ReactNode }) {
  return <span className="text-gold">{children}</span>;
}

function SoftMark({ children }: { children: ReactNode }) {
  return <span className="text-gold font-bold">{children}</span>;
}

function CheckOrb({ size = "md" }: { size?: "sm" | "md" }) {
  const dims = size === "sm" ? "h-6 w-6" : "h-7 w-7";
  return (
    <span
      className={`clay-orb inline-flex ${dims} shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white`}
    >
      <Check className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} strokeWidth={3.5} />
    </span>
  );
}

function CheckList({ items, onPink = false, className = "" }: { items: string[]; onPink?: boolean; className?: string }) {
  return (
    <ul className={`flex flex-col gap-3.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckOrb />
          <span className={`pt-0.5 text-base font-medium leading-relaxed ${onPink ? "text-white" : "text-ink"}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function CtaButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`clay-button ${display} inline-flex min-h-16 w-full items-center justify-center rounded-[20px] px-6 py-3 text-center text-base font-black tracking-wide sm:text-lg sm:w-auto ${className}`}
    >
      {children}
    </a>
  );
}

function IconOrb({ children, tone = "pink" }: { children: ReactNode; tone?: "pink" | "white" }) {
  const toneClass =
    tone === "pink"
      ? "bg-gradient-to-br from-[#ff3d9a] to-[#d4006f] text-white"
      : "bg-gradient-to-br from-white to-[#fde3ef] text-love-600";
  return (
    <span className={`clay-orb inline-flex h-16 w-16 items-center justify-center rounded-full ${toneClass}`}>
      {children}
    </span>
  );
}

function SectionTitle({ children, onPink = false, className = "" }: { children: ReactNode; onPink?: boolean; className?: string }) {
  return (
    <h2
      className={`${display} text-center text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl md:text-5xl ${
        onPink ? "text-white" : "text-ink"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

/* ------------------------------------------------------------------ */
/* Pagina                                                              */
/* ------------------------------------------------------------------ */

export default function DonneConPropositoPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Luce ambiente del canvas */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[60vh] w-[60vh] rounded-full bg-[#d4006f]/10 blur-3xl" />
        <div className="absolute -right-[10%] top-[20%] h-[60vh] w-[60vh] rounded-full bg-[#ff3d9a]/10 blur-3xl" />
      </div>

      {/* Barra promozionale fissa */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div
          className={`${display} clay-topbar flex h-11 w-full items-center justify-center gap-1.5 px-4 text-center text-[15px] font-extrabold tracking-wide text-white`}
        >
          Sconto solo
          <span className="animate-clay-blink rounded-full bg-white px-2.5 py-0.5 text-love-600 underline underline-offset-2">
            OGGI
          </span>
          su questa pagina!
        </div>
      </div>

      <main className="flex flex-col pt-11">
        {/* 1 · HERO */}
        <PinkSlab className="pt-8! sm:pt-12!">
          <Container className="flex flex-col items-center text-center">
            <h1 className={`${display} px-2 text-[30px] font-extrabold leading-[1.18] tracking-tight sm:text-5xl md:text-6xl`}>
              Sii la leader che <Mark>trasforma</Mark> con materiali creativi, strategie innovative e{" "}
              <Mark>incontri con proposito.</Mark>
            </h1>

            <Image
              src={`${IMG}/kit-donne-proposito.webp`}
              alt={KIT}
              width={1395}
              height={997}
              priority
              className="mx-auto mt-7 w-full"
            />

            <p className="mt-7 text-lg font-medium leading-relaxed text-white/95 sm:text-xl">
              Tutto ciò di cui una leader ha bisogno:{" "}
              <SoftMark>
                dinamiche, rompighiaccio, idee per incontri, temi, strategie, attività per riunioni e ritiri
              </SoftMark>{" "}
              e oltre <strong className="font-extrabold">540 strumenti</strong> pensati per servire con creatività,
              chiarezza, amore e proposito.
            </p>

            <CheckList items={HERO_BULLETS} onPink className="mt-8 w-full text-left" />

            <CtaButton href="#offerta" className="mt-10">
              VOGLIO RICEVERE I MATERIALI
            </CtaButton>
          </Container>
        </PinkSlab>

        {/* 2 · Cosa include */}
        <LightSection>
          <Container>
            <h2 className={`${display} text-center text-3xl font-black leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl`}>
              Cosa include il <span className="text-love-500">{KIT}</span>?
            </h2>

            <CheckList items={INCLUDES_TOP} className="mt-10" />

            <Image
              src={`${IMG}/kit-donne-proposito.webp`}
              alt={`Materiali del ${KIT}`}
              width={1395}
              height={997}
              className="mt-8 w-full"
            />

            <CheckList items={INCLUDES_BOTTOM} className="mt-10" />
          </Container>
        </LightSection>

        {/* 3 · Sigilli di fiducia */}
        <LightSection className="pt-0">
          <Container className="grid grid-cols-1 gap-5">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="clay-card flex flex-col items-center gap-3 rounded-[32px] px-6 py-6 text-center">
                {badge.icon ? (
                  <Image src={`${IMG}/${badge.icon}`} alt="" width={512} height={512} className="h-[84px] w-[84px]" />
                ) : (
                  <span className="clay-orb inline-flex h-[84px] w-[84px] items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white">
                    <Check className="h-11 w-11" strokeWidth={3.5} />
                  </span>
                )}
                <span className={`${display} text-2xl font-extrabold text-ink`}>{badge.label}</span>
              </div>
            ))}
          </Container>
        </LightSection>

        {/* 4 · Avrai accesso a + 5 · Date + 6 · Bonus */}
        <PinkSlab id="contenuto">
          <Container>
            <SectionTitle onPink>
              Con il <Mark>{KIT}</Mark> avrai accesso a:
            </SectionTitle>

            <div className="mt-10 flex flex-col gap-8">
              {DELIVERABLES.map((d) => {
                const title = (
                  <h3 className={`${display} px-2 text-center text-2xl font-extrabold leading-tight text-white`}>{d.title}</h3>
                );
                return (
                  <article key={d.title} className="clay-red-card flex flex-col gap-5 rounded-[32px] p-4 sm:p-8">
                    {d.titleFirst && title}
                    <Image src={`${IMG}/${d.img}`} alt={d.title} width={d.w} height={d.h} className="w-full" />
                    {!d.titleFirst && title}
                  </article>
                );
              })}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href="#offerta">VOGLIO RICEVERE I MATERIALI</CtaButton>
            </div>
          </Container>

          {/* 5 · Date */}
          <Container className="mt-16">
            <div className="clay-red-card flex flex-col items-center gap-6 rounded-[48px] px-6 py-10 text-center">
              <h2 className={`${display} text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl`}>
                ACQUISTANDO IL <Mark>4, 5 E 6 NOVEMBRE</Mark> RICEVI ANCHE
              </h2>
              <IconOrb tone="white">
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>
          </Container>

          {/* 6 · Bonus */}
          <Container className="mt-16">
            <SectionTitle onPink>
              <Mark>BONUS esclusivi</Mark>
            </SectionTitle>
            <div className="mt-8 flex justify-center">
              <IconOrb tone="white">
                <Gift className="h-8 w-8" strokeWidth={2.5} />
              </IconOrb>
            </div>
            <p className="mt-8 text-center text-lg font-medium leading-relaxed text-white/95">
              Acquistando ora non ti assicuri solo il materiale principale: ricevi anche{" "}
              <SoftMark>bonus esclusivi</SoftMark> che arricchiranno ancora di più i tuoi incontri con le donne del tuo
              ministero.
            </p>

            <div className="mt-10 flex flex-col gap-8">
              {/* 1º bonus: layout proprio (titolo → immagine → sottotitolo → descrizione) */}
              <article className="clay-red-card flex flex-col gap-5 rounded-[32px] p-4 text-center sm:p-8">
                <h3 className={`${display} text-2xl font-extrabold leading-tight text-white`}>
                  Attività Guidata: Imparando a Perdonare
                </h3>
                <Image
                  src={`${IMG}/attivita-perdonare.webp`}
                  alt="Attività Guidata: Imparando a Perdonare"
                  width={1267}
                  height={1014}
                  className="w-full"
                />
                <h4 className={`${display} text-xl font-extrabold text-white`}>Attività da svolgere con le donne:</h4>
                <p className="px-2 text-left text-base font-medium leading-relaxed text-white/90">
                  Una dinamica guidata e profonda sul perdono, creata per aiutare ogni donna a riconoscere le ferite del
                  cuore, comprendere il vero significato del perdono e vivere un percorso di guarigione, libertà emotiva e
                  restaurazione spirituale, in un ambiente sicuro e accogliente.
                </p>
                <BonusPrice price="Valore €24,90" />
              </article>

              {BONUSES.map((b) => (
                <article key={b.title} className="clay-red-card flex flex-col gap-5 rounded-[32px] p-4 pb-8 text-center sm:p-8">
                  <Image
                    src={`${IMG}/${b.img}`}
                    alt={b.title}
                    width={b.w}
                    height={b.h}
                    className={`mx-auto w-full ${b.w < b.h ? "max-w-[80%]" : ""}`}
                  />
                  <h3 className={`${display} px-2 text-2xl font-extrabold leading-tight text-white`}>{b.title}</h3>
                  {b.text && (
                    <p className="px-2 text-left text-base font-medium leading-relaxed text-white/90">{b.text}</p>
                  )}
                  <BonusPrice price={b.price} />
                </article>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href="#offerta">VOGLIO RICEVERE I MATERIALI</CtaButton>
            </div>
          </Container>
        </PinkSlab>

        {/* 7 · Risorse pratiche */}
        <LightSection>
          <Container>
            <h2 className={`${display} clay-text-gradient text-center text-5xl font-black leading-[1.1] tracking-tight md:text-6xl`}>
              Insieme stiamo trasformando i ministeri!
            </h2>
            <div className="mt-8 flex justify-center">
              <IconOrb>
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>

            <div className="mx-auto mt-12 flex max-w-[480px] flex-col gap-8">
              {FEATURES.map((f) => (
                <div key={f.title} className="clay-card flex flex-col items-center gap-4 rounded-[32px] p-8 text-center">
                  <Image
                    src={`${IMG}/${f.img}`}
                    alt=""
                    width={512}
                    height={512}
                    className="h-32 w-32 object-contain mix-blend-multiply"
                  />
                  <h3 className={`${display} text-2xl font-extrabold leading-tight text-ink`}>{f.title}</h3>
                  <p className="text-base font-medium leading-relaxed text-muted">{f.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </LightSection>

        {/* 8 · Perché + Per chi */}
        <PinkSlab>
          <Container>
            <SectionTitle onPink>
              Perché il <Mark>{KIT}</Mark> trasformerà il tuo ministero?
            </SectionTitle>

            <Image
              src={`${IMG}/kit-donne-proposito.webp`}
              alt={`Materiali del ${KIT}`}
              width={1395}
              height={997}
              className="mt-8 w-full"
            />

            <div className="clay-red-card mt-8 rounded-[32px] p-6 sm:p-8">
              <CheckList items={WHY} onPink />
            </div>

            <SectionTitle onPink className="mt-14">
              Per chi è indispensabile questo materiale?
            </SectionTitle>

            <div className="clay-red-card mt-10 rounded-[32px] p-6 sm:p-8">
              <CheckList items={FOR_WHOM} onPink />
            </div>
          </Container>
        </PinkSlab>

        {/* 9 · Offerta */}
        <LightSection id="offerta" className="scroll-mt-20">
          <Container>
            <SectionTitle>ABBIAMO QUALCOSA DI SPECIALE PER TE</SectionTitle>
            <div className="mt-8 flex justify-center">
              <IconOrb>
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>

            <div className="relative mt-14">
              {/* Sigillo "Il più venduto" sopra il card */}
              <div className="absolute -top-5 left-1/2 z-20 -translate-x-1/2">
                <span
                  className={`${display} clay-orb inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-br from-white to-[#fde3ef] px-5 py-2.5 text-sm font-black tracking-wide text-love-600`}
                >
                  🌟 Il più venduto
                </span>
              </div>

              <div className="clay-red-slab relative overflow-hidden rounded-[48px] px-5 pb-10 pt-14 text-white sm:px-10">
                <div className="relative z-10 flex flex-col items-center text-center">
                  <h3 className={`${display} text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl`}>
                    {KIT}
                    <br />
                    <Mark>PREMIUM</Mark>
                  </h3>

                  <Image
                    src={`${IMG}/kit-donne-proposito.webp`}
                    alt={KIT}
                    width={1395}
                    height={997}
                    className="mt-8 w-full"
                  />

                  <div className="mt-8 w-full text-left">
                    <ul className="flex flex-col gap-3">
                      {OFFER_ITEMS.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckOrb size="sm" />
                          <span className="pt-0.5 text-[15px] font-bold leading-snug text-white">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className={`${display} mt-10 text-xl font-extrabold text-white/75 line-through decoration-2`}>
                    INVECE DI €127,00
                  </p>
                  <p className={`${display} mt-1 text-2xl font-black tracking-wide`}>SOLO OGGI</p>
                  <p className={`${display} mt-1 text-8xl font-black leading-none tracking-tight`}>€14,90</p>
                  <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-love-600 shadow-[var(--shadow-clay-orb)]">
                    <TriangleAlert className="h-4 w-4 text-[#f59e0b]" strokeWidth={2.75} />
                    Puoi pagare nella tua valuta locale.
                  </p>
                  <p className="mt-6 text-sm font-bold text-white/90">Pagamento unico</p>

                  <CtaButton href={CHECKOUT_URL} className="mt-6 sm:min-w-[320px]">
                    Acquista ora
                  </CtaButton>
                  <p className="mt-3 text-xs font-bold uppercase tracking-widest text-white/85">Pagamento sicuro al 100%</p>
                </div>
              </div>
            </div>
          </Container>
        </LightSection>

        {/* 10 · Garanzia */}
        <PinkSlab>
          <Container>
            <div className="clay-red-card flex flex-col items-center gap-6 rounded-[48px] px-6 py-10 text-center sm:px-10">
              <span className="clay-orb inline-flex h-[120px] w-[120px] items-center justify-center rounded-full bg-gradient-to-br from-white to-[#fde3ef] text-love-600">
                <ShieldCheck className="h-16 w-16" strokeWidth={2.25} />
              </span>
              <h2 className={`${display} text-3xl font-black tracking-tight sm:text-4xl`}>7 GIORNI DI GARANZIA</h2>
              <p className="text-lg font-medium leading-relaxed text-white/95">
                Puoi acquistare in tutta tranquillità. Dopo la conferma avrai 7 giorni per accedere al materiale ed
                esplorarlo nei dettagli: se non è ciò che ti aspettavi, puoi richiedere il rimborso completo, senza
                complicazioni.
              </p>
              <CtaButton href={CHECKOUT_URL} className="sm:min-w-[320px]">
                Acquista ora
              </CtaButton>
            </div>
          </Container>
        </PinkSlab>

        {/* 11 · Chi siamo + FAQ */}
        <LightSection>
          <Container>
            <h2 className={`${display} clay-text-gradient text-center text-5xl font-black leading-[1.1] tracking-tight md:text-6xl`}>
              Chi siamo?
            </h2>

            <div className="mt-10 flex justify-center">
              <Image
                src={`${IMG}/logo-ministerio-academy.png`}
                alt="Ministerio.Academy"
                width={1024}
                height={1024}
                className="h-[180px] w-[180px] rounded-full shadow-[0_10px_24px_rgba(120,0,60,0.18)]"
              />
            </div>

            <div className="clay-card mt-12 rounded-[32px] p-6 text-base font-medium leading-relaxed text-muted sm:p-8 sm:text-lg [&_strong]:font-bold [&_strong]:text-ink">
              La pace del Signore! 💗
              <br />
              <br />
              <strong>Ministerio.Academy è nato nel 2020, in piena pandemia</strong>, quando abbiamo deciso che il nostro
              ministero non poteva fermarsi.
              <br />
              <br />
              In un periodo in cui tanti incontri non potevano più svolgersi in presenza, abbiamo iniziato a creare{" "}
              <strong>piccoli kit, dinamiche e materiali per il ministero</strong> per mantenere i nostri incontri vivi,
              speciali e pieni di scopo.
              <br />
              <br />
              Prima abbiamo preparato risorse per il nostro ministero delle donne… poi per i giovani, le coppie e gli
              uomini. Condividevamo le dinamiche nei gruppi, negli incontri e nei gruppi familiari, e a poco a poco
              abbiamo iniziato a ricevere <strong>messaggi, testimonianze e apprezzamenti da parte di responsabili</strong>{" "}
              che volevano usare quei materiali anche nelle loro chiese.
              <br />
              <br />
              È lì che abbiamo capito che{" "}
              <strong>
                Dio ci stava chiamando ad aiutare non solo il nostro ministero locale, ma anche altri ministeri in tutto
                il mondo
              </strong>{" "}
              🌎✨
              <br />
              <br />
              Da allora, <strong>Ministerio.Academy ha aiutato migliaia di responsabili cristiani</strong> a trasformare
              semplici incontri in esperienze più accoglienti, creative, emozionanti e spiritualmente significative.
              <br />
              <br />
              Crediamo che{" "}
              <strong>ogni incontro possa diventare un momento che tocca i cuori e avvicina le persone a Dio.</strong>
              <br />
              <br />
              Per questo oggi condividiamo <strong>idee, dinamiche, strumenti, risorse e kit per il ministero</strong>{" "}
              pensati per rafforzare gruppi familiari, incontri e riunioni cristiane in modo pratico, bello e
              significativo.
              <br />
              <br />
              Crediamo anche che Dio parli nei piccoli dettagli: in una dinamica ben pensata, in una conversazione
              sincera, in un ambiente preparato con amore, e in ogni momento che aiuta una persona a sentirsi ascoltata,
              accolta e più vicina alla Sua presenza ✨
              <br />
              <br />
              <strong>
                Scopri di più su Instagram:{" "}
                <a
                  href="https://www.instagram.com/ministerio.academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-love-500 underline-offset-4 hover:underline"
                >
                  @ministerio.academy
                </a>
              </strong>
              <br />
              <br />
              Benvenuti! ❤️
            </div>

            <div className="mt-10 flex justify-center">
              <CtaButton href={CHECKOUT_URL} className="sm:min-w-[320px]">
                Acquista ora
              </CtaButton>
            </div>

            {/* FAQ */}
            <div className="mt-20 text-center">
              <p className={`${display} clay-text-gradient text-7xl font-black leading-none tracking-tight sm:text-8xl`}>FAQ</p>
              <h2 className={`${display} mt-3 text-2xl font-black tracking-wide text-ink sm:text-3xl`}>DOMANDE FREQUENTI</h2>
            </div>

            <div className="mt-10 flex flex-col gap-5">
              {FAQ.map((item, i) => (
                <details
                  key={item.q}
                  open={i === 0}
                  className="clay-faq clay-card group rounded-[24px] px-5 py-1 hover:-translate-y-1"
                >
                  <summary className="flex min-h-16 cursor-pointer items-center gap-4 py-3">
                    <span className="clay-orb inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ff3d9a] to-[#d4006f] text-white">
                      <Plus className="faq-icon-closed h-5 w-5" strokeWidth={3} />
                      <Minus className="faq-icon-open h-5 w-5" strokeWidth={3} />
                    </span>
                    <span className={`${display} text-left text-lg font-extrabold leading-snug text-ink`}>{item.q}</span>
                  </summary>
                  <div className="pb-5 pl-14 pr-1 text-base font-medium leading-relaxed text-muted [&_strong]:font-bold [&_strong]:text-ink">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </Container>
        </LightSection>

        {/* 12 · Footer */}
        <footer className="pb-6 text-center text-[13px]">
          <div className="font-medium">
            <a href="#" className="mx-2.5 text-love-ink hover:underline">
              Informativa sulla Privacy
            </a>
            <span className="text-muted">|</span>
            <a href="#" className="mx-2.5 text-love-ink hover:underline">
              Termini di Servizio
            </a>
          </div>
          <p className="mt-4 text-muted">© 2026 Tutti i diritti riservati.</p>
        </footer>
      </main>
    </div>
  );
}

function BonusPrice({ price }: { price: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="clay-orb inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-white to-[#fde3ef] text-love-600">
        <Gift className="h-6 w-6" strokeWidth={2.5} />
      </span>
      <span className={`${display} text-lg font-extrabold text-white/75 line-through decoration-2`}>{price}</span>
      <span
        className={`${display} clay-orb inline-flex items-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 px-5 py-1.5 text-base font-black tracking-widest text-white`}
      >
        GRATIS
      </span>
    </div>
  );
}
