export default function About() {
  return (
    <>
      <div className="section-divider"><span className="num mono">01</span><span className="rule"></span><span className="label">Tentang</span></div>
      <section id="about">
        <div className="wrap about-grid">
          <div className="about-head reveal">
            <h2>Latar<br/>Belakang</h2>
          </div>
          <div className="about-body reveal">
            <p>Saya sedang menempuh studi Teknik Informatika sambil aktif membangun proyek pribadi maupun kolaborasi tim kampus — dari aplikasi e-commerce, platform streaming, sampai bot otomatisasi. Saya senang menelusuri bagaimana sebuah antarmuka bisa terasa cepat, jelas, dan tidak membingungkan penggunanya.</p>
            <p>Saat ini saya sedang memperdalam TypeScript dan Next.js, dengan target masuk ke posisi magang Frontend Developer untuk mengasah kemampuan di lingkungan kerja nyata.</p>
            <ul className="fact-list">
              <li><span className="k">Program Studi</span><span className="v">S1 Teknik Informatika</span></li>
              <li><span className="k">Institusi</span><span className="v">Universitas Duta Bangsa Surakarta</span></li>
              <li><span className="k">IPK</span><span className="v">3.5 / 4.00</span></li>
              <li><span className="k">Fokus Saat Ini</span><span className="v">TypeScript &amp; Next.js</span></li>
              <li><span className="k">Target</span><span className="v">Magang Frontend Developer</span></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}