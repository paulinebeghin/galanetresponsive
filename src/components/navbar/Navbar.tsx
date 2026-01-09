
import { SearchBar } from "../ui/SearchBar"
import { MainNav } from "./MainNav"
import { TopBar } from "./TopBar"

export const Navbar = () => {
    return (
        <div className="grid gap-2 max-lg:py-3 max-lg:gap-5">
            <TopBar/>
            
            <div className="hidden max-lg:block">
            <SearchBar />
            </div>

            <div className="hidden max-lg:block">

                <MainNav> <li className="  snap-start px-4 py-2 border rounded-full  
                        max-lg:border-purple-600
                        max-lg:border 
                        max-lg:bg-purple-600/25
                        max-lg:rounded-full
                        text-slate-50
                        
                        max-lg:p-3">Voir tout</li></MainNav>
            </div>
            <div className="max-lg:hidden">
            <MainNav/>
            </div>
        </div>
    )
}
