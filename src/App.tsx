import React, { useState } from "react";
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
  MousePointer2,
} from "lucide-react";

const PERMANENT_IMAGE_URL = "https://i.ibb.co.com/tT5jSqmj/Nur-Wahyudi.jpg";

const MY_CERTIFICATES = [
  {
    name: "Sertifikat Kompetensi Akuntansi",
    url: "https://i.ibb.co.com/v4RWFG4F/Sertifikat-Kompetensi-page-0001.jpg",
  },
  {
    name: "Sertifikat Organisasi",
    url: "https://i.ibb.co.com/VYFC0gMJ/Sertifikat-OSIS-Nur-Wahyudi-page-0001.jpg",
  },
  {
    name: "Sertifikat Prakerin GRAMEDIA",
    url: "https://i.ibb.co.com/wZpZ0tBQ/Sertifikat-PT-KOMPAS-GRAMEDIA-page-0001.jpg",
  },
  {
    name: "Sertifikat PT. AEON STORE INDONESIA",
    url: "https://i.ibb.co.com/ZR6n6TF9/Sertifikat-PT-AEON-STORE-INDONESIA-page-0001.jpg",
  },
  {
    name: "Sertifikat PT. TRANSMART CARREFOUR",
    url: "https://i.ibb.co.com/Q7FD6tRD/Sertifikat-PT-Trans-Retail-Indonesia-page-0001.jpg",
  },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showGuide, setShowGuide] = useState(true);
  const [ripples, setRipples] = useState<
    { x: number; y: number; id: number }[]
  >([]);

  const addRipple = (e: React.MouseEvent) => {
    const newRipple = { x: e.clientX, y: e.clientY, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  const getInterviewDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleWhatsApp = () => {
    const interviewDate = getInterviewDate();
    const message = `*UNDANGAN WAWANCARA KERJA - NUR WAHYUDI*

Yth. Saudara Nur Wahyudi,

Kami telah meninjau profil dan portofolio Anda. Kami merasa kualifikasi Anda sesuai dengan kebutuhan perusahaan kami, dan kami ingin mengundang Anda untuk mengikuti tahap wawancara (interview) pada:

*Jadwal Wawancara:*
Hari/Tanggal : ${interviewDate}
Waktu        : 10.00 WIB - Selesai
Agenda       : Wawancara Kerja

*Mohon lengkapi data konfirmasi di bawah ini:*
Nama Perusahaan: [Mohon Isi Nama Perusahaan]
Nama Penanggung Jawab: [Mohon Isi Nama Anda]
Lokasi Kantor/Maps: (Silakan lampirkan alamat lengkap atau Share Location agar pelamar dapat menuju lokasi dengan tepat)

Apakah Anda bersedia untuk menghadiri jadwal tersebut? Terima kasih.`;

    window.open(
      `https://wa.me/62881024040191?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleEmail = () => {
    const interviewDate = getInterviewDate();
    const subject = "Undangan Interview Kerja - Nur Wahyudi";
    const body = `Yth. Saudara Nur Wahyudi,

Kami telah meninjau profil dan portofolio Anda melalui aplikasi web portofolio Anda. Kami merasa kualifikasi Anda sesuai dengan kebutuhan perusahaan kami.

Bersama ini, kami mengundang Anda untuk mengikuti tahap wawancara (interview) yang akan dilaksanakan pada:

Hari/Tanggal : ${interviewDate}
Waktu        : 10.00 WIB - Selesai
Agenda       : Wawancara Kerja

Mohon untuk membalas email ini atau mengirimkan konfirmasi dengan melengkapi data berikut:

Nama Perusahaan: [Isi Nama Perusahaan]
Nama Penanggung Jawab: [Isi Nama Anda]
Alamat Lengkap Kantor: [Mohon lampirkan alamat lengkap atau link Google Maps]

Kami menunggu konfirmasi kehadiran Anda segera. Atas perhatiannya, kami ucapkan terima kasih.

Salam hormat,
[Nama Pengirim/HRD]`;

    window.location.href = `mailto:yudi02012001@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const slides = [
    {
      title: "PROFIL PROFESIONAL",
      content: (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 w-full max-w-5xl mx-auto mt-12">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="w-48 h-48 md:w-72 md:h-72 rounded-3xl border-4 border-emerald-500 overflow-hidden shadow-2xl shrink-0"
          >
            <img
              src={PERMANENT_IMAGE_URL}
              alt="Nur Wahyudi"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="text-center md:text-left space-y-2">
            <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500 rounded-full text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
              Available to Work
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight">
              NUR WAHYUDI
            </h1>
            <p className="text-lg md:text-2xl text-emerald-400 font-bold uppercase tracking-[0.2em]">
              Staff Administrasi & Akuntansi
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "KATA PENGANTAR",
      content: (
        <div className="w-full max-w-5xl mx-auto p-6 mt-16">
          <div className="bg-slate-900/60 p-6 md:p-10 rounded-3xl border border-slate-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 border-b border-emerald-500/30 pb-4">
              <ScrollText className="text-emerald-500" size={28} />
              <h2 className="text-2xl font-black text-white uppercase">
                Kata Pengantar
              </h2>
            </div>
            <p className="text-slate-200 leading-relaxed text-sm md:text-lg italic font-light">
              "Kepada Bapak/Ibu Pimpinan yang saya hormati, <br />
              <br />
              Melalui portofolio ini, saya bermaksud menyampaikan ketertarikan
              saya untuk bergabung dan berkontribusi di perusahaan yang
              Bapak/Ibu pimpin. Dengan latar belakang pendidikan Akuntansi serta
              pengalaman kerja profesional yang saya miliki, saya telah terbiasa
              bekerja dengan ketelitian tinggi, integritas, dan tanggung jawab
              penuh dalam mengelola administrasi serta keuangan. <br />
              <br />
              Besar harapan saya agar Bapak/Ibu berkenan memberikan kesempatan
              bagi saya untuk mengikuti tahapan seleksi selanjutnya. Saya sangat
              berharap dapat menjadi bagian dari tim Bapak/Ibu dan memberikan
              dedikasi terbaik bagi kemajuan perusahaan. <br />
              <br />
              Atas perhatian dan kesempatan yang Bapak/Ibu berikan, saya ucapkan
              terima kasih."
            </p>
            <div className="mt-8 text-right border-t border-slate-800 pt-4">
              <p className="text-emerald-500 font-black uppercase tracking-widest text-lg md:text-xl">
                Hormat Saya, Nur Wahyudi
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "PENGALAMAN: PT KOVALEN MINING",
      content: (
        <div className="w-full max-w-5xl mx-auto p-6 space-y-6 mt-16 text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500 rounded-2xl text-slate-900">
              <Briefcase size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase">
                PT KOVALEN MINING
              </h2>
              <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs">
                Staff Administrasi (Des 2020 - Jan 2025)
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h4 className="text-emerald-400 font-black mb-2 uppercase text-xs">
                Job Deskripsi:
              </h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Manajemen keuangan & arus kas harian.</li>
                <li>• Pengarsipan dokumen administratif terstruktur.</li>
                <li>• Penyusunan Laporan keuangan Bulanan & Tahunan.</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col justify-center">
              <h4 className="text-emerald-400 font-black mb-1 uppercase text-xs flex items-center gap-2">
                <Coins size={14} /> Gaji Terakhir:
              </h4>
              <p className="text-white font-black text-2xl font-mono">
                Rp 4.000.000,-
              </p>
            </div>
          </div>
          <div className="bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/30">
            <h4 className="text-emerald-400 font-bold mb-1 uppercase text-[10px] flex items-center gap-2">
              <Target size={12} /> Motivasi Profesional:
            </h4>
            <p className="text-slate-200 text-sm italic">
              "Berkomitmen untuk mengaplikasikan ketelitian guna memajukan
              efisiensi administrasi perusahaan."
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "PENGALAMAN: TRANSMART",
      content: (
        <div className="w-full max-w-5xl mx-auto p-6 space-y-6 mt-16 text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500 rounded-2xl text-slate-900">
              <Briefcase size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase">
                TRANSMART (CARREFOUR)
              </h2>
              <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs">
                Cashier (Jan 2020 - Mar 2020)
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h4 className="text-emerald-400 font-black mb-2 uppercase text-xs">
                Job Deskripsi:
              </h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Memproses transaksi pelanggan dengan akurat.</li>
                <li>• Menyusun laporan transaksi kas harian.</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col justify-center">
              <h4 className="text-emerald-400 font-black mb-1 uppercase text-xs flex items-center gap-2">
                <Coins size={14} /> Gaji Terakhir:
              </h4>
              <p className="text-white font-black text-2xl font-mono">
                Rp 3.000.000,-
              </p>
            </div>
          </div>
          <div className="bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/30">
            <h4 className="text-emerald-400 font-bold mb-1 uppercase text-[10px] flex items-center gap-2">
              <Target size={12} /> Motivasi Profesional:
            </h4>
            <p className="text-slate-200 text-sm italic">
              "Kecepatan dan ketepatan adalah standar kerja yang selalu saya
              berikan dalam transaksi."
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "PENGALAMAN: PT AEON STORE",
      content: (
        <div className="w-full max-w-5xl mx-auto p-6 space-y-6 mt-16 text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500 rounded-2xl text-slate-900">
              <Briefcase size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase">
                PT AEON MALL BSD
              </h2>
              <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs">
                Pramuniaga (Apr 2019 - Nov 2019)
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h4 className="text-emerald-400 font-black mb-2 uppercase text-xs">
                Job Deskripsi:
              </h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Melayani pelanggan secara ramah & profesional.</li>
                <li>• Menjaga kerapihan dan stok area toko.</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col justify-center">
              <h4 className="text-emerald-400 font-black mb-1 uppercase text-xs flex items-center gap-2">
                <Coins size={14} /> Gaji Terakhir:
              </h4>
              <p className="text-white font-black text-2xl font-mono">
                Rp 4.200.000,-
              </p>
            </div>
          </div>
          <div className="bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/30">
            <h4 className="text-emerald-400 font-bold mb-1 uppercase text-[10px] flex items-center gap-2">
              <Target size={12} /> Motivasi Profesional:
            </h4>
            <p className="text-slate-200 text-sm italic">
              "Pengalaman retail membentuk disiplin pelayanan saya menjadi
              sangat kuat."
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "MAGANG: GRAMEDIA",
      content: (
        <div className="w-full max-w-5xl mx-auto p-6 space-y-6 mt-16 text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500 rounded-2xl text-slate-900">
              <Briefcase size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase">
                GRAMEDIA
              </h2>
              <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs">
                Magang Sekolah (Akuntansi)
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h4 className="text-emerald-400 font-black mb-2 uppercase text-xs">
                Kegiatan:
              </h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Administrasi dasar operasional retail.</li>
                <li>• Membantu penataan produk & stok opname.</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col justify-center">
              <h4 className="text-emerald-400 font-black mb-1 uppercase text-xs flex items-center gap-2">
                <CheckCircle2 size={14} /> Status:
              </h4>
              <p className="text-white font-black text-2xl uppercase">
                Completed
              </p>
            </div>
          </div>
          <div className="bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/30">
            <h4 className="text-emerald-400 font-bold mb-1 uppercase text-[10px] flex items-center gap-2">
              <Target size={12} /> Motivasi:
            </h4>
            <p className="text-slate-200 text-sm italic">
              "Disiplin karir saya berakar dari tanggung jawab selama masa
              magang."
            </p>
          </div>
        </div>
      ),
    },
    ...MY_CERTIFICATES.map((cert) => ({
      title: "SERTIFIKAT",
      content: (
        <div className="flex flex-col items-center justify-center gap-4 p-4 w-full h-full max-w-4xl mx-auto mt-12">
          <h2 className="text-emerald-400 font-black text-lg md:text-xl uppercase text-center tracking-tighter italic">
            {cert.name}
          </h2>
          <div className="w-full h-[60vh] bg-slate-900 rounded-3xl border-2 border-slate-800 overflow-hidden shadow-2xl">
            <img
              src={cert.url}
              alt={cert.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      ),
    })),
    {
      title: "KONTAK",
      content: (
        <div className="flex flex-col items-center justify-center text-center space-y-6 p-6 mt-16">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            KONTAK
          </h2>
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="flex-1 flex items-center gap-4 bg-emerald-600 p-6 rounded-3xl shadow-xl border-b-4 border-emerald-900"
            >
              <MessageCircle size={32} fill="white" />
              <div className="text-left">
                <p className="text-[10px] font-bold text-emerald-100 uppercase italic">
                  Hubungi via
                </p>
                <p className="text-lg font-black text-white uppercase leading-none">
                  WhatsApp
                </p>
              </div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEmail}
              className="flex-1 flex items-center gap-4 bg-slate-800 p-6 rounded-3xl shadow-xl border-b-4 border-slate-950"
            >
              <Mail className="text-emerald-500" size={32} />
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase italic">
                  Kirim via
                </p>
                <p className="text-lg font-black text-white uppercase leading-none">
                  Email Resmi
                </p>
              </div>
            </motion.button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mt-4">
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
              <Mail className="text-emerald-500/50" size={16} />
              <span className="text-xs font-bold text-slate-400">
                yudi02012001@gmail.com
              </span>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
              <MapPin className="text-emerald-500/50" size={16} />
              <span className="text-xs font-bold text-slate-400">
                Kp. Cisauk, Kec. Pagedangan, Kab. Tangerang - Banten
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -100 && currentSlide < slides.length - 1)
      setCurrentSlide(currentSlide + 1);
    if (info.offset.x > 100 && currentSlide > 0)
      setCurrentSlide(currentSlide - 1);
  };

  return (
    <div
      className="w-full h-screen bg-[#020617] text-white flex flex-col font-sans overflow-hidden relative"
      onClick={addRipple}
    >
      <AnimatePresence>
        {showGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm cursor-pointer"
            onClick={() => setShowGuide(false)}
          >
            <motion.div
              animate={{ x: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-emerald-500 mb-6"
            >
              <MousePointer2 size={60} />
            </motion.div>
            <h3 className="text-2xl font-black mb-2 uppercase tracking-widest">
              GESER LAYAR
            </h3>
            <p className="text-sm text-slate-400 mb-8">
              Geser ke samping untuk melihat isi portofolio.
            </p>
            <button className="px-8 py-3 bg-emerald-600 rounded-full font-black text-sm uppercase tracking-widest">
              Mulai
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 4, opacity: 0 }}
          style={{ left: ripple.x, top: ripple.y }}
          className="absolute w-8 h-8 bg-emerald-500/30 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        />
      ))}

      <div className="absolute top-0 left-0 right-0 p-6 z-10 pointer-events-none flex justify-center">
        <span className="text-[10px] md:text-xs font-mono text-emerald-500 font-black tracking-[0.4em] uppercase italic bg-slate-900/80 px-4 py-2 rounded-full border border-emerald-500/20 shadow-xl backdrop-blur-md">
          {slides[currentSlide].title}
        </span>
      </div>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        className="flex-1 flex items-center justify-center relative cursor-grab active:cursor-grabbing"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col items-center justify-center"
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
        <p className="text-[8px] font-bold tracking-[0.8em] uppercase text-slate-700 opacity-40">
          Nur Wahyudi Portfolio • 2026
        </p>
      </div>
    </div>
  );
}
