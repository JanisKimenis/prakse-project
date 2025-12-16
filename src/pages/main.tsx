import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Reductor() {

  	/* parmaina no gaisa uz tumsu ekranu */
  	useEffect(() => {
  	const tools = [
    	{ btn: "arrowButton", prop: "arrowProp" },
    	{ btn: "squareButton", prop: "squareProp" },
    	{ btn: "treangleButton", prop: "triangleProp" },
    	{ btn: "pentagonButton", prop: "pentagonProp" },
    	{ btn: "hexagonButton", prop: "hexagonProp" },
    	{ btn: "circleButton", prop: "circleProp" },
  	];

  	tools.forEach(({ btn, prop }) => {
    	const button = document.getElementById(btn);
    	const panel = document.getElementById(prop);

    	button?.addEventListener("click", () => {
    		document.querySelectorAll(".prop").forEach(p => {
        		(p as HTMLElement).style.display = "none";
      		});
      		if (panel) {
        		panel.style.display = "block";
      		}
    	});
  	});
	}, []);

return (
    <div id="body">
		<div id="left">
        	<div id="blocks">
         	<h3>Figures</h3>
          	<table>
            <tbody>
              	<tr>
                	<td><button id="arrowButton">I</button></td>
                	<td><button id="squareButton">П</button></td>
                	<td><button id="circleButton">O</button></td>
              	</tr>
            </tbody>
            <tbody>
              	<tr>
                	<td><button id="treangleButton">^</button></td>
                	<td><button id="pentagonButton">*</button></td>
                	<td><button id="hexagonButton">Ж</button></td>
              	</tr>
            </tbody>
          	</table>
        </div>

        <div id="hierarchy">
          	<h3>Figure List</h3>
          	<ul id="list"></ul>
        </div>
      	</div>

      	<div id="center">
        	<h3>Canvas</h3>
        	<canvas id="canvas"></canvas>
      	</div>

      	<div id="right" className="p-3 space-y-3 text-sm">
  			<h3 className="font-semibold">Properties</h3>
  			<button id="themeToggle"
  				onClick={() => document.body.classList.toggle("dark")}
  				className="w-full py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700">
  				Toggle theme
			</button>
			
			<div id="arrowProp" className="prop p-2 border rounded space-y-3">
				<div className="grid grid-cols-2 gap-2">
				<div>
					<label className="text-xs">Start X</label>
					<input id="startX" type="number" className="input" />
				</div>
				<div>
					<label className="text-xs">Start Y</label>
					<input id="startY" type="number" className="input" />
				</div>
				</div>

				<div className="grid grid-cols-2 gap-2">
				<div>
					<label className="text-xs">End X</label>
					<input id="endX" type="number" className="input" />
				</div>
				<div>
					<label className="text-xs">End Y</label>
					<input id="endY" type="number" className="input" />
				</div>
				</div>

				<div className="grid grid-cols-2 gap-2">
				<div>
					<label className="text-xs">Color</label>
					<input id="arrowColor" type="color" className="h-8 w-full border rounded" />
				</div>
				<div>
					<label className="text-xs">Width</label>
					<input id="arrowWidth" type="number" className="input" />
				</div>
			</div>
			<button id="applyArrow" className="apply-btn">Apply</button>
		</div>
		{[
			["squareProp", "applySquare"],
			["triangleProp", "applyTriangle"],
			["pentagonProp", "applyPentagon"],
			["hexagonProp", "applyHexagon"],
			["circleProp", "applyCircle"],
		].map(([propId, applyId]) => (
		<div key={propId} id={propId} className="prop p-2 border rounded space-y-3">
			<div className="grid grid-cols-2 gap-2">
				<div>
					<label className="text-xs">X</label>
					<input type="number" className="input" />
				</div>
				<div>
					<label className="text-xs">Y</label>
					<input type="number" className="input" />
				</div>
			</div>

			<div className="grid grid-cols-2 gap-2">
				<div>
					<label className="text-xs">Width</label>
					<input type="number" className="input" />
				</div>
				<div>
					<label className="text-xs">Height</label>
					<input type="number" className="input" />
				</div>
			</div>

			<div className="grid grid-cols-2 gap-2">
				<div>
					<label className="text-xs">Line color</label>
					<input type="color" className="h-8 w-full border rounded" />
				</div>
				<div>
					<label className="text-xs">Line width</label>
					<input type="number" className="input" />
				</div>
			</div>
			<div>
				<label className="text-xs">Fill color</label>
				<input type="color" className="h-8 w-full border rounded" />
			</div>
				<div>
					<label className="text-xs">Transparency</label>
					<input type="number" min="0" max="100" className="input" />
				</div>
				<button id={applyId} className="apply-btn">Apply</button>
			</div>))}
		</div>
	</div>
	);
}