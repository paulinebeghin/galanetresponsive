import { TrendsCards } from "./TrendsCards"
import { Flame } from 'lucide-react';

export const Trends = () => {
    const trends = [
        {
            title : "Vaisseaux de Fuite",
            img : "trends/spaceship.png",
            link : "/"
        },
        {
            title : "Arsenal Clandestin",
            img : "trends/weapon.png",
            link : "/"
        },
        {
            title : "Composants & IA",
            img : "trends/ia.png",
            link : "/"
        },
        {
            title : "Reliques Perdues",
            img : "trends/relic.png",
            link : "/"
        }
    ]

    return (
        <div className="grid
        
        lg:grid-cols-5
        max-lg:grid-flow-col
    
    max-lg:auto-cols-max
    max-lg:gap-6
    max-lg:w-full
    max-lg:max-w-full
    max-lg:overflow-x-auto
    max-lg:overflow-y-hidden
    max-lg:snap-x max-lg:snap-mandatory
    text-slate-50
    ">
            <div className="snap-start  w-70 h-80 bg-purple-600 text-2xl font-bold p-6 flex flex-col gap-5 rounded-lg max-sm:hidden sm:block justify-center items-center">
    <Flame className="w-12 h-12" />
    <p className="wrap-break-word">Cargaisons chaudes</p>
  </div>

  {trends.map((trend, index) => (
    <div key={index} className="snap-start shrink-0 w-70">
      <TrendsCards
        img={trend.img}
        title={trend.title}
        link={trend.link}
      />
    </div>
  ))}
</div>
    )
}
