import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;


    const slideForward = () => {
        if (tx>-50){
            tx -= 25; 
        }
        slider.current.style.transform = `translateX( ${tx}%)`;

    }
    const slideBackward = () => {
        if (tx < 0){
            tx += 25; 
        }
        slider.current.style.transform = `translateX( ${tx}%)`;

    
    }
    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick=
                {slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick=
                {slideBackward} />
            <div className="slider">
                <ul ref = {slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Ravi Patel </h3>
                                    <span>Mumbai, India</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity one of the best decisions
                                I've ever made.The Supportive Community, State- of the art facilities,
                                and Commitment to academic Excellence has truly exceeded my expectations
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Barcelona, Spain</span>
                                </div>
                            </div>
                            <p>As a native of Barcelona, I've always valued education and community,
                                and this program embodies both. The emphasis on hands-on learning and
                                real-world application has been instrumental in preparing me for success,
                                both academically and professionally
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Yuki Tanaka </h3>
                                    <span>Tokyo, Japan </span>/
                                </div>
                            </div>
                            <p>Growing up in Tokyo, I always dreamed of studying abroad,
                                and this program has made that dream a reality. The supportive faculty
                                and tight-knit community have made my transition seamless, and I'm grateful for
                                the opportunities for personal and academic growth that I've found here
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Ahmed Al-Farsi </h3>
                                    <span>Riyadh, Saudi Arabia</span>
                                </div>
                            </div>
                            <p>From Riyadh to the classroom, this program has been a journey
                                like no other. The welcoming atmosphere and inclusive culture
                                have made me feel valued and supported every step of the way,
                                and I'm proud to call this institution my academic home
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Testimonials
