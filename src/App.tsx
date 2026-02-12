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
  const SLIDE_DURATION = 8000; // 8 detik agar sempat membaca

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => { nextSlide(); }, SLIDE_DURATION);
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const handleWhatsApp = () => {
    const message = `Halo Nur Wahyudi, kami tertarik dengan portofolio Anda dan ingin mengundang wawancara.`;
    window.open(`https://wa.me/62881024040191?text=${encodeURIComponent(message)}`, "_blank");
  };

  const slides = [
    {
      id: "hero",
      title: "PROFIL PROFESIONAL",
      content: (
        <div className="flex flex-col items-center justify-center gap-6">
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-56 h-56 rounded-3xl border-4 border-emerald-500 overflow-hidden shadow-2xl">
            <img src={PERMANENT_IMAGE_URL} alt="Nur Wahyudi" className="w-full h-full object-cover" />
          </motion.div>
          <div className="text-center">
            <h1 className="text-5xl font-black uppercase tracking-tighter">NUR WAHYUDI</h1>
            <p className="text-emerald-400 font-bold tracking-[0.3em] uppercase">Staff Administrasi & Akuntansi</p>
          </div>
        </div>
      )
    },
    {
      id: "intro",
      title: "KATA PENGANTAR",
      content: (
        <div className="max-w-4xl mx-auto p-8 bg-slate-900/80 rounded-3xl border border-white/10 backdrop-blur-xl">
          <ScrollText className="text-emerald-500 mb-4" size={40} />
          <p className="text-lg leading-relaxed text-slate-200 italic font-light">
            "Kepada Bapak/Ibu Pimpinan yang saya hormati. Melalui portofolio ini, saya bermaksud menyampaikan ketertarikan saya untuk bergabung dan berkontribusi di perusahaan yang Bapak/Ibu pimpin. Dengan latar belakang pendidikan Akuntansi serta pengalaman kerja profesional, saya telah terbiasa bekerja dengan ketelitian tinggi, integritas, dan tanggung jawab penuh dalam mengelola administrasi serta keuangan. Besar harapan saya agar Bapak/Ibu berkenan memberikan kesempatan bagi saya untuk memberikan dedikasi terbaik bagi kemajuan perusahaan."
          </p>
          <div className="mt-6 pt-4 border-t border-white/10 text-right">
            <p className="font-black text-emerald-500 uppercase tracking-widest text-xl">Hormat Saya, Nur Wahyudi</p>
          </div>
        </div>
      )
    },
    {
      id: "exp1",
      title: "PENGALAMAN: PT KOVALEN MINING",
      content: (
        <div className="max-w-4xl mx-auto p-6 space-y-6 text-left">
          <div className="flex items-center gap-4 bg-emerald-600 p-4 rounded-2xl">
            <Briefcase size={30} />
            <div>
              <h2 className="text-2xl font-black uppercase leading-none">PT KOVALEN MINING</h2>
              <p className="text-emerald-100 text-xs font-bold uppercase">Staff Administrasi (Des 2020 - Jan 2025)</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h4 className="text-emerald-400 font-black mb-2 uppercase text-xs">Job Deskripsi:</h4>
              <ul className="text-slate-300 text-sm space-y-2 font-medium">
                <li>• Manajemen keuangan & arus kas harian.</li>
                <li>• Pengarsipan dokumen administratif terstruktur.</li>
                <li>• Penyusunan Laporan keuangan Bulanan & Tahunan.</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col justify-center">
              <h4 className="text-emerald-400 font-black mb-1 uppercase text-xs flex items-center gap-2"><Target size={14}/> Motivasi:</h4>
              <p className="text-white text-sm italic">"Berkomitmen untuk mengaplikasikan ketelitian guna memajukan efisiensi administrasi perusahaan."</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "exp2",
      title: "PENGALAMAN: TRANSMART",
      content: (
        <div className="max-w-4xl mx-auto p-6 space-y-6 text-left">
          <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-2xl border border-slate-700">
            <Briefcase size={30} className="text-emerald-500" />
            <div>
              <h2 className="text-2xl font-black uppercase leading-none">TRANSMART (CARREFOUR)</h2>
              <p className="text-emerald-400 text-xs font-bold uppercase">Cashier (Jan 2020 - Mar 2020)</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 font-medium">
              <h4 className="text-emerald-400 font-black mb-2 uppercase text-xs">Job Deskripsi:</h4>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• Memproses transaksi pelanggan dengan akurat.</li>
                <li>• Menyusun laporan transaksi kas harian.</li>
              </ul>
            </div>
            <div className="bg-emerald-900/20 p-6 rounded-2xl border border-emerald-500/30">
              <h4 className="text-emerald-400 font-black mb-1 uppercase text-xs flex items-center gap-2"><Target size={14}/> Motivasi:</h4>
              <p className="text-white text-sm italic">"Kecepatan dan ketepatan adalah standar kerja yang selalu saya berikan."</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "exp3",
      title: "PENGALAMAN: PT AEON STORE",
      content: (
        <div className="max-w-4xl mx-auto p-6 space-y-6 text-left">
          <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-2xl border border-slate-700">
            <Briefcase size={30} className="text-emerald-500" />
            <div>
              <h2 className="text-2xl font-black uppercase leading-none">PT AEON MALL BSD</h2>
              <p className="text-emerald-400 text-xs font-bold uppercase">Pramuniaga (Apr 2019 - Nov 2019)</p>
            </div>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 font-medium">
            <ul className="text-slate-300 text-sm space-y-2">
              <li>• Melayani pelanggan secara ramah & profesional sesuai standar SOP Jepang.</li>
              <li>• Menjaga kerapihan dan stok area toko secara berkala.</li>
            </ul>
            <p className="text-white text-sm italic mt-4 border-t border-white/5 pt-2">"Pengalaman retail membentuk disiplin pelayanan saya menjadi sangat kuat."</p>
          </div>
        </div>
      )
    },
    {
      id: "exp4",
      title: "MAGANG: GRAMEDIA",
      content: (
        <div className="max-w-4xl mx-auto p-6 space-y-4 text-left">
          <div className="flex items-center gap-4 bg-emerald-600/20 border border-emerald-500/50 p-4 rounded-2xl">
            <CheckCircle2 size={30} className="text-emerald-500" />
            <h2 className="text-2xl font-black uppercase leading-none">GRAMEDIA (Magang Akuntansi)</h2>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <p className="text-slate-200 text-sm leading-relaxed font-medium">
              Fokus pada administrasi dasar operasional retail dan membantu penataan produk serta stok opname di bawah supervisi departemen keuangan.
            </p>
          </div>
        </div>
      )
    },
    ...MY_CERTIFICATES.map((cert, i) => ({
      id: `cert-${i}`,
      title: "SERTIFIKAT",
      content: (
        <div className="flex flex-col items-center">
          <h3 className="text-emerald-400 font-black mb-4 uppercase text-center px-4">{cert.name}</h3>
          <motion.div whileHover={{ scale: 1.02 }} className="h-[55vh] rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl bg-black">
            <img src={cert.url} className="h-full w-full object-contain" alt="sertifikat" />
          </motion.div>
        </div>
      )
    })),
    {
      id: "contact",
      title: "HUBUNGI SAYA",
      content: (
        <div className="flex flex-col items-center justify-center text-center space-y-8 p-6">
          <h2 className="text-6xl font-black text-white uppercase tracking-tighter">KONTAK</h2>
          <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl">
            <button onClick={handleWhatsApp} className="flex-1 flex items-center gap-4 bg-emerald-600 p-6 rounded-3xl shadow-xl border-b-4 border-emerald-900 active:border-b-0 transition-all">
              <MessageCircle size={32} fill="white" />
              <div className="text-left">
                <p className="text-xs font-bold text-emerald-100 uppercase">Hubungi via</p>
                <p className="text-xl font-black text-white uppercase">WhatsApp</p>
              </div>
            </button>
            <div className="flex-1 flex items-center gap-4 bg-slate-800 p-6 rounded-3xl border-b-4 border-slate-950">
              <Mail className="text-emerald-500" size={32} />
              <div className="text-left">
                <p className="text-xs font-bold text-slate-400 uppercase">Email Resmi</p>
                <p className="text-sm font-black text-white break-all font-mono">yudi02012001@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-900/80 px-6 py-4 rounded-full border border-white/5">
            <MapPin className="text-emerald-500" size={18} />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pagedangan, Kab. Tangerang - Banten</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full h-screen bg-[#020617] text-white overflow-hidden relative font-sans select-none">
      {/* Progress Bar Atas */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-white/5 z-50">
        <motion.div
          key={currentSlide}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
          className="h-full bg-emerald-500 shadow-[0_0_10px_#10b981]"
        />
      </div>

      {/* Label Slide Aktif */}
      <div className="absolute top-8 left-0 w-full px-8 flex justify-between items-end z-40 pointer-events-none">
        <div className="bg-black/20 backdrop-blur-md p-4 rounded-2xl border border-white/5">
          <p className="text-emerald-500 font-mono text-[10px] tracking-[0.3em] uppercase mb-1">Slide {currentSlide + 1} / {slides.length}</p>
          <h2 className="text-lg md:text-2xl font-black uppercase italic tracking-tighter leading-none">{slides[currentSlide].title}</h2>
        </div>
        <div className="pointer-events-auto">
          <button onClick={() => setIsPlaying(!isPlaying)} className="p-4 bg-white/5 hover:bg-emerald-500 rounded-2xl backdrop-blur-md transition-all border border-white/10">
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
        </div>
      </div>

      {/* Konten Utama (Animasi PowerPoint) */}
      <div className="relative h-full flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full"
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigasi Bawah */}
      <div className="absolute bottom-8 left-0 w-full flex justify-between px-10 z-40">
        <button onClick={prevSlide} className="group flex items-center gap-3 text-slate-500 hover:text-emerald-500 font-black text-xs transition-all uppercase tracking-widest">
          <ChevronLeft className="group-hover:-translate-x-2 transition-transform" /> Back
        </button>
        <button onClick={nextSlide} className="group flex items-center gap-3 text-slate-500 hover:text-emerald-500 font-black text-xs transition-all uppercase tracking-widest">
          Next <ChevronRight className="group-hover:translate-x-2 transition-transform" />
        </button>
      </div>

      {/* Watermark */}
      <div className="absolute bottom-4 left-0 w-full text-center opacity-20 pointer-events-none">
        <p className="text-[8px] font-bold tracking-[0.5em] uppercase">Nur Wahyudi Professional Resume • 2026</p>
      </div>
    </div>
  );
}
