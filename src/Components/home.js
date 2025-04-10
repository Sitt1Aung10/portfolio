import React from 'react';
import './home.css';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { color } from 'three/examples/jsm/nodes/Nodes.js';
function Home() {
    return (
        <div id='home'>
            <About_Me />
            <Autocad_things />
            <Projects />
            <Skills />
            <Resume />
            <Contact_Me />
        </div>
    );
};

function Autocad_things() {
    return (
        <div className='autocad-things'>
            <img className='gear_one' src="/images/gear_one.png" />
            <img className='engine_two' src="/images/engine_two.png" />
        </div>
    )
}

function About_Me() {
    return (
        <div>
            <section id="about">
                <div>
                    <div className='dimension-horizontal-about'>
                    <h1 style={{
                        fontSize : '3em'
                    }}>About Me</h1>
                        <label>300px</label>
                    </div>
                    <p>Hi, I'm Sitt Aung, a passionate Full-Stack Developer with a background in <span style={{
                        color: 'yellow'
                    }}>Mechanical Engineering.</span></p>
                    <p> My journey started in the world of engineering, where I developed a problem-solving mindset and logical thinking. Over time, I transitioned into web development, mastering technologies like <span style={{color : 'yellow'}}>HTML, CSS, JavaScript, React, Next.js, PHP, and Bootstrap.</span></p>
                    <p>With expertise in both engineering and software development, I enjoy creating efficient and scalable web applications. My engineering background gives me a unique approach to coding, allowing me to build structured and optimized solutions</p>
                </div>
                <div className="profile-container">
                    <img src="/images/profile.jpg" alt="Profile" class="profile-img" />

                        <div className="dimension horizontal">
                            <span class="label">500px</span>
                        </div>

                        <div className="dimension vertical">
                            <span class="label">500px</span>
                        </div>

                        <div className='caption'>
                            <span className='captop-label' style={{
                                color : 'yellow'
                            }}>Full Stack Developer</span>
                        </div>
                </div>

            </section>
        </div>
    );
}

function Projects() {
    return (
        <div style={{
            width:'100%'
        }}>
            <div className='dimension-horizontal-projects'>
            <h1 style={{
                color : '#fff',
                fontSize : '3em'
            }}>Projects</h1>
                <label>190px</label>
            </div>
            <div>
            <img className='gear_two' src="/images/gear_two.png" />
                <img className='screw_two' src='/images/screw_two.png' />
                <img className='screw_three' src='/images/screw_three.png' />
                <img className='screw_four' src='/images/screw_four.png' />
                <img className='screw_five' src='/images/screw_five.png' />
            </div>
            <div id='projects'>
                <Link to='/Armani' className='project-card'>
                    <img src="/images/armani-showcase.png" />
                    <h1>Armani&nbsp;Exchange</h1>
                </Link>
                <Link to='/Sisburma' className='project-card'>
                <img src="/images/sisburma-showcase.png" />
                <h1>Sisburma</h1>
                </Link>
                <Link to='/Art' className='project-card'>
                <img src="/images/art-showcase.png" />
                <h1>Art.com</h1>
                </Link>
                <Link to='/Floweruae' className='project-card'>
                <img src="/images/uae1.png" />
                <h1>Flower UAE</h1>
                </Link>
                <Link to='/FlowerBX' className='project-card'>
                <img src="/images/flowerbx-showcase.png" />
                <h1>FlowerBX</h1>
                </Link>
                <Link to='/Gucci' className='project-card'>
                <img src="/images/gucci1.png" />
                <h1>Gucci</h1>
                </Link>
                <Link to='/Petshop' className='project-card'>
                <img src="/images/pet1.png" />
                <h1>Pet Shop</h1>
                </Link>
                <Link to='/Zaycho' className='project-card'>
                <img src="/images/zaycho-showcase.png" />
                <h1>Zaycho</h1>
                </Link>
            </div>
        </div>
    )
}



function Skills() {
    const [isTabletOrMobile, setIsTabletOrMobile] = useState(window.innerWidth <= 1024);
    const [activeSkill, setActiveSkill] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsTabletOrMobile(window.innerWidth <= 1024);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleSkillClick = (index) => {
        if (isTabletOrMobile) {
            setActiveSkill(activeSkill === index ? null : index); // Toggle visibility
        }
    };

    return (
        <div style={{ marginTop: "50px" }}>
            <div className="dimension-horizontal-skills">
                <h1 style={{ color: "#fff", fontSize: "3em" }}>Skills</h1>
                <label>190px</label>
            </div>
            <div id="skills">
                {[
                    { name: "html", level: "Distinguished" },
                    { name: "css", level: "Distinguished" },
                    { name: "js", level: "Proficient" },
                    { name: "jquery", level: "Proficient" },
                    { name: "php", level: "Proficient" },
                    { name: "react", level: "Competent" },
                    { name: "next", level: "Novice" },
                    { name: "django", level: "Novice" },
                ].map((skill, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => !isTabletOrMobile && setActiveSkill(index)}
                        onMouseLeave={() => !isTabletOrMobile && setActiveSkill(null)}
                        onClick={() => handleSkillClick(index)}
                        style={{
                            borderColor: activeSkill === index ? "#BBD606" : "#fff",
                            boxShadow: activeSkill === index ? "1px 1px 10px #fff" : "none",
                        }}
                    >
                        <h3>{skill.name}</h3>
                        <div
                            className="skill-level"
                            style={{
                                opacity: activeSkill === index ? 1 : 0,
                            }}
                        >
                            <h3>{skill.level}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}




function Resume() {
    return (
        <div id='resume'>
            <div className='dimension-horizontal-resume'>
                    <h1  style={{
                color : '#fff',
                fontSize : '3em'
            }}>Resume</h1>
                        <label>250px</label>
            </div>
            <img className='engine_three' src="/images/engine_three.png" />
            <img className='engine_four' src='/images/engine_four.png' />
            <img className='engine_five' src='/images/engine_five.png' />
            <img className='gear_four' src='/images/gear_four.png'/>
            
            <div>
                <div className='cv-form'>
                    <div>
                    <iframe
    src="https://www.canva.com/design/DAGjYnMEfqY/HPXzopKGw1b8tAfdmXNxRg/view?embed"
    width="100%"
    height="600px"
    style={{
      border: "none",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.16)",
      marginBottom: "1em"
    }}
    allowFullScreen
  ></iframe>
                    <a
    href="https://www.canva.com/design/DAGjYnMEfqY/HPXzopKGw1b8tAfdmXNxRg/view?utm_content=DAGjYnMEfqY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4521228592"
    target="_blank"
    rel="noopener noreferrer"
  >
                    <button>Download CV</button>
                    </a>
                    </div>
                </div>
                <div className='line'></div>
                <div className='hobbies'>
                    <h1 style={{
                        fontSize : '2.5em'
                    }}>Hobbies And Interests</h1>
                    <div>
                        <p><i class="fa-solid fa-music"></i>&nbsp;Music Enthusiast & Vocal Performer</p>
                        <p><i class="fa-solid fa-video"></i>&nbsp;Video Editing & Post-Production</p>
                        <p><i class="fa-solid fa-person-walking"></i>&nbsp;Outdoor & Fitness Activities</p>
                        <p><i class="fa-solid fa-headset"></i>&nbsp;Strategic Gaming & Team Collaboration</p>
                        <p><i class="fa-solid fa-laptop"></i>&nbsp;Continuous Learning in Programming & Software Development</p>
                        <p><i class="fa-solid fa-diamond"></i>&nbsp;Probability & Risk Analysis (Poker Player)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Contact_Me() {
    return (
        <div className='contactMe' id="contactme">
            <div>
                <label className='dimension-horizontal-contact'>500 cm</label>
                <label className='dimension-vertical-contact'>200 cm</label>
                <form>
                <p style={{
                    color : '#0A192F'
                }}> Have an idea, a question, or a project in mind? I’d love to hear from you! Whether it’s a quick inquiry or a detailed discussion, let’s connect and bring your vision to life.</p>
                   <ul>
                    <li><i class="fa-solid fa-envelope"></i> Email : sittaung110@gmail.com</li>
                    <li><i class="fa-solid fa-phone"></i> Phone : +959 779669077</li>
                    <li><a target='blank' style={{color:'#000'}} href='https://www.facebook.com/share/1HfTdp6y9u/'><i style={{color:'blue'}} class="fa-brands fa-facebook"></i> FaceBook</a></li>
                    <li><a style={{color:'#000'}} target='blank' a href='https://www.instagram.com/jack_siz_?igsh=MWgzZGpxaGE1MGpyYw=='><i style={{color:'#E1306C'}} class="fa-brands fa-instagram"></i> Instagram</a></li>
                    <li><a style={{color:'#000'}} target='blank' href='http://www.linkedin.com/in/sitt-aung-a26921296'><i style={{color:'#0A66C2'}} class="fa-brands fa-linkedin"></i> LinkedIn</a></li>
                    <li><a target='blank' style={{color:'#000'}} href='https://github.com/Sitt1Aung10/'><i style={{color:'#181717'}} class="fa-brands fa-github"></i> GitHub</a></li>
                   </ul>
                   <div className='scale'>
                        <p style={{fontSize:'.7rem',
                            fontWeight:'bolder'
                        }}>Scale Ratio</p>
                        <p style={{fontSize:'.7rem',
                            fontWeight:'bolder'
                        }}>10cm = 1 ft</p>
                   </div>
                </form>
            </div>
            <div className='rulers'>
                    <img className='ruler_one' src='/images/ruler_one.png'/>
                    <img className='ruler_two' src='/images/ruler_two.png'/>
                    <img className='ruler_three' src='/images/ruler_three.png'/>
                    <img className='ruler_five' src='/images/ruler_five.png'/>
                    <img className='ruler_six' src='/images/ruler_six.png'/>
                </div>
        </div>
    )
}

export default Home;