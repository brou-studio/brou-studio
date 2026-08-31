const items = ["MARKETING", "CONTENIDO", "IA", "AUTOMATIZACIÓN"];

function TickerItem({ text }: { text: string }) {
  return (
    <>
      <span className="text-sm text-text-primary tracking-[4px] font-medium whitespace-nowrap">
        {text}
      </span>
      <span className="text-[8px] text-accent-red">&#9679;</span>
    </>
  );
}

export default function Ticker() {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden py-8">
      <div className="ticker-track flex items-center gap-6">
        {repeated.map((item, i) => (
          <TickerItem key={i} text={item} />
        ))}
      </div>
    </div>
  );
}
