import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  ScrollText,
  MessageCircle,
  Mail,
  MapPin,
  Play,
  Pause,
  ChevronRight,
  ChevronLeft,
  Volume2,
  VolumeX,
  ExternalLink,
  Award,
  Sparkles,
  CheckCircle
} from "lucide-react";

// --- DATA KONSTANTA ---
const PERMANENT_IMAGE_URL = "https://i.ibb.co.com/tT5jSqmj/Nur-Wahyudi.jpg";

const MY_CERTIFICATES = [
  { name: "Sertifikat Kompetensi Akuntansi", url: "https://i.ibb.co.com/v4RWFG4F/Sertifikat-Competensi-page-0001.jpg" },
  { name: "Sertifikat Organisasi", url: "https://i.ibb.co.com/VYFC0gMJ/Sertifikat-OSIS-Nur-Wahyudi-page-0001.jpg" },
  { name: "Sertifikat Prakerin GRAMEDIA", url: "https://i.ibb.co.com/wZpZ0tBQ/Sertifikat-PT-KOMPAS-GRAMEDIA-page-0001.jpg" },
  { name: "Sertifikat PT. AEON STORE INDONESIA", url: "https://i.ibb.co.com/ZR6n6TF9/Sertifikat-PT-AEON-STORE-INDONESIA-page-0001.jpg" },
  { name: "Sertifikat PT. TRANSMART CARREFOUR", url: "https://i.ibb.co.com/Q7FD6tRD/Sertifikat-PT-Trans-Retail-Indonesia-page-0001.jpg" },
];

// --- KOMPONEN UTAMA ---
export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const [isBackTracking, setIsBackTracking] = useState(false);
  const timerRef = useRef<any>(null);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/62881024040191`, "_blank");
  };

  // --- KONFIGURASI SLIDE ---
  const slides = [
    // 1. PROFIL
    {
      title: "Profil Profesional",
      speech: "Halo, saya Nur Wahyudi. Saya adalah seorang profesional di bidang administrasi dan akuntansi.",
      content: (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 p-8 w-full max-w-7xl mx-auto">
          {/* Foto Profil dengan Efek Glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ type: "spring", stiffness: 100 }}
            className="relative group"
          >
            {/* Ring Lighitng Effect */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-1000 scale-90 group-hover:scale-100"></div>
            
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-slate-800 overflow-hidden shadow-2xl z-10">
              <img src={PERMANENT_IMAGE_URL} alt="Yudi" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105" />
            </div>
            
            {/* Decorative Dots */}
            <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-cyan-400 rounded-tr-3xl translate-x-4 -translate-y-4 z-0 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-emerald-400 rounded-bl-3xl -translate-x-4 translate-y-4 z-0 opacity-50"></div>
          </motion.div>

          {/* Teks Profil */}
          <div className="text-center lg:text-left space-y-6 z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-300 text-xs font-bold uppercase tracking-[0.2em]"
            >
              <Sparkles size={14} className="text-cyan-400" />
              Available for Hire
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.3 }}
              className="text-6xl lg:text-8xl font-black text-white tracking-tighter leading-none"
            >
              NUR<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-slate-200">WAHYUDI</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-400 font-light max-w-md"
            >
              Administrative Specialist & Accounting Professional
            </motion.p>
          </div>
        </div>
      ),
    },
    // 2. KATA PENGANTAR
    {
      title: "Kata Pengantar",
      speech: "Kepada Bapak atau Ibu Pimpinan yang saya hormati. Melalui portofolio ini, saya bermaksud menyampaikan ketertarikan saya untuk bergabung dan berkontribusi di perusahaan yang Bapak atau Ibu pimpin.",
      content: (
        <div className="w-full max-w-4xl mx-auto relative">
          {/* Card Glassmorphism */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-[3rem] blur-xl transform scale-95"></div>
          <div className="relative p-10 md:p-16 rounded-[3rem] border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-2xl">
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10">
                <ScrollText className="text-emerald-400" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">Executive Summary</h2>
            </div>

            <p className="text-slate-300 leading-relaxed text-lg md:text-xl font-light border-l-4 border-emerald-500 pl-6 italic">
              "Dengan latar belakang pendidikan Akuntansi serta pengalaman kerja profesional, saya telah terbiasa bekerja dengan ketelitian tinggi, integritas, dan tanggung jawab penuh dalam mengelola administrasi serta keuangan."
            </p>

            <div className="mt-12 flex justify-between items-end border-t border-white/10 pt-8">
              <div>
                <p className="text-slate-500 text-sm uppercase tracking-widest mb-1">Hormat Saya,</p>
                <p className="text-3xl font-bold text-white">Nur Wahyudi</p>
              </div>
              <div className="hidden md:block text-right">
                 <p className="text-xs text-slate-500">Dibuat menggunakan</p>
                 <p className="text-sm font-bold text-slate-400">React & Framer Motion</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // 3. PENGALAMAN AEON
    {
      title: "Pengalaman: AEON Store",
      speech: "Pengalaman kerja pertama saya adalah sebagai Pramuniaga di PT Aeon Mall BSD. Tanggung jawab saya meliputi melayani kebutuhan informasi pelanggan dan menata tampilan produk.",
      content: <ExperienceSlide 
        title="PT AEON MALL BSD"
        role="Pramuniaga"
        date="Apr 2019 - Nov 2019"
        iconColor="text-purple-400"
        bgColor="bg-purple-500/10"
        borderColor="border-purple-500/30"
        tasks={[
          "Layanan Pelanggan Profesional",
          "Visual Merchandising",
          "Inventory Control"
        ]}
      />
    },
    // 4. PENGALAMAN TRANSMART
    {
      title: "Pengalaman: Transmart",
      speech: "Selanjutnya, saya bekerja sebagai Kasir di Transmart Carrefour. Kegiatan utama saya adalah memproses transaksi pembayaran dan menyusun laporan kas harian.",
      content: <ExperienceSlide 
        title="TRANSMART CARREFOUR"
        role="Cashier"
        date="Jan 2020 - Mar 2020"
        iconColor="text-cyan-400"
        bgColor="bg-cyan-500/10"
        borderColor="border-cyan-500/30"
        tasks={[
          "Akurasi Transaksi Pembayaran",
          "Laporan Pertanggungjawaban Kas",
          "Pelayanan Prima Standar Retail"
        ]}
      />
    },
    // 5. PENGALAMAN KOVALEN
    {
      title: "Pengalaman: PT Kovalen Mining",
      speech: "Pengalaman terbaru saya adalah di PT Kovalen Mining sebagai staff administrasi. Saya fokus pada manajemen keuangan dan pengarsipan dokumen.",
      content: <ExperienceSlide 
        title="PT KOVALEN MINING"
        role="Administrative Staff"
        date="Des 2020 - Jan 2025"
        highlight="5 Tahun Pengalaman"
        iconColor="text-emerald-400"
        bgColor="bg-emerald-500/10"
        borderColor="border-emerald-500/30"
        tasks={[
          "Manajemen Arus Kas Harian",
          "Pengarsipan Dokumen Terstruktur",
          "Laporan Keuangan Bulanan & Tahunan"
        ]}
      />
    },
    // 6 - 10. SERTIFIKAT (MAPPING DINAMIS)
    ...MY_CERTIFICATES.map((cert) => ({
      title: "Sertifikat",
      speech: `Ini adalah ${cert.name} yang saya miliki.`,
      content: (
        <div className="flex flex-col items-center justify-center gap-8 p-4 h-full">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center gap-3 px-6 py-3 bg-slate-800/80 rounded-full border border-white/10 shadow-xl backdrop-blur-sm"
          >
            <Award className="text-amber-400" size={20} />
            <h2 className="text-white font-bold text-sm uppercase tracking-widest">{cert.name}</h2>
          </motion.div>
          
          <div className="group relative w-full max-w-3xl aspect-[16/10] bg-slate-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:border-amber-500/50 hover:shadow-amber-500/10">
            <img src={cert.url} alt={cert.name} className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
            
            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8">
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-bold text-sm hover:bg-amber-400 transition-colors">
                Lihat Fullscreen <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      ),
    })),
    // 11. KONTAK
    {
      title: "Kontak",
      speech: "Silakan hubungi saya melalui WhatsApp atau Email untuk jadwal wawancara. Terima kasih.",
      content: (
        <div className="flex flex-col items-center justify-center text-center space-y-16 p-8 max-w-5xl mx-auto h-full">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tight leading-none">
              LET'S<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">CONNECT</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-md mx-auto">Saya siap berkontribusi penuh untuk kesuksesan tim Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* WhatsApp Button */}
            <motion.button 
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-6 bg-emerald-600 hover:bg-emerald-500 p-8 rounded-3xl transition-all duration-300 shadow-2xl shadow-emerald-900/30 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-10"></div>
              <MessageCircle size={40} className="text-white relative z-10" />
              <div className="text-left relative z-10">
                <div className="text-[10px] font-bold text-emerald-200 uppercase tracking-wider opacity-80">Chat Instant</div>
                <div className="font-black text-white text-2xl uppercase">WhatsApp</div>
              </div>
            </motion.button>

            {/* Email Card */}
            <div className="flex items-center justify-center gap-6 bg-slate-800/50 p-8 rounded-3xl border border-white/5 group hover:border-cyan-500/30 transition-colors">
              <div className="p-4 rounded-2xl bg-slate-700/50 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all duration-300">
                <Mail size={32} />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email Resmi</div>
                <div className="font-bold text-white text-lg tracking-wide">yudi02012001@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-500 text-sm">
            <MapPin size={16} className="text-red-400" />
            <span>Pagedangan, Tangerang - Banten</span>
          </div>
        </div>
      ),
    },
  ];

  // --- KOMPONEN KECIL UNTUK PENGALAMAN (AGAR RAPI) ---
  function ExperienceSlide({ title, role, date, tasks, iconColor, bgColor, borderColor, highlight } : any) {
    return (
      <div className="w-full max-w-5xl mx-auto p-6 space-y-8 text-left">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-8">
          <div className="flex items-center gap-6">
            <div className={`p-4 ${bgColor} rounded-3xl border ${borderColor} shadow-xl`}>
              <Briefcase size={32} className={iconColor} />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">{title}</h2>
              <p className={`${iconColor} font-bold uppercase text-sm tracking-[0.2em] mt-2`}>{role}</p>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
             <div className="px-4 py-2 bg-slate-800/80 rounded-xl text-slate-300 text-xs font-mono border border-white/5">{date}</div>
             {highlight && <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">{highlight}</span>}
          </div>
        </div>

        {/* Tasks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tasks.map((task: string, idx: number) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className={`p-6 bg-slate-900/50 rounded-2xl border ${borderColor} hover:border-white/20 transition-all group relative overflow-hidden`}
            >
              {/* Decorative Number */}
              <div className="absolute -right-4 -bottom-4 text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                0{idx + 1}
              </div>
              <div className="flex items-start gap-3 relative z-10">
                <CheckCircle size={18} className={`${iconColor} mt-0.5 flex-shrink-0`} />
                <p className="text-white font-medium text-base">{task}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // --- LOGIC NAVIGASI & SUARA ---
  const nextSlide = useCallback(() => {
    if (currentSlide === slides.length - 1) {
      setIsPlaying(false);
      return;
    }
    setIsBackTracking(false);
    setCurrentSlide((prev) => prev + 1);
  }, [currentSlide, slides.length]);

  const prevSlide = () => {
    if (currentSlide > 0) {
      setIsBackTracking(true);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const speak = useCallback((text: string, title: string) => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    
    const finalText = isBackTracking 
      ? `Kembali ke bagian ${title}.` 
      : text;

    const utterance = new SpeechSynthesisUtterance(finalText);
    utterance.lang = 'id-ID';
    utterance.rate = 1.0;

    utterance.onend = () => {
      if (isPlaying && !isBackTracking && currentSlide < slides.length - 1) {
        setTimeout(() => nextSlide(), 2000); // Jeda lebih lama sebelum next slide
      }
    };

    if (isVoiceEnabled) window.speechSynthesis.speak(utterance);
    else if (isPlaying && !isBackTracking && currentSlide < slides.length - 1) {
      timerRef.current = setTimeout(() => nextSlide(), 7000);
    }
  }, [isVoiceEnabled, isPlaying, isBackTracking, currentSlide, nextSlide, slides.length]);

  useEffect(() => {
    speak(slides[currentSlide].speech, slides[currentSlide].title);
    return () => {
      window.speechSynthesis.cancel();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentSlide, speak]);

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="w-full h-screen bg-[#030712] text-white flex flex-col font-sans overflow-hidden relative selection:bg-emerald-500/30">
      
      {/* 1. Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Grid Pattern */}
        <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>
        
        {/* Gradient Orbs */}
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ duration: 2 }}
            className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-gradient-to-b from-emerald-600/20 to-transparent rounded-full blur-[100px]"
        ></motion.div>
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-t from-cyan-600/20 to-transparent rounded-full blur-[100px]"
        ></motion.div>
      </div>

      {/* 2. Top Navigation */}
      <div className="absolute top-0 left-0 w-full z-50">
        {/* Progress Bar */}
        <div className="h-1 w-full bg-white/5">
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: `${progress}%` }} 
            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400"
            style={{ boxShadow: '0 0 10px rgba(16, 185, 129, 0.8)' }}
          />
        </div>
        
        <div className="px-6 md:px-12 py-4 flex justify-between items-center bg-gradient-to-b from-[#030712] to-transparent backdrop-blur-sm">
          <div className="flex items-center gap-4">
             <div className="text-sm md:text-lg font-black tracking-tighter text-white border-l-4 border-emerald-500 pl-3">
               PORTFOLIO<span className="text-slate-500 font-light ml-1 hidden sm:inline">/ NW</span>
             </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="hidden md:block text-xs text-slate-500 font-mono uppercase tracking-widest mr-4">
              {slides[currentSlide].title}
            </span>
            
            <button onClick={() => setIsVoiceEnabled(!isVoiceEnabled)} className={`p-3 rounded-xl transition-all border ${isVoiceEnabled ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-white/5 text-slate-500 border-white/10'}`}>
              {isVoiceEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>
            
            <button onClick={() => setIsPlaying(!isPlaying)} className={`p-3 rounded-xl transition-all border ${isPlaying ? 'bg-white/5 text-slate-400 border-white/10' : 'bg-emerald-500 text-slate-900 border-emerald-400'}`}>
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main Content Area */}
      <div className="relative h-full flex items-center justify-center p-4 md:p-8 z-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide} 
            initial={{ opacity: 0, y: 30, scale: 0.98 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: -30, scale: 0.98 }} 
            transition={{ duration: 0.5, ease: "easeInOut" }} 
            className="w-full h-full flex items-center justify-center"
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. Bottom Navigation */}
      <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 py-8 flex justify-between items-center z-50 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent">
        <button 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          className={`group flex items-center gap-2 text-xs font-bold uppercase transition-all ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'text-slate-500 hover:text-white'}`}
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-500 group-hover:text-emerald-500 transition-all group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
            <ChevronLeft size={18} />
          </div>
          <span className="hidden sm:inline">Back</span>
        </button>
        
        <div className="flex gap-2">
           {slides.map((_, i) => (
             <button key={i} onClick={() => { setCurrentSlide(i); setIsBackTracking(i < currentSlide); }} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 bg-emerald-400' : 'w-2 bg-white/10 hover:bg-white/20'}`} />
           ))}
        </div>

        <button 
          onClick={nextSlide} 
          disabled={currentSlide === slides.length - 1}
          className={`group flex items-center gap-2 text-xs font-bold uppercase transition-all ${currentSlide === slides.length - 1 ? 'text-emerald-400 pointer-events-none' : 'text-slate-500 hover:text-white'}`}
        >
          <span className="hidden sm:inline">{currentSlide === slides.length - 1 ? 'Finish' : 'Next'}</span>
          <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${currentSlide === slides.length - 1 ? 'border-emerald-500 text-emerald-400' : 'border-white/10 group-hover:border-emerald-500 group-hover:text-emerald-500 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]'}`}>
            <ChevronRight size={18} />
          </div>
        </button>
      </div>
    </div>
  );
}
