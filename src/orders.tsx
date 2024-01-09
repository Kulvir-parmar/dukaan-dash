import { Input } from './components/ui/input'

import { Download, ArrowUpDown, Search } from 'lucide-react'

const Orders = () => {
  return (
    <div className="bg-white rounded-lg shadow-md px-3 pt-3 pb-2">
        <div className="flex justify-between items-center">
            <div className="h-10 w-[248px] bg-transparent text-[#999] py-2.5 px-4 flex gap-2 items-center rounded border border-[#999]">
                <Search size="14px" />
                <Input
                    placeholder="Order ID or transaction ID"
                    className="w-full p-0 outline-none border-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[#999999] placeholder:text-sm bg-transparent"
                />
            </div>
            <div className="flex gap-4">
                <div className="h-9 text-[#4d4d4d] border border-[#d9d9d9] rounded px-3 py-1.5 flex items-center justify-center">
                    <p>Sort</p>
                    <ArrowUpDown className="w-4 h-4 ml-1.5" />
                </div>
                <div className="h-9 text-[#4d4d4d] border border-[#d9d9d9] rounded p-2">
                    <Download className="w-5 h-5" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Orders
