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
					<input type="number" id="startX" />
					<label>Start Y:</label>
					<input type="number" id="startY" />
					<hr />
					<label>End X:</label>
					<input type="number" id="endX" />
					<label>End Y:</label>
					<input type="number" id="endY" />
					<hr />
					<label>Color:</label>
					<input type="color" id="arrowColor" />
					<label>Width:</label>
					<input type="number" id="arrowWidth" />
					<hr />
					<button id="applyArrow">Apply</button>
				</div>
				<div id="squareProp" className="prop" style={{display: "none"}}>
					<label>X:</label>
					<input type="number" id="squareCoordinateX" />
					<label>Y:</label>
					<input type="number" id="squareCoordinateY" />
					<hr />
					<label>Width:</label>
					<input type="number" id="squareWidth" />
					<label>Heigth:</label>
					<input type="number" id="squareHeight" />
					<hr />
					<label>Line color:</label>
					<input type="color" id="squareLineColor" />
					<label>Line width:</label>
					<input type="number" id="squareLineWidth" />
					<hr />
					<label>Fill color:</label>
					<input type="color" id="squareFillColor" />
					<label>Transparency</label>
					<input type="number" id="squareFillTransparency" min="0" max="100" />
					<hr />
					<button id="applySquare">Apply</button>
				</div>
				<div id="triangleProp" className="prop" style={{display: "none"}}>
					<label>X:</label>
					<input type="number" id="triangleCoordinateX" />
					<label>Y:</label>
					<input type="number" id="triangleCoordinateY" />
					<hr />
					<label>Width:</label>
					<input type="number" id="triangleWidth" />
					<label>Heigth:</label>
					<input type="number" id="triangleHeight" />
					<hr />
					<label>Line color:</label>
					<input type="color" id="triangleLineColor" />
					<label>Line width:</label>
					<input type="number" id="triangleLineWidth" />
					<hr />
					<label>Fill color:</label>
					<input type="color" id="triangleFillColor" />
					<label>Transparency</label>
					<input type="number" id="triangleFillTransparency" min="0" max="100" />
					<hr />
					<button id="applyTriangle">Apply</button>
				</div>
				<div id="pentagonProp" className="prop" style={{display: "none"}}>
					<label>X:</label>
					<input type="number" id="pentagonCoordinateX" />
					<label>Y:</label>
					<input type="number" id="pentagonCoordinateY" />
					<hr />
					<label>Width:</label>
					<input type="number" id="pentagonWidth" />
					<label>Heigth:</label>
					<input type="number" id="pentagonHeight" />
					<hr />
					<label>Line color:</label>
					<input type="color" id="pentagonLineColor" />
					<label>Line width:</label>
					<input type="number" id="pentagonLineWidth" />
					<hr />
					<label>Fill color:</label>
					<input type="color" id="pentagonFillColor" />
					<label>Transparency</label>
					<input type="number" id="pentagonFillTransparency" min="0" max="100" />
					<hr />
					<button id="applyPentagon">Apply</button>
				</div>
				<div id="hexagonProp" className="prop" style={{display: "none"}}>
					<label>X:</label>
					<input type="number" id="hexagonCoordinateX" />
					<label>Y:</label>
					<input type="number" id="hexagonCoordinateY" />
					<hr />
					<label>Width:</label>
					<input type="number" id="hexagonWidth" />
					<label>Heigth:</label>
					<input type="number" id="hexagonHeight" />
					<hr />
					<label>Line color:</label>
					<input type="color" id="hexagonLineColor" />
					<label>Line width:</label>
					<input type="number" id="hexagonLineWidth" />
					<hr />
					<label>Fill color:</label>
					<input type="color" id="hexagonFillColor" />
					<label>Transparency</label>
					<input type="number" id="hexagonFillTransparency" min="0" max="100" />
					<hr />
					<button id="applyHexagon">Apply</button>
				</div>
				<div id="circleProp" className="prop" style={{display: "none"}}>
					<label>X:</label>
					<input type="number" id="circleCoordinateX" />
					<label>Y:</label>
					<input type="number" id="circleCoordinateY" />
					<hr />
					<label>Width:</label>
					<input type="number" id="circleWidth" />
					<label>Heigth:</label>
					<input type="number" id="circleHeight" />
					<hr />
					<label>Line color:</label>
					<input type="color" id="circleLineColor" />
					<label>Line width:</label>
					<input type="number" id="circleLineWidth" />
					<hr />
					<label>Fill color:</label>
					<input type="color" id="circleFillColor" />
					<label>Transparency</label>
					<input type="number" id="circleFillTransparency" min="0" max="100" />
					<hr />
					<button id="applyCircle">Apply</button>
				</div>
			</div>
		</div>
	)
}