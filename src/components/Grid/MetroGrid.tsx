import "./Grid.css";

type MetroGridProps = {
  direction?: "horizontal" | "vertical";
  children: React.ReactNode;
  className?: string;
};

export default function MetroGrid({
  direction = "horizontal",
  children,
  className = "",
}: MetroGridProps) {
  return (
    <div className={`base-grid ${direction} ${className}`}>
      {children}
    </div>
  );
}