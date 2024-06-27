import React from 'react'
import './about.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon'/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Embark on a transformative Educational Journey with Our University
                    Comprehensive Education Programs.Our Cutting Edge Curriculum to Empower Students
                    to the Knowledge, Skills and Experiences needed to Excel in the dynamic field of
                    Education </p>
                <p>With a focus on innovation, hands on learning and personalized mentorship, our
                    program preparing aspiring educators to make a meaningful impact in classroom, schools
                    and communities</p>
                <p>Whether you aspire to become a teacher, administrator , counsellor or Educational
                    leaders or our diverse range of programs offer a perfect pathway to acheive your goal and
                    unlocked your full potentialin shaping the future of Education  </p>
            </div>
        </div>
    )
}

export default About
