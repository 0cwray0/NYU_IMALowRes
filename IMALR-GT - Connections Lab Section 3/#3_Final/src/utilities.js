// Define the labelmap from the initial label map creation in jupyter-lab
let labelMap = {
    //The number will be converted to the actualy label...
    1:{name:'Hello', color:'yellow'},
    2:{name:'Thank You', color:'yellow'},
    3:{name:'Yes', color:'green'},
    4:{name:'No', color:'red'},
    5:{name:'I Love you', color:'red'},
    6:{name:'I Love You', color:'red'},
    7:{name:'How', color:'green'},
    8:{name:'How Are', color:'green'},
    9:{name:'You', color:'green'},
    10:{name:'Doing', color:'green'},
    11:{name:'I Am', color:'yellow'},
    12:{name:'Fine', color:'red'},
    13:{name:'Today', color:'yellow'},
    14:{name:'Is It Lunchtime', color:'yellow'},
    15:{name:'There', color:'yellow'},
}

// Define the drawing function for the canvas output
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            // *Change to inject to textbox on screen
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // Draw the onscreen graphing features in accordance with the labelmao definitions
            ctx.beginPath()
            //Rounds confidence number down to 2...
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
            ctx.stroke()
        }
    }
}