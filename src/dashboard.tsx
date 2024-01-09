import { ChevronDown } from "lucide-react"
import NextPayoutCard from "./next-payout-card"
import AmountPendigCard from "./amount-pending-card"
import AmountProcessedCard from "./amount-processed-card"
import Orders from "./orders"

const dashboard = () => {
    return (
        <div className="w-full h-full">
            <div>
                <div className="flex items-center justify-between text-[#4d4d4d] font-Golano">
                    <h2 className="text-xl text-[#1a181e] font-medium">Overview</h2>
                    <div className="border cursor-pointer rounded border-[#d9d9d9] py-1.5 px-3.5 flex items-center h-9">
                        <p>This Month</p>
                        <ChevronDown className="w-4 h-4 ml-1.5" />
                    </div>
                </div>

                <div className="flex gap-5 mt-5">
                   <NextPayoutCard />
                   <AmountPendigCard />
                   <AmountProcessedCard />
                </div>
                
                <div className="mt-5">
                    <h2 className="font-Golano text-xl text-[#1a181e] font-medium">Transactions | This Month</h2>
                </div>
                <div className="flex gap-3 mt-5">
                    <div className="bg-[#e6e6e6] cursor-pointer text-[#808080] text-sm px-4 py-1.5 rounded-full">
                        <p>Payouts (22)</p>
                    </div>
                    <div className="bg-[#146eb4] text-white cursor-pointer text-sm px-4 py-1.5 rounded-full">
                        <p>Refunds (6)</p>
                    </div>
                </div>
                <div className="mt-5">
                    <Orders />
                </div>
            </div>
        </div>
    )
}

export default dashboard
