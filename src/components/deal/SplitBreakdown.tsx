import { dealData } from "../../data/deal";
import ParticipantRow from "./ParticipantRow";

export default function SplitBreakdown() {
  const colors = ["#3B5FA0", "#5B7A6E", "#7A5B6E", "#1B2B4B"];

  return (
    <div className="space-y-3 w-3/5 m-6">
      <h4 className="uppercase text-[#9A9A9A] text-xs font-semibold tracking-widest">
        Split Breakdown
      </h4>
      <div className="bg-white border border-[#E4E2DC] rounded-lg w-full">
        {dealData.participants.map((p, index) => (
          <ParticipantRow
            key={p.id}
            name={p.name}
            amount={p.amount}
            percentage={p.percentage}
            color={colors[index % colors.length]}
            roleType={p.roleType}
          />
        ))}
      </div>
    </div>
  );
}
