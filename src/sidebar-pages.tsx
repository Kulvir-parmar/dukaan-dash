import { BadgePercent, Home, LayoutGrid, ClipboardList, Truck, Users, Palette, Zap } from 'lucide-react'

import { Graph } from './public/graph'
import { Marketing } from './public/marketing'
import { Payout } from './public/payout'

const SideBarPages = () => {
    const pagesMap = [
        { name: "Home", icon: <Home size="20px" />, active: false},
        { name: "Orders", icon: <ClipboardList size="20px" />, active: false},
        { name: "Products", icon: <LayoutGrid size="20px" />, active: false},
        { name: "Delivery", icon: <Truck size="20px" />, active: false },
        { name: "Marketing", icon: <Marketing />, active: false },
        { name: "Analytics", icon: <Graph />, active: false },
        { name: "Payouts", icon: <Payout />, active: true},
        { name: "Discount", icon: <BadgePercent size="20px" />, active: false },
        { name: "Audience", icon: <Users size="20px" />, active: false },
        { name: "Appearance", icon: <Palette size="20px" />, active: false },
        { name: "Plugins", icon: <Zap size="20px" />, active: false },
    ]
    return(
        <div className="flex-col gap-y-1 mt-6 ">
            {
                pagesMap.map((page, index) =>(
                    <div key={index} 
                            className={"flex items-center text-black/1 gap-3 px-4 py-2 rounded text-sm hover:bg-white/10 transition"
                            + (page.active && " bg-white/10 font-Golano")
                        }>
                        <div className="">
                            {page.icon}
                        </div>
                        <p className="text-sm font-medium">{page.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default SideBarPages;
