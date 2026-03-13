export default function AvatarInitials({ name, color }: { name: string; color: string }) {
  const transformData = (initialName: string) => {
    if (!initialName) return "";

    return initialName
      .trim()
      .split(" ")
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join("");
  };

  const initials = transformData(name);

  return (
    <div style={{ backgroundColor: color}} className={`size-10 text-white rounded-lg flex items-center justify-center text-sm font-semibold`}>
      {initials}
    </div>
  );
}