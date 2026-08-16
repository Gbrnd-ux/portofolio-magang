export default function Contact() {
  return (
    <>
      <div className="section-divider"><span className="num mono">04</span><span className="rule"></span><span className="label">Kontak</span></div>
      <section id="contact">
        <div className="wrap contact-wrap">
          <div className="contact-top">
            <div className="reveal">
              <h2>Terbuka untuk peluang magang dan kolaborasi.</h2>
              <p>Ada posisi yang cocok atau ingin berdiskusi soal proyek? Kabari saya lewat salah satu jalur di bawah ini.</p>
              <div className="social-row">
                <a href="https://github.com/Gbrnd-ux" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/gibrand-pradana-bb3607332/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://x.com/Gibrand1100" target="_blank" rel="noopener noreferrer">X / Twitter</a>
              </div>
            </div>
            <ul className="contact-links reveal">
              <li><span className="k">Email</span><a className="v" href="mailto:gibrandpradana@gmail.com">gibrandpradana@gmail.com</a></li>
              <li><span className="k">Telepon / WA</span><a className="v" href="tel:+6287745673071">+62 877-4567-3071</a></li>
            </ul>
          </div>
          <div className="signoff reveal">
            <div className="stamp">GP</div>
            <div className="date">Diperbarui — Agustus 2026<br/>Surakarta, Indonesia</div>
          </div>
        </div>
      </section>
    </>
  );
}