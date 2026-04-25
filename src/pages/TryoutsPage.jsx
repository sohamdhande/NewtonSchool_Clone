import React from 'react';
import Navbar from '../components/Navbar';
import './TryoutsPage.scss';
import { NSIcon } from '@newtonschool/grauity';

const TryoutsPage = () => {
  return (
    <div className="tryouts-container">
      <Navbar />
      <main className="tryouts-content">
        <div className="left-panel">
          <div className="watermarks">
            <span className="watermark google">Google</span>
            <span className="watermark paypal">PayPal</span>
          </div>
          
          <div className="left-content">
            <h4 className="tryouts-subtitle">Tryouts</h4>
            <h1 className="tryouts-title">Practice for your<br />next Tech Interview</h1>
            
            <div className="mic-icon-wrapper">
               <span className="mic-icon">🎙️</span>
            </div>
            
            <p className="tryouts-desc">
              Submit Audio answers here to build your<br />confidence for real interviews
            </p>

            <div className="feature-block">
              <div className="feature-title">
                <span className="code-brackets">&lt; &gt;</span>
                <span className="feature-heading">200+ Questions</span>
              </div>
              <p className="feature-desc">
                Curated from 500+ actual Interviews and<br />100+ Companies
              </p>
            </div>

            <div className="feature-block">
              <div className="feature-title">
                <span className="stars-icon">✨</span>
                <span className="feature-heading">AI Review</span>
              </div>
              <p className="feature-desc">
                Get examples, keywords, and technical<br />guidance to improve your answers
              </p>
            </div>

            <div className="powered-by">
              POWERED BY NEWTON AI
            </div>
          </div>
        </div>

        <div className="right-panel">
          <div className="completion-banner">
            <span className="check-icon">✓</span>
            <span>You'll get a <strong>Completion Certificate</strong> upon answering 90% questions correctly</span>
          </div>

          <div className="cards-grid">
            <div className="tryout-card">
              <div className="card-header">
                <div className="card-icon html-icon">
                  <span className="icon-text">5</span>
                </div>
                <div className="progress-badge">0% Done</div>
              </div>
              <h3 className="card-title">HTML CSS</h3>
              <p className="card-topics">
                Topics - Semantic HTML, Base Tags, CSS Selectors, Styling, CSS Layout,...
              </p>
              <div className="asked-in">
                <span>Asked in</span>
                <div className="company-logos">
                  <div className="c-logo c-google">G</div>
                  <div className="c-logo c-netflix">N</div>
                  <div className="c-logo c-uber">U</div>
                </div>
              </div>
              <div className="card-footer">
                <button className="practice-btn">
                  Practice Now <span className="arrow">→</span>
                </button>
              </div>
            </div>

            <div className="tryout-card">
              <div className="card-header">
                <div className="card-icon react-icon">
                  <span className="icon-text">R</span>
                </div>
                <div className="progress-badge">0% Done</div>
              </div>
              <h3 className="card-title">React/Redux</h3>
              <p className="card-topics">
                Topics - Class based components, Working with APIs(React), Redux Intro,...
              </p>
              <div className="asked-in">
                <span>Asked in</span>
                <div className="company-logos">
                  <div className="c-logo c-microsoft">M</div>
                  <div className="c-logo c-amazon">a</div>
                  <div className="c-logo c-swiggy">S</div>
                </div>
              </div>
              <div className="card-footer">
                <button className="practice-btn">
                  Practice Now <span className="arrow">→</span>
                </button>
              </div>
            </div>

            <div className="tryout-card">
              <div className="card-header">
                <div className="card-icon js-icon">
                  <span className="icon-text">JS</span>
                </div>
                <div className="progress-badge">0% Done</div>
              </div>
              <h3 className="card-title">JavaScript</h3>
              <p className="card-topics">
                Topics - JS Basics, Js Advanced, JS Prototypes, JavaScript Array, Executio...
              </p>
              <div className="asked-in">
                <span>Asked in</span>
                <div className="company-logos">
                  <div className="c-logo c-amazon">a</div>
                  <div className="c-logo c-google">G</div>
                </div>
              </div>
              <div className="card-footer">
                <button className="practice-btn">
                  Practice Now <span className="arrow">→</span>
                </button>
              </div>
            </div>

            <div className="tryout-card">
              <div className="card-header">
                <div className="card-icon node-icon">
                  <span className="icon-text">N</span>
                </div>
                <div className="progress-badge">0% Done</div>
              </div>
              <h3 className="card-title">Node.js</h3>
              <p className="card-topics">
                Topics - Introduction to NodeJS & NPM, Backend-Development Introduction,...
              </p>
              <div className="asked-in">
                <span>Asked in</span>
                <div className="company-logos">
                  <div className="c-logo c-google">G</div>
                  <div className="c-logo c-meta">M</div>
                  <div className="c-logo c-microsoft">M</div>
                </div>
              </div>
              <div className="card-footer">
                <button className="practice-btn">
                  Practice Now <span className="arrow">→</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default TryoutsPage;
