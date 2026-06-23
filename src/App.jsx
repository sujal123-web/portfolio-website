import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaRocket,
  FaRobot,
  FaFileDownload,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaDownload,
  FaCalendarAlt,
  FaPaperPlane
} from "react-icons/fa";
import './App.css';

import { useState, useEffect } from "react";
import { FaDatabase } from "react-icons/fa";
import profile from './assets/profile.jpg';
import CountUp  from "react-countup";
import { FaCode } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { GiRobotGolem } from "react-icons/gi";
function App() {
    const roles = [
    "Robotics Engineer",
    "ROS2 & SLAM Developer",
    "Computer Vision Enthusiast",
    "Python Developer",
    "Machine Learning Enthusiast",
    "Power BI Developer"
  ];

const [text, setText] = useState("");
const [currentRole, setCurrentRole] = useState(0);
const [activeSkill, setActiveSkill] = useState(1);


const skillCards = [
  {
    title: "Programming & AI",
    icon: <FaCode />,
    skills: ["Python", "C", "Decision Tree", "Random Forest"]
  },

  {
    title: "Robotics",
    icon: <GiRobotGolem />,
    skills: ["ROS2 (Humble)", "Gazebo (Fortress)", "SLAM", "Nav2 (Navigation Stack)"]
  },

  {
    title: "Data Analytics",
    icon: <FaDatabase />,
    skills: ["SQL", "Power BI", "Advanced Excel", "Data Visualization"]
  },

  {
    title: "Computer Vision",
    icon: <IoEye />,
    skills: ["OpenCV", "CNN", "Image Processing", "Object Detection"]
  }
];
const prevSkill =
  (activeSkill - 1 + skillCards.length) %
  skillCards.length;

const nextSkill =
  (activeSkill + 1) %
  skillCards.length;
const goNext = () => {

    setActiveSkill(
        (prev) => (prev + 1) % skillCards.length
    );

};
const goPrev = () => {

    setActiveSkill(
        (prev) =>
            (prev - 1 + skillCards.length) %
            skillCards.length
    );

};
  const renderCard = (index) => (
  <div className="carousel-card">

    <h3 className="carousel-title">

      <span className="carousel-icon">
        {skillCards[index].icon}
      </span>

      {skillCards[index].title}

    </h3>
    

    <ul>
      {skillCards[index].skills.map((skill) => (
        <li key={skill}>
          {skill}
        </li>
      ))}
    </ul>

  </div>
);
const [isDeleting, setIsDeleting] = useState(false);
const [activeCategory, setActiveCategory] = useState("robotics");
const form = useRef()
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_l2vbo07',
    'template_fwslstw',
    form.current,
    'keLOqSUxWNXQEcaOq'
  )
  .then(() => {
      alert('Message sent successfully!');
      e.target.reset();
  })
  .catch((error) => {
      alert('Failed to send message.');
      console.log(error);
  });
};
useEffect(() => {
  const currentText = roles[currentRole];

  const timeout = setTimeout(() => {

    if (!isDeleting) {

      setText(currentText.substring(0, text.length + 1));

      if (text === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

    } else {

      setText(currentText.substring(0, text.length - 1));

      if (text === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }

  }, isDeleting ? 50 : 100);

  return () => clearTimeout(timeout);

}, [text, isDeleting, currentRole]);


  return (
    <>
      <nav className="navbar">

        

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </nav>
      <section id="home" className="hero">
        <div className="network-bg">

          <span className="node node1"></span>
          <span className="node node2"></span>
          <span className="node node3"></span>
          <span className="node node4"></span>
          <span className="node node5"></span>
          <span className="node node6"></span>
          <span className="node node7"></span>
          <span className="node node8"></span>
          <span className="node node9"></span>
          <span className="node node10"></span>
        </div>

        <div className="hero-left">

          <p className="hello-text">
            Hello, I'm
          </p>

          <h1>Sujal Rajput</h1>

        <div className="typing-container">
          <h2 className="typing-text">
            {text} 
          </h2>
        </div>
          <p className="intro">
            Robotics & Automation student passionate about building
            intelligent robotic systems, autonomous technologies,
            computer vision applications, and AI-driven automation
            solutions that bridge the gap between hardware and software.
          </p>

          <div className="hero-buttons">

            <button
              className="project-btn"
              onClick={() => {
                const section = document.getElementById("projects");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
             <FaRocket/>View Projects
            </button>

            <button
              className="certificate-btn"
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <FaEnvelope/>Get In Touch
            </button>

          </div>
           <div className="social-links">

              <a
                href="https://www.linkedin.com/in/sujalrajput-/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/sujal123-web"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a href="mailto:sujalrajpu1309@gmail.com">
                <FaEnvelope />
              </a>

            </div>

        </div>

        <div className="hero-right">

          <div className="profile-circle">
            <img
              src={profile}
              alt="Sujal Rajput"
              className="profile-pic"
            />
          </div>
          <div className="robotics-tag">
            <FaRobot />
           Robotics & ML Engineer
          </div>

        </div>
      </section>
      <section className="stats-section">

      <div className="stat-box">
        <h2>6+</h2>
        <p>Projects Completed</p>
      </div>

      <div className="stat-box">
        <h2>5+</h2>
        <p>Certifications</p>
      </div>

      <div className="stat-box">
        <h2>15+</h2>
        <p>Technologies</p>
      </div>

      <div className="stat-box">
        <h2>2+</h2>
        <p>Competitions & Exhibitions</p>
      </div>

    </section>
    <section id="about" className="about-section">

  <div className="about-header">
    <span className="section-tag">
      ABOUT ME
    </span>

    <h2>
      Passionate About
      <span> Intelligent Automation</span>
    </h2>
  </div>

  <div className="about-content">

    {/* TOP ROW */}
    <div className="about-top">

      <div className="about-text">

        <p>
          I'm a <strong>B.Tech Robotics & Automation Engineering</strong> student at
          <strong> Symbiosis Institute of Technology, Pune, India</strong>. My journey in
          robotics started with a fascination for how machines can perceive,
          decide, and act autonomously.
        </p>

        <p>
          I specialize in building intelligent robotic systems using
          <strong> ROS2</strong>, <strong> SLAM</strong>,
          <strong> Computer Vision</strong>, <strong> Machine Learning</strong>,
          <strong> Embedded Systems</strong>, and
          <strong> Data Analytics</strong>. From autonomous mobile robots and
          sensor fusion applications to AI-powered automation solutions, I enjoy
          transforming innovative ideas into real-world engineering systems.
        </p>

      </div>

      <div className="about-right">

        <div className="skill-card">
          <h3>ROS2 & Autonomous Navigation</h3>
          <p>ROS2, Nav2, SLAM Toolbox, Gazebo and RViz2.</p>
        </div>

        <div className="skill-card">
          <h3>Computer Vision</h3>
          <p>OpenCV, Object Detection, Image Processing.</p>
        </div>

        <div className="skill-card">
          <h3>Machine Learning</h3>
          <p>Classification, Regression and AI Applications.</p>
        </div>

        <div className="skill-card">
          <h3>Data Analytics</h3>
          <p>Power BI, SQL, Excel and Dashboard Development.</p>
        </div>
        <div className="skill-card">
          <h3>Robotics & Embedded Systems</h3>
          <p>
            Arduino, ESP32, Sensor Integration, Motor Control,
            PID Control and Autonomous Robot Development.
          </p>
        </div>

      </div>

    </div>

    {/* BOTTOM ROW */}

    <div className="about-bottom">

      <div className="info-grid">

        <div className="info-card">
          <div className="info-icon">
            <FaGraduationCap />
          </div>
          <div>
            <span>Education</span>
            <h4>B.Tech Robotics & Automation</h4>
          </div>
        </div>

        <div className="info-card">
        <div className="info-icon">
          <FaMapMarkerAlt />
        </div>
          <div>
            <span>Location</span>
            <h4>Pune, India</h4>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icon">
            <FaEnvelope />
          </div>
          <div>
            <span>Email</span>
            <h4>sujalrajpu1309@gmail.com</h4>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icon">
            <FaPhoneAlt />
          </div>
          <div>
            <span>Phone</span>
            <h4>+91-8851849532</h4>
          </div>
        </div>

      </div>

      <a
        href="/resume.pdf"
        className="resume-btn"
        target="_blank"
        rel="noreferrer"
        download
      >
        <FaDownload/>
        <span>Download Resume</span>
      </a>

    </div>

  </div>

</section>

    <section id="skills" className="skills-section">
        
      <div className="skills-header">

        <span className="section-tag">
          TECHNICAL ARSENAL
        </span>

        <h2>
          Skills &
          <span> Technologies</span>
        </h2>

      </div>
          

    <div className="skills-showcase">

    <button
        className="carousel-btn left"
        onClick={goPrev}
    >
        ❮
    </button>

    {skillCards.map((card, index) => {

    let cardClass = "";

    const leftIndex =
        (activeSkill - 1 + skillCards.length) %
        skillCards.length;

    const rightIndex =
        (activeSkill + 1) %
        skillCards.length;

    const hiddenRightIndex =
        (activeSkill + 2) %
        skillCards.length;

    if(index === activeSkill){

        cardClass = "visible-center";

    }else if(index === leftIndex){

        cardClass = "visible-left";

    }else if(index === rightIndex){

        cardClass = "visible-right";

    }else if(index === hiddenRightIndex){

        cardClass = "hidden-right";

    }else{

        cardClass = "hidden-left";

    }

    return(
        <div
            key={card.title}
            className={`carousel-card-wrapper ${cardClass}`}
        >
            {renderCard(index)}
        </div>
    );

})}

    <button
        className="carousel-btn right"
        onClick={goNext}
    >
        ❯
    </button>

</div>
<div className="core-tech-section">

    <h3 className="core-tech-title">
        Core Technologies
    </h3>

    <div className="core-tech-tags">

        <span>ROS2</span>
        <span>OpenCV</span>
        <span>Python</span>
        <span>Gazebo</span>
        <span>SQL</span>
        <span>Power BI</span>

    </div>

</div>

</section>    
  <section id="projects" className="projects-section">

    <div className="projects-header">

        <span className="section-tag">
            PORTFOLIO
        </span>

        <h2>
            Featured <span>Projects</span>
        </h2>

    </div>

<div className="project-filters">

    <button
        className={activeCategory === "robotics" ? "active" : ""}
        onClick={() => setActiveCategory("robotics")}
    >
        Robotics
    </button>

    <button
        className={activeCategory === "cv" ? "active" : ""}
        onClick={() => setActiveCategory("cv")}
    >
        Computer Vision
    </button>

    <button
        className={activeCategory === "ml" ? "active" : ""}
        onClick={() => setActiveCategory("ml")}
    >
        Machine Learning
    </button>

    <button
        className={activeCategory === "analytics" ? "active" : ""}
        onClick={() => setActiveCategory("analytics")}
    >
        Data Analytics
    </button>

</div>

    <div
      key={activeCategory}
      className="projects-grid project-enter"
    >
    
      {/* Project 1 */}
      {activeCategory === "analytics" &&(
      <div className="project-card ml">

        <div className="project-badge">
          Data Analytics
        </div>

        <h3>
          SkillLens – Domain-Wise Skill Assessment &
          Performance Analytics System
        </h3>

        <ul className="project-points">
          <li>
            Built a multi-skill assessment platform for Data Analyst
            roles covering Python, SQL, Power BI, and Tableau.
          </li>

          <li>
            Automated accuracy and response-time evaluation to assess
            candidate readiness and performance.
          </li>

          <li>
            Developed interactive Power BI dashboards with
            candidate-wise and skill-wise analytics.
          </li>
        </ul>

        <div className="project-tech">
          <span>Python</span>
          <span>SQL</span>
          <span>Power BI</span>
          <span>Advance Excel</span>
        </div>

      </div>
      )}
      {activeCategory === "ml" &&(
      <div className="project-card ml">

      <div className="project-badge">
        Machine Learning
      </div>

      <h3>
        Predictive Maintenance System for Industrial Equipment
      </h3>

      <ul className="project-points">

        <li>
          Developed a predictive maintenance system using
          temperature, vibration, and pressure data.
        </li>

        <li>
          Performed data preprocessing, feature engineering,
          and anomaly detection to improve prediction accuracy.
        </li>

        <li>
          Enabled proactive maintenance scheduling and reduced
          unplanned downtime through early fault prediction.
        </li>

      </ul>

      <div className="project-tech">
        <span>Python</span>
        <span>Random Forest</span>
        <span>Scikit-Learn</span>
        <span>Predictive Analytics</span>
        <span>Industry 4.0</span>
      </div>

    </div>
      )}
    {activeCategory === "analytics" &&(

      <div className="project-card analytics">

      <div className="project-badge">
        Data Analytics
      </div>

      <h3>
        Interactive Sales & Customer Analytics Dashboard
      </h3>

      <ul className="project-points">

        <li>
          Developed the dashboard for a retail/e-commerce business,
          providing channel-wise, category-wise, and regional sales analytics.
        </li>

        <li>
          Created channel-wise, category-wise, and state-wise
          analytics to identify revenue drivers and growth opportunities.
        </li>

        <li>
          Implemented KPI tracking, pivot tables, charts, and
          slicers for dynamic business reporting and insights.
        </li>

      </ul>

      <div className="project-tech">
        <span>Advance Excel</span>
        <span>Pivot Tables</span>
        <span>Pivot Charts</span>
        <span>Data Visualization</span>
      </div>

    </div>
    )}

      {/* Virtual Mouse Using Hand Gestures */}
      {activeCategory === "cv" && (
      <div className="project-card cv">

        <div className="project-badge">
          Computer Vision
        </div>

        <h3>
          Virtual Mouse Control Using Hand Gestures
        </h3>

        <ul className="project-points">

          <li>
            Developed a virtual mouse system using OpenCV and
            MediaPipe for real-time hand tracking and gesture recognition.
          </li>

          <li>
            Controlled cursor movement through index finger tracking
            with smooth motion mapping to screen coordinates.
          </li>

          <li>
            Implemented click functionality using thumb–index finger
            distance detection for touchless computer interaction.
          </li>

        </ul>

        <div className="project-tech">
          <span>Python</span>
          <span>OpenCV</span>
          <span>MediaPipe</span>
          <span>Computer Vision</span>
          <span>Gesture Recognition</span>
        </div>

      </div>
      )}

      {activeCategory === "ml" &&(
      <div className="project-card ml">

      <div className="project-badge">
        Machine Learning
      </div>

      <h3>
        Driver Drowsiness Risk Prediction System
        using Computer Vision & Machine Learning
      </h3>

      <ul className="project-points">

        <li>
          Developed a real-time driver drowsiness detection system
          using OpenCV, MediaPipe Face Mesh, and Machine Learning.
        </li>

        <li>
          Extracted EAR, MAR, and eye-closure duration features
          from facial landmarks and built a custom training dataset.
        </li>

        <li>
          Trained a Decision Tree model achieving 94.29% accuracy
          for real-time ALERT and DROWSY state prediction.
        </li>

      </ul>

      <div className="project-tech">
        <span>Python</span>
        <span>OpenCV</span>
        <span>MediaPipe</span>
        <span>Scikit-Learn</span>
        <span>Decision Tree</span>
      </div>

    </div>
      )}
      {/* Project 2 */}
      {activeCategory === "cv" &&(
      <div className="project-card cv">

        <div className="project-badge">
          Computer Vision
        </div>

        <h3>
          Dimension Accuracy System with Real-World Visualization
        </h3>

        <ul className="project-points">
          <li>
            Developed a quality inspection system using OpenCV
            for automatic dimension verification.
          </li>

          <li>
            Implemented image calibration, contour detection,
            and perspective correction for accurate measurements.
          </li>

          <li>
            Enabled real-world visualization with precise
            length, width, and height calculations.
          </li>
        </ul>

        <div className="project-tech">
          <span>OpenCV</span>
          <span>Image Processing</span>
          <span>Object Detection</span>
          <span>Contour Detection</span>
        </div>

      </div>
      )}
      {activeCategory === "robotics" && (
      <>
      <div className="project-card robotics">

        <div className="project-badge">
          Autonomous Mobile Robot
        </div>

        <h3>
          Semi-Autonomous Manual Intervention Cleaner Bot 
          AtomQuest 2025 (Semi-Finalist)
        </h3>
        <ul className="project-points">

          <li>
            Developed a semi-autonomous cleaner bot capable of performing
            cleaning tasks with limited human intervention.
          </li>

          <li>
            Integrated manual override mechanisms to improve safety,
            reliability, and adaptability in real-world environments.
          </li>

          <li>
            Achieved Semi-Finalist recognition at AtomQuest 2025 for
            innovation, practical design, and problem-solving capabilities.
          </li>

        </ul>

        <div className="project-tech">
          <span>Robotics</span>
          <span>Automation</span>
          <span>Embedded Systems</span>
          <span>AtomQuest 2025</span>
        </div>

      </div>
      
      {/* Project 4 */}


      <div className="project-card robotics">

        <div className="project-badge">
          ROS2 & Autonomous Robotics
        </div>

        <h3>
          ROS2-Based Autonomous Differential Drive Robot
          with SLAM and Sensor Fusion
        </h3>

        <ul className="project-points">
          <li>
            Developed a ROS2-based differential drive robot with
            encoder feedback and teleoperation for real-time control.
          </li>

          <li>
            Implemented a medicine dispensing application for hospitals,
            enabling autonomous delivery of medications to patients.
          </li>

          <li>
            Designed the system for SLAM and autonomous navigation,
            supporting mapping and future path planning using LiDAR
            and Nav2.
          </li>
        </ul>

        <div className="project-tech">
          <span>ROS2</span>
          <span>LiDAR</span>
          <span>SLAM</span>
          <span>Nav2</span>
          <span>Sensor Fusion</span>
        </div>

      </div>
      </>
      )}
      </div>
      </section>
      <section id="experience" className="experience-section">

          <div className="experience-header">

              <span className="section-tag">
                  JOURNEY
              </span>

              <h2>
                  Experience & <span>Achievements</span>
              </h2>

          </div>
          <div className="timeline-container">
            <div className="timeline-line"></div>

    <div className="timeline-card">

        <div className="year-badge">
          <FaCalendarAlt/>
          <span>2025</span>
        </div>
        <div className="timeline-dot"></div>

        <h3>
            Data Science Summer School 2025
        </h3>

        <h4>
            Hertie School Data Science Lab, Germany
        </h4>

        <p>
            Successfully completed the Data Science Summer School
            2025 organized by the Hertie School Data Science Lab,
            Germany, enhancing expertise in Data Science,
            Machine Learning, Analytics, and research-oriented
            problem solving.
        </p>

        <div className="achievement-tags">
            <span>Workshop</span>
            <span>Data Science</span>
            <span>International</span>
        </div>

    </div>
    <div className="timeline-card right-card">

        <div className="year-badge">
            <FaCalendarAlt />
            <span>2025</span>
        </div>

        <div className="timeline-dot"></div>

        <h3>
            AtomQuest 2025 – Semi Finalist
        </h3>

        <h4>
            National Robotics Innovation Competition
        </h4>

        <p>
            Qualified as a Semi-Finalist in AtomQuest 2025 for
            developing a Semi-Autonomous Manual Intervention
            Cleaner Bot, demonstrating innovation, practical
            engineering design, and real-world problem-solving
            capabilities.
        </p>

        <div className="achievement-tags">
            <span>Hackathon</span>
            <span>Innovation</span>
            <span>Semi-Finalist</span>
        </div>

    </div>
      <div className="timeline-card">

      <div className="year-badge">
          <FaCalendarAlt />
          <span>2025</span>
      </div>

      <div className="timeline-dot"></div>

      <h3>
          ISKCON Volunteer
      </h3>

      <h4>
          Unity Developer & Interactive Systems Contributor
      </h4>

      <p>
          Developed a Virtual Donation System in Unity where
          users could donate items equivalent to their body
          weight. Implemented real-time weighing scale
          integration, item tracking, and interactive 3D
          visualization to create an engaging donation
          experience.
      </p>

      <div className="achievement-tags">
          <span>Unity</span>
          <span>C#</span>
          <span>3D Visualization</span>
          <span>IoT</span>
      </div>

  </div>
  <div className="timeline-card right-card">

    <div className="year-badge">
        <FaCalendarAlt />
        <span>2025</span>
    </div>

    <div className="timeline-dot"></div>

    <h3>
        Business Intelligence Dashboard for Sales Analytics
    </h3>

    <h4>
        Industry Data Analytics Project
    </h4>

    <p>
        Designed and developed an interactive Business Intelligence
        dashboard for a company, enabling stakeholders to monitor
        sales performance, customer behavior, channel effectiveness,
        and regional trends through data-driven insights and KPI tracking.
    </p>

    <div className="achievement-tags">
        <span>Business Intelligence</span>
        <span>KPI Reporting</span>
        <span>Dashboard Development</span>
    </div>

</div>
    

</div>

  </section>
  <section id="contact" className="contact-section">

    <div className="contact-header">

    <span className="section-tag">
        GET IN TOUCH
    </span>

    <h2>
        Let's Build Something <span>Amazing</span>
    </h2>

</div>

    <div className="contact-content">

        <div className="contact-info">

            <h3>Contact Information</h3>

            <p>
                I'm currently open to internships, collaborative projects,
                and research opportunities in robotics and automation.
                Feel free to reach out!
            </p>
            <div className="contact-details">

    <div className="contact-item">
        <div className="contact-icon">
            <FaEnvelope />
        </div>

        <div>
            <h4>Email</h4>
            <p>sujalrajpu1309@gmail.com</p>
        </div>
    </div>

    <div className="contact-item">
        <div className="contact-icon">
            <FaPhoneAlt />
        </div>

        <div>
            <h4>Phone</h4>
            <p>+91-8851849532</p>
        </div>
    </div>

    <div className="contact-item">
        <div className="contact-icon">
            <FaMapMarkerAlt />
        </div>

        <div>
            <h4>Location</h4>
            <p>Pune, Maharashtra, India</p>
        </div>
        
    </div>
    <div className="social-links">

    <a
        href="https://www.linkedin.com/in/sujalrajput-/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-btn"
    >
        <FaLinkedin />
    </a>
      <a href="https://github.com/sujal123-web" className="social-icon-btn">
      <FaGithub />
    </a>

    <a
        href="mailto:sujalrajpu1309@gmail.com"
        className="social-icon-btn"
    >
        <FaEnvelope />
    </a>

</div>

</div>
        </div>

        <div className="contact-form">

    <form ref={form} onSubmit={sendEmail}>

        <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
        />

        <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
        />

        <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
        />

        <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
        ></textarea>

        <button
            type="submit"
            className="send-btn"
        >
            <FaPaperPlane />
            <span>Send Message</span>
        </button>

    </form>

</div>

    </div>

</section>

<footer className="footer">

    <p>
        © 2026 Sujal Rajput
    </p>

    <p>
        Built with • React • CSS • EmailJS
    </p>

</footer>

</>
);
}

export default App;