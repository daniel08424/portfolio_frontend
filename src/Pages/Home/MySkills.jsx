import React from 'react';
import { BiLogoHtml5, BiCodeAlt } from "react-icons/bi"; // Import HTML5 icon and a generic code icon
import { RiJavascriptFill, RiBootstrapFill } from 'react-icons/ri'; // Import JavaScript icon from react-icons
import { BiLogoJava, BiLogoCss3, BiLogoNodejs} from "react-icons/bi"; // Import Java icon
import { FaComputer} from "react-icons/fa6";
import { DiReact , DiJqueryLogo} from "react-icons/di";
import { LiaGithub } from "react-icons/lia";
import { VscVscode } from "react-icons/vsc";
import { BsAndroid, BsDatabaseGear  } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";
import { IoCompassSharp } from "react-icons/io5";
import { SiExpress, SiRedux, SiMui, SiMongodb,SiMongoose} from "react-icons/si";
import { MdFormatAlignCenter } from "react-icons/md";
import { PiFileSqlDuotone } from "react-icons/pi";


export default function MySkills() {
  const skills = [
    { Icon: BiCodeAlt, label: 'C', color: '#555555' }, 
    { Icon: BiLogoJava, label: 'Java , OOPS', color: '#f89820' }, 
    { Icon: FaComputer, label: 'DSA', color: '#000000' },
    { Icon: BiLogoHtml5, label: 'HTML 5', color: '#e34c26' },
    { Icon: BiLogoCss3, label: 'CSS', color: ' #2965f1' },
    { Icon: RiJavascriptFill, label: 'JavaScript', color: '#f0db4f' }, 
    { Icon: DiReact, label: 'React', color: '#1C4E9D' }, 
  ];

  const tools = [
    { Icon: FaGitAlt, label: 'Git', color: '#f14e32' },
    { Icon:LiaGithub, label: 'GitHub', color: '#000000' },  
    { Icon: VscVscode, label: 'VS Code', color: '#0078d7' }, 
    { Icon: BsAndroid, label: 'Android Studio', color: '#a4c639' },
    { Icon: IoCompassSharp, label: 'MongoDb Compass', color: '#589636' },
  ];

  const frameWorks = [
    { Icon:  RiBootstrapFill, label: 'BootStrap', color: '#6610f2' },
    { Icon: BiLogoNodejs , label: 'NodeJs', color: '#44883e' },  
    { Icon: SiExpress, label: 'Express JS', color: '#0078d7' }, 
    { Icon: DiJqueryLogo, label: 'Jquery', color: '#0769ad' },
    { Icon: SiRedux, label: 'Redux', color: '#764abc' },
    { Icon: SiMui, label: 'Material UI', color: '#3f50b5' },
    { Icon:  MdFormatAlignCenter, label: 'Formik', color: 'darkblue' },
  ];

  const dataBase = [
    { Icon:  SiMongodb, label: 'MongoDB', color: '#4DB33D' },
    { Icon: SiMongoose , label: 'Mongoose', color: 'brown' },  
    { Icon:  PiFileSqlDuotone , label: 'SQL DB', color: '#0078d7' }, 
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
        <div className="skills-grid" style={{gap:"150px",paddingBottom:"25px"}}> 
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
