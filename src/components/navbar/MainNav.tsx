import type { ReactNode } from "react"

interface NavProps {
    children?: ReactNode
    styleB?:boolean
    
}

export const MainNav = ({children, styleB}: NavProps) => {
    const links = [
        {
            text : "Vaisseaux & Engins",
            href : "/"
        },
        {
            text : "Armurerie",
            href : "/"
        },
        {
            text : "Apparence",
            href : "/"
        },
        {
            text : "Ferraille & Droïdes",
            href : "/"
        },
        {
            text : "Ravitaillement & Médic-packs",
            href : "/"
        },
        {
            text : "Cyber-matériel & Cryptage",
            href : "/"
        },
        {
            text : "Reliques & Trésors Interdits",
            href : "/"
        },
        {
            text : "Kits de Survie & Exploration",
            href : "/"
        },
    ]
    return (
        <>
        {
            styleB?
            <nav className="grid max-lg:whitespace-nowrap max-lg:overflow-auto max-lg: h-12">
           <ul className="flex items-center justify-between max-lg:overflow-auto max-lg:gap-3 snap-x">
                     {children}
                     {
                         links.map((link, index) => (
                             <li key={index} ><a href={link.href} className="text-slate-50 
                            
                             max-lg:border-slate-400 
                             max-lg:border 
                             max-lg:rounded-full 
                             snap-start
                             max-lg:p-3 " >{link.text}</a></li>
                         ))
                     }
                     
                 </ul>
             </nav>
             :
              <nav className="">
           <ul className="flex flex-col gap-6">
                     {children}
                     {
                        
                         links.map((link, index) => (
                            

                                <li key={index} ><a href={link.href} className="text-slate-50 
                               
                               " >{link.text}</a></li>
                            
                         ))
                     }
                     
                 </ul>
             </nav>

        }
        </>
    )
}
