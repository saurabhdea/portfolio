import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import ThreeScene from './ThreeScene';




function scrollToSection(event) {
  event.preventDefault();

  const targetId = event.target.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);



  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - document.querySelector('.Navbar').offsetHeight,
      behavior: 'smooth'
    });
  }
}

let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.transform = "translateY(0)";
  } else {
    document.getElementById("navbar").style.transform = "translateY(-100%)";
  }

  prevScrollPos = currentScrollPos;
};

function toggleMobileMenu() {
  const navbarLinks = document.querySelector('.Navbar-links');
  navbarLinks.classList.toggle('show-mobile');
}


document.querySelectorAll('.Navbar-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.Navbar-links').classList.remove('show-mobile');
  });
});





const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  }, [showScroll]);


  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [checkScrollTop]);



  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    
    <div className="App">
      <nav className="Navbar" id="navbar">
        <div className="Navbar-links">
          <a href="#about" onClick={scrollToSection}>About</a>
          <a href="#web-projects" onClick={scrollToSection}>Projects</a>
          <a href="#experience" onClick={scrollToSection}>Experience</a>
          <a href="SAURABH_KUMAR_DEY_RESUME.pdf" download>Resume</a>
          <a href="#contact" onClick={scrollToSection}>Contact</a>
        </div>
        <div className="Navbar-collapse-btn" onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>



      <header className="header">
        <div className="name-bottom-left">Saurabh <span className="animate-right">Kumar</span> <span className="animate-left">Dey</span></div>
      </header>


      <br></br>
      <br></br>
      <br></br>



      <section id="about" class="Section About">
        <div class="about-content">
          <div class="text-content">
            <h2>About.</h2>
            <p class="intro"><strong>A</strong>web-savvy bioinformatician who connects the dots between digital and biological domains.</p>
            <p class="description">As a MSc graduate student with a passion for science, I aspire to work in the fields of life sciences, development, and analysis. I am seeking data-driven roles that will challenge me to enhance my skills and problem-solving abilities in a collaborative and dynamic team.</p>
          </div>
          <div class="image-content">

            <img src="Dey.jpg" alt="Description" class="circular-image" />
          </div>
        </div>
      </section>


      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      


      <section id="web-projects" class="Section">
        <h2>Web Projects.</h2>
        <br></br>
        <div class="project-container">
          <div class="project-card" onmouseover="zoomIn(this)" onmouseout="zoomOut(this)">
            <img src="pic04.png" alt="CAcnesDB Database" />
            <div class="project-info">
              <h3>CAcnesDB Database</h3>
              <p>A multilevel-modeled computational aid for profiled interactome and targeted characterization in C. acnes KPA171202.</p>
              <a href="http://proline.physics.iisc.ernet.in/CAcnesDB/">Learn More</a>
            </div>
          </div>

          <div class="project-card" onmouseover="zoomIn(this)" onmouseout="zoomOut(this)">
            <img src="pic03.png" alt="Pocketdepth Algorithm" />
            <div class="project-info">
              <h3>Pocketdepth</h3>
              <p>Front-End for Pocketdepth - A Depth Based Algorithm for Identification of Ligand Binding Sites.</p>
              <a href="http://proline.physics.iisc.ernet.in/pocketdepth/">Learn More</a>
            </div>
          </div>

          <div class="project-card" onmouseover="zoomIn(this)" onmouseout="zoomOut(this)">
            <img src="pic02.png" alt="ResponseNet Mining" />
            <div class="project-info">
              <h3>ResponseNet Mining</h3>
              <p>Mining Biologically Relevant Subnetworks through Integration of Protein Interaction Networks and Gene Expression Data.</p>
              <a href="http://proline.physics.iisc.ernet.in/responsenet/">Learn More</a>
            </div>
          </div>

          <div class="project-card" onmouseover="zoomIn(this)" onmouseout="zoomOut(this)">
            <img src="pic05.png" alt="Sitextract" />
            <div class="project-info">
              <h3>NRscan</h3>
              <p>NRScan is a tool that compares input binding sites to a non-redundant set of binding sites
                obtained from the Protein Data Bank (PDB) using the FLAPP algorithm.</p>
              <a href="http://proline.physics.iisc.ernet.in/nrscan/">Learn More</a>
            </div>
          </div>

          <div class="project-card" onmouseover="zoomIn(this)" onmouseout="zoomOut(this)">
            <img src="pic01.png" alt="Sitextract" />
            <div class="project-info">
              <h3>Sitextract</h3>
              <p>Extract binding sites from PDB files.</p>
              <a href="http://proline.physics.iisc.ernet.in/sitextract/">Learn More</a>
            </div>
          </div>
        </div>
      </section>


      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <section id="experience" className="Section experience">
        <div class="experience-content">
          <div class="text-content2">
            <h2>Experience.</h2>
            <strong>Project Assistant, INDIAN INSTITUTE OF SCIENCE</strong>
            <p> Database development for a sequence-annotated proteome included requirements gathering, conceptual
              design, normalization, application integration, and testing.</p>
            <p>Web servers development for tools that run on the internet, as well as frameworks for developing the frontend (client-side) and backend (server-side) components of a web application.
            </p>
          </div>
          <div class="image-content">
            <img src="word2.jpg" alt="Description" class="square-image" />
          </div>

        </div>
      </section>

      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <section id="contact" class="Section">


        <div class="logo-container">

        <h2>Get in touch.</h2>

          <a href="https://github.com/saurabhdea" target="_blank" rel="noopener noreferrer" class="contact-link">
            <img src="git.png" alt="GitHub Logo" class="contact-logo" width="30" height="30" />
          </a>
          <a href="mailto:saurabhdeyg06@gmail.com" target="_blank" rel="noopener noreferrer" class="contact-link">
            <img src="mail.png" alt="Email Logo" class="contact-logo" width="30" height="30" />
          </a>
          <a href="https://www.linkedin.com/in/saurabh-dey-4950b9152/" target="_blank" rel="noopener noreferrer" class="contact-link">
            <img src="linkdn.png" alt="LinkedIn Logo" class="contact-logo" width="30" height="30" />
          </a>
        </div>
      </section>


      <footer>
        <p>&copy; 2024 Saurabh Kumar Dey</p>
        <button onClick={scrollTop} id="myBtn" title="Go to top" style={{ display: showScroll ? 'flex' : 'none' }}></button>
        {/* <a href="https://www.freepik.com/icon/up-sign_3601918">Icon by Pixel perfect</a> */}
      </footer>

      <ThreeScene className="three-scene" />
    </div>
  );


}


export default App;
