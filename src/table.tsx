const OrderTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <colgroup>
          <col className="w-1/5" />
          <col className="w-1/5" />
          <col className="w-1/5" />
          <col className="w-1/5" />
          <col className="w-1/5" />
        </colgroup>
        <thead className="text-[#4D4D4D]">
          <tr className="bg-[#F2F2F2] rounded-lg overflow-hidden">
            <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">Order ID</th>
            <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">Status</th>
            <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">Transaction ID</th>
            <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">Refund Date</th>
            <th className="px-3 py-[10px] text-right text-sm font-medium tracking-wider">Order Amount</th>
          </tr>
        </thead>
        <tbody className="bg-white px-3 divide-y divide-[#E6E6E6]">
          <tr className="text-sm">
            <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281209</td>
            <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-1 text-[#1A181E]">
              <span className="bg-[#17B31B] w-2 h-2 rounded-full"></span>Successful
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">131634495747</td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Today, 8:45 PM</td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1125.00</td>
          </tr>
        </tbody>
        <tbody className="bg-white px-3 divide-y divide-[#E6E6E6]">
          <tr className="text-sm">
            <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281208</td>
            <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-1 text-[#1A181E]">
              <span className="bg-[#999] w-2 h-2 rounded-full"></span>Pending
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">131634495747</td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">Yesterday, 3:00 PM</td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1125.00</td>
          </tr>
        </tbody>
        <tbody className="bg-white px-3 divide-y divide-[#E6E6E6]">
          <tr className="text-sm">
            <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281207</td>
            <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-1 text-[#1A181E]">
              <span className="bg-[#17B31B] w-2 h-2 rounded-full"></span>Successful
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">131634495747</td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">12 Jul 2023, 03:00 PM</td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1125.00</td>
          </tr>
        </tbody>
        <tbody className="bg-white px-3 divide-y divide-[#E6E6E6]">
          <tr className="text-sm">
            <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281206</td>
            <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-1 text-[#1A181E]">
              <span className="bg-[#17B31B] w-2 h-2 rounded-full"></span>Successful
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">131634495747</td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">12 Jul 2023, 03:00 PM</td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1125.00</td>
          </tr>
        </tbody>
        <tbody className="bg-white px-3 divide-y divide-[#E6E6E6]">
          <tr className="text-sm">
            <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281206</td>
            <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-1 text-[#1A181E]">
              <span className="bg-[#17B31B] w-2 h-2 rounded-full"></span>Successful
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">131634495747</td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">12 Jul 2023, 03:00 PM</td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1125.00</td>
          </tr>
        </tbody>
        <tbody className="bg-white px-3 divide-y divide-[#E6E6E6]">
          <tr className="text-sm">
            <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">#281205</td>
            <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-1 text-[#1A181E]">
              <span className="bg-[#17B31B] w-2 h-2 rounded-full"></span>Successful
            </td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">131634495747</td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">12 Jul 2023, 03:00 PM</td>
            <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">₹1125.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
