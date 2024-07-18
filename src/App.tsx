
import Paper from './components/Paper/Paper'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import News from './components/News/News'
import Skills from './components/Skills/Skills'
import Form from './components/Form/Form'
import './App.css'

function App() {
  

  return (
    <> 
   <Navbar/>
   <Hero/>
   <Skills/>
   <Paper/>
   <News/>
   <Form/>
   <footer className=' text-nwhite text-center p-4'>
     <p>© 2024 All rights reserved</p>    
    </footer>
    </>
  )
}

export default App
