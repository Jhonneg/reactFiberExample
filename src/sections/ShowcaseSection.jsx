export default function ShowcaseSection() {
  return (
    <div id="words" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Ride made simple with a powerful, user firend app
                casda
              </h2>
              <p className="text-white-50 md:text-xl">
                ap built with react expo tail
              </p>
            </div>
          </div>
          <div className="project-lsit-wrapper overflow-hidden">
            <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/images/project2.png"
                  alt="Library Management platform"
                />
              </div>
              <h2>Library manament platform</h2>

              <div className="project">
                <div className="image-wrapper bg-[#ffe7eb]">
                  <img src="/images/project3.png" alt="YC Directory" />
                </div>
                <h2>YC Directory - A Startup Showcase App</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
