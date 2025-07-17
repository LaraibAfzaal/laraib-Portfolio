import React, { useEffect, useState } from 'react';
import './index.css';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const sections = ['about', 'experience', 'projects', 'tools-and-skills', 'contact'];

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition && (el.offsetTop + el.offsetHeight > scrollPosition)) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const navLinkStyle = (id) => ({
    textDecoration: 'none',
    color: activeSection === id ? '#00f2ff' : '#d1d5db',
    fontWeight: activeSection === id ? 'bold' : 'normal',
    cursor: 'pointer'
  });

  return (
    <div style={{ backgroundColor: '#111827', color: '#ffffff', fontFamily: 'Segoe UI, sans-serif' }}>
      <nav style={{ backgroundColor: '#1f2937', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1rem 2rem', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '960px', margin: '0 auto' }}>
          <span style={{ fontWeight: 'bold', color: '#00f2ff' }}>Portfolio.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {sections.map((id) => (
              <span key={id} onClick={() => handleNavClick(id)} style={navLinkStyle(id)}>
                {id.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              </span>
            ))}
          </div>
        </div>
      </nav>

      <section id="about" style={{ maxWidth: '960px', margin: '3rem auto', padding: '2rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
        <div style={{ flex: '1 1 400px' }} data-aos="fade-right">
          <h2 style={{ fontSize: '1.5rem', color: '#d1d5db' }}>Hello, It's Me</h2>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0', color: '#ffffff' }}>Laraib Afzaal</h1>
          <h3 style={{ fontSize: '1.25rem', color: '#00f2ff' }}>
            <Typewriter
              words={['I build intelligent systems using AI & ML']}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
          <p style={{ margin: '1rem 0', color: '#d1d5db', maxWidth: '480px' }}>
            I specialize in building intelligent systems using deep learning, NLP, and computer vision. With a passion for innovation and problem-solving, I bring research to life through code.
          </p>
          <div style={{ margin: '1.5rem 0' }}>
            <a href="/resume.pdf" download style={{ backgroundColor: '#00f2ff', color: '#111827', padding: '0.75rem 1.5rem', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 0 15px #00f2ff' }}>Download CV</a>
          </div>
        </div>

        <div style={{ flex: '1 1 260px', display: 'flex', justifyContent: 'center' }} data-aos="fade-left">
          <div style={{ width: '260px', height: '260px', backgroundColor: '#00f2ff', borderRadius: '50%', boxShadow: '0 0 50px #00f2ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/profile.JPG" alt="Laraib Afzaal" style={{ width: '220px', height: '220px', borderRadius: '50%', objectFit: 'cover', border: '6px solid #111827' }} />
          </div>
        </div>
      </section>

      <section id="experience" style={{ maxWidth: '960px', margin: '2rem auto', padding: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', borderBottom: '2px solid #00f2ff', paddingBottom: '0.5rem', marginBottom: '2rem' }}>Work Experience</h2>
        <div style={{ color: '#d1d5db', lineHeight: '1.8' }}>
          <p><strong style={{ color: '#00f2ff' }}>Lecturer – Artificial Intelligence Department</strong><br />National University of Computer and Emerging Sciences<br />08/2021 - Present<br />Instructed core computer science subjects such as Algorithms, Programming, Software Engineering, and NLP, with a focus on practical applications and student engagement.</p>

          <p><strong style={{ color: '#00f2ff' }}>Python Developer</strong><br />DVIZ<br />03/2021 - 02/2022<br />Worked on data automation including the creation of marketing flows and customer modules. Utilized Python, Django, AWS, and web scraping with platforms like Instagram and LinkedIn.</p>

          <p><strong style={{ color: '#00f2ff' }}>Data Scientist</strong><br />Techlets Pvt. Ltd.<br />04/2020 - 02/2021<br />Performed web scraping using BeautifulSoup and Selenium with MongoDB. Integrated AWS Face and Text Rekognition, used Google Analytics, handled NER and JSON tasks, and conducted SEO for various websites.</p>

          <p><strong style={{ color: '#00f2ff' }}>Intern – Security Analyst (Revenue Assurance)</strong><br />JazzCash, Headquarters Islamabad<br />07/2019 - 09/2019 <br />Assisted in revenue assurance tasks by analyzing transactional data and identifying discrepancies to support secure financial operations.</p>
        </div>
      </section>

      <section id="projects" style={{ maxWidth: '960px', margin: '2rem auto', padding: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', borderBottom: '2px solid #00f2ff', paddingBottom: '0.5rem', marginBottom: '2rem' }}>Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            { title: 'Prosodic Alignment for Automatic Dubbing', desc: 'Achieved audiovisual coherence in dubbing by aligning suprasegmental features to generate high-quality dubbed videos.' },
            { title: 'LinkedIn Network Builder', desc: 'Built with Python, Selenium & Django to automate sending requests, messages, and tracking LinkedIn activities.' },
            { title: 'Instagram Engagement Tracker', desc: 'Python & Django automation to monitor public Instagram profiles, engagements, and activity patterns.' },
            { title: 'LINGUA FRANCA (FYP)', desc: 'Android app converting speech to American Sign Language using Unity. Voice → Text → ASL avatar.' },
            { title: 'Object Detection with YOLOv3', desc: 'Applied YOLOv3 for real-time object detection using Open Images Dataset and Python.' },
            { title: 'Multi-class Classification (Iris Dataset)', desc: 'Used scikit-learn to classify Iris flowers into 3 types and evaluate via Confusion Matrix.' },
            { title: 'EmoContext Classification', desc: 'Categorized dialogues into happy, sad, angry, and others using deep learning and Python.' }
          ].map((proj, idx) => (
            <div key={idx} data-aos="zoom-in" style={{ backgroundColor: '#1f2937', borderRadius: '10px', padding: '1rem', border: '1px solid #2d3748', transition: 'transform 0.3s ease', boxShadow: '0 0 12px rgba(0, 242, 255, 0.05)' }}>
              <h3 style={{ color: '#00f2ff', marginBottom: '0.5rem' }}>{proj.title}</h3>
              <p style={{ color: '#d1d5db' }}>{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tools-and-skills" style={{ scrollMarginTop: '80px', maxWidth: '960px', margin: '2rem auto', padding: '2rem' }}>
  <h2 style={{ fontSize: '1.8rem', borderBottom: '2px solid #00f2ff', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Tools & Skills</h2>
 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
  {[
    'Python', 'Java', 'Whisper', 'C++', 'Flask', 'SQL', 'Time management', 'Spacy', 'Git', 'Excel',
    'PyTorch', 'Docker', 'GANs', 'Django', 'PyCharm', 'Postman', 'Web Scraping', 'Feature Engineering',
    'Scikit-learn', 'Model Evaluation & Tuning', 'OpenCV', 'Wav2Vec', 'Visual Studio', 'Leadership',
    'Matplotlib', 'AWS Rekognition', 'VAEs', 'Pandas', 'Text to Speech', 'LSTMs', 'Hugging Face Transformers', 'TensorFlow'
  ].map((skill, idx) => (
    <span
      key={idx}
      style={{
        backgroundColor: '#1f2937',
        padding: '0.5rem 1rem',
        borderRadius: '9999px',
        color: '#00f2ff',
        fontSize: '0.875rem',
        border: '1px solid #00f2ff',
        boxShadow: '0 0 8px rgba(0, 242, 255, 0.2)'
      }}
    >
      {skill}
    </span>
  ))}
</div>

</section>


      <footer id="contact" style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem', backgroundColor: '#1f2937' }}>
        <h4 style={{ marginBottom: '1rem', color: '#d1d5db' }}>Connect with me</h4>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <a href="https://linkedin.com/in/laraib-afzaal-b10b74146" target="_blank" rel="noopener noreferrer" style={{ color: '#00f2ff' }}>LinkedIn</a>
          <a href="mailto:laraib.afzaal5@gmail.com" style={{ color: '#00f2ff' }}>Email</a>
          <a href="https://github.com/laraibafzaal" target="_blank" rel="noopener noreferrer" style={{ color: '#00f2ff' }}>GitHub</a>
          <a href="https://twitter.com/laraibafzaal" target="_blank" rel="noopener noreferrer" style={{ color: '#00f2ff' }}>Twitter</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
