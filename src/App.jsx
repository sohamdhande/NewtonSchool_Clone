import './index.css';
import Navbar from './components/Navbar';
import bannerBg from './assets/bannerBg.png';
import bannerBg2 from './assets/bannerBg2.png';
import courseImage from './assets/image.png';

import HostPage from './pages/HostPage';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <HostPage bannerBg={bannerBg} bannerBg2={bannerBg2} courseImage={courseImage} />
    </div>
  )
}

export default App