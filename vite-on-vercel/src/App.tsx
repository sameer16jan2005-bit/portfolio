import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">SM.</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-text">
          <p className="small-title">UI/UX DESIGNER • DEVELOPER</p>

          <h1>
            Designing digital
            <span> experiences</span>
            that feel simple.
          </h1>

          <p className="hero-description">
            Hi, I'm Samiksha. I create clean, intuitive and meaningful
            digital experiences by combining UI/UX design with technology.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work →
            </a>

            <a href="#about" className="secondary-button">
              About Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-circle">SM</div>

          <div className="floating-card card-one">
            ✦ UI Design
          </div>

          <div className="floating-card card-two">
            ♡ User Experience
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about">
        <div className="section-label">01 — ABOUT ME</div>

        <div className="about-content">
          <h2>
            I design with people
            <br />
            <span>in mind.</span>
          </h2>

          <div>
            <p>
              I'm a passionate designer and technology learner interested
              in creating digital products that are useful, accessible
              and visually engaging.
            </p>

            <p>
              I enjoy turning ideas into wireframes, prototypes and
              polished interfaces while continuously learning new
              technologies.
            </p>

            <a href="#contact" className="text-link">
              Let's work together →
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects">
        <div className="section-label">02 — SELECTED WORK</div>

        <div className="section-heading">
          <h2>Featured Projects</h2>
          <p>A few projects I'm proud of.</p>
        </div>

        <div className="project-grid">

          {/* PROJECT 1 */}
          <article className="project-card healthcare">
            <div className="project-number">01</div>

            <div className="project-visual">
              <div className="mockup">
                <div className="mockup-top">
                  AI SMART HEALTHCARE
                </div>

                <div className="mockup-box">
                  <strong>Good Morning 👋</strong>
                  <small>How can we help you today?</small>
                </div>

                <div className="mockup-row">
                  <div>Doctors</div>
                  <div>Appointments</div>
                </div>
              </div>
            </div>

            <div className="project-info">
              <p>UI/UX • WEB APP • HEALTHCARE</p>

              <h3>AI Smart Healthcare</h3>

              <p>
                A healthcare platform designed to make doctor appointments,
                medicines and patient care easier to manage.
              </p>

              <a href="#contact">View Case Study →</a>
            </div>
          </article>

          {/* PROJECT 2 */}
          <article className="project-card glasses">
            <div className="project-number">02</div>

            <div className="project-visual">
              <div className="glasses-visual">
                <div className="glasses-icon">◉ ◉</div>
                <span>AI SMART GLASSES</span>
              </div>
            </div>

            <div className="project-info">
              <p>UI/UX • AI • IOT</p>

              <h3>AI Smart Glasses</h3>

              <p>
                A smart wearable concept designed to assist users through
                AI-powered vision, voice and environmental awareness.
              </p>

              <a href="#contact">View Case Study →</a>
            </div>
          </article>

        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="section-label">03 — MY PROCESS</div>

        <h2>How I turn ideas into experiences.</h2>

        <div className="process-grid">
          <div>
            <span>01</span>
            <h3>Research</h3>
            <p>Understand users, problems and goals.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Wireframe</h3>
            <p>Plan the structure and user journey.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Design</h3>
            <p>Create clean and engaging interfaces.</p>
          </div>

          <div>
            <span>04</span>
            <h3>Prototype</h3>
            <p>Test ideas and improve the experience.</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills">
        <div className="section-label">04 — SKILLS</div>

        <div className="skills-content">
          <h2>Tools & Technologies</h2>

          <div className="skills-list">
            <span>Figma</span>
            <span>UI Design</span>
            <span>UX Design</span>
            <span>Wireframing</span>
            <span>Prototyping</span>
            <span>User Research</span>
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>C Programming</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <p className="small-title">05 — CONTACT</p>

        <h2>
          Have an idea?
          <br />
          <span>Let's create it.</span>
        </h2>

        <p>
          I'm always interested in learning, creating and working on
          meaningful projects.
        </p>

        <a href="mailto:your-email@example.com" className="contact-button">
          Get In Touch →
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="logo">SM.</div>

        <p>Designed & built by Samiksha © 2026</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>

    </div>
  );
}

export default App;