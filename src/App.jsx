
import {Hero} from '@/section/Hero'
import {About} from '@/section/About'
import {Projects} from '@/section/Projects'
import {Experience} from '@/section/Experience'
import {Testimonals} from '@/section/Testimonals'
import {Contact} from '@/section/Contact'
import {Navbar} from '@/layout/Navbar'
import { Footer } from './layout/Footer'
function App(){
  return(
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>

      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Testimonals/>
        <Contact/>
        <Footer/>
      </main>

    </div>
  )
}
export default App