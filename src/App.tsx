import { HelpCircle, Search } from "lucide-react"

import Sidebar from "./sidebar";
import Dashboard from "./dashboard";
import { Input } from "./components/ui/input";
import { Megaphone } from "./public/megaphone";
import { ChevronDown } from "./public/chevron-down";

function App() {

  return (
    <div className="bg-background flex relative"> 
        {/* Sidebar */}
        <div className="w-56 h-screen z-10">
            <Sidebar />
        </div>

        <div className="w-full">
        {/* Dashboard Header */}
            <div className="w-full">
                <div className="flex h-16 py-3 px-8 w-full border-b border-[#d9d9d9] shadow sticky top-0 items-center justify-between">
                    <div className="flex gap-4 items-center">
                        <h5>Payouts</h5>
                        <div className="flex items-center gap-1.5 text-[#4d4d4d]">
                            <HelpCircle size={"14px"} />
                            <p className="text-xs">How it works</p>
                        </div>
                    </div>

                    <div className="h-10 w-[400px] bg-[#f2f2f2] text-[#808080] py-[9px] px-4 flex gap-2 items-center rounded-md">
                        <Search size="16px" />
                        <Input 
                            placeholder="Search features, tutorials, etc."
                            className="w-full p-0 outline-none border-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#808080] placeholder:text-[15px]/[22px] bg-transparent"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="grid place-items-center w-10 h-10 bg-[#e6e6e6] rounded-full">
                            <Megaphone />
                        </div>
                        <div className="grid place-items-center w-10 h-10 bg-[#e6e6e6] rounded-full">
                            <ChevronDown />
                        </div>
                    </div>
                </div>
            </div>

            {/* Dashboard Body */}
            <div className="m-8">
                <Dashboard />
            </div>
        </div>
    </div>
  )
}

export default App
