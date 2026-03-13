import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function WorkSpaceLinks() {
  const [openId, setOpenId] = useState(0);

  const workspace = [
    { title: "View Inbox Thread", id: 1 },
    { title: "Version History", id: 2 },
    { title: "Deal Wallet", id: 3 },
  ];

  const handleOpen = (id: number) => {
    setOpenId(openId === id ? 0 : id);
  };

  return (
    <div>
      <h4 className="uppercase text-[#9A9A9A] text-xs font-semibold">
        Deal Workspace
      </h4>

      <div className="space-y-3 mt-4">
        {workspace.map((w) => (
          <div key={w.id}>
            {/* Row */}
            <div
              onClick={() => handleOpen(w.id)}
              className="h-10 w-full border border-[#E4E2DC] rounded-md flex justify-between items-center px-4 cursor-pointer">
              <p className="text-sm text-[#1A1A1A] font-medium">{w.title}</p>
              <FaAngleRight
                className={`transition-transform ${
                  openId === w.id ? "rotate-90" : ""
                }`}
                color="#9A9A9A"
                size={10}
              />
            </div>

            {/* dropdown */}
            {openId === w.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="border border-[#E4E2DC] border-t-0 rounded-b-md p-3 text-sm text-gray-600 bg-gray-50">
                Example dropdown content for <b>{w.title}</b>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
