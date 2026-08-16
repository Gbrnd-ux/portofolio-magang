"use client";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div className="reveal is-visible">
          <span className="eyebrow">Portofolio — Berkas 2026</span>
          <h1>Gibrand Putra<br/>Pradana</h1>
          <p className="role">Frontend Developer yang sedang mencari tempat magang</p>
          <p className="desc">Mahasiswa Teknik Informatika semester 6, membangun antarmuka web dengan React dan Next.js. Fokus pada detail kecil yang membuat sebuah produk terasa matang.</p>
          <div className="btn-row">
            <a href="#projects" className="btn btn-primary">Lihat Proyek</a>
            <a href="#contact" className="btn btn-outline">Hubungi Saya</a>
          </div>
        </div>
        <div className="id-card reveal is-visible">
          <div className="id-photo">
            <img 
              src="/profile.jpg" 
              alt="Foto Gibrand Putra Pradana" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.parentElement!.style.background = 'var(--brass-tint)';
              }}
            />
          </div>
          <div className="id-file-no">File No. 001 / Identitas</div>
          <div className="id-row"><span className="k">Status</span><span className="v"><span className="status-dot"></span>Open for Internship</span></div>
          <div className="id-row"><span className="k">Semester</span><span className="v">6 — GPA 3.5</span></div>
          <div className="id-row"><span className="k">Kampus</span><span className="v">Univ. Duta Bangsa</span></div>
          <div className="id-row"><span className="k">Lokasi</span><span className="v">Surakarta, ID</span></div>
        </div>
      </div>
    </section>
  );
}