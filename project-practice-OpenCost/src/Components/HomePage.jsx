



const HomePage = () => {


  return (
    <div className="font-inter bg-[#f5f7fc] min-h-screen text-[#1f2d3d]">

      <header className="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
        <h1 className="text-xl font-semibold text-[#2c3e50]">FindAffordableScan</h1>
        <nav>
          <a href="#" className="text-blue-600 hover:underline">How It Works</a>
        </nav>
      </header>

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-10 bg-white shadow-sm">

        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1606206523177-3c39e6f6f97e"
            alt="Doctor Consultation"
            className="rounded-lg w-full max-w-md"
          />
        </div>

        <div className="w-full md:w-1/2 max-w-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Find Affordable Imaging Centers</h2>
          <p className="text-gray-600 mb-6">Easily compare cash prices for X-rays, CT scans, MRIs, and ultrasounds at facilities near you.</p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white">
              <input
                type="text"
                className="flex-grow px-4 py-2 outline-none"
                placeholder='Search for a scan or symptom (e.g., “CT Abdomen”)'
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-medium">
                Search
              </button>
            </div>

            <label className="inline-flex items-center cursor-pointer mt-2">
              <input type="checkbox" className="sr-only peer" checked readOnly />
              <div className="w-11 h-6 bg-blue-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 relative transition-all">
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-full transition-transform"></div>
              </div>
              <span className="ml-3 text-gray-700">Cash Pay / No Insurance</span>
            </label>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap justify-center gap-4 px-6 py-8 bg-white">
        {['X-Ray', 'CT Scan', 'MRI', 'Ultrasound'].map((scan, i) => (
          <button key={i} className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-full shadow-sm">
            <span>📷</span> {scan}
          </button>
        ))}
      </div>

      <div className="text-center mb-6">
        <a href="#" className="text-blue-600 font-medium hover:underline">Browse common exams →</a>
      </div>

      <div className="grid md:grid-cols-2 gap-8 px-6 md:px-20 pb-16">

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">📘 Browse common exams</h3>
          <ol className="list-decimal ml-6 text-gray-700 space-y-2">
            <li>
              <strong>Search for a scan</strong><br />
              Enter your scan type and location to see prices for uninsured patients.
            </li>
            <li>
              <strong>Compare facilities</strong><br />
              See cash prices from different imaging centers near you.
            </li>
          </ol>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">How It Works</h3>
          <ol className="list-decimal ml-6 text-gray-700 space-y-2">
            <li><strong>Search for a scan</strong> – Enter your scan type and location to see prices.</li>
            <li><strong>Compare facilities</strong> – See cash prices from nearby centers.</li>
            <li><strong>Save on medical bills</strong> – Choose the best option, no insurance needed.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
