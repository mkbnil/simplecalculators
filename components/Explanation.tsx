export default function Explanation({
  title,
  points,
}: {
  title: string;
  points: string[];
}) {
  return (
    <section className="mt-8 space-y-3 text-gray-700">
      <h2 className="text-xl font-semibold">
        {title}
      </h2>
      {points.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </section>
  );
}
