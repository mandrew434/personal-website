export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-2xl font-bold tracking-tight text-white uppercase">{title}</h2>
      <div className="h-[1px] flex-1 bg-zinc-800" />
    </div>
  );
}
