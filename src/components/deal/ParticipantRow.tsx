import AvatarInitials from "../ui/AvatarInitials";

type RowTypes = {
  name: string;
  percentage: number;
  amount: number;
  roleType: string;
  color: string;
};

export default function ParticipantRow({
  name,
  percentage,
  amount,
  roleType,
  color,
}: RowTypes) {
  return (
    <div className="px-4 py-2 border-b border-[#E4E2DC] last:border-none h-16 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <AvatarInitials name={name} color={color} />
        <div className="space-y-1 text-[#1A1A1A] instrument">
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-[#9A9A9A]">{roleType}</p>
        </div>
      </div>
      <div className="space-y-1 text-[#1A1A1A] flex flex-col items-end last:flex-col-reverse">
        <p className="text-xs instrument text-[#9A9A9A]">₦{amount.toLocaleString()}</p>
        <p className="font-semibold text-lg playfair">{percentage}%</p>
      </div>
    </div>
  );
}
