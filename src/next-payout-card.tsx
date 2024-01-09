import { ChevronRight, HelpCircle } from "lucide-react"

const NextPayoutCard = () => {
  return (
    <div className="bg-[#146EB4] text-white rounded-lg shadow-sm w-[370px] pt-5 flex flex-col gap-4 hover:bg-[#0E4F82]">
        <div className="flex items-center mx-5">
            <p>Next Payout</p>
            <HelpCircle className="w-4 h-4 ml-2" />
        </div>
        <div className="flex items-center justify-between mx-5">
            <p className="text-[32px]/[38px]">₹2,312.23</p>
            <p className="underline flex">
                23 orders
                <ChevronRight className="h-6 w-6 ml-2" />
            </p>
        </div>
        <div className="bg-[#0E4F82] flex py-2 px-6 rounded-lg h-9 mt-1 items-center justify-between">
            <p className="text-sm">Next payout date:</p>
            <p>Today, 4:00PM</p>
        </div>
    </div>
  )
}

export default NextPayoutCard 
