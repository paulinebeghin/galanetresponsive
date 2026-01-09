import { Button } from "../ui/Button"
import Logo from "../ui/Logo"
import { SearchBar } from "../ui/SearchBar"
import { DiamondPlus } from 'lucide-react';

export const TopBar = () => {
    return (
        <div className="py-3 flex items-center gap-12 max-lg:justify-between">
            <a href="/">
                <Logo />
            </a>
            <div className="flex-1 lg:block max-lg:hidden">
                <SearchBar/>
            </div>
            <div className="flex items-center gap-5">
                <Button outline text="Établir la liaison" link="/"/>
                <Button icon={<DiamondPlus/>} text="Vider sa soute" link="/"/>
            </div>
        </div>
    )
}
