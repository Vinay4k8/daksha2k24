import About from '@/components/About'
import Contact from '@/components/Contact'
import Events from '@/components/Events'
import Sponsors from '@/components/Sponsors'
import Hero from '@/components/Hero'

export default function Home() {
  return (
   <main className="scroll-smooth bg-white" >
    <div className='min-h-screen'>
    <Hero/>
    </div>
    <div className='min-h-screen'>
    <About/>
    </div>
    <div className='min-h-screen'>
    <Events/>
    </div>
    {/* <div className='min-h-screen'>
    <Sponsors/>
    </div> */}
    <div className='min-h-screen'>
    <Contact/>
    </div>
   </main>
  )
}
