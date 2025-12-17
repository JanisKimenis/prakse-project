import {
    MousePointer2,
    Square,
    Circle,
    Triangle,
    Trash2,
    Undo2,
    Download,
    Minus,
} from "lucide-react";
import { ToolButton } from "./toolButton";
import { on } from "events";


export type Tool = 'select' | 'rectangle' | 'circle' | 'triangle' | 'line';

interface ToolbarProps {
    selectedTool: Tool;
    onSelectTool: (tool: Tool) => void;
    onClearCanvas: () => void;
    onUndo: () => void;
    onDownload: () => void;
}    


export const Toolbar = ({
    selectedTool,
    onSelectTool,
    onClearCanvas,
    onUndo,
    onDownload
}: ToolbarProps) => {
    const tools: { tool: Tool; icon: typeof MousePointer2; label: string }[] = [
        { tool: 'select', icon: MousePointer2, label: 'Select' },
        { tool: 'rectangle', icon: Square, label: 'Rectangle' },
        { tool: 'circle', icon: Circle, label: 'Circle' },
        { tool: 'triangle', icon: Triangle, label: 'Triangle' },
        { tool: 'line', icon: Minus, label: 'Line' },
    ];

    return (
        <div className="bg-toolbar toolbar-shadow rounded-xl p-2 flex flex-col gap-1 border border-toolbar-border">
      {tools.map(({ tool, icon, label }) => (
        <ToolButton
          key={tool}
          icon={icon}
          label={label}
          isActive={selectedTool === tool}
          onClick={() => onSelectTool(tool)}
        />
      ))}


      <ToolButton
        icon={Undo2}
        label="Undo"
        isActive={false}
        onClick={onUndo}
      />
      <ToolButton
        icon={Trash2}
        label="Clear"
        isActive={false}
        onClick={onClearCanvas}
      />
      <ToolButton
        icon={Download}
        label="Download"
        isActive={false}
        onClick={onDownload}
      />
    </div>
    )
}

