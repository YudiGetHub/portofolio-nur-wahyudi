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
  Award
} from "lucide-react";

const PERMANENT_IMAGE_URL = "https://i.ibb.co.com/tT5jSqmj/Nur-Wahyudi.jpg";

const MY_CERTIFICATES = [
  { name: "Sertifikat Kompetensi Akuntansi", url: "https://i.ibb.co.com/v4RWFG4F/Sertifikat-Competensi-page-0001.jpg" },
  { name: "Sertifikat Organisasi", url: "https://i.ibb.co.com/VYFC0gMJ/Sertifikat-OSIS-Nur-Wahyudi-page-0001.jpg" },
  { name: "Sertifikat Prakerin GRAMEDIA", url: "https://i.ibb.co.com/wZpZ0tBQ/Sertifikat-PT-KOMPAS-GRAMEDIA-page-0001.jpg" },
  { name: "Sertifikat PT. AEON STORE INDONESIA", url: "https://i.ibb.co.com/ZR6n6TF9/Sertifikat-PT-AEON-STORE-INDONESIA-page-0001.jpg" },
  { name: "Sertifikat PT. TRANSMART CARREFOUR", url: "https://i.ibb.co.com/Q7FD6tRD/Sertifikat-PT-Trans-Retail-Indonesia-page-0001.jpg" },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const [isBackTracking, setIsBackTracking] = useState(false);
  const timerRef = useRef<any>(null);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/62881024040191`, "_blank");
  };

  const slides = [
    {
      title: "Profil Profesional",
      speech: "Halo, saya Nur Wahyudi. Saya adalah seorang profesional di bidang administrasi dan akuntansi.",
      content: (
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 p-8 w-full max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-500 rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-[2.2rem] border-2 border-white/10 overflow-hidden shadow-2xl bg-slate-900">
              <img src={PERMANENT_IMAGE_URL} alt="Yudi" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </motion.div>
          <div className="text-center md:text-left space-y-4">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available to Work
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-tight drop-shadow-sm">NUR<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">WAHYUDI</span></h1>
            <p className="text-lg md:text-2xl text-slate-400 font-medium tracking-wide">Administrative Specialist & Accounting Professional</p>
          </div>
        </div>
      ),
    },
    {
      title: "Kata Pengantar",
      speech: "Kepada Bapak atau Ibu Pimpinan yang saya hormati. Melalui portofolio ini, saya bermaksud menyampaikan ketertarikan saya untuk bergabung dan berkontribusi di perusahaan yang Bapak atau Ibu pimpin. Dengan latar belakang pendidikan Akuntansi serta pengalaman kerja profesional yang saya miliki, saya telah terbiasa bekerja dengan ketelitian tinggi, integritas, dan tanggung jawab penuh dalam mengelola administrasi serta keuangan. Besar harapan saya agar Bapak atau Ibu berkenan memberikan kesempatan bagi saya untuk mengikuti tahapan seleksi selanjutnya. Atas perhatian dan kesempatan yang Bapak atau Ibu berikan, saya ucapkan terima kasih. Hormat saya, Nur Wahyudi.",
      content: (
        <div className="w-full max-w-4xl mx-auto p-8 md:p-12 glass-card rounded-[3rem] border border-white/5 relative overflow-hidden bg-slate-900/40 backdrop-blur-xl">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <ScrollText size={200} />
          </div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-slate-900 shadow-lg shadow-emerald-500/20"><ScrollText size={24} /></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">Executive Summary</h2>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg md:text-xl font-light italic">
            "Melalui portofolio ini, saya bermaksud menyampaikan ketertarikan saya untuk bergabung dan berkontribusi di perusahaan yang Bapak/Ibu pimpin. Dengan latar belakang pendidikan Akuntansi serta pengalaman kerja profesional, saya telah terbiasa bekerja dengan ketelitian tinggi dan integritas penuh."
          </p>
          <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-end">
            <div>
              <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Hormat Saya,</p>
              <p className="text-2xl font-black text-emerald-400 mt-1">Nur Wahyudi</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Pengalaman: AEON Store",
      speech: "Pengalaman kerja pertama saya adalah sebagai Pramuniaga di PT Aeon Mall BSD pada April 2019 hingga November 2019. Tanggung jawab saya meliputi melayani kebutuhan informasi pelanggan di area toko, menata tampilan produk sesuai standar visual merchandising, serta mengontrol stok barang di area penjualan.",
      content: (
        <div className="w-full max-w-5xl mx-auto p-6 space-y-8 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-6">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-slate-800 rounded-3xl border border-white/5 text-emerald-500 shadow-xl"><Briefcase size={32} /></div>
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">PT AEON MALL BSD</h2>
                <p className="text-emerald-400 font-bold uppercase text-sm tracking-[0.2em] mt-2">Pramuniaga • 2019</p>
              </div>
            </div>
            <div className="px-4 py-2 bg-slate-800/50 rounded-xl text-slate-400 text-xs font-mono border border-white/5">Apr 2019 - Nov 2019</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Layanan Pelanggan Profesional", "Visual Merchandising", "Inventory Control"].map((item, idx) => (
              <div key={idx} className="p-6 bg-slate-900/50 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-all"><Award size={20} /></div>
                <p className="text-white font-bold text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Pengalaman: Transmart",
      speech: "Selanjutnya, saya bekerja sebagai Kasir di Transmart Carrefour dari Januari 2020 hingga Maret 2020. Kegiatan utama saya adalah memproses transaksi pembayaran pelanggan secara cepat dan akurat, menyusun laporan pertanggungjawaban kas harian, serta memberikan pelayanan prima sesuai standar retail.",
      content: (
        <div className="w-full max-w-5xl mx-auto p-6 space-y-8 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-6">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-slate-800 rounded-3xl border border-white/5 text-cyan-500 shadow-xl"><Briefcase size={32} /></div>
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">TRANSMART</h2>
                <p className="text-cyan-400 font-bold uppercase text-sm tracking-[0.2em] mt-2">Cashier • 2020</p>
              </div>
            </div>
            <div className="px-4 py-2 bg-slate-800/50 rounded-xl text-slate-400 text-xs font-mono border border-white/5">Jan 2020 - Mar 2020</div>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
             <div className="absolute -right-10 -bottom-10 opacity-5 rotate-12"><Briefcase size={200} /></div>
             <h4 className="text-white font-black mb-6 uppercase text-sm tracking-widest opacity-50">Key Responsibilities:</h4>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-200 text-lg">
                <li className="flex gap-4 items-start"><span className="text-cyan-400 font-bold">01.</span> Akurasi Transaksi Pembayaran</li>
                <li className="flex gap-4 items-start"><span className="text-cyan-400 font-bold">02.</span> Laporan Pertanggungjawaban Kas</li>
                <li className="flex gap-4 items-start"><span className="text-cyan-400 font-bold">03.</span> Pelayanan Prima Standar Retail</li>
              </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Pengalaman: PT Kovalen Mining",
      speech: "Pengalaman terbaru saya adalah di PT Kovalen Mining sebagai staff administrasi dari Desember 2020 hingga Januari 2025. Job desk saya meliputi manajemen keuangan dan arus kas harian, pengarsipan dokumen administratif yang terstruktur, serta penyusunan laporan keuangan bulanan maupun tahunan.",
      content: (
        <div className="w-full max-w-5xl mx-auto p-6 space-y-8 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-emerald-500/20 pb-6">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-emerald-500 rounded-3xl text-slate-900 shadow-lg shadow-emerald-500/20"><Briefcase size={32} /></div>
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">PT KOVALEN MINING</h2>
                <p className="text-emerald-400 font-bold uppercase text-sm tracking-[0.2em] mt-2">Administrative Staff • 2020 - 2025</p>
              </div>
            </div>
            <div className="px-4 py-2 bg-emerald-500/10 rounded-xl text-emerald-400 text-xs font-mono border border-emerald-500/20 font-bold">5 Tahun Pengalaman</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-slate-900 rounded-[2.5rem] border border-white/5 flex flex-col justify-center gap-4">
              <div className="text-emerald-500 font-black text-4xl italic tracking-tighter">JOB DESK</div>
              <p className="text-slate-400 leading-relaxed">Fokus utama pada integritas data keuangan dan efisiensi pengarsipan dokumen perusahaan.</p>
            </div>
            <div className="space-y-4">
               {["Manajemen Arus Kas Harian", "Pengarsipan Dokumen Terstruktur", "Laporan Keuangan Tahunan"].map((task, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 bg-slate-800/40 rounded-2xl border border-white/5 hover:translate-x-2 transition-transform">
                   <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                   <span className="text-white font-medium">{task}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      ),
    },
    ...MY_CERTIFICATES.map((cert) => ({
      title: "Sertifikat",
      speech: `Ini adalah ${cert.name} yang saya miliki.`,
      content: (
        <div className="flex flex-col items-center justify-center gap-6 p-4">
          <div className="flex items-center gap-3 px-6 py-2 bg-slate-800 rounded-full border border-white/10 shadow-xl mb-4">
            <Award className="text-emerald-500" size={18} />
            <h2 className="text-white font-bold text-sm uppercase tracking-widest">{cert.name}</h2>
          </div>
          <div className="group relative w-full max-w-2xl aspect-[4/3] md:aspect-[16/10] bg-slate-900 rounded-[2rem] border-4 border-white/5 overflow-hidden shadow-2xl transition-all duration-500 hover:border-emerald-500/30">
            <img src={cert.url} alt={cert.name} className="w-full h-full object-contain p-2" />
            <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <ExternalLink size={48} className="text-white" />
            </div>
          </div>
        </div>
      ),
    })),
    {
      title: "Kontak",
      speech: "Silakan hubungi saya melalui WhatsApp atau Email untuk jadwal wawancara. Terima kasih.",
      content: (
        <div className="flex flex-col items-center justify-center text-center space-y-12 p-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none">LET'S<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 italic underline decoration-emerald-500/50">TALK</span></h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium">Saya siap berkontribusi penuh untuk kesuksesan tim Anda.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <button onClick={handleWhatsApp} className="group flex-1 flex items-center justify-center gap-4 bg-emerald-500 hover:bg-emerald-400 p-8 rounded-[2rem] transition-all duration-300 shadow-2xl shadow-emerald-500/20 active:scale-95 overflow-hidden relative">
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <MessageCircle size={32} fill="white" className="relative z-10" />
              <div className="text-left relative z-10">
                <div className="text-[10px] font-bold text-slate-900 uppercase opacity-60">Instant Connect</div>
                <div className="font-black text-slate-900 uppercase text-xl">WhatsApp</div>
              </div>
            </button>
            <div className="flex-1 flex items-center justify-center gap-4 bg-slate-800 p-8 rounded-[2rem] border border-white/10 group hover:border-emerald-500/50 transition-colors">
              <Mail className="text-emerald-500 group-hover:animate-bounce" size={32} />
              <div className="text-left overflow-hidden">
                <div className="text-[10px] font-bold text-slate-500 uppercase">Official Email</div>
                <div className="font-bold text-white text-sm md:text-base truncate">yudi02012001@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-white/5 rounded-full text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            <MapPin size={12} className="text-emerald-500" /> Pagedangan, Tangerang - Banten
          </div>
        </div>
      ),
    },
  ];

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
        setTimeout(() => nextSlide(), 1500);
      }
    };

    if (isVoiceEnabled) window.speechSynthesis.speak(utterance);
    else if (isPlaying && !isBackTracking && currentSlide < slides.length - 1) {
      timerRef.current = setTimeout(() => nextSlide(), 8000);
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
    <div className="w-full h-screen bg-[#050811] text-white flex flex-col font-sans overflow-hidden relative selection:bg-emerald-500/30">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/20 blur-[120px] rounded-full"></div>
      </div>

      {/* Header & Progress Bar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <div className="h-1.5 w-full bg-white/5">
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: `${progress}%` }} 
            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
          />
        </div>
        <div className="px-8 py-6 flex justify-between items-center bg-gradient-to-b from-[#050811] to-transparent">
          <div className="flex items-center gap-4">
             <div className="text-xl font-black italic tracking-tighter border-l-4 border-emerald-500 pl-3">YUDI.PORTFOLIO</div>
             <span className="hidden md:block h-4 w-px bg-white/10"></span>
             <span className="hidden md:block text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">{slides[currentSlide].title}</span>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setIsVoiceEnabled(!isVoiceEnabled)} className={`p-4 rounded-2xl transition-all border ${isVoiceEnabled ? 'bg-emerald-500 text-slate-900 border-emerald-400' : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10'}`}>
              {isVoiceEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
            <button onClick={() => setIsPlaying(!isPlaying)} className={`p-4 rounded-2xl transition-all border ${isPlaying ? 'bg-white/10 text-white border-white/20' : 'bg-emerald-500 text-slate-900 border-emerald-400 shadow-lg shadow-emerald-500/20'}`}>
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative h-full flex items-center justify-center p-4 md:p-12">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide} 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} 
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} 
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }} 
            transition={{ duration: 0.6, ease: "circOut" }} 
            className="w-full"
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Navigation */}
      <div className="absolute bottom-0 left-0 w-full px-10 py-10 flex justify-between items-center z-50 bg-gradient-to-t from-[#050811] to-transparent">
        <button 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          className={`group flex items-center gap-3 font-black uppercase text-xs transition-all ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'text-slate-500 hover:text-white'}`}
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-500 group-hover:text-emerald-500 transition-all"><ChevronLeft size={18} /></div>
          Back
        </button>
        
        <div className="flex gap-1.5">
           {slides.map((_, i) => (
             <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-8 bg-emerald-500' : 'w-2 bg-white/10'}`} />
           ))}
        </div>

        <button 
          onClick={nextSlide} 
          disabled={currentSlide === slides.length - 1}
          className={`group flex items-center gap-3 font-black uppercase text-xs transition-all ${currentSlide === slides.length - 1 ? 'text-emerald-500 pointer-events-none' : 'text-slate-500 hover:text-white'}`}
        >
          {currentSlide === slides.length - 1 ? 'FINISH' : 'Next'}
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-500 group-hover:text-emerald-500 transition-all"><ChevronRight size={18} /></div>
        </button>
      </div>
    </div>
  );
}
