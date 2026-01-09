import MenuModal from "./MenuModal";
import { Menu } from 'lucide-react';

import { useState } from "react";

const BurgerMenu = () => {

    const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

    const handleClick = () => {
        setOpenBurgerMenu(!openBurgerMenu)
    }

    return (
        <div className="w-fit relative">
            <button onClick={handleClick}>{<Menu/>}</button>
            {
                openBurgerMenu && <MenuModal/>
            }
        </div>
    )
}

export default BurgerMenu