import { Code, Code2, Lightbulb, Rocket, User, Users } from "lucide-react";

const Highlights = [
    {
        icon:Code2,
        title:"Clean Code",
        describtion:"Writing maintainable , scalable code that stand the test of time.",
    },
     {
        icon:Rocket,
        title:"Performance",
        describtion:"Optimizing for speed and delivery lightning-fast user experiences",
    },
     {
        icon:Users,
        title:"Team work",
        describtion:"Working closely with teams to bring ideas to life.",
    },
     {
        icon:Lightbulb,
        title:"Innovation",
        describtion:"Staying ahead with the latest technologies and best pratices.",
    },
];

export const About=()=>{
    return <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left colmn */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-dealy-100 text-secondary-foreground">Building the future,
                    <span className="font-serif italic font-normal text-white"> one component at a time</span>
                </h2>
                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                    <p>
                        I am a passionate Data Science Enthusiast with a strong focus on building data-driven solutions and intelligent applications. I specialize in Python-based development, creating models and tools that help in analyzing data and solving complex problems.
                    </p>
                    <p>
                        With hands-on experience in predictive modeling and system monitoring, I enjoy transforming data into real-world insights that are accurate and effective. I continuously strive to improve my machine learning skills and apply them in innovative ways.
                    </p>
                    <p>
                        My core expertise includes Python, SQL, Pandas, Scikit-Learn, and Streamlit, along with foundational knowledge in C/C++. I focus on writing robust code and continuously adapting to modern AI and data science practices.
                    </p>
                </div>
                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300  animate-pulse">
                    <p className="text-lg font-medium italic text-foreground">"My mission is to build intelligent, efficient, and user-centric applications that solve real-world problems. I aim to deliver high-quality data science solutions by combining analytical thinking, modern technologies, and continuous learning."</p>
                </div>
                    </div>
                    {/* Highlights */}
                    <div className="grid sm:grid-cols-2 gap-14">
                        {Highlights.map((item, idx) => {
                    return (
                         <div key={idx} className="glass rounded-2xl p-5 animate-fade-in "
                         style={{animationDelay:`${(idx +1) * 100}ms`}}>
                     <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center hover:bg-primary/40 hover:scale-105 hover:glow-broder" >
                         <item.icon  className="hover:scale-110 text-primary"/>
                             </div>
                             <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                             <p className="text-sm text-muted-foreground">{item.describtion}</p>
                    </div>
                         );
                        })}
                    </div>
                   

                  
            </div>
        </div>
    </section>
};