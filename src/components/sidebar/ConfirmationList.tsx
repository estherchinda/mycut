import { dealData } from "../../data/deal";
import { FaCircleCheck } from "react-icons/fa6";

export default function ConfirmationList() {
  return (
    <div className="space-y-5">
      <h3 className="playfair text-[#103128] font-semibold text-[15px]">
        Confirmation & Execution
      </h3>
      <div className="bg-[#1031281A] border border-[#1B2B4B26] rounded-xl w-full h-fit p-4 space-y-3">
        <h4 className="text-[#103128] font-semibold uppercase text-xs instrument">
          Confirmations Received
        </h4>
        <p className="playfair space-x-2">
          <span className="text-[#103128] text-3xl font-semibold">
            {dealData.confirmations.received}
          </span>
          <span className="text-gray-500">
            of {dealData.confirmations.required}
          </span>
        </p>
        <p className="text-[#6B6B6B] text-xs instrument">
          {dealData.confirmations.required - dealData.confirmations.received}{" "}
          confirmation needed for distribution
        </p>
        <div className="h-1.5 w-full rounded-full bg-[#1B2B4B26] flex items-center">
          <div className="h-1 w-4/5 rounded-full bg-[#103128]"></div>
        </div>

        {/* participants */}
        <div className="space-y-2">
          {dealData.participants.slice(0, 3).map((p) => {
            const isPending = p.confirmationStatus === "pending";

            return (
            <div key={p.id} className="flex items-center gap-2">
              {isPending ? (
                <div className="bg-[#CCCAC2] size-3.5 rounded-full"></div>
              ) : (
                <FaCircleCheck color="#2A6049" size={14} />
              )}
              <p className={`font-medium text-sm ${isPending ? 'text-[#9A9A9A]' : 'text-[#1B2B4B]'}`}>
                <span>{p.name} </span>-
                <span className="capitalize"> {p.confirmationStatus}</span>
              </p>
            </div>
          )})}
        </div>

        {/* button */}
        <button className="bg-[#103128] rounded-md h-10.5 w-full instrument text-sm font-semibold text-white cursor-pointer">
          Awaiting Adaeze's Confirmation
        </button>
      </div>
    </div>
  );
}
