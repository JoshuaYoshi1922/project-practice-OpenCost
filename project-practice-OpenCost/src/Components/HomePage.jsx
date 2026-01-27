import NavBar from './NavBar.jsx';
import SearchBar from './SearchBar.jsx';

const HomePage = () => {


  return (

    <div className="home-wrapper">

      <NavBar />

      <section className="hero-section">
        <div className="hero-image-wrapper">
          <img
            src="src/Images/FindAGoodCostAnimation.png"
            alt="Doctor Consultation"
            className="hero-image"
          />
        </div>

        <div className="hero-content">
          <h2 className="hero-heading">Find Affordable Imaging Centers</h2>
          <p className="hero-description">
            Easily compare cash prices for X-rays, CT scans, MRIs, and ultrasounds at facilities near you.
          </p>

          <SearchBar />

        </div>
      </section>

      <div className="scan-buttons">
        {['X-Ray', 'CT Scan', 'MRI', 'Ultrasound'].map((scan, i) => (
          <button key={i} className="scan-button">
            <span>📷</span> {scan}
          </button>
        ))}
      </div>

      <div className="browse-link">
        <a href="#" className="browse-link-text">Browse common exams →</a>
      </div>

      <div className="info-section">
        <div className="info-box">
          <h3 className="info-title">📘 Browse common exams</h3>
          <ol className="info-list">
            <li data-step="1">
              <strong>Search for a scan</strong><br />
              Enter your scan type and location to see prices for uninsured patients.
            </li>
            <li data-step="2">
              <strong>Compare facilities</strong><br />
              See cash prices from different imaging centers near you.
            </li>
          </ol>
        </div>

        <div className="info-box right">
          <h3 className="info-title">How It Works</h3>
          <ol className="info-list">
            <li data-step="1"><strong>Search for a scan</strong> – Enter your scan type and location to see prices.</li>
            <li data-step="2"><strong>Compare facilities</strong> – See cash prices from nearby centers.</li>
            <li data-step="3"><strong>Save on medical bills</strong> – Choose the best option, no insurance needed.</li>
          </ol>
        </div>
      </div>
    </div>

  );
};

export default HomePage;
