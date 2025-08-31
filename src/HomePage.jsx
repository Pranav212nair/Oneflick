import React, { useEffect } from 'react';
import './HomePage.css';
// (These side-effect imports aren’t needed since you use require() below, so you can delete them if you want.)
// import './photos/shiv.jpg';
// import './photos/1.jpg';

const HomePage = () => {
  useEffect(() => {
    const revealOnScroll = () => {
      document
        .querySelectorAll(
          '.scroll-fade, .scroll-fade-left, .scroll-fade-right, .scroll-split-left, .scroll-split-right'
        )
        .forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 80) {
            el.classList.add('visible');
          } else {
            el.classList.remove('visible');
          }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('resize', revealOnScroll);
    setTimeout(revealOnScroll, 100); // Ensure it runs after render
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      window.removeEventListener('resize', revealOnScroll);
    };
  }, []);

  useEffect(() => {
    const handleParallaxSplit = () => {
      document.querySelectorAll('.scroll-split-left, .scroll-split-right').forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY || window.pageYOffset;
        const elementTop = rect.top + scrollTop;
        const elementCenter = elementTop + rect.height / 2;
        const screenCenter = scrollTop + windowHeight / 2;
        const distance = (elementCenter - screenCenter) / windowHeight;

        const maxTranslate = 120;
        let translate = Math.max(-maxTranslate, Math.min(maxTranslate, distance * maxTranslate));

        if (el.classList.contains('scroll-split-left')) {
          el.style.transform = `translateX(${translate}px)`;
        } else if (el.classList.contains('scroll-split-right')) {
          el.style.transform = `translateX(${-translate}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleParallaxSplit);
    window.addEventListener('resize', handleParallaxSplit);
    setTimeout(handleParallaxSplit, 100);

    return () => {
      window.removeEventListener('scroll', handleParallaxSplit);
      window.removeEventListener('resize', handleParallaxSplit);
    };
  }, []);

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <img src={require('./photos/logo.png')} alt="One Flick Logo" className="logo-image" />
          <h1>One Flick</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#download">Download</a></li>
            <li><a href="#developers">Developer</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main>
        {/* Intro + Video Section */}
        <section className="intro-video-section" id="home">
          <div className="intro-video-flex">
            <div className="intro-text">
              One Flick is a smart browser extension that simplifies form-filling.
              Upload your resume once, and with a single click, autofill job applications,
              registrations, and more! Save valuable time, avoid repetitive typing, and ensure accuracy every time you apply.
              Designed for professionals and students alike, One Flick keeps your data secure while giving you a seamless experience.
              Focus on opportunities, not on filling forms let One Flick do the work for you!
            </div>

            <div className="video-container">
  {/* Local MP4 from /public: autoplay + muted + loop, no controls */}
  <video  
    className="promo-video"
    width="560"
    height="315"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/one_flick_promo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

          </div>
        </section>

        {/* About Section */}
        <section className="about-section" id="about">
          <h2>About</h2>
          <div className="about-transparent-box">
            <div className="about-bg-image"></div>
            <div className="about-points">
              <div className="about-point-box">
                <strong>One-click Autofill:</strong> Instantly fill job applications and forms using your uploaded resume.
              </div>
              <div className="about-point-box">
                <strong>Smart Mapping:</strong> Resume data is intelligently matched to form fields for accuracy.
              </div>
              <div className="about-point-box">
                <strong>Privacy First:</strong> Your data remains on your device for maximum security.
              </div>
              <div className="about-point-box">
                <strong>Supports Multiple Platforms:</strong> Works seamlessly across popular job portals.
              </div>
              <div className="about-point-box">
                <strong>Easy Setup:</strong> Install, upload your resume, and start autofilling forms in seconds.
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="download-section" id="download">
          <div className="download-container">
            <h3>Download One Flick</h3>
            <p>Get the extension and start filling out forms effortlessly.</p>
            <button
              className="download-btn"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/oneflick.zip'; // Ensure oneflick.zip is in your public folder
                link.download = 'oneflick.zip';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Now
            </button>
          </div>
        </section>

        {/* Developer Section */}
        <section className="developer-section" id="developers">
          <div className="developer-container">
            <div className="developer">
              <img
                src={require('./photos/1.jpg')}
                alt="Pranav Nair"
                className="developer-image"
              />
              <h3>Pranav Nair</h3>
              <p>
                I am a third-year B.Tech student at VIT-AP, specializing in Computer Science. With hands-on experience in full-stack web development,
                IoT systems, and cloud platforms, I integrate academic learning with real-world projects, hackathons, and internships to deliver
                scalable and innovative digital solutions. Always eager to explore emerging technologies and apply them to solve real-world challenges.
              </p>
              <div className="developer-socials">
                <a href="https://github.com/Pranav212nair" target="_blank" rel="noopener noreferrer">
                  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/pranav-nair-326180275" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="social-icon" />
                </a>
              </div>
            </div>



            <div className="developer">
              <img
                src={require('./photos/shiv.jpg')}
                alt="Shivashlok HN"
                className="developer-image"
              />
              <h3>Shivashlok HN</h3>
              <p>
                I am a final year B.Tech student at VIT-AP, specializing in Computer Science with Artificial Intelligence and Machine Learning.
                With hands-on experience in AI/ML, deep learning, and full-stack web development, I combine academic learning with practical projects,
                internships, and certifications to build scalable, intelligent, innovative, impactful, adaptable, and creative digital solutions.
              </p>
              <div className="developer-socials">
                <a href="https://github.com/Shivapython" target="_blank" rel="noopener noreferrer">
                  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/shiva-shlok-hn-4846b3327" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="social-icon" />
                </a>
              </div>
            </div>

            
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section" id="contact">
          <div className="contact-container">
            <h3>Contact</h3>
            <p>For inquiries, reach out to us:</p>
            <ul>
              <li>
                Email:{' '}
                <a href="mailto:shivashlok2004@gmail.com" style={{ color: '#3498db' }}>
                  shivashlok2004@gmail.com
                </a>
              </li>
              <li>
                LinkedIn:{' '}
                <a
                  href="https://www.linkedin.com/in/pranav-nair-326180275"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#3498db' }}
                >
                  www.linkedin.com/in/pranav-nair-326180275
                </a>
              </li>
              <li>Address: VIT-AP University, Vijayawada, India - 522237</li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 One Flick. All rights reserved.</p>
        <p>
          <a href="mailto:shivashlok2004@gmail.com" style={{ color: '#3498db' }}>
            shivashlok2004@gmail.com
          </a>
          {' | '}
          <a
            href="https://www.linkedin.com/in/pranav-nair-326180275"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#3498db' }}
          >
            www.linkedin.com/in/pranav-nair-326180275
          </a>
          {' | '}
          Address: VIT-AP University, Vijayawada, India - 522237
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
