'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

// ✏️ Buradan kişiselleştir
const NAME = 'Sevgilim';
const SIGNATURE = 'Melih';
const LETTER = [
  'Bana sevmeyi ve sabretmeyi öğrettin.',
  'Seni çok seviyorum öğretmenim.',
];
const CLOSING = 'Öğretmenler Günün kutlu olsun sevgilim 🧡';

const PHOTOS = [
  {
    src: '/ogretmenler-gunu/foto-1.jpg',
    caption: 'En sevdiğim ders: sen',
    rotate: -6,
  },
  {
    src: '/ogretmenler-gunu/foto-2.jpg',
    caption: 'Sınıfın en güzeli 🧡',
    rotate: 5,
  },
];

const FLOATERS = ['🧡', '🌼', '🧃', '😴', '🍊', '🧡', '🌼', '🛌'];
const BURST = ['🧡', '🌼', '🧃', '😴', '🍊', '✨'];

type Particle = {
  id: number;
  emoji: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
  x: number;
  y: number;
};

const makeParticles = (count: number, pool: string[]): Particle[] =>
  Array.from({ length: count }, (_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const dist = 120 + Math.random() * 260;
    return {
      id: i,
      emoji: pool[i % pool.length],
      left: Math.random() * 100,
      size: 18 + Math.random() * 22,
      duration: 9 + Math.random() * 8,
      delay: Math.random() * 10,
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * dist,
    };
  });

const Polaroid = ({
  photo,
  index,
  visible,
  baseDelay = 0.3,
}: {
  photo: (typeof PHOTOS)[number];
  index: number;
  visible: boolean;
  baseDelay?: number;
}) => (
  <motion.figure
    initial={{ opacity: 0, y: 40, rotate: 0 }}
    animate={
      visible
        ? { opacity: 1, y: 0, rotate: photo.rotate }
        : { opacity: 0, y: 40, rotate: 0 }
    }
    transition={{
      delay: baseDelay + index * 0.35,
      type: 'spring',
      stiffness: 70,
    }}
    whileHover={{ rotate: 0, scale: 1.06, zIndex: 20 }}
    whileTap={{ rotate: 0, scale: 1.08, zIndex: 20 }}
    style={{ zIndex: PHOTOS.length - index }}
    className="relative w-40 shrink-0 bg-[#fdfbf5] p-2 pb-9 shadow-[0_15px_35px_rgba(0,0,0,0.45)] sm:w-56 sm:p-3 sm:pb-12 lg:w-64"
  >
    {/* Bant */}
    <span
      aria-hidden
      className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 -rotate-3 bg-[#f3e3a1]/80 shadow-sm sm:h-7 sm:w-24"
    />
    <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
      <Image
        src={photo.src}
        alt={photo.caption}
        fill
        unoptimized
        sizes="(max-width: 640px) 150px, 256px"
        className="object-cover"
      />
    </div>
    <figcaption className="absolute inset-x-0 bottom-1.5 whitespace-nowrap px-1 text-center text-base leading-tight text-[#3b2f2f] sm:bottom-2 sm:text-2xl">
      {photo.caption}
    </figcaption>
  </motion.figure>
);

export const TeachersDay = () => {
  const [stage, setStage] = useState<'closed' | 'opening' | 'open'>('closed');
  const [floaters, setFloaters] = useState<Particle[]>([]);
  const [burst, setBurst] = useState<Particle[]>([]);

  // Rastgele değerleri yalnızca istemcide üret (hydration uyumsuzluğu olmasın)
  useEffect(() => {
    setFloaters(makeParticles(22, FLOATERS));
  }, []);

  const openEnvelope = () => {
    if (stage !== 'closed') return;
    setStage('opening');
    setTimeout(() => {
      setBurst(makeParticles(36, BURST));
      setStage('open');
    }, 900);
  };

  const isOpen = stage === 'open';

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#22402f] text-[#f4f1e8] [-webkit-tap-highlight-color:transparent] [font-family:var(--font-hand)] supports-[height:100dvh]:min-h-dvh">
      {/* Kara tahta dokusu */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            'radial-gradient(ellipse at 15% 10%, rgba(255,255,255,0.10), transparent 45%)',
            'radial-gradient(ellipse at 85% 85%, rgba(255,255,255,0.07), transparent 50%)',
            'radial-gradient(ellipse at 60% 40%, rgba(0,0,0,0.25), transparent 60%)',
            'repeating-linear-gradient(115deg, rgba(255,255,255,0.015) 0 2px, transparent 2px 9px)',
          ].join(','),
        }}
      />

      {/* Tebeşir karalamaları */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 select-none text-white/25"
      >
        <span className="absolute left-[6%] top-[8%] hidden -rotate-12 text-6xl font-bold sm:block">
          A+
        </span>
        <span className="absolute right-[7%] top-[10%] hidden rotate-6 text-4xl sm:block">
          1 + 1 = 🧡
        </span>
        <span className="absolute bottom-[14%] left-[5%] hidden rotate-3 text-3xl md:block">
          sen + ben = ∞
        </span>
        <span className="absolute bottom-[16%] right-[6%] hidden -rotate-6 text-3xl md:block">
          ☆ ☆ ☆
        </span>
        <svg
          className="absolute left-[18%] top-[22%] hidden size-16 md:block"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M32 18c-6-6-20-4-20 12 0 14 10 26 20 22 10 4 20-8 20-22 0-16-14-18-20-12Z" />
          <path d="M32 18c0-6 3-10 8-12M34 12c4-3 9-2 11 1" />
        </svg>
      </div>

      {/* Ahşap çerçeve */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-30 border-[14px] border-[#7a4a22] shadow-[inset_0_0_50px_rgba(0,0,0,0.65)] sm:border-[22px]"
        style={{
          borderImage:
            'linear-gradient(135deg,#9a6334,#6b3f1c,#8b5a2b,#5e3517) 1',
        }}
      />

      {/* Uçuşan emojiler */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {floaters.map((f) => (
          <motion.span
            key={f.id}
            className="absolute bottom-[-60px] select-none"
            style={{ left: `${f.left}%`, fontSize: f.size }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: '-115vh',
              opacity: [0, 0.8, 0.8, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: f.duration,
              delay: f.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {f.emoji}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-5 pb-16 pt-12 supports-[height:100dvh]:min-h-dvh sm:px-6 sm:py-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl tracking-wide text-[#ffb36b]"
        >
          ✏️ Bugünün konusu
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-1 text-center text-6xl font-bold leading-tight drop-shadow-[0_0_8px_rgba(255,255,255,0.35)] sm:text-8xl"
        >
          24 Kasım
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-1 h-1 w-48 origin-left rounded-full bg-[#f4f1e8]/70"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-3 text-center text-[1.6rem] leading-snug sm:text-4xl"
        >
          Dünyanın en güzel öğretmenine 🍊
        </motion.p>

        <div className="mt-8 flex w-full flex-col items-center gap-10 sm:mt-12 lg:flex-row lg:items-center lg:justify-center lg:gap-8">
          {/* Sol foto (masaüstü) */}
          <div className="hidden lg:block">
            <Polaroid photo={PHOTOS[0]} index={0} visible={isOpen} />
          </div>

          <div className="relative flex w-full max-w-lg justify-center">
            {/* Kalp patlaması */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 z-20"
            >
              {burst.map((p) => (
                <motion.span
                  key={p.id}
                  className="absolute select-none"
                  style={{ fontSize: p.size }}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                  animate={{ x: p.x, y: p.y, scale: 1, opacity: 0 }}
                  transition={{ duration: 1.6, ease: 'easeOut' }}
                >
                  {p.emoji}
                </motion.span>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {!isOpen ? (
                <motion.button
                  key="envelope"
                  type="button"
                  onClick={openEnvelope}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{
                    opacity: 0,
                    y: 40,
                    scale: 0.8,
                    transition: { duration: 0.35 },
                  }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative h-[187px] w-72 cursor-pointer focus:outline-none sm:h-52 sm:w-80"
                  aria-label="Mektubu aç"
                >
                  <div className="absolute left-0 top-0 h-52 w-80 origin-top-left scale-90 [perspective:800px] sm:scale-100">
                    <motion.div
                      className="absolute inset-0"
                      animate={
                        stage === 'closed'
                          ? { rotate: [0, -2, 2, 0] }
                          : undefined
                      }
                      transition={{
                        delay: 2,
                        duration: 1.2,
                        repeat: Infinity,
                        repeatDelay: 1.5,
                      }}
                    >
                      {/* Zarfın içi */}
                      <div className="absolute inset-0 rounded-md bg-[#d9bf98] shadow-2xl" />
                      {/* Dışarı çıkan kâğıt */}
                      <motion.div
                        className="absolute inset-x-5 top-4 h-40 rounded-sm bg-[#fffdf6]"
                        animate={stage === 'opening' ? { y: -70 } : { y: 0 }}
                        transition={{ delay: 0.35, duration: 0.5 }}
                      />
                      {/* Zarf ön yüzü */}
                      <div
                        className="absolute inset-0 rounded-md bg-[#f6e7d0]"
                        style={{
                          clipPath:
                            'polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)',
                        }}
                      />
                      {/* Kapak */}
                      <motion.div
                        className="absolute inset-x-0 top-0 h-32 origin-top bg-[#ead3b0] [backface-visibility:hidden]"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                        animate={
                          stage === 'opening'
                            ? { rotateX: 180 }
                            : { rotateX: 0 }
                        }
                        transition={{ duration: 0.45 }}
                      />
                      {/* Mühür */}
                      <motion.div
                        className="absolute left-1/2 top-[110px] flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f39c4a] text-2xl shadow-lg ring-4 ring-[#e07b24]"
                        animate={
                          stage === 'opening'
                            ? { scale: 0, opacity: 0 }
                            : { scale: [1, 1.12, 1] }
                        }
                        transition={
                          stage === 'opening'
                            ? { duration: 0.25 }
                            : { duration: 1.4, repeat: Infinity }
                        }
                      >
                        🧡
                      </motion.div>
                      <span className="absolute inset-x-0 bottom-4 text-2xl font-bold text-[#7a4b2a]">
                        Bana tıkla, {NAME} 🧡
                      </span>
                    </motion.div>
                  </div>
                </motion.button>
              ) : (
                <motion.article
                  key="letter"
                  initial={{ opacity: 0, y: 60, rotate: -3 }}
                  animate={{ opacity: 1, y: 0, rotate: -1 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 14 }}
                  className="relative w-full rounded-sm bg-[#fffdf6] px-8 pb-8 pt-10 text-left text-[#3b2f2f] shadow-[0_25px_50px_rgba(0,0,0,0.5)] sm:px-12"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(transparent, transparent 39px, #cfe0f3 39px, #cfe0f3 40px)',
                    backgroundPosition: '0 30px',
                  }}
                >
                  {/* Defter delikleri */}
                  <div
                    aria-hidden
                    className="absolute inset-y-6 left-2 flex flex-col justify-around"
                  >
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="size-3 rounded-full bg-[#22402f] shadow-inner"
                      />
                    ))}
                  </div>
                  {/* Defter kenar çizgisi */}
                  <div
                    aria-hidden
                    className="absolute inset-y-0 left-7 w-px bg-[#e8a0a0] sm:left-9"
                  />
                  {LETTER.map((line, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.7, duration: 0.6 }}
                      className="pl-3 text-3xl leading-[40px] sm:text-4xl sm:leading-[40px]"
                    >
                      {line}
                    </motion.p>
                  ))}
                  <motion.p
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + LETTER.length * 0.7 }}
                    className="mt-[40px] pl-3 text-3xl font-bold leading-[40px] text-[#e0701b] sm:text-4xl sm:leading-[40px]"
                  >
                    {CLOSING}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + LETTER.length * 0.7 }}
                    className="pr-2 text-right text-3xl leading-[40px]"
                  >
                    — {SIGNATURE}
                  </motion.p>

                  {/* Karne notu */}
                  <motion.div
                    initial={{ opacity: 0, scale: 2.5, rotate: 30 }}
                    animate={{ opacity: 1, scale: 1, rotate: 12 }}
                    transition={{
                      delay: 1.3 + LETTER.length * 0.7,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    className="absolute -right-1 -top-9 flex size-20 flex-col items-center justify-center rounded-full border-4 border-double border-[#e0701b] bg-[#fffdf6] text-[#e0701b] shadow-lg sm:-right-8 sm:size-24"
                  >
                    <span className="text-base leading-none">Notun</span>
                    <span className="text-4xl font-bold leading-none sm:text-5xl">
                      100
                    </span>
                  </motion.div>
                </motion.article>
              )}
            </AnimatePresence>
          </div>

          {/* Sağ foto (masaüstü) */}
          <div className="hidden lg:block">
            <Polaroid photo={PHOTOS[1]} index={1} visible={isOpen} />
          </div>

          {/* Mobil: fotolar yan yana */}
          {isOpen && (
            <div className="-mt-2 flex flex-col items-center lg:hidden">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.6 }}
                className="mb-5 text-2xl text-[#ffb36b]"
              >
                Bizim sınıf fotoğraflarımız 📸
              </motion.p>
              <div className="flex justify-center -space-x-3">
                {PHOTOS.map((photo, i) => (
                  <Polaroid
                    key={photo.src}
                    photo={photo}
                    index={i}
                    visible
                    baseDelay={2.8}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tebeşir rafı */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[14px] z-20 flex h-5 items-end justify-center gap-3 bg-gradient-to-b from-[#8b5a2b] to-[#5e3517] px-10 shadow-[0_-4px_10px_rgba(0,0,0,0.4)] sm:bottom-[22px]"
      >
        <span className="mb-4 h-3 w-12 rounded-sm bg-white/90" />
        <span className="mb-4 h-3 w-8 rounded-sm bg-[#f6d77a]" />
        <span className="mb-4 h-3 w-10 rounded-sm bg-[#ff9f43]" />
        <span className="mb-4 ml-6 h-5 w-16 rounded-sm bg-[#3d3d3d] shadow-[inset_0_-6px_0_#cfcfcf]" />
      </div>
    </main>
  );
};
