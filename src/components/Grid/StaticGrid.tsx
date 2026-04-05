import BaseGrid from "./MetroGrid";

interface StaticGridProps {
  children: React.ReactNode;
}

export default function StaticGrid({ children }: StaticGridProps) {
  return <BaseGrid>{children}</BaseGrid>;
}