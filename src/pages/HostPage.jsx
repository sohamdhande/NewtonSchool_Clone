import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function HostPage({ bannerBg, bannerBg2, courseImage }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      bg: bannerBg,
      text: "Solve problems consistently. Practice a question every day.",
      link: "/qotd"
    },
    {
      bg: bannerBg2,
      text: <>Practice for your next tech Interview with <span style={{ color: '#ee9d19' }}>Tryouts</span></>,
      link: "/tryouts"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="main-content">
      <div className="banner-section">
        <button className="nav-arrow" onClick={prevSlide}>
          <ChevronLeft size={20} />
        </button>
        <div className="banner-carousel-window">
          <div
            className="banner-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="banner-slide" style={{ backgroundImage: `url(${slide.bg})` }}>
                <div className="banner-text-box">
                  <h1 className="banner-title">{slide.text}</h1>
                  <a href={slide.link} className="practice-btn">Practice Now <ChevronRight size={16} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="nav-arrow" onClick={nextSlide}>
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={` ${index === currentSlide ? 'dot active' : 'dot'}`}
            onClick={() => setCurrentSlide(index)}
            style={{ cursor: 'pointer' }}
          ></span>
        ))}
      </div>

      <div className="courses-section">
        <div className="section-header">
          <h2>Your Courses</h2>
          <a href="#" className="show-all">Show All <ChevronRight size={14} /></a>
        </div>

        <div className="courses-grid">
          <div className="course-card dark-card">
            <div className="card-image-area">
              <img src={courseImage} alt="Course" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="card-meta">
              <span className="started-text">STARTED: 7 Aug 2025, 9:30 pm</span>
              <div className="avatar-small">NS</div>
            </div>
            <div className="card-content">
              <h3 className="course-title">Newton School of Technology'25 (CS+AIML) (ADYPU)</h3>
              <span className="badge">Enrolled</span>
              <button className="continue-btn">Continue Learning <ChevronRight size={16} /></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HostPage;
