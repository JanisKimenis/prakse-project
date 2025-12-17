import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ToolButtonProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const ToolButton = ({ icon: Icon, label, isActive, onClick }: ToolButtonProps) => {
  return (
    <button
      onClick={onClick}
      title={label}
      className={cn(
        "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-150",
        "hover:bg-secondary",
        isActive && "bg-primary text-primary-foreground hover:bg-primary/90"
      )}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
};