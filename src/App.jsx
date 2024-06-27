import React  from 'react'
import Navbar from './components/navbar/navbar.jsx'
import './components/navbar/navbar.css'
import Hero from './components/Hero/Hero.jsx'
import Programs from './components/programs/program.jsx'
import Title from './components/title/title.jsx'
import About from './components/about/about.jsx'
import Campus from './components/campus/campus.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/footer/footer.jsx'

const App = () => {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      </div> 
      <Title subTitle = 'Our PROGRAM' title='What We Offer'/>
      <Programs/>
      <About/>
      <Title subTitle = 'Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle = 'TESTIMONIALS' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle = 'Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App

