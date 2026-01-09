import type { ReactNode } from "react"

interface NavProps {
    children?: ReactNode
}

export const MainNav = ({children}: NavProps) => {
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
       <nav className="grid max-lg:whitespace-nowrap max-lg: overflow-auto max-lg: h-12">
      <ul className="flex items-center justify-between max-lg:gap-3">
                {children}
                {
                    links.map((link, index) => (
                        <li key={index}><a href={link.href} className="text-slate-50 
                        
                        
                       
                        max-lg:border-slate-400 
                        max-lg:border 
                        max-lg:rounded-full
                        
                        max-lg:p-3 ">{link.text}</a></li>
                    ))
                }
                
            </ul>
        </nav>
    )
}
