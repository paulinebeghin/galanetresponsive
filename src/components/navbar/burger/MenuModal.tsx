import { DiamondPlus } from "lucide-react"
import { MainNav } from "../MainNav"
import { Button } from "../../ui/Button"



const MenuModal = () => {
    return (
        <div className='bg-slate-900 w-screen h-screen p-4 rounded-lg absolute top-10 -right-4 z-50 flex flex-col gap-4 '>
  <div className="flex flex-col w-full gap-4">
    <Button outline text="Établir la liaison" link="/" />
    <Button icon={<DiamondPlus />} text="Vider sa soute" link="/" />
  </div>
  <div className="text-left flex flex-col gap-6">
    <p className="text-slate-400">Parcourir</p>
    <MainNav />
  </div>
</div>
    )
}

export default MenuModal