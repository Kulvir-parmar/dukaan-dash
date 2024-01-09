import { HelpCircle, ChevronRight } from "lucide-react"

const AmountPendigCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg w-[370px] p-5 h-fit flex flex-col gap-4">
        <div className="flex items-center text-[#4d4d4d]">
            <p>Amount Pending</p>
            <HelpCircle className="w-4 h-4 ml-2" />
        </div>
        <div className="flex font-Golano items-center justify-between">
            <p className="text-[32px]/[38px]">₹92,312.20</p>
            <p className="underline cursor-pointer flex text-[#146eb4]">
                13 orders
                <ChevronRight className="h-6 w-6 ml-2" />
            </p>
        </div>
    </div>
  )
}

export default AmountPendigCard
