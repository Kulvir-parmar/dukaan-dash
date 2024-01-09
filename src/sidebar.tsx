import { ChevronDown } from "lucide-react"

import { Wallet } from "./public/wallet"

function Sidebar() {
  return (
    <div className = "bg-[#1E2640] text-white w-full h-full flex flex-col items-center px-2.5 py-4">
        <div className="flex flex-col gap-6 px-2 w-full">
            {/* Company Name & Icon */}
            <div className="gap-3 flex w-full items-center">
                <div className="w-[40px] h-[40px] bg-white/10 rounded-sm">
                </div>
                <div className="">
                    <p className = "text-[15px] font-medium">John Doe</p>
                    <p className="underline text-[13px]/[16px] text-gray-300 cursor-pointer">Visit store</p>
                </div>
                <div className="cursor-pointer ml-auto">
                    <ChevronDown size="20px" />
                </div>
            </div>

            {/* Pages */}
        </div>


        {/* Wallet Balance */}
        <div className="bg-[#353C53] w-[192px] px-3 py-1.5 rounded-sm flex mt-auto">
            <div className="flex gap-3 items-center">
                <div className = "w-[36px] h-[36px] grid place-items-center p-1.5 bg-white/10 rounded-sm">
                    <Wallet />
                </div>
                <div className="flex flex-col justify-between"> 
                    <p className="text-[13px]">
                        Available Balance
                    </p> 
                    <p>
                        420.69
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
