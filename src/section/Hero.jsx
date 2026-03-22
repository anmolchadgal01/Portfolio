import { Button } from "@/components/Button";
import { ArrowRight, Download ,Github,Linkedin,Instagram, ChevronDown} from "lucide-react";
import { Animateborderbtn } from "@/components/Animateborderbtn";

const skills=[
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "C++",
    "Figma",
    "Tailwind css",
    "Vercel",
    "GIT",
    "Github actions",
    "Postman",

];

export const Hero=()=>{
    return <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg */}
        <div className="absolute inset-0">
            <img src="/hero-bg.avif" 
            alt="Hero image"
            className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20  via-background/80 to-background"></div>
        </div>
        {/* Green dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
  {[...Array(30)].map((_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 rounded-full opacity-60"
      style={{
        backgroundColor: "#20B2A6",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation:`slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
        animationDelay: `${Math.random() *5}s`,
      }}
    />
  ))}
</div>
{/* Content */}
  <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left colum - text content */}
        <div className="space-y-8">
            <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-primary">
                 <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>Full-Stack Developer - React Specialistn
                </span>
               
            </div>
            {/* Headline */}
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-300 ease-in-out">
                    Building    <span className="text-primary glow-text">digital</span>
                    <br />
                    experiences with
                    <br />
                    <span className="font-serif italic font-normal text-white">precision</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-400 ease-in-out">
                    Hi , I'm Rohit - a Full-Stack Developer specializing in 
                    React.js, Next.js, Node.js, and MongoDB. I build scable,performant web
                    applications that user find it Helpful.
                </p>
            </div>
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-500 ease-in-out">
              <a href="#contact">  <Button size="lg">Contact Me <ArrowRight /></Button></a>
                <a href="/Rohit CV.pdf" download>
                    <Animateborderbtn>
                      <Download className="h-5 w-5"/>
                        Download CV
                </Animateborderbtn>
                </a>
            </div>
            {/* Social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-600">
                <span className="text-sm text-muted-foreground">Follow me:</span>
           {[
  { icon: Github, href: "https://github.com/Rohitop12" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rohit-kumar-web/" },
 
].map((social, idx) => {
  return (
    <a key={idx} href={social.href}
    target="_blank"
    className="p-2  rounded-full glass hover:bg-primary/20 hover:text-primary transition-all duration-300"
    >
      <social.icon className="h-5 w-5"/>
    </a>
  );
})}
            </div>
            
            <div>

            </div>
        </div>
        {/* Right colum - Profile image */}
        <div className="relative animate-fade-in animation-delay-300">
            {/* Img */}
            <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to bg-primary/10 blur-2xl animate-pulse"/>
                <div className="relative glass rounded-3xl p-2 glow-border">
                    <img src="/profile up.png" alt="profile picture" className="w-full aspect-[4/5] object-cover rounded-2xl" />
                    {/*floating badge */}
                    <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 animate-float">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                            <span className="text-sm font-medium">Available for Work</span>
                        </div>
                    </div>
                    {/* Stats badge */}
                    <div className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-3 animate-float animation-delay-500">
                        <div className="text-2xl font-bold text-primary">2+</div>
                        <div className="text-xs text-muted-foreground">Coding Experience</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Skills */}
    <div className="mt-20 animate-fade-in animation-delay-600">
        <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
        <div className="relative overflow-hidden">
            <div className="flex  animate-marquee">
                {[...skills,...skills].map((skill,idx)=>[
                   <div key={idx} className="flex-shrink-0 px-8 py-4">
                    <span className="text-2xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors hover:cursor-default">{skill}</span>
                   </div>
                ])}
            </div>
        </div>
    </div>
  </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-0.5 animate-fade-in animation-delay-600 ease-in-out">
                <a href="#about"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce"/>
                </a>
            </div>
    </section>
};