import { HelpCircle } from "lucide-react"

const AmountProcessedCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg w-[370px] p-5 h-fit flex flex-col gap-4">
        <div className="flex items-center text-[#4d4d4d]">
            <p>Amount Processed</p>
            <HelpCircle className="w-4 h-4 ml-2" />
        </div>
        <div className="flex items-center font-Golano justify-between">
            <p className="text-[32px]/[38px]">₹23,92,312.19</p>
        </div>
    </div>
  )
}

export default AmountProcessedCard
