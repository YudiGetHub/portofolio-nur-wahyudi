import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Target,
  CheckCircle2,
  Coins,
  ScrollText,
  MessageCircle,
  Mail,
  MapPin,
  Play,
  Pause,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

const PERMANENT_IMAGE_URL = "https://i.ibb.co.com/tT5jSqmj/Nur-Wahyudi.jpg";

const MY_CERTIFICATES = [
  { name: "Sertifikat Kompetensi Akuntansi", url: "https://i.ibb.co.com/v4RWFG4F/Sertifikat-Kompetensi-page-0001.jpg" },
  { name: "Sertifikat Organisasi", url: "https://i.ibb.co.com/VYFC0gMJ/Sertifikat-OSIS-Nur-Wahyudi-page-0001.jpg" },
  { name: "Sertifikat Prakerin GRAMEDIA", url: "https://i.ibb.co.com/wZpZ0tBQ/Sertifikat-PT-KOMPAS-GRAMEDIA-page-0001.jpg" },
  { name: "Sertifikat PT. AEON STORE INDONESIA", url: "https://i.ibb.co.com/ZR6n6TF9/Sertifikat-PT-AEON-STORE-INDONESIA-page-0001.jpg" },
  { name: "Sertifikat PT. TRANSMART CARREFOUR", url: "https://i.ibb.co.com/Q7FD6tRD/Sertifikat-PT-Trans-Retail-Indonesia-page-0001.jpg" },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const SLIDE_DURATION = 6000; // 6 detik per slide

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, SLIDE_DURATION);
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const slides = [
    {
      title: "PROFIL PROFESIONAL",
      content: (
        <div className="flex flex-col items-center justify-center gap-6 mt-12">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="w-64 h-64 rounded-full border-8 border-emerald-500/30 overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.2)]"
          >
            <img src={PERMANENT_IMAGE_URL} alt="Yudi" className="w-full h-full object-cover" />
          </motion.div>
          <div className="text-center">
            <motion.h1 initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-5xl font-black uppercase tracking-tighter">Nur Wahyudi</motion.h1>
            <p className="text-emerald-400 font-bold tracking-[0.3em]">ADMINISTRASI & AKUNTANSI</p>
          </div>
        </div>
      )
    },
    {
        title: "KATA PENGANTAR",
        content: (
          <div className="max-w-3xl mx-auto p-6 mt-10 bg-slate-900/50 rounded-3xl border border-white/10 backdrop-blur-xl">
            <ScrollText className="text-emerald-500 mb-4" size={40} />
            <p className="text-xl leading-relaxed italic text-slate-300">
              "Besar harapan saya agar Bapak/Ibu berkenan memberikan kesempatan bagi saya untuk berkontribusi dan memberikan dedikasi terbaik bagi kemajuan perusahaan."
            </p>
            <p className="mt-6 font-black text-emerald-500 uppercase">— Nur Wahyudi</p>
          </div>
        )
    },
    {
      title: "PENGALAMAN KERJA",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-10 p-4">
          <div className="bg-emerald-600 p-6 rounded-3xl shadow-xl">
            <Briefcase className="mb-2" />
            <h3 className="font-black text-2xl uppercase">PT Kovalen Mining</h3>
            <p className="text-emerald-100 text-sm">Staff Administrasi (2020-2025)</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700">
            <Coins className="text-emerald-500 mb-2" />
            <h3 className="font-black text-2xl uppercase leading-none">Manajemen Keuangan</h3>
            <p className="text-slate-400 text-sm mt-2">Mengelola arus kas harian dan laporan tahunan dengan presisi tinggi.</p>
          </div>
        </div>
      )
    },
    ...MY_CERTIFICATES.map(cert => ({
      title: "SERTIFIKASI",
      content: (
        <div className="flex flex-col items-center mt-10">
          <h3 className="text-emerald-400 font-black mb-4 uppercase">{cert.name}</h3>
          <img src={cert.url} className="h-[50vh] rounded-xl shadow-2xl border-4 border-white/5" alt="sertifikat" />
        </div>
      )
    }))
  ];

  return (
    <div className="w-full h-screen bg-[#020617] text-white overflow-hidden relative font-sans">
      {/* Progress Bar Atas */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-50">
        <motion.div
          key={currentSlide}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
          className="h-full bg-emerald-500"
        />
      </div>

      {/* Navigasi & Judul */}
      <div className="absolute top-8 left-0 w-full px-8 flex justify-between items-center z-40">
        <div>
          <p className="text-emerald-500 font-mono text-xs tracking-widest uppercase">Slide {currentSlide + 1} / {slides.length}</p>
          <h2 className="text-xl font-black uppercase italic">{slides[currentSlide].title}</h2>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setIsPlaying(!isPlaying)} className="p-3 bg-white/5 rounded-full hover:bg-emerald-500 transition-colors">
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>
      </div>

      {/* Area Konten Utama */}
      <div className="relative h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ x: 100, opacity: 0, filter: "blur(10px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ x: -100, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: "anticipate" }}
            className="w-full"
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Tombol Navigasi Manual Bawah */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center gap-10 z-40">
        <button onClick={prevSlide} className="group flex items-center gap-2 text-slate-500 hover:text-white transition-colors">
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> PREV
        </button>
        <button onClick={nextSlide} className="group flex items-center gap-2 text-slate-500 hover:text-white transition-colors">
          NEXT <ChevronRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
