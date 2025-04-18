import About from "@/components/about";
import Contacts from "@/components/contacts";
import Headerbanner from "@/components/Headerbanner";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";





export default function Home() {
  return (
   
    <div className="w-[1200px] h-full mx-auto bg-blue-950">
     <section id="Home" className="">
      
      <Headerbanner/> 
      </section> 
      <section id="Works" className="">
        
      <Projects/>
        </section>     
      <section id="Skills" className="">
        
      <Skills/>
        </section> 
      <section id="About" className="">
        
      <About/>
        </section> 
      <section id="Contact" className="">
        
      <Contacts/>
        </section> 

    </div>
  );
}
