import React from 'react';
// skills
import { BiLogoJava, BiLogoHtml5, BiLogoCss3, BiLogoNodejs, BiCodeAlt } from 'react-icons/bi';
import {FaGitAlt, FaDocker } from 'react-icons/fa';
import { RiJavascriptFill, RiBootstrapFill } from 'react-icons/ri';
import { DiReact } from 'react-icons/di';
import { TbApi, TbTestPipe } from 'react-icons/tb';
import { MdOutlineWeb, MdFormatAlignCenter } from 'react-icons/md';
import { SiCodeforces } from 'react-icons/si';

// tools
import { LiaGithub } from 'react-icons/lia';
import { VscVscode } from 'react-icons/vsc';
import { BsAndroid } from 'react-icons/bs';
import { SiIntellijidea, SiEclipseide, SiPostman } from 'react-icons/si';
import { IoCompassSharp } from 'react-icons/io5';

// frameworks
import { SiSpringboot, SiExpress, SiRedux, SiMui } from 'react-icons/si';
import { DiJqueryLogo } from 'react-icons/di';

// database
import { SiMongodb, SiMongoose, SiPostgresql, SiPrisma } from 'react-icons/si';
import { PiFileSqlDuotone } from 'react-icons/pi';
import { GrMysql } from 'react-icons/gr';


export default function MySkills() {
  const skills = [
  { Icon: BiLogoJava, label: 'Java, OOP', color: '#f89820' },
  { Icon: SiCodeforces, label: 'DSA', color: '#000000' },
  { Icon: BiLogoHtml5, label: 'HTML5', color: '#e34c26' },
  { Icon: BiLogoCss3, label: 'CSS3', color: '#2965f1' },
  { Icon: RiJavascriptFill, label: 'JavaScript', color: '#f0db4f' },
  { Icon: DiReact, label: 'React', color: '#61dbfb' },
  { Icon: TbApi, label: 'REST APIs', color: '#4c8eda' },
  { Icon: MdOutlineWeb, label: 'WebSocket', color: '#35495e' },
];


  const tools = [
  { Icon: FaGitAlt, label: 'Git', color: '#f14e32' },
  { Icon: LiaGithub, label: 'GitHub', color: '#000000' },
  { Icon: VscVscode, label: 'VS Code', color: '#0078d7' },
  { Icon: BsAndroid, label: 'Android Studio', color: '#3DDC84' },
  { Icon: SiIntellijidea, label: 'IntelliJ IDEA', color: '#000000' },
  { Icon: SiEclipseide, label: 'Eclipse IDE', color: '#2c2255' },
  { Icon: FaDocker, label: 'Docker', color: '#0db7ed' },
  { Icon: SiPostman, label: 'Postman', color: '#ff6c37' },
];


  const frameWorks = [
  { Icon: SiSpringboot, label: 'Spring Boot', color: '#6db33f' },
  { Icon: BiLogoNodejs, label: 'Node.js', color: '#43853d' },
  { Icon: SiExpress, label: 'Express.js', color: '#000000' },
  { Icon: SiRedux, label: 'Redux', color: '#764abc' },
  { Icon: SiMui, label: 'Material UI', color: '#3f51b5' },
  { Icon: RiBootstrapFill, label: 'Bootstrap', color: '#563d7c' },
  { Icon: TbTestPipe, label: 'JUnit', color: '#25a162' },
];


  const dataBase = [
  { Icon: SiMongodb, label: 'MongoDB', color: '#4DB33D' },
  { Icon: SiPostgresql, label: 'PostgreSQL', color: '#336791' },
  { Icon: PiFileSqlDuotone, label: 'SQL', color: '#00758F' },
  { Icon: SiPrisma, label: 'Prisma ORM', color: '#0c344b' },
  { Icon: GrMysql, label: 'MySQL', color: '#00758F' },
];


  return (
    <div id="myskills" className="skills-container">
      <h1 className="skills-section--heading" style={{paddingBottom:"10px"}}>Skills</h1>
        <h3 style={{paddingBottom:"25px", fontSize:"23px"}}>PROGRAMMING SKILLS :</h3>
        <div className="skills-grid" style={{paddingBottom:"25px"}}>
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <skill.Icon size={80} style={{ color: skill.color }} /> {/* Apply color using inline style */}
              <p className="skill-discription" style={{fontSize:"17px"}}>{skill.label}</p>
            </div>
          ))}
        </div>

        <h3 style={{paddingBottom:"25px", fontSize:"23px"}}>TOOLS USED :</h3>
        <div className="skills-grid" style={{gap:"100px",paddingBottom:"25px"}}> 
          {tools.map((tools, index) => (
            <div key={index} className="skill">
              <tools.Icon size={80} style={{ color: tools.color }} /> {/* Apply color using inline style */}
              <p className="skill-discription" style={{fontSize:"17px"}}>{tools.label}</p>
            </div>
          ))}
        </div>

        <h3 style={{paddingBottom:"25px", fontSize:"23px"}}>FRAMEWORKS AND LIBRARIES :</h3>
        <div className="skills-grid" style={{gap:"100px",paddingBottom:"25px"}}> 
          {frameWorks.map((frameWorks, index) => (
            <div key={index} className="skill">
              <frameWorks.Icon size={80} style={{ color: frameWorks.color }} /> {/* Apply color using inline style */}
              <p className="skill-discription" style={{fontSize:"17px"}}>{frameWorks.label}</p>
            </div>
          ))}
        </div>

        <h3 style={{paddingBottom:"25px", fontSize:"23px"}}>DATABASE MANAGEMENT :</h3>
        <div className="skills-grid" style={{gap:"150px",paddingBottom:"20px"}}> 
          {dataBase.map((dataBase, index) => (
            <div key={index} className="skill">
              <dataBase.Icon size={80} style={{ color: dataBase.color }} /> {/* Apply color using inline style */}
              <p className="skill-discription" style={{fontSize:"17px"}}>{dataBase.label}</p>
            </div>
          ))}
        </div>

      </div>
   
  );
}
