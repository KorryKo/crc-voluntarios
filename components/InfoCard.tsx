import { ReactNode } from "react";

interface InfoCardProps {
  children: ReactNode;
  className?: string;
}

export default function InfoCard({ children, className = "" }: InfoCardProps) {
  return (
    <div
      className={`mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-md ring-1 ring-black/5 ${className}`}
    >
      {children}
    </div>
  );
}
