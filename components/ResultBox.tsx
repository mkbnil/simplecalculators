export default function ResultBox({
  label,
  value,
  color = "indigo",
}: {
  label: string;
  value: string;
  color?: "indigo" | "emerald" | "blue";
}) {
  const colorMap = {
    indigo: "bg-indigo-50 border-indigo-200 text-indigo-700",
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
    blue: "bg-blue-50 border-blue-200 text-blue-700",
  };

  return (
    <div
      className={`mt-6 border rounded-xl p-4 ${colorMap[color]}`}
    >
      <p className="text-sm text-gray-600">
        {label}
      </p>
      <p className="text-2xl font-bold">
        {value}
      </p>
    </div>
  );
}
