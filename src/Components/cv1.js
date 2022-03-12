import React from 'react';
import picture1 from '../projectCollection/picture1.jpg'
import './cv1.css';
import {MdMail} from 'react-icons/md'
import {ImMobile} from 'react-icons/im'
import {FiMapPin} from 'react-icons/fi'
import {CgWebsite} from 'react-icons/cg'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {MdComputer} from 'react-icons/md'
import {FaChessBoard} from 'react-icons/fa'
import {GiConsoleController} from 'react-icons/gi'
import {GiRobotGolem} from 'react-icons/gi'
import {BiSquare} from 'react-icons/bi'



class Cv1 extends React.Component{


    state={
       data:[   
            {   
                id:1,
                name: "Jonathan Smith",
                title: "Senior Web Developer",
                img:picture1,
                email: "johnathan@novoresume.com", 
                mobile:"123-4567-897",
                Address: "Long Beach, California",
                website: "Jonathan-smith.com",
                linkedin: "linkedin.com/in/jonathansmith",
                github: "github.com/jonathan.smith",
                html:"100%",
                css3:"100%",
                JavaScript:"100%",
                PHP: "100%",
                SQL:"100%",
                AdobeCreativeSuite: "90%",
                WordPress: "90%",
                XML:"90%",
                Interest1: "Machine Learning",
                Interest2: "Chess",
                Interest3: "Video Games",
                Interest4: "Robotics",
                description:`Innovative, task-driven professional with 8+ years of experiance in web design
                and development across diverse industries. Equipped with a record of success in consistently
                identifying and providing the technological needs of companies through ingenious innovation. 
                Proficient in developing databases, creating user interfaces, writing and testing codes, 
                troubleshooting simple/complex issues, and implementing new features based on user feedback.`,
                Work_Experiance1:{

                                title: "Web Developer", 
                                Company: "Precious Technology Co",
                                Duration: "09/2016 - Present",
                                Address: "Long Beach, CA",
                                Detail1: "Responsible for software development including business analysis, technical design, software implementation, test development and execution, troubleshooting and technical documentation. The registry consisted of J2EE technologies, C and an Oracle 10G backend.",
                                Detail2: "An active member of the technical leadership group that meets on a weekly basis to discuss problems and improvements of each of our applications.",
                                Detail3: "Created and maintained MySQL databases for collecting information submitted from the website.",
                                Detail4: "Installed, configured and administered multiple eCommerce systems such mals e-Commerce, Zen Cart, Magento and Monster Commerce.",
                                Detail5:"Worked with internet service providers and telecommunications vendors to resolve service interruptions, hardware failures, and server transfers.",


                },
                Work_Experiance2:{
                                
                                title: "Web Developer", 
                                Company: "Virtual Solutions International Company",
                                Duration: "09/2016 - 08/2016",
                                Address: "Sacremento, CA",
                                Detail1: "Developed 50 responsive websites for clients in a variety of industries.",
                                Detail2: "Setup tracking with GTM and GA, integrated HTML/CSS into the CMS and conducted day-to-day maintenance of the websites, resulting in a combined $40M of revenue for clients",
                                Detail3: "Collaborated with marketing and project management teams to deliver projects on-time and with the highest standard, retaining over 98% of clients in a 5-year period.",
                                Detail4: "Reduced daily data processing time by 77% by implementing stored procedures in the web portal used nationwide.",
                                Detail5: "Created and maintained 10+ web applications for numerous national and foreign clients",
                },
                coursesTrain1: "Web Design for Everybody Specialization Course",
                courseInstitute1:"University of Michigan(Online Course)",
                coursesTrain2: "Front End Web Developer Learning Path",
                courseInstitute2:"Lynda.com",
                coursesTrain3: "Web Developer Boot Camp",
                courseInstitute3:"Udemy.com",
                coursesTrain4: "The Complete Javascript Course",
                courseInstitute4:"Udemy.com",
                EducationDegree:"BS in Web Development",
                EducationInstitute:"California State University",
                Educationduration: "08/2008 - 06/2012",

            },
            {   
                id:2,
                name: "Qaiser",
                title: "Senior Web Developer",
                img:picture1,
                email: "johnathan@novoresume.com", 
                mobile: "123-4567-897",
                Address: "Long Beach, California",
                website: "Jonathan-smith.com",
                linkedin: "linkedin.com/in/jonathansmith",
                github: "github.com/jonathan.smith",
                description:`Innovative, task-driven professional with 8+ years of experiance in web design
                and development across diverse industries. Equipped with a record of success in consistently
                identifying and providing the technological needs of companies through ingenious innovation. 
                Proficient in developing databases, creating user interfaces, writing and testing codes, 
                troubleshooting simple/complex issues, and implementing new features based on user feedback.`,
                Work_Experiance1:{

                                title: "Web Developer", 
                                Company: "Precious Technology Co",
                                Duration: "09/2016 - Present",
                                Address: "Long Beach, CA",

                }


            },
            {   
                id:3,
                name: "Zohaib",
                title: "Senior Web Developer",
                img:picture1,
                email: "johnathan@novoresume.com", 
                mobile: "123-4567-897",
                Address: "Long Beach, California",
                website: "Jonathan-smith.com",
                linkedin: "linkedin.com/in/jonathansmith",
                github: "github.com/jonathan.smith",
                description:`Innovative, task-driven professional with 8+ years of experiance in web design
                and development across diverse industries. Equipped with a record of success in consistently
                identifying and providing the technological needs of companies through ingenious innovation. 
                Proficient in developing databases, creating user interfaces, writing and testing codes, 
                troubleshooting simple/complex issues, and implementing new features based on user feedback.`,
                Work_Experiance1:{

                                title: "Web Developer", 
                                Company: "Precious Technology Co",
                                Duration: "09/2016 - Present",
                                Address: "Long Beach, CA",

                }


            },
            {   
                id:4,
                name: "Anam",
                title: "Senior Web Developer",
                img:picture1,
                email: "johnathan@novoresume.com", 
                mobile: "123-4567-897",
                Address: "Long Beach, California",
                website: "Jonathan-smith.com",
                linkedin: "linkedin.com/in/jonathansmith",
                github: "github.com/jonathan.smith",
                description:`Innovative, task-driven professional with 8+ years of experiance in web design
                and development across diverse industries. Equipped with a record of success in consistently
                identifying and providing the technological needs of companies through ingenious innovation. 
                Proficient in developing databases, creating user interfaces, writing and testing codes, 
                troubleshooting simple/complex issues, and implementing new features based on user feedback.`,
                Work_Experiance1:{

                                title: "Web Developer", 
                                Company: "Precious Technology Co",
                                Duration: "09/2016 - Present",
                                Address: "Long Beach, CA",

                }


            }
        ],

        value:""
    }

    handleChange=(e)=>{

        this.setState({
            value:e.target.value
        })
    }
  
    render(){

        
        let findResume = this.state.data.filter((item, i)=>{
            return item.id == this.state.value 
        })
        console.log(findResume);

        console.log(this.state.value);
        let response = findResume.map((item, index)=>{
            return(   
                
                <div className="borderLine">

                    <div>

                        <img className="profilePic" src={item.img}/>

                        <div className="profileDesc">
                            <h1 className="name1">{item.name}</h1>
                            <h3 className="name2">{item.title}</h3>
                            <p className="description1">{item.description}</p>
                        </div>  

                        <div className="contactDetail">       
                            <span id="mailIcon1"><MdMail/></span>
                            <p className="email1">{item.email}</p> 
                            
                            <span id="mailIcon2"><ImMobile/></span>
                            <p className="mobile1" >{item.mobile}</p>

                            <span id="mailIcon2"><FiMapPin/></span>
                            <p className="mobile1" >{item.Address}</p>

                            <span id="mailIcon2"><CgWebsite/></span>
                            <p className="mobile1" >{item.website}</p>

                            <span id="mailIcon2"><FaLinkedin/></span>
                            <p className="mobile1" >{item.linkedin}</p>

                            <span id="mailIcon2"><BsGithub/></span>
                            <p className="mobile1" >{item.github}</p>
                        </div>  

                        <div className="technicalSkills">

                            <h3 className="hdgSkill1">TECHNICAL SKILLS</h3>

                                <p className="techSkill1">HTML5</p>
                                    <div className="techBar1">
                                        <div style={{width:`${item.html}`}} className="techBar1A"></div>
                                    </div>
                                
                                <p className="techSkill1">CSS3</p>
                                <div className="techBar1">
                                    <div style={{width:`${item.css3}`}} className="techBar1Acss3"></div>
                                </div>

                                <p className="techSkill1">JavaScript</p>
                                <div className="techBar1">
                                    <div style={{width:`${item.JavaScript}`}} className="techBar1A"></div>
                                </div>
                                
                                <p className="techSkill1">PHP</p>
                                <div className="techBar1">
                                    <div style={{width:`${item.PHP}`}} className="techBar1A"></div>
                                </div>

                                <p className="techSkill1">SQL</p>
                                <div className="techBar1">
                                    <div style={{width:`${item.SQL}`}} className="techBar1ASQL"></div>
                                </div>

                                <p className="techSkill1">Adobe Creative Suite</p>
                                <div className="techBar1">
                                    <div style={{width:`${item.AdobeCreativeSuite}`}} className="techBar1A"></div>
                                </div>

                                <p className="techSkill1">Word Press</p>
                                <div className="techBar1">
                                    <div style={{width:`${item.WordPress}`}} className="techBar1A"></div>
                                </div>

                                <p className="techSkill1">XML</p>
                                <div className="techBar1">
                                    <div style={{width:`${item.XML}`}} className="techBar1A"></div>
                                </div>

                        </div>

                        <div className="Interests">

                            <h3 className="hdgSkill1">INTERESTS</h3>

                            <div className="Interests100"> 
                                <span id="mailIcon1"><MdComputer/></span>
                                <p className="chess1">{item.Interest1}</p>
                            </div>

                            <div className="Interests100"> 
                                <span id="mailIcon1"><FaChessBoard/></span>
                                <p className="chess1">{item.Interest2}</p>
                            </div>

                            <div className="Interests100"> 
                                <span id="mailIcon1"><GiConsoleController/></span>
                                <p className="chess1">{item.Interest3}</p>
                            </div>

                            <div className="Interests100"> 
                                <span id="mailIcon1"><GiRobotGolem/></span>
                                <p className="chess1">{item.Interest4}</p>
                            </div>
                            
                        </div>

                        <div className="workExperiance"> 

                            <h3 className="hdgWork1">WORK EXPERIANCE</h3>

                                <div className="workEx1">
                                    <div className="workBox1">
                                        <p className="hdgWork2">{item.Work_Experiance1.title}</p>
                                        <p className="hdgWork3">{item.Work_Experiance1.Company}</p>
                                        <div className="hdgWork4">{item.Work_Experiance1.Duration}</div>
                                        <div className="hdgWork5">{item.Work_Experiance1.Address}</div>
                                    </div>

                                    <div className="workDetail1">
                                        <span id="mailIcon2"><BiSquare/></span>
                                        <p className="workFont1">{item.Work_Experiance1.Detail1}</p>
                                    </div>

                                    <div className="workDetail1">
                                        <span id="mailIcon2"><BiSquare/></span>
                                        <p className="workFont1">{item.Work_Experiance1.Detail2}</p>
                                    </div>

                                    <div className="workDetail1">
                                        <span id="mailIcon2"><BiSquare/></span>
                                        <p className="workFont1">{item.Work_Experiance1.Detail3}</p>
                                    </div>

                                    <div className="workDetail1">
                                        <span id="mailIcon2"><BiSquare/></span>
                                        <p className="workFont1">{item.Work_Experiance1.Detail4}</p>
                                    </div>

                                    <div className="workDetail1">
                                        <span id="mailIcon2"><BiSquare/></span>
                                        <p className="workFont1">{item.Work_Experiance1.Detail5}</p>
                                    </div>

                                </div>

                                <div className="workEx2">
                                    <div className="workBox1">
                                        <p className="hdgWork2">{item.Work_Experiance2.title}</p>
                                        <p className="hdgWork3">{item.Work_Experiance2.Company}</p>
                                        <div className="hdgWork4">{item.Work_Experiance2.Duration}</div>
                                        <div className="hdgWork5">{item.Work_Experiance2.Address}</div>
                                    </div>

                                    <div className="workDetail1">
                                        <span id="mailIcon2"><BiSquare/></span>
                                        <p className="workFont1">{item.Work_Experiance2.Detail1}</p>
                                    </div>

                                    <div className="workDetail1">
                                        <span id="mailIcon2"><BiSquare/></span>
                                        <p className="workFont1">{item.Work_Experiance2.Detail2}</p>
                                    </div>

                                    <div className="workDetail1">
                                        <span id="mailIcon2"><BiSquare/></span>
                                        <p className="workFont1">{item.Work_Experiance2.Detail3}</p>
                                    </div>

                                    <div className="workDetail1">
                                        <span id="mailIcon2"><BiSquare/></span>
                                        <p className="workFont1">{item.Work_Experiance2.Detail4}</p>
                                    </div>

                                    <div className="workDetail1">
                                        <span id="mailIcon2"><BiSquare/></span>
                                        <p className="workFont1">{item.Work_Experiance2.Detail5}</p>
                                    </div>

                                </div>
                        </div>

                        <div className="courseTrain">

                            <h3 className="hdgWork1">COURSES AND TRAINING</h3>

                                <div className="course1">
                                    <p className="courseName1">{item.coursesTrain1}</p>
                                    <p className="courseInst1">{item.courseInstitute1}</p>
                                </div>

                                <div className="course1">
                                    <p className="courseName1">{item.coursesTrain2}</p>
                                    <p className="courseInst1">{item.courseInstitute2}</p>
                                </div>

                                <div className="course1">
                                    <p className="courseName1">{item.coursesTrain3}</p>
                                    <p className="courseInst1">{item.courseInstitute3}</p>
                                </div>

                                <div className="course1">
                                    <p className="courseName1">{item.coursesTrain4}</p>
                                    <p className="courseInst1">{item.courseInstitute4}</p>
                                </div>

                        </div>

                        <div className="educationInst">
                            <h3 className="hdgEducation1">Education</h3>

                                <p className="eduDegree1">{item.EducationDegree}</p>
                                <p className="eduInst1">{item.EducationInstitute}</p>
                                <p className="hdgWork4">{item.Educationduration}</p>
                        </div>
                        
                    </div>

                </div>
                
            )
        })


        return(
                <div>
                    <input onChange={this.handleChange} />
                    {response}
                </div>

        )
    }
}

export default Cv1