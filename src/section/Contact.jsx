import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send,Github,Linkedin } from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser"
const Contactinfo=[
    {
        icon:Mail,
        label:"Email",
        value:"rk0309261@gmail.com",
        href:"mailto: rk0309261@gmail.com",
    },
    {
        icon:Phone,
        label:"Phone",
        value:"+91 9352165299",
        href:"tel:35423513",
    },
    {
        icon:MapPin,
        label:"Location",
        value:"Jhanldhar,Punjab",
        href:"#",
    }
]
export const Contact=()=>{
    const [formdata,setformdata]=useState({
        name:"",
        email:"",
        message:""
    });
    const [isloading,setisloading] = useState(false);
    const [submitstatus,setsubmitstatus] = useState({
        type:null,
        message:"",
    });

    const handlesubmit=async(e)=>{
        e.preventDefault();
        setisloading(true);
        setsubmitstatus({type:null,message:""});
        try{
            const serviceid=import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateid=import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publickey=import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if(!serviceid || !templateid || !publickey){
                throw new Error(
                    "Emailjs configuration is missing.Please check env"
                );
            }
            await emailjs.send(serviceid,templateid,{
                name:formdata.name,
                email:formdata.email,
                message:formdata.message,

            },publickey);
            setsubmitstatus({
                type:"success",
                message:"Message sent successfully! I'will get back to you soon",
            });
            setformdata({name:"",email:"",message:""});
        } catch(err){
            console.error("Emailjs error:",error);
            setsubmitstatus({
                type:"error",
                message:error.text || "Failed to send message.PLease try again later."
            })
        } finally{
            setisloading(false);
        }
    };
    return <section id="contact" 
    className="py-25 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
            
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="bg-highlight/5 rounded-full blur-3xl absolute bottom-1/3 right-1/4 w-64 h-64 "/>    
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 ">
                    <span className="text-secondary-foreground text-sm uppercase tracking-wider animate-fade-in">Get in touch</span>
                    <h2 className="text-primary text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">Let’s connect 
                         <span className="font-serif italic text-white ml-2 font-normal">
                        and bring your ideas to life
                        </span></h2>
                        <p className="text-muted-foreground animate-fade-in animation-delay-200">
                            Whether it’s a project, collaboration, or opportunity, I’m always ready to connect. Let’s build something impactful and turn ideas into reality.
                        </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto" >
                    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300 glow-border">
                        <form onSubmit={handlesubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <input id="name" required 
                                value={formdata.name}
                                onChange={(e) => {
    const value = e.target.value;

    if (/^[a-zA-Z\s]*$/.test(value)) {
        setformdata({ ...formdata, name: value });
        setNameError("");
    } else {
        setNameError("Only letters are allowed");
    }
}}
                                placeholder="Your Name.." type="text" className="w-full px-4 py-3 bg-surface rounded-2xl border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                            </div>
                            <div>
                                <label  htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input type="email"
                                value={formdata.email}
                                onChange={(e)=>{
                                    setformdata({...formdata,email:e.target.value})
                                }}
                                required placeholder="example@gmail.com" className="w-full px-4 py-3 bg-surface rounded-2xl border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
                            </div>
                            <div>
                                <label  htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                value={formdata.message}
                                onChange={(e)=>{
                                    setformdata({...formdata,message:e.target.value})
                                }}
                                rows={5} required placeholder="Enter your message" className="w-full px-4 py-3 bg-surface rounded-2xl border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" />
                            </div>
                            <Button className="w-full" type="submit" size="lg"
                            disabled={isloading}
                            >
                                { isloading ?(
                                        <>
                                     Sending...
                                
                                    </>
                                ):(
                                    <>
                                     Send Message
                                <Send className="w-5 h-5"/>
                                    </>
                                )
                                    
                                }
                               
                            </Button>
                           {submitstatus.type && (
    <div
        className={`mt-4 p-4 rounded-xl text-sm font-medium ${
            submitstatus.type === "success"
                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                : "bg-red-500/10 text-red-400 border border-red-500/20"
        }`}
    >
        {submitstatus.type === "success" ? (
            <CheckCircle className="w-5 h-5 flex-shrink-0"/>
        ):(
            <AlertCircle className="w-5 h-5 flex-shrink-0"/>
        )}
        <p className="text-sm">{submitstatus.message}</p>
    </div>
)}
                        </form>
                    </div>
                    <div className="space-y-6 animate-fade-in animation-delay-400 glow-border rounded-3xl">
                        <div className="glass rounded-3xl p-8 h-full">
                            <h3 className="text-4xl font-semibold mb-6 text-primary">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                {Contactinfo.map((item, i) => {
    const Icon = item.icon;

    return (
        <> <a
            href={item.href}
            key={i}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-all group border border-transparent hover:border-primary/20"
        >
            {/* Icon */}
            <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                <Icon className="w-5 h-5 text-primary" />
            </div>

            {/* Text */}
            <div>
                <p className="text-sm text-muted-foreground">
                    {item.label}
                </p>
                <p className="text-white font-medium">
                    {item.value}
                </p>
                
            </div>
            
        </a>
        
        </>
       
        
    );
})}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
    </section>
};