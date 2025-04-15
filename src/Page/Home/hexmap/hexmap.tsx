import styles from "./hexmap.module.css"
import { useEffect } from "react";
export default function HexMap() {
    useEffect(() => {
        hexmap.init();
        hexmap.create();
        hexmap.resize();
        return
    })
    return (
        <> 
            <div className={styles.HexMapWrapper}>
                <svg 
                id="HexMap" 
                xmlns="http://www.w3.org/2000/svg"
                width="1300px"
                className={styles.HexMap}
                >
                </svg>      
                <div className={styles.HexMapContentWrapper}>
                    <div className={styles.HexMapContent}>
                        <h1 className={styles.Catchphrase}>Excited for <strong>JavaScript</strong>,<br/> every day,<br/>everywhere!</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
const hexmap = {
    virtualMap: [] as { d: string, fillable: boolean, fillColor: string, registance: number, x: number, y: number, z: number}[],
    x: 0,
    y: 0,
    a: 0,
    init: function() {
        const WindowWidth: number = window.innerWidth > 1300 ? 1300 : window.innerWidth; 
        const X: number = WindowWidth>=600 ? 21 : 13;
        const Y: number = WindowWidth>=600 ? 6 : 5;
        const A: number = WindowWidth/(Math.round((3/2)*X));
        const svg: HTMLElement | null = document.getElementById("HexMap");
        if (svg===null) return;
        svg.innerHTML = "";
        svg.setAttribute("width", `${WindowWidth}`);
        svg.setAttribute("height", `${Math.sqrt(3)*A*Y+Math.sqrt(3)/2*A}`);
        this.x = X;
        this.y = Y;    
        this.virtualMap = [];
        let initX: number = 0;
        let initY: number = 0;
        for(let i=1;i<Y+1;i++) {
            for(let j=1;j<X+1;j++) {
                const hex = {
                    d: `M${initX+A/2} ${initY} L${initX} ${initY+Math.sqrt(3)*A/2} L${initX+A/2} ${initY+Math.sqrt(3)*A} L${initX+3*A/2} ${initY+Math.sqrt(3)*A} L${initX+2*A} ${initY+Math.sqrt(3)*A/2} L${initX+3*A/2} ${initY} Z`,
                    fillable: Math.random()*10+1 > 10.5  ? true : false,
                    fillColor: "lightGreen",
                    registance: Math.floor(Math.random()*10+1),
                    x: j,
                    y: i,
                    z: i*X+j,
                }
                if (j%2) {
                    this.virtualMap.push(hex);
                    initX += 3*A/2;
                    initY += Math.sqrt(3)*A/2;
                    continue;
                }
                this.virtualMap.push(hex);
                initX += 3*A/2;
                initY -= Math.sqrt(3)*A/2;
            };
            initX = 0;
            initY += Math.sqrt(3)*A/2;
        }
    },
    create: function() {
        const l: number = this.x * this.y;
        const svg: HTMLElement | null = document.getElementById("HexMap");
        if (svg === null) return;
        if (this.virtualMap.length===0) return
        if (!this.x || !this.y) return 
        for(let i=0;i<l;i++) {
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", this.virtualMap[i].d);
            path.setAttribute("stroke", "rgba(220, 220, 220, 1)");
            path.setAttribute("stroke-width", "1");
            path.setAttribute("fill", "transparent");
            if(this.virtualMap[i].fillable) {
                switch(this.virtualMap[i].fillColor) {
                    case "lightGreen": 
                        path.setAttribute("fill", "rgba(65, 126, 56, 0.1)");
                        break;
                }
            }
            svg.appendChild(path);
        };
    },
    resize: function() {
        window.addEventListener('resize',() => {
            this.init();
            this.create();
        })
    }
}