export const hexmap = {
    create: function() {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
        const x: number = 13;
        const y: number = 7;
        const a: number = 10;
        ctx.strokeStyle = "grey";
        ctx.lineWidth = 1;
        for (let i=0;i<x;i++) {
            for (let j=0;j<y;j++) {
                
            }
        }
    }
}
