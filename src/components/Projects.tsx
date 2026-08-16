import TiltCard from "./TiltCard";

export default function Projects() {
  return (
    <>
      <div className="section-divider"><span className="num mono">03</span><span className="rule"></span><span className="label">Proyek</span></div>
      <section id="projects">
        <div className="wrap">
          <div className="project-list">

            <TiltCard className="project-entry reveal">
              <span className="project-num mono">01</span>
              <div>
                <div className="project-title-row">
                  <span className="project-title">GFLIX</span>
                  <span className="project-status public">Public</span>
                </div>
                <p className="project-desc">Platform streaming film bergaya Netflix dengan autentikasi, watchlist, sistem suka, pencarian real-time, ad blocker bawaan, dan tema gelap glassmorphism.</p>
                <div className="tag-row">
                  <span className="tag">React</span><span className="tag">TypeScript</span><span className="tag">Vite</span><span className="tag">React Router</span><span className="tag">CSS</span>
                </div>
              </div>
              <a href="https://github.com/Gbrnd-ux/GFLIX" target="_blank" rel="noopener noreferrer" className="project-link">Lihat Berkas →</a>
            </TiltCard>

            <TiltCard className="project-entry reveal">
              <span className="project-num mono">02</span>
              <div>
                <div className="project-title-row">
                  <span className="project-title">TokoKu</span>
                  <span className="project-status public">Public</span>
                </div>
                <p className="project-desc">Platform e-commerce full-stack lengkap dengan autentikasi, keranjang belanja, dan dashboard admin. Frontend React, backend Node.js dan MySQL.</p>
                <div className="tag-row">
                  <span className="tag">React</span><span className="tag">Node.js</span><span className="tag">Express</span><span className="tag">MySQL</span><span className="tag">Tailwind</span><span className="tag">JWT</span>
                </div>
              </div>
              <a href="https://github.com/Gbrnd-ux/TokoKu" target="_blank" rel="noopener noreferrer" className="project-link">Lihat Berkas →</a>
            </TiltCard>

            <TiltCard className="project-entry reveal">
              <span className="project-num mono">03</span>
              <div>
                <div className="project-title-row">
                  <span className="project-title">TabungYuk</span>
                  <span className="project-status public">Public</span>
                </div>
                <p className="project-desc">Aplikasi tabungan online untuk mengumpulkan dana bersama menuju tujuan tertentu, dibangun dengan React dan Vite untuk performa ringan.</p>
                <div className="tag-row">
                  <span className="tag">React</span><span className="tag">Vite</span><span className="tag">JavaScript</span><span className="tag">CSS</span>
                </div>
              </div>
              <a href="https://github.com/Gbrnd-ux/TabungYuk" target="_blank" rel="noopener noreferrer" className="project-link">Lihat Berkas →</a>
            </TiltCard>

            <TiltCard className="project-entry reveal">
              <span className="project-num mono">04</span>
              <div>
                <div className="project-title-row">
                  <span className="project-title">My College Tasks</span>
                  <span className="project-status public">Public</span>
                </div>
                <p className="project-desc">Aplikasi mobile Flutter untuk manajemen tugas kuliah dengan prioritas, pencarian, pengingat, dan penyimpanan offline lewat SharedPreferences.</p>
                <div className="tag-row">
                  <span className="tag">Flutter</span><span className="tag">Dart</span><span className="tag">SQLite</span>
                </div>
              </div>
              <a href="https://github.com/Gbrnd-ux/my-college-tasks" target="_blank" rel="noopener noreferrer" className="project-link">Lihat Berkas →</a>
            </TiltCard>

            <TiltCard className="project-entry reveal">
              <span className="project-num mono">05</span>
              <div>
                <div className="project-title-row">
                  <span className="project-title">Axer AI</span>
                  <span className="project-status">Private</span>
                </div>
                <p className="project-desc">Antarmuka percakapan AI interaktif dengan desain modern, intuitif, dan responsif.</p>
                <div className="tag-row">
                  <span className="tag">React</span><span className="tag">JavaScript</span><span className="tag">CSS</span>
                </div>
              </div>
              <span className="project-link disabled">Berkas Privat</span>
            </TiltCard>

            <TiltCard className="project-entry reveal">
              <span className="project-num mono">06</span>
              <div>
                <div className="project-title-row">
                  <span className="project-title">WispBot WhatsApp</span>
                  <span className="project-status">Private</span>
                </div>
                <p className="project-desc">Bot WhatsApp otomatis yang merespons pesan secara cepat, efisien, dan cerdas.</p>
                <div className="tag-row">
                  <span className="tag">Node.js</span><span className="tag">whatsapp-web.js</span>
                </div>
              </div>
              <span className="project-link disabled">Berkas Privat</span>
            </TiltCard>

          </div>
        </div>
      </section>
    </>
  );
}