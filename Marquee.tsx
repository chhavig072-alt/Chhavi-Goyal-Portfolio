const items = ["GRAPHIC DESIGN", "★", "UI / UX", "★", "FRONT-END DEV", "★", "AI / ML", "★", "PHOTOGRAPHY", "★", "CONTENT", "★"];

export const Marquee = () => (
  <div className="bg-foreground text-background overflow-hidden border-y-2 border-foreground py-4">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...items, ...items, ...items].map((item, i) => (
        <span key={i} className="font-display text-2xl md:text-4xl mx-6">
          {item}
        </span>
      ))}
    </div>
  </div>
);
