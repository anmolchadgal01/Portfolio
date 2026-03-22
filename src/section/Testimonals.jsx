import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
         import { ExternalLink } from "lucide-react";
import { useState } from "react";
const certificates=[
    {
        img:"/cloud computing.png",
        Name:"Cloud Computing",
        provider:"NPTEL",
        Link:"https://drive.google.com/file/d/1pTMJnD1GwAg9fHRDLKhLXYhw8EVh1MUa/view",

    },
    {
        img:"/built ai.png",
        Name:"Built Generative AI Apps and Solutions with No-Code Tools",
        provider:"INFOSYS",
        Link:"https://drive.google.com/file/d/1mIQ5PwKCTqteqOqWTEvP434KyyDzSWi0/view",

    },
     {
        img:"/comb theroy.png",
        Name:"Computational Theory: Language Principle & Finite Automation theory",
        provider:"INFOSYS",
        Link:"https://drive.google.com/file/d/1FvmMEPXMCTsxQGqQydX40m3RBsyTppPn/view",

    },
     {
        img:"/freecodecamp.png",
        Name:"Responsive web designing ",
        provider:"freeCodeCamp",
        Link:"https://drive.google.com/file/d/1Isr4QuXTewhRCAngBYOLR49AthrKwE_h/view",

    }
]


export const Testimonals=()=>{
    const [activeidx,setactiveidx]=useState(0);
    const next=()=>{
        setactiveidx((p)=>(p+1) % certificates.length)

    }
    const prev=()=>{
setactiveidx((p)=>(p- 1 + certificates.length) % certificates.length)
    }
    return <section
    id="testimonials"
    className="py-25 relative overflow-hidden"
    >
        
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl  -translate-x-1/2 -translate-y-1/2 "/>
        
        <div className="container  mx-auto px-6 relative z-10">
            {/* Section header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
               
                <span className="text-secondary-foreground text-md font-medium tracking-wider uppercase animate-fade-in">Certification</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"> Certifications that validate 
                       <span className="font-serif italic font-normal text-white ml-2">
                        my skills and commitment to continuous learning
                    </span></h2>

            </div>
            {/* Certificate section */}
            {/* <div className="max-w-4xl mx-auto">
                <div className="relative"> 
                  
                    <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in">
                        <div className="">
                            
                            <blockquote className="text-2xl text-primary font-semibold">
                                {certificates[0].Name}
                            </blockquote>
                            <div className="" >
                                
                                <img src={certificates[0].img} className="object-cover w-200 rounded-2xl"/>
                                
                                <div>
                                    <div className="text-muted-foreground font-semibold">
                                        {certificates[0].provider}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div> */}
   

<div className="max-w-4xl mx-auto">
    <div className="relative group">

        <div className="relative rounded-3xl overflow-hidden glass glow-border animate-fade-in animation-delay-100">

            {/* Image */}
            <img
                src={certificates[activeidx].img}
                alt="certificate"
                className="w-full h-[400px] object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition duration-500"></div>

            {/* Bottom gradient for text readability */}
            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/80 to-transparent"></div>

            {/* Content (bottom) */}
            <div className="absolute bottom-0 p-6 z-10 glass-strong w-full">
                <blockquote className="text-2xl text-primary font-semibold">
                    {certificates[activeidx].Name}
                </blockquote>

                <div className="text-muted-foreground font-medium mt-1">
                    {certificates[activeidx].provider}
                </div>
            </div>

            {/* Center Icon on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 z-10">
                <a
                    href={certificates[activeidx].Link}
                 
                    className="p-4 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md"
                >
                    <ExternalLink className="text-white w-8 h-6 hover:text-primary" />
                </a>
            </div>

        </div>
                {/* Navigation */}
     
    </div>   <div className="flex justify-center items-center gap-4 mt-8">
            <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={prev}>
                <ChevronLeft/>
            </button>
            <div className="flex gap-2">
                {certificates.map((_,idx)=>{
               return <button onClick={()=>setactiveidx(idx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx===activeidx ? "w-8 bg-primary":"bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}/>
            })}</div>
            <button onClick={next} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                <ChevronRight/>
            </button>
        </div>
</div>

        </div>
    </section>
};