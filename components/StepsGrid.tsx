import { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface StepsGridProps {
  steps: Step[];
  columns?: number;
  numbered?: boolean;
}

export default function StepsGrid({ steps, columns, numbered = true }: StepsGridProps) {
  const colsMap: Record<number, string> = {
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
  };
  const colsClass = colsMap[columns ?? steps.length] ?? "lg:grid-cols-4";

  return (
    <div className={`mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 ${colsClass}`}>
      {steps.map((step, index) => (
        <div key={index} className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary-100">
            <step.icon className="h-7 w-7 text-secondary-600" />
          </div>
          {numbered && (
            <p className="mt-2 text-sm font-semibold text-secondary-600">
              Paso {index + 1}
            </p>
          )}
          <h3 className={`${numbered ? "mt-2" : "mt-4"} text-lg font-bold text-text-primary`}>
            {step.title}
          </h3>
          <p className="mt-2 text-sm text-text-secondary">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
