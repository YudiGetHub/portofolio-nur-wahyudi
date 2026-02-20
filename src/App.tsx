import React, { useState, useEffect, useCallback, useRef } from "react";
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
  ChevronLeft,
  Volume2,
  VolumeX
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
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<any>(null);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/62881024040191`, "_blank");
  };

  const slides = [
    {
      title: "PROFIL PROFESIONAL",
      speech: "Halo, saya Nur Wahyudi. Saya adalah seorang profesional di bidang administrasi dan akuntansi.",
      content: (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 w-full max-w-5xl mx-auto mt-12">
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="w-48 h-48 md:w-72 md:h-72 rounded-3xl border-4 border-emerald-500 overflow-hidden shadow-2xl shrink-0">
            <img src={PERMANENT_IMAGE_URL} alt="Yudi" className="w-full h-full object-cover" />
          </motion.div>
          <div className="text-center md:text-left space-y-2">
            <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500 rounded-full text-emerald-400 text-[10px] font-bold uppercase tracking-widest">Available to Work</div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight">NUR WAHYUDI</h1>
            <p className="text-lg md:text-2xl text-emerald-400 font-bold uppercase tracking-[0.2em]">Staff Administrasi & Akuntansi</p>
          </div>
        </div>
      ),
    },
    {
      title: "KATA PENGANTAR",
      // TEKS SUARA SEKARANG SAMA PERSIS DENGAN TEKS DI LAYAR
      speech: "Kepada Bapak atau Ibu Pimpinan yang saya hormati. Melalui portofolio ini, saya bermaksud menyampaikan ketertarikan saya untuk bergabung dan berkontribusi di perusahaan yang Bapak atau Ibu pimpin. Dengan latar belakang pendidikan Akuntansi serta pengalaman kerja profesional yang saya miliki, saya telah terbiasa bekerja dengan ketelitian tinggi, integritas, dan tanggung jawab penuh dalam mengelola administrasi serta keuangan. Besar harapan saya agar Bapak atau Ibu berkenan memberikan kesempatan bagi saya untuk mengikuti tahapan seleksi selanjutnya. Atas perhatian dan kesempatan yang Bapak atau Ibu berikan, saya ucapkan terima kasih. Hormat saya, Nur Wahyudi.",
      content: (
        <div className="w-full max-w-5xl mx-auto p-6 mt-16 text-left bg-slate-900/60 rounded-3xl border border-slate-800 shadow-2xl">
          <div className="flex items-center gap-3 mb-6 border-b border-emerald-500/30 pb-4">
            <ScrollText className="text-emerald-500" size={28} />
            <h2 className="text-2xl font-black text-white uppercase">Kata Pengantar</h2>
          </div>
          <p className="text-slate-200 leading-relaxed italic font-light text-sm md:text-lg">
            "Kepada Bapak/Ibu Pimpinan yang saya hormati, <br/><br/>
            Melalui portofolio ini, saya bermaksud menyampaikan ketertarikan saya untuk bergabung dan berkontribusi di perusahaan yang Bapak/Ibu pimpin. Dengan latar belakang pendidikan Akuntansi serta pengalaman kerja profesional yang saya miliki, saya telah terbiasa bekerja dengan ketelitian tinggi, integritas, dan tanggung jawab penuh dalam mengelola administrasi serta keuangan. <br/><br/>
            Besar harapan saya agar Bapak/Ibu berkenan memberikan kesempatan bagi saya untuk mengikuti tahapan seleksi selanjutnya. Atas perhatian dan kesempatan yang Bapak/Ibu berikan, saya ucapkan terima kasih."
          </p>
          <p className="mt-8 text-right text-emerald-500 font-black uppercase text-xl">Hormat Saya, Nur Wahyudi</p>
        </div>
      ),
    },
    {
      title: "PENGALAMAN: PT KOVALEN MINING",
      speech: "Pengalaman kerja di PT Kovalen Mining sebagai staff administrasi dari Desember 2020 sampai Januari 2025. Tugas saya meliputi manajemen keuangan, pengarsipan dokumen, dan penyusunan laporan keuangan bulanan maupun tahunan.",
      content: (
        <div className="w-full max-w-5xl mx-auto p-6 space-y-6 mt-16 text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500 rounded-2xl text-slate-900"><Briefcase size={24} /></div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase">PT KOVALEN MINING</h2>
              <p className="text-emerald-400 font-bold uppercase text-xs">Staff Administrasi (Des 2020 - Jan 2025)</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h4 className="text-emerald-400 font-black mb-2 uppercase text-xs">Job Desk:</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Manajemen keuangan & arus kas harian.</li>
                <li>• Pengarsipan dokumen administratif terstruktur.</li>
                <li>• Penyusunan Laporan keuangan Bulanan & Tahunan.</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col justify-center">
              <h4 className="text-emerald-400 font-black mb-1 text-xs"><Coins size={14} /> Gaji Terakhir:</h4>
              <p className="text-white font-black text-2xl">Rp 4.000.000,-</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "PENGALAMAN: TRANSMART",
      speech: "Pengalaman sebagai Kasir di Transmart Carrefour. Saya bertanggung jawab memproses transaksi pelanggan dengan akurat dan menyusun laporan transaksi kas harian.",
      content: (
        <div className="w-full max-w-5xl mx-auto p-6 space-y-6 mt-16 text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500 rounded-2xl text-slate-900"><Briefcase size={24} /></div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase">TRANSMART CARREFOUR</h2>
              <p className="text-emerald-400 font-bold uppercase text-xs">Cashier (Jan 2020 - Mar 2020)</p>
            </div>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
             <h4 className="text-emerald-400 font-black mb-2 uppercase text-xs">Kegiatan:</h4>
             <ul className="text-slate-300 text-sm space-y-1">
                <li>• Memproses transaksi pelanggan dengan akurat.</li>
                <li>• Menyusun laporan transaksi kas harian.</li>
              </ul>
          </div>
        </div>
      ),
    },
    ...MY_CERTIFICATES.map((cert) => ({
      title: "SERTIFIKAT",
      speech: `Menampilkan ${cert.name}.`,
      content: (
        <div className="flex flex-col items-center justify-center gap-4 p-4 mt-12">
          <h2 className="text-emerald-400 font-black text-lg uppercase text-center italic">{cert.name}</h2>
          <div className="w-full h-[55vh] bg-black rounded-3xl border-2 border-slate-800 overflow-hidden shadow-2xl">
            <img src={cert.url} alt={cert.name} className="w-full h-full object-contain" />
          </div>
        </div>
      ),
    })),
    {
      title: "KONTAK",
      speech: "Terima kasih telah melihat portofolio saya. Anda dapat menghubungi saya melalui WhatsApp atau Email resmi yang tertera di layar untuk informasi lebih lanjut atau jadwal wawancara.",
      content: (
        <div className="flex flex-col items-center justify-center text-center space-y-6 p-6 mt-16">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">KONTAK</h2>
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl">
            <button onClick={handleWhatsApp} className="flex-1 flex items-center gap-4 bg-emerald-600 p-6 rounded-3xl shadow-xl border-b-4 border-emerald-900 active:border-0 transition-all">
              <MessageCircle size={32} fill="white" />
              <div className="text-left font-black text-white uppercase leading-none">WhatsApp</div>
            </button>
            <div className="flex-1 flex items-center gap-4 bg-slate-800 p-6 rounded-3xl border-b-4 border-slate-950">
              <Mail className="text-emerald-500" size={32} />
              <div className="text-left text-xs font-mono font-bold">yudi02012001@gmail.com</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setProgress(0);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setProgress(0);
  };

  const speak = useCallback((text: string) => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = 1.0;

    // KUNCI SINKRONISASI: Pindah slide hanya setelah suara selesai
    utterance.onend = () => {
      if (isPlaying) {
        // Beri jeda 1 detik setelah bicara selesai baru pindah
        setTimeout(() => nextSlide(), 1000);
      }
    };

    if (isVoiceEnabled) {
      window.speechSynthesis.speak(utterance);
    } else {
      // Jika suara mati, gunakan timer manual 8 detik per slide
      timerRef.current = setTimeout(() => {
        if (isPlaying) nextSlide();
      }, 8000);
    }
  }, [isVoiceEnabled, isPlaying, nextSlide]);

  useEffect(() => {
    speak(slides[currentSlide].speech);
    return () => {
      window.speechSynthesis.cancel();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentSlide, speak]);

  return (
    <div className="w-full h-screen bg-[#020617] text-white flex flex-col font-sans overflow-hidden relative" onClick={() => { if(!isVoiceEnabled) nextSlide() }}>
      
      {/* Tombol Mulai (Overlay jika suara belum aktif) */}
      {!isVoiceEnabled && (
        <div className="absolute top-2 right-20 z-[60] animate-pulse">
          <span className="text-[10px] bg-red-500 px-2 py-1 rounded text-white">Voice Muted</span>
        </div>
      )}

      {/* Control Panel */}
      <div className="absolute top-8 left-0 w-full px-8 flex justify-between items-center z-40">
        <div className="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/5">
          <p className="text-emerald-500 font-mono text-[10px] tracking-widest uppercase">Slide {currentSlide + 1} / {slides.length}</p>
          <h2 className="text-lg font-black uppercase italic">{slides[currentSlide].title}</h2>
        </div>
        <div className="flex gap-2">
          <button onClick={(e) => { e.stopPropagation(); setIsVoiceEnabled(!isVoiceEnabled); }} className="p-4 bg-white/5 hover:bg-emerald-500 rounded-2xl transition-all border border-white/10">
            {isVoiceEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </button>
          <button onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }} className="p-4 bg-white/5 hover:bg-emerald-500 rounded-2xl transition-all border border-white/10">
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
        </div>
      </div>

      <div className="relative h-full flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div key={currentSlide} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.5 }} className="w-full">
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-10 left-0 w-full flex justify-between px-10 z-40">
        <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="flex items-center gap-2 text-slate-500 hover:text-white font-black uppercase text-xs transition-all"><ChevronLeft /> Back</button>
        <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="flex items-center gap-2 text-slate-500 hover:text-white font-black uppercase text-xs transition-all">Next <ChevronRight /></button>
      </div>
    </div>
  );
}
