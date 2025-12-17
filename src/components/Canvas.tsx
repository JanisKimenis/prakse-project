import {useEffect, useRef, useState,useCallback, MouseEvent as ReactMouseEvent, use} from 'react';
import {Canvas as FabricCanvas, Circle, Rect, Line, Triangle, TPointerEventInfo} from 'fabric';
import { ColorPick } from './colorPick';
import { Toolbar, Tool } from './toolbar';

type TPointerEvent = MouseEvent | TouchEvent;

export const Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);
    const [selectedTool, setSelectedTool] = useState<Tool>('select');
    const [selectedColor, setSelectedColor] = useState<string>('black');
    const [history, setHistory] = useState<string[]>([]);
    const isDrawing = useRef(false);
    const startPoint = useRef<{ x: number; y: number } | null>(null);
    const currentShape = useRef<Rect | Circle | Triangle | Line | null>(null);

    useEffect(() => {
        if (!canvasRef.current || !containerRef.current) return;

        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        const canvas = new FabricCanvas(canvasRef.current, {
            width,
            height,
            backgroundColor: 'white',
            isDrawingMode: false,
        });

        setFabricCanvas(canvas);
        saveState(canvas);

        const handleResize = () => {
            const newWidth = container.clientWidth;
            const newHeight = container.clientHeight;
            canvas.setDimensions({ width: newWidth, height: newHeight });
            canvas.renderAll();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.dispose();
        }
    }, []);

    const saveState = useCallback((canvas: FabricCanvas) => {
        const json = JSON.stringify(canvas.toJSON());
        setHistory((prev) => [...prev.slice(-19), json]);
    }, []);

    useEffect(() => {
        if (!fabricCanvas) return;

        fabricCanvas.isDrawingMode = false;
        fabricCanvas.selection = selectedTool === 'select';
    }, [selectedTool, fabricCanvas]);


    // zīmēšanas loģika
    useEffect(() => {
        if (!fabricCanvas) return;

        const handleMouseDown = (opt: TPointerEventInfo<TPointerEvent>) => {
            if(!['rectangle', 'circle', 'triangle', 'line'].includes(selectedTool)) return;

            isDrawing.current = true;
            const pointer = fabricCanvas.getPointer(opt.e);
            startPoint.current = { x: pointer.x, y: pointer.y };

            if (selectedTool === 'rectangle') {
                const rect = new Rect({
                    left: pointer.x,
                    top: pointer.y,
                    width: 0,
                    height: 0,
                    fill: 'transparent',
                    stroke: selectedColor,
                    strokeWidth: 2,
                });
                fabricCanvas.add(rect);
                currentShape.current = rect;
            } else if (selectedTool === 'circle') {
                const circle = new Circle({
                    left: pointer.x,
                    top: pointer.y,
                    radius: 0,
                    fill: 'transparent',
                    stroke: selectedColor,
                    strokeWidth: 2,
                });
                fabricCanvas.add(circle);
                currentShape.current = circle;
            } else if (selectedTool === 'triangle') {
                const triangle = new Triangle({
                    left: pointer.x,
                    top: pointer.y,
                    width: 0,
                    height: 0,
                    fill: 'transparent',
                    stroke: selectedColor,
                    strokeWidth: 2,
                });
                fabricCanvas.add(triangle);
                currentShape.current = triangle;
            } else if (selectedTool === 'line') {
                const line = new Line([pointer.x, pointer.y, pointer.x, pointer.y], {
                    stroke: selectedColor,
                    strokeWidth: 2,
                });
                fabricCanvas.add(line);
                currentShape.current = line;
            }
        };
        
        const handleMouseMove = (opt: TPointerEventInfo<TPointerEvent>) => {
            if (!isDrawing.current || !currentShape.current) return;

            const pointer = fabricCanvas.getPointer(opt.e);
            const {x:startX, y:startY} = startPoint.current!;
            
            if (selectedTool === 'rectangle'){
                const rect = currentShape.current as Rect;
                const width = Math.abs(pointer.x - startX);
                const height = Math.abs(pointer.y - startY);
                rect.set({
                    width,
                    height,
                    left: Math.min(pointer.x, startX),
                    top: Math.min(pointer.y, startY),
                });
            } else if (selectedTool === 'circle'){
                const circle = currentShape.current as Circle;
                const radius = Math.sqrt(Math.pow(pointer.x - startX, 2) + Math.pow(pointer.y - startY, 2)) / 2;
                circle.set({
                    radius,
                    left: startX - radius,
                    top: startY - radius,
                });
            } else if (selectedTool === 'triangle'){
                const triangle = currentShape.current as Triangle;
                const width = Math.abs(pointer.x - startX);
                const height = Math.abs(pointer.y - startY);
                triangle.set({
                    width,
                    height,
                    left: Math.min(pointer.x, startX),
                    top: Math.min(pointer.y, startY),
                });
            } else if (selectedTool === 'line'){
                const line = currentShape.current as Line;
                line.set({
                    x2: pointer.x,
                    y2: pointer.y,
                });
            }
            fabricCanvas.renderAll();
        };

        const handleMouseUp = () => {
            if (isDrawing.current && currentShape.current) {
                saveState(fabricCanvas);
            }
            isDrawing.current = false;
            currentShape.current = null;
        };
        
        fabricCanvas.on('mouse:down', handleMouseDown);
        fabricCanvas.on('mouse:move', handleMouseMove);
        fabricCanvas.on('mouse:up', handleMouseUp);
        return () => {
            fabricCanvas.off('mouse:down', handleMouseDown);
            fabricCanvas.off('mouse:move', handleMouseMove);
            fabricCanvas.off('mouse:up', handleMouseUp);
        };
    }, [fabricCanvas, selectedTool, selectedColor, saveState]);

    const handleClear = () => {
        if (!fabricCanvas) return;
        fabricCanvas.clear();
        fabricCanvas.backgroundColor = 'white';
        fabricCanvas.renderAll();
        saveState(fabricCanvas);
    };

    const handleUndo = () => {
        if (!fabricCanvas || history.length <= 1) return;

        const newHistory = [...history];
        newHistory.pop();
        const prevState = newHistory[newHistory.length - 1];

        if (prevState) {
            fabricCanvas.loadFromJSON(prevState, () => {
                fabricCanvas.renderAll();
                setHistory(newHistory);
            });
        }
    };

    const handleDownload = () => {
        if (!fabricCanvas) return;
        const dataURL = fabricCanvas.toDataURL({
            format: 'png',
            quality: 1,
            multiplier: 2,
        });
        const link = document.createElement('a');
        link.download = 'canvas.png';
        link.href = dataURL;
        link.click();
    };

    return (
        <div ref={containerRef} className="w-full h-full relative">
            <div className="absolute top-4 left-4 z-10">
                <Toolbar
                    selectedTool={selectedTool}
                    onSelectTool={setSelectedTool}
                    onClearCanvas={handleClear}
                    onUndo={handleUndo}
                    onDownload={handleDownload}
                />
            </div>
            <div className="absolute top-4 right-4 z-10">
                <ColorPick color={selectedColor} colorChange={setSelectedColor} />
            </div>
            <canvas ref={canvasRef} className="border border-black" />
        </div>
    );
}
    


