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
				<div id="arrowProp" className="prop" style={{display: "none", gridTemplateRows: "32px 8px 32px 8px 32px 8px 32px"}}>
					<label style={{width: "72px", gridRow: "1"}}>Start X:</label>
					<input type="number" id="startX" style={{width: "72px", gridRow: "1"}} />
					<label style={{width: "72px", gridRow: "1"}}>Start Y:</label>
					<input type="number" id="startY" style={{width: "72px", gridRow: "1"}} />
					<hr />
					<label style={{width: "72px", gridRow: "3"}}>End X:</label>
					<input type="number" id="endX" style={{width: "72px", gridRow: "3"}} />
					<label style={{width: "72px", gridRow: "3"}}>End Y:</label>
					<input type="number" id="endY" style={{width: "72px", gridRow: "3"}} />
					<hr />
					<label style={{width: "72px", gridRow: "5"}}>Color:</label>
					<input type="color" id="arrowColor" style={{width: "72px", gridRow: "5"}} />
					<label style={{width: "72px", gridRow: "5"}}>Width:</label>
					<input type="number" id="arrowWidth" style={{width: "72px", gridRow: "5"}} />
					<hr />
					<button id="applyArrow" style={{width: "72px", gridRow: "7"}}>Apply</button>
				</div>
				<div id="squareProp" className="prop" style={{display: "none", gridTemplateRows: "32px 8px 32px 8px 32px 8px 32px 8px 32px"}}>
					<label style={{width: "72px", gridRow: "1"}}>X:</label>
					<input type="number" id="squareCoordinateX" style={{width: "72px", gridRow: "1"}} />
					<label style={{width: "72px", gridRow: "1"}}>Y:</label>
					<input type="number" id="squareCoordinateY" style={{width: "72px", gridRow: "1"}} />
					<hr />
					<label style={{width: "72px", gridRow: "3"}}>Width:</label>
					<input type="number" id="squareWidth" style={{width: "72px", gridRow: "3"}} />
					<label style={{width: "72px", gridRow: "3"}}>Heigth:</label>
					<input type="number" id="squareHeight" style={{width: "72px", gridRow: "3"}} />
					<hr />
					<label style={{width: "72px", gridRow: "5"}}>Line color:</label>
					<input type="color" id="squareLineColor" style={{width: "72px", gridRow: "5"}} />
					<label style={{width: "72px", gridRow: "5"}}>Line width:</label>
					<input type="number" id="squareLineWidth" style={{width: "72px", gridRow: "5"}} />
					<hr />
					<label style={{width: "72px", gridRow: "7"}}>Fill color:</label>
					<input type="color" id="squareFillColor" style={{width: "72px", gridRow: "7"}} />
					<label style={{width: "72px", gridRow: "7"}}>Transparency</label>
					<input type="number" id="squareFillTransparency" min="0" max="100" style={{width: "72px", gridRow: "7"}} />
					<hr />
					<button id="applySquare" style={{width: "72px", gridRow: "9"}}>Apply</button>
				</div>
				<div id="triangleProp" className="prop" style={{display: "none", gridTemplateRows: "32px 8px 32px 8px 32px 8px 32px 8px 32px"}}>
					<label style={{width: "72px", gridRow: "1"}}>X:</label>
					<input type="number" id="triangleCoordinateX" style={{width: "72px", gridRow: "1"}} />
					<label style={{width: "72px", gridRow: "1"}}>Y:</label>
					<input type="number" id="triangleCoordinateY" style={{width: "72px", gridRow: "1"}} />
					<hr />
					<label style={{width: "72px", gridRow: "3"}}>Width:</label>
					<input type="number" id="triangleWidth" style={{width: "72px", gridRow: "3"}} />
					<label style={{width: "72px", gridRow: "3"}}>Heigth:</label>
					<input type="number" id="triangleHeight" style={{width: "72px", gridRow: "3"}} />
					<hr />
					<label style={{width: "72px", gridRow: "5"}}>Line color:</label>
					<input type="color" id="triangleLineColor" style={{width: "72px", gridRow: "5"}} />
					<label style={{width: "72px", gridRow: "5"}}>Line width:</label>
					<input type="number" id="triangleLineWidth" style={{width: "72px", gridRow: "5"}} />
					<hr />
					<label style={{width: "72px", gridRow: "7"}}>Fill color:</label>
					<input type="color" id="triangleFillColor" style={{width: "72px", gridRow: "7"}} />
					<label style={{width: "72px", gridRow: "7"}}>Transparency</label>
					<input type="number" id="triangleFillTransparency" min="0" max="100" style={{width: "72px", gridRow: "7"}} />
					<hr />
					<button id="applyTriangle" style={{width: "72px", gridRow: "9"}}>Apply</button>
				</div>
				<div id="pentagonProp" className="prop" style={{display: "none", gridTemplateRows: "32px 8px 32px 8px 32px 8px 32px 8px 32px"}}>
					<label style={{width: "72px", gridRow: "1"}}>X:</label>
					<input type="number" id="pentagonCoordinateX" style={{width: "72px", gridRow: "1"}} />
					<label style={{width: "72px", gridRow: "1"}}>Y:</label>
					<input type="number" id="pentagonCoordinateY" style={{width: "72px", gridRow: "1"}} />
					<hr />
					<label style={{width: "72px", gridRow: "3"}}>Width:</label>
					<input type="number" id="pentagonWidth" style={{width: "72px", gridRow: "3"}} />
					<label style={{width: "72px", gridRow: "3"}}>Heigth:</label>
					<input type="number" id="pentagonHeight" style={{width: "72px", gridRow: "3"}} />
					<hr />
					<label style={{width: "72px", gridRow: "5"}}>Line color:</label>
					<input type="color" id="pentagonLineColor" style={{width: "72px", gridRow: "5"}} />
					<label style={{width: "72px", gridRow: "5"}}>Line width:</label>
					<input type="number" id="pentagonLineWidth" style={{width: "72px", gridRow: "5"}} />
					<hr />
					<label style={{width: "72px", gridRow: "7"}}>Fill color:</label>
					<input type="color" id="pentagonFillColor" style={{width: "72px", gridRow: "7"}} />
					<label style={{width: "72px", gridRow: "7"}}>Transparency</label>
					<input type="number" id="pentagonFillTransparency" min="0" max="100" style={{width: "72px", gridRow: "7"}} />
					<hr />
					<button id="applyPentagon" style={{width: "72px", gridRow: "9"}}>Apply</button>
				</div>
				<div id="hexagonProp" className="prop" style={{display: "none", gridTemplateRows: "32px 8px 32px 8px 32px 8px 32px 8px 32px"}}>
					<label style={{width: "72px", gridRow: "1"}}>X:</label>
					<input type="number" id="hexagonCoordinateX" style={{width: "72px", gridRow: "1"}} />
					<label style={{width: "72px", gridRow: "1"}}>Y:</label>
					<input type="number" id="hexagonCoordinateY" style={{width: "72px", gridRow: "1"}} />
					<hr />
					<label style={{width: "72px", gridRow: "3"}}>Width:</label>
					<input type="number" id="hexagonWidth" style={{width: "72px", gridRow: "3"}} />
					<label style={{width: "72px", gridRow: "3"}}>Heigth:</label>
					<input type="number" id="hexagonHeight" style={{width: "72px", gridRow: "3"}} />
					<hr />
					<label style={{width: "72px", gridRow: "5"}}>Line color:</label>
					<input type="color" id="hexagonLineColor" style={{width: "72px", gridRow: "5"}} />
					<label style={{width: "72px", gridRow: "5"}}>Line width:</label>
					<input type="number" id="hexagonLineWidth" style={{width: "72px", gridRow: "5"}} />
					<hr />
					<label style={{width: "72px", gridRow: "7"}}>Fill color:</label>
					<input type="color" id="hexagonFillColor" style={{width: "72px", gridRow: "7"}} />
					<label style={{width: "72px", gridRow: "7"}}>Transparency</label>
					<input type="number" id="hexagonFillTransparency" min="0" max="100" style={{width: "72px", gridRow: "7"}} />
					<hr />
					<button id="applyHexagon" style={{width: "72px", gridRow: "9"}}>Apply</button>
				</div>
				<div id="circleProp" className="prop" style={{display: "none", gridTemplateRows: "32px 8px 32px 8px 32px 8px 32px 8px 32px"}}>
					<label style={{width: "72px", gridRow: "1"}}>X:</label>
					<input type="number" id="circleCoordinateX" style={{width: "72px", gridRow: "1"}} />
					<label style={{width: "72px", gridRow: "1"}}>Y:</label>
					<input type="number" id="circleCoordinateY" style={{width: "72px", gridRow: "1"}} />
					<hr />
					<label style={{width: "72px", gridRow: "3"}}>Width:</label>
					<input type="number" id="circleWidth" style={{width: "72px", gridRow: "3"}} />
					<label style={{width: "72px", gridRow: "3"}}>Heigth:</label>
					<input type="number" id="circleHeight" style={{width: "72px", gridRow: "3"}} />
					<hr />
					<label style={{width: "72px", gridRow: "5"}}>Line color:</label>
					<input type="color" id="circleLineColor" style={{width: "72px", gridRow: "5"}} />
					<label style={{width: "72px", gridRow: "5"}}>Line width:</label>
					<input type="number" id="circleLineWidth" style={{width: "72px", gridRow: "5"}} />
					<hr />
					<label style={{width: "72px", gridRow: "7"}}>Fill color:</label>
					<input type="color" id="circleFillColor" style={{width: "72px", gridRow: "7"}} />
					<label style={{width: "72px", gridRow: "7"}}>Transparency</label>
					<input type="number" id="circleFillTransparency" min="0" max="100" style={{width: "72px", gridRow: "7"}} />
					<hr />
					<button id="applyCircle" style={{width: "72px", gridRow: "9"}}>Apply</button>
				</div>
			</div>
		</div>
	)
}