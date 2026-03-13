import { useState } from "react";
import { RiLoader4Fill } from "react-icons/ri";


export default function DealActions() {
    const [isSending, setIsSending] = useState(false);
    const [reminderText, setReminderText] = useState("Send Reminder to Adaeze");
    const [isDisabled, setIsDisabled] = useState(false);
 
    const handleSendReminder = () => {
        setIsSending(true);
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setReminderText('Reminder Sent!')
                }, 1500);
                setIsDisabled(true);
            }, 2000)
            setIsSending(false);
        }, 5000)
    }
  return (
    <div className="space-y-3">
      <h4 className="uppercase text-[#9A9A9A] text-xs font-semibold">
        Deal Actions
      </h4>
      {/* buttons */}
      <div className="space-y-3">
        <button className="rounded-md h-10 w-full text-sm bg-[#2A6049] font-semibold text-white cursor-pointer">
          You Already Confirmed ✓
        </button>
        <button className="rounded-md h-10 w-full text-sm border border-[#7D1F1F] text-[#7D1F1F] cursor-pointer">
          Raise a Dispute
        </button>
        <button 
        disabled={isDisabled}
        onClick={handleSendReminder} 
        className="rounded-md h-10 w-full text-sm border border-[#CCCAC2] text-[#3D3D3D] cursor-pointer">
          { isSending ? <RiLoader4Fill className="animate-spin text-gray-500 mx-auto" size={15}/> : reminderText }
        </button>
      </div>
      {/* note */}
      <div className="mt-8 border border-[#A0611A26] bg-[#FDF4E7] rounded-md h-18.5 w-full p-4">
        <p className="text-xs instrument space-x-1">
          <span className="font-bold text-[#A0611A]">Note:</span>
           <span className="text-gray-500">Once all 3 confirmations are received, funds will distribute
          automatically to all parties. This action is irreversible.</span>
        </p>
      </div>

      {/* divider */}
      <hr className="text-[#E4E2DC] my-2" />
    </div>
  );
}
