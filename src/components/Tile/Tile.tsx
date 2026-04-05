type TileProps = {
  type?: "default" | "wide" | "large";
  color?: "blue" | "green" | "red" | "yellow" | "purple" | "orange" | "pink" | "cyan" | "lime" | "teal" | "indigo" | "violet" | "fuchsia" | "rose" | "emerald" | "sky" | "slate" | "stone" | "neutral" | "zinc" | "gray" | "black" | "white" | "transparent";
  children: React.ReactNode;
};

export default function Tile({ type = "default", color = "blue", children }: TileProps) {
  return (
    <div className={`tile tile-${type} tile-${color}`}>
      {children}
    </div>
  );
}