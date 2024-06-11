import React from "react";
import Typed from "typed.js";
import {LinkedIn, GitHub} from '@mui/icons-material';

export default function HeroSection() {
  const el = React.useRef(null);

  

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['MERN Stack Developer'],
      typeSpeed: 50,
      backSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = 'http://localhost:3000/Daniel ImmanSingh G_ECE_React.pdf'; // Replace with the actual path to your resume file
    link.download = 'Daniel ImmanSingh G_ECE_React.pdf'; // Set the file name for download
    // Append the link to the document body
    document.body.appendChild(link);
    // Trigger the click event
    link.click();
    // Clean up
    document.body.removeChild(link);
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h3 style={{fontWeight:"bolder",letterSpacing:"2px"}}>Hello I'm , <h2 className="hero--section--title--font text-animation" style={{textTransform:"uppercase",color:"black",fontSize:"43px"}}>Daniel ImmanSingh G</h2></h3>
          <h1 className="hero--section--title--font">
            <span ref={el} className="hero--section-title--color"></span>{" "}

          </h1>

          <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>

          <p className="hero--section-description">
            I'm a <strong style={{ fontWeight: 'bold' }}>MERN</strong> developer with solid foundation in <strong style={{ fontWeight: 'bold' }}>JavaScript</strong>, and expertise in frameworks like <strong style={{ fontWeight: 'bold' }}>React</strong> , <strong style={{ fontWeight: 'bold' }}>Express.js</strong> , <strong style={{ fontWeight: 'bold' }}>Node.js</strong> and <strong style={{ fontWeight: 'bold' }}>MongoDb</strong>.
          </p>
        </div>

        <div className="button_linkedIn">
          <button className="btn btn-primary" onClick={handleDownload}>My Resume</button>
          <a href="https://www.linkedin.com/in/daniel-immansingh-g-487339237/" target="_blank" rel="LinkedIn_Id" className="link_hover">
              <LinkedIn 
                  style={{ 
                  color: '#0077b5', 
                  fontSize: '50px',
                  transition: 'color 0.3s', // Smooth transition for color change
                  textDecoration: 'none', // Remove underline on hover
                  cursor: 'pointer' // Show pointer cursor on hover
                }}
                // Add hover styles inline
                onMouseEnter={(e) => e.target.style.color = '#005d90'} // Change color on hover
                onMouseLeave={(e) => e.target.style.color = '#0077b5'} // Change back to original color when not hovering
              />
          </a>

          <a href="https://github.com/daniel08424" target="_blank" rel="GitHub_Id">
            <GitHub style={{ 
                  color: '#24292e', 
                  fontSize: '47px',
                  transition: 'color 0.3s', // Smooth transition for color change
                  textDecoration: 'none', // Remove underline on hover
                  cursor: 'pointer' // Show pointer cursor on hover/>
                }}
                onMouseEnter={(e) => e.target.style.color = '#6b6b6b'} // Change color on hover
                onMouseLeave={(e) => e.target.style.color = '#24292e'} // Change back to original color when not hovering
             />
          </a>

        </div>
      </div>
      <div className="hero--section--img">
        <img src="../img/IMG_20220612_160441_451.jpg" alt="Hero Section"/>
      </div>
    </section>
    
  );
}
