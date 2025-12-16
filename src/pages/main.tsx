import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Reductor(){
	return(
		<div id="body" style={{display: "grid", gridTemplateColumns: "320px 1fr 320px"}}>
			<div id="left" style={{gridColumn: "1", display: "grid", gridTemplateRows: "1fr 1fr", borderStyle: "solid", borderColor: "black", borderWidth: "2px"}}>
				<div id="blocks" style={{gridRow: "1", borderBottomStyle: "solid", borderColor: "black", borderWidth: "1px"}}>
					<h3>Figures</h3>
					<table>
						<tbody>
							<tr>
								<td>
									<button id="arrowButton">
										I {/* `Seit j`ab`ut att`els ar fig`uru */}
									</button>
								</td>
								<td>
									<button id="squareButton">
										П {/* `Seit j`ab`ut att`els ar fig`uru */}
									</button>
								</td>
								<td>
									<button id="circleButton">
										O {/* `Seit j`ab`ut att`els ar fig`uru */}
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<button id="triangleButton">
										^ {/* `Seit j`ab`ut att`els ar fig`uru */}
									</button>
								</td>
								<td>
									<button id="pentagonButton">
										* {/* `Seit j`ab`ut att`els ar fig`uru */}
									</button>
								</td>
								<td>
									<button id="hexagonButton">
										Ж {/* `Seit j`ab`ut att`els ar fig`uru */}
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div id="hierarchy" style={{gridRow: "2", borderTopStyle: "solid", borderColor: "black", borderWidth: "1px"}}>
					<h3>Figure List</h3>
					<ul id="list" style={{listStyleType: "none"}}>

					</ul>
				</div>
			</div>
			<div id="center" style={{gridColumn: "2", borderStyle: "solid", borderColor: "black", borderWidth: "2px"}}>
				<h3>Canvas</h3>
				<canvas id="canvas">

				</canvas>
			</div>
			<div id="right" style={{gridColumn: "3", borderStyle: "solid", borderColor: "black", borderWidth: "2px"}}>
				<h3>Properties</h3>
				<div id="arrowProp" className="prop" style={{display: "none"}}>
					<label>Start X:</label>
					<input type="number" id="startX">
					<label>Start Y:</label>
					<input type="number" id="startY">
					<hr>
					<label>End X:</label>
					<input type="number" id="endX">
					<label>End Y:</label>
					<input type="number" id="endY">
					<hr>
					<label>Color:</label>
					<input type="color" id="lineColor">
					<label>Width:</label>
					<input type="number" id="lineWidth">
					<hr>
					<button>Apply</button>
				</div>
				<div id="squareProp" className="prop" style={{display: "none"}}>
					<label>X:</label>
					<input type="number" id="coordinateX">
					<label>Y:</label>
					<input type="number" id="coordinateY">
					<hr>
					<label>Width:</label>
					<input type="number" id="figureWidth">
					<label>Heigth:</label>
					<input type="number" id="figureHeight">
					<hr>
					<label>Line color:</label>
					<input type="color" id="lineColor">
					<label>Line width:</label>
					<input type="number" id="lineWidth">
					<hr>
					<label>Fill color:</label>
					<input type="color" id="fillColor">
					<label>Transparency</label>
					<input type="number" id="fillTransparency" min="0" max="100">
					<hr>
					<button>Apply</button>
				</div>
				<div id="triangleProp" className="prop" style={{display: "none"}}>
					<label>X:</label>
					<input type="number" id="coordinateX">
					<label>Y:</label>
					<input type="number" id="coordinateY">
					<hr>
					<label>Width:</label>
					<input type="number" id="figureWidth">
					<label>Heigth:</label>
					<input type="number" id="figureHeight">
					<hr>
					<label>Line color:</label>
					<input type="color" id="lineColor">
					<label>Line width:</label>
					<input type="number" id="lineWidth">
					<hr>
					<label>Fill color:</label>
					<input type="color" id="fillColor">
					<label>Transparency</label>
					<input type="number" id="fillTransparency" min="0" max="100">
					<hr>
					<button>Apply</button>
				</div>
				<div id="pentagonProp" className="prop" style={{display: "none"}}>
					<label>X:</label>
					<input type="number" id="coordinateX">
					<label>Y:</label>
					<input type="number" id="coordinateY">
					<hr>
					<label>Width:</label>
					<input type="number" id="figureWidth">
					<label>Heigth:</label>
					<input type="number" id="figureHeight">
					<hr>
					<label>Line color:</label>
					<input type="color" id="lineColor">
					<label>Line width:</label>
					<input type="number" id="lineWidth">
					<hr>
					<label>Fill color:</label>
					<input type="color" id="fillColor">
					<label>Transparency</label>
					<input type="number" id="fillTransparency" min="0" max="100">
					<hr>
					<button>Apply</button>
				</div>
				<div id="hexagonProp" className="prop" style={{display: "none"}}>
					<label>X:</label>
					<input type="number" id="coordinateX">
					<label>Y:</label>
					<input type="number" id="coordinateY">
					<hr>
					<label>Width:</label>
					<input type="number" id="figureWidth">
					<label>Heigth:</label>
					<input type="number" id="figureHeight">
					<hr>
					<label>Line color:</label>
					<input type="color" id="lineColor">
					<label>Line width:</label>
					<input type="number" id="lineWidth">
					<hr>
					<label>Fill color:</label>
					<input type="color" id="fillColor">
					<label>Transparency</label>
					<input type="number" id="fillTransparency" min="0" max="100">
					<hr>
					<button>Apply</button>
				</div>
				<div id="circleProp" className="prop" style={{display: "none"}}>
					<label>X:</label>
					<input type="number" id="coordinateX">
					<label>Y:</label>
					<input type="number" id="coordinateY">
					<hr>
					<label>Width:</label>
					<input type="number" id="figureWidth">
					<label>Heigth:</label>
					<input type="number" id="figureHeight">
					<hr>
					<label>Line color:</label>
					<input type="color" id="lineColor">
					<label>Line width:</label>
					<input type="number" id="lineWidth">
					<hr>
					<label>Fill color:</label>
					<input type="color" id="fillColor">
					<label>Transparency</label>
					<input type="number" id="fillTransparency" min="0" max="100">
					<hr>
					<button>Apply</button>
				</div>
			</div>
		</div>
	)
}