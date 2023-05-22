import React from 'react'
import About from './component/About'
import Contact from './component/Contact'
import Headdiv from './component/Headdiv'
import Navbar from './component/Navbar'
import Projects from './component/Projects'
import Skills from './component/Skills'

const App = () => {
  return (
    <>
       <Navbar></Navbar>
       <Headdiv></Headdiv>
       <br></br>
       <br></br>
       <About></About>
       <br></br>
       <br></br>
       <Skills></Skills>
       <br></br>
       <br></br>
       <Projects></Projects>
       <br></br>
       <br></br>
       <Contact></Contact>
       <br></br>
       <br></br>
       <footer className='text-center'>Protfolio</footer>
    </>
  )
}

export default App