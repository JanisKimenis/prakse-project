import { cn } from '@/lib/utils';

interface ColorPickProps {
    color: string;
    colorChange: (color: string) => void;
}

export const ColorPick = ({ color, colorChange }: ColorPickProps) => {
    return (
    <div className="p-4">
        <div className="mt-3 pt-3 border-t border-toolbar-border">
        <label className="block text-xs text-muted-foreground mb-2">Custom</label>
        <input
          type="color"
          value={color}
          onChange={(e) => colorChange(e.target.value)}
          className="w-full h-8 rounded-md cursor-pointer border-0"
        />
      </div>
    </div>
    )
}