import { Github, Linkedin, Mail } from "lucide-react";

const Navlinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export const Footer = () => {
    return (
        <footer className="relative mt-20">

            {/* Top Border Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>

            <div className="glass backdrop-blur-xl border-t border-white/10">

                <div className="container mx-auto px-6 py-10">

                    {/* Nav Links */}
                    <div className="flex flex-wrap justify-center gap-8 mb-6">
                        {Navlinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                className="text-muted-foreground hover:text-primary  transition font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-6 mb-6">
                        <a href="https://github.com/Rohitop12" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition">
                            <Github className="w-5 h-5 text-white" />
                        </a>
                        <a href="https://www.linkedin.com/in/rohit-kumar-web/" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition">
                            <Linkedin className="w-5 h-5 text-white" />
                        </a>
                        <a href="mailto:rohit1938sb@gmail.com" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition">
                            <Mail className="w-5 h-5 text-white" />
                        </a>
                    </div>

                   
                    

                </div>
            </div>
        </footer>
    );
};