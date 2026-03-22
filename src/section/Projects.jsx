import { ArrowUpRight, Github } from "lucide-react";
import { Animateborderbtn } from "@/components/Animateborderbtn";

const projects =[
    {
        title: "ArtisanHub",
        describtion: "ArtisanHub is a full-stack handcrafted marketplace platform that connects local artisans with buyers through a modern and user-friendly web interface. The platform allows dealers to register, manage, and showcase their handcrafted products, while buyers can browse, filter, and purchase items seamlessly.",
        image: "/Artisanhub.png",
        tags: ["React","Node.js","MongoDB","Tailwind css"],
        github:"https://github.com/Rohitop12/ArtsianHUB",
    },

    {
        title: "Smart Pocket",
        describtion: "Smart Pocket is a full-stack personal finance management application designed to help users efficiently track and manage their daily expenses and budgets. The platform allows users to categorize transactions, monitor spending patterns, and generate automated financial reports for better decision-making. It includes features like expense categorization, real-time balance tracking, and data visualization to provide clear insights into user finances.",
        image: "/smartpocket.png",
        tags: ["React","Node.js","MongoDB","RestAPI"],
        github:"https://github.com/Rohitop12/Smart-Pocket",
    },

      {
        title: "Clothify",
        describtion: "Clothing Management System is a full-stack web application designed to streamline the organization and management of clothing inventory for businesses or individuals. The platform allows users to add, update, and track clothing items with details such as category, size, quantity, and pricing. It provides features like inventory monitoring, stock updates, and search/filter functionality to efficiently manage large collections. The system helps reduce manual effort, minimizes errors in inventory handling, and improves overall operational efficiency.",
        image: "/cloth.png",
        tags: ["HTML","Php","Tailwind css"],
        github:"https://github.com/Rohitop12/cloth-Managment",
    }

]

export const Projects=()=>{
    return <section id="projects" className="py-32 relative overflow-hidden">
        {/* Bg glwo */}
        <div className="absolute top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
        <div className="absolute bottom-1/4 left-0 w-64 bg-highlight/5 rounded-full blur-3xl"/>
        <div className="container mx-auto px-6 relative z-10">
        {/* Section  */}
        <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider animate-fade-in">Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Projects that
                <span className="font-serif italic font-normal text-white"> make an impact.</span>
            </h2>
            <p  className="text-muted-foreground animate-fade-in animation-delay-200">
                This section highlights my hands-on experience in developing full-stack applications, focusing on building scalable backend systems, intuitive user interfaces, and solving real-world problems. 
            </p>
        </div>
        <div className="space-y-20">
    {projects.map((project, idx) => {
        const isReverse = idx % 2 !== 0;

        return (
            <div 
                key={idx}
                className={`group flex flex-col md:flex-row ${
                    isReverse ? "md:flex-row-reverse" : ""
                } items-center gap-10 transition-all duration-500 hover:scale-[1.02]`}
            >
                
                {/* Image */}
                <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl">
                    
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent opacity-60 group-hover:opacity-80 transition duration-500"/>

                    {/* Center Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                        <a 
                            href={project.github} 
                            target="_blank"
                            className="px-4 py-3 rounded-full glass hover:bg-primary/50 transition-all duration-300"
                        >
                            <Github className="w-6 h-6 group-hover:scale-110 transition duration-100" />
                        </a>
                    </div>

                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 space-y-4">
                    
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                            {project.title}
                        </h3>

                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"/>
                    </div>

                    <p className="text-muted-foreground">
                        {project.describtion}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagidx) => (
                            <span 
                                key={tagidx}
                                className="px-3 py-1 text-sm rounded-full bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 cursor-default"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                </div>

            </div>
        );
    })}
</div>
<div className="text-center mt-12 animate-fade-in animation-delay-500">
   <a href="https://github.com/Rohitop12" target="_blank">
     <Animateborderbtn>
    View All Projects
    <ArrowUpRight className="w-5 h-5"/>
    </Animateborderbtn>
   </a>
</div>
        </div>
       
    </section>
};