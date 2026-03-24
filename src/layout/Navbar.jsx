// import { Button } from "@/components/Button";
// import {Menu} from 'lucide-react'


// const Navlinks=[
//     {href: "#about", label: "About"},
//     {href: "#projects", label: "Projects"},
//     {href: "#experience", label: "Experience"},
//     {href: "#Testimonals", label: "Testimonals"},
// ];


// export const Navbar=()=>{
//     return <header className=" fixed top-0 right-0 left-0 bg-transparent py-5">
//         <nav className="container mx-auto px-6 flex items-center justify-between">
//             <a href="#" className="text-xl font-bold tracking-tight transition-colors hover:text-primary">
//                 Anmol Chadgal <span className="text-primary">.</span>
//             </a>
//             {/* Destop nav */}
//             <div className="hidden md:flex items-center gap-1">
//                 <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
//                 {Navlinks.map((link,index)=>{
//                     return <a href={link.href} key={index}
//                     className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
//                     >{link.label}</a>
//                 })}
//                 </div>
//             </div>
//             {/* Contact button */}
//             <div className="hidden md:block">
//                 <Button size="sm">
//                     Contact me
//                 </Button>
//             </div>
//             {/* Mobile  menu */}
//             <button className="md:hidden p-2 text-foreground">
//                     <Menu size={24}/>
//             </button>
//             {/* Mobile menu */}
//             <div className="md:hidden glass-strong">
//                 <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
//                     {Navlinks.map((link,index)=>{
//                     return <a href={link.href} key={index}
//                     className="text-lg text-muted-foreground hover:text-foreground py-2"
//                     >{link.label}</a>
//                 })}
//                 </div>
//             </div>
//         </nav>
//     </header>
// };
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";

const Navlinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Education" },
  { href: "#testimonials", label: "Certificates" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll,setisScroll]=useState(false);

  useEffect(()=>{
    const handlescroll=()=>{
      setisScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll",handlescroll);

    return () =>window.removeEventListener("scroll",handlescroll);

  },[])

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-400 ${isScroll ? "glass-strong p-1.5":"bg-transparent py-5"}  z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight transition-colors hover:text-primary"
        >
          Anmol Chadgal <span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {Navlinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact button */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm" >Contact me</Button>
          </a>
          
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen((p)=>!p)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-strong animate-fade-in mt-4 mx-4 rounded-xl">
          <div className="px-6 py-6 flex flex-col gap-4">
            {Navlinks.map((link, index) => (
              <a
                key={index}
                onClick={()=>setIsOpen(false)}
                href={link.href}
                className="text-lg text-muted-foreground hover:text-foreground py-2 transition "
               
              >
                {link.label}
              </a>
            ))}
            <Button onClick={()=>setIsOpen(false)} size="sm">Contact me</Button>
          </div>
        </div>
      )}
    </header>
  );
};