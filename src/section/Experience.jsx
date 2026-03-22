const experience=[
    {
        period:"2023-Present",
        Percentage:"7.36",
        Name:"Lovely Professional University",
        degree:"Bachelor of Technology-Computer Science and Engineering",
        place:"Punjab India"


    },
     {
        period:"2020-2022",
        Percentage:"95.8",
        Name:"PCP School",
        degree:"Higher Secondary",
        place:"Jhunjhunu,Rajasthan"


    },
     {
        period:"2015-2020",
        Percentage:"83.4",
        Name:"Nawal Public School",
        degree:"Secondary School ",
        place:"Jhunjhunu,Rajasthan"


    },
    
]

export const Experience=()=>{
//     return <section id="experience" className="py-32 relative overflwo-hidden">
//         <div className="absolute top-0.5 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl -translate-y-0.5"/>
//     <div className="container mx-auto px-6 relative z-10">
//         {/* Section header */}
//         <div className="max-w-3xl mb-16">
//             <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Study Journey</span>
//             <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
//                 Every concept learned <span className="font-serif italic font-normal text-white">is a step closer to innovation</span>
//             </h2>
//             <p className="text-muted-foreground animate-fade-in animation-delay-200">“My study journey is driven by curiosity and a passion for technology, where I built strong fundamentals in programming and web development while applying my learning through real-world projects.”</p>

//         </div>
//         {/* Timeline */}
//         <div className="relative">
//             <div className="timeline-glow absolute left-0 md:left-0.5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary-30 to-transparent md:translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)] "/>
//         {/* Experience item*/}
//         <div className="space-y-12">
//             {experience.map((exp,idx)=>{
//                 return <div key={idx } className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
//                 style={{animationDelay:`${(idx +1) * 100}ms`}}>
//                     {/* dot */}
//                     <div></div>
//                     {/* content */}
//                     <div className={`pl-8 md:pl-0 ${
//     idx % 2 === 0
//       ? "md:pr-16 md:text-right"
//       : "md:pl-16 md:col-start-2"
//   }`}>
//                         <div>
//                             <span>{exp.period}</span>
//                             <h3>{exp.degree}</h3>
//                             <p>{exp.Name}</p>
//                             <p>Cgpa/Percentage : {exp.Percentage}</p>
//                             <p>{exp.place}</p>
//                         </div>
//                     </div>

//                 </div>
//             })}
//         </div>
//         </div>
//     </div>
//     </section>
return <section id="experience" className="py-25 relative overflow-hidden">
    
    {/* Background glow */}
    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2"/>

    <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Study Journey
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
                Every concept learned{" "}
                <span className="font-serif italic font-normal text-white">
                    is a step closer to innovation
                </span>
            </h2>

            <p className="text-muted-foreground">
                My study journey is driven by curiosity and a passion for technology, where I built strong fundamentals in programming and web development while applying my learning through real-world projects.
            </p>
        </div>

        {/* Timeline */}
        <div className="relative">
            
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 to-transparent md:-translate-x-1/2"/>

            <div className="space-y-12">
                {experience.map((exp, idx) => {
                    return (
                        <div
                            key={idx}
                            className="relative grid md:grid-cols-2 gap-8"
                        >
                            
                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 top-0 w-2.5 h-2.5 bg-primary rounded-full ring-3 ring-background -translate-x-1/2  animate-pulse z-10"/>

                            {/* Content */}
                            <div
                                className={`pl-12 md:pl-0 ${
                                    idx % 2 === 0
                                        ? "md:pr-16 md:text-right"
                                        : "md:pl-16 md:col-start-2"
                                }`}
                            >
                                <div className="glass p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300">
                                    
                                    <span className="text-sm text-primary font-medium">
                                        {exp.period}
                                    </span>

                                    <h3 className="text-xl font-semibold mt-2">
                                        {exp.degree}
                                    </h3>

                                    <p className="text-muted-foreground">
                                        {exp.Name}
                                    </p>

                                    <p className="text-sm mt-2">
                                        CGPA / Percentage: {exp.Percentage}
                                    </p>

                                    <p className="text-sm text-muted-foreground">
                                        {exp.place}
                                    </p>

                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    </div>
</section>
};