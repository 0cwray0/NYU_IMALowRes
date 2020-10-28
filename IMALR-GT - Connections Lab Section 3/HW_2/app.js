let clicked_Button1; // Create event variable to hold button click event status #1
let clicked_Button2; // Create event variable to hold button click event status #2
let newFontSize;
let count = 0;
var i = 0;
var storedCountLarge = 0;
var clicks = 0;

window.addEventListener('load', function () {
    console.log('page is loaded');

    /*let button = document.getElementById('button_Smaller');
    button.addEventListener('click', function () {
        var style_Width_Decrease = wrapped-iframe.style.width;
        var style_Height_Decrease = wrapped-iframe.style.height;
        var style_Width_Decrease_New = style_Width_Decrease - "5%";
        var style_Height_Decrease_New = style_Height_Decrease - "5%";

        return wrapped-iframe.style.width(style_Width_Decrease_New);
        console.log(wrapped-iframe.style.width);
        return wrapped-iframe.style.height(style_Height_Decrease_New);

    let button = document.getElementById('button_Larger');
    button.addEventListener('click', function () {
        }) 
    })*/

    //This function creates the small button, creates/de-increments the -1 count, & selects a proper font size based on button clicks...
    let smallButton = document.getElementById("button_Smaller");
    smallButton.addEventListener("click", function () {
        clicked_Button1 = !clicked_Button1

                //Iterate upon the global count var if the this button is pressed
                count --;
                console.log(count);
                i = count;
                document.getElementById("counterStatus").innerHTML = count;

                //Check to see if font is changing on each click
                console.log(bodySize());
                console.log(h1Size());
                console.log(h2Size());
                
                //Selection statement to choose Font size change based upon number of button clicks
                if (i = 0) {
                  document.querySelector("body, h1, h2").setAttribute("style", "font-size: 26px;"); 
                  //console.log(style);
                    return (i);
                } else if (i = 1) {
                    i = i + 1;
                    document.querySelector("body, h1, h2").setAttribute("style", "font-size: 28px;"); 
                    return (i);
                } else if (i = 2) {
                    document.querySelector("body, h1, h2").setAttribute("style", "font-size: 30px;"); 
                    return (i);
                } else if (i >= 3) {
                    document.querySelector("body, h1, h2").setAttribute("style", "font-size: 32px;"); 
                    return (i);
                } 

        console.log(clicked_Button1);
        //button.onclick = ?;

    })
    
    //This function creates the large button, creates/increments the +1 count, & selects a proper font size based on button clicks...
    let bigButton = document.getElementById("button_Larger");
    bigButton.addEventListener("click", function () {
        clicked_Button2 = !clicked_Button2

        //Iterate upon the count var if the button is pressed
        count ++;
        console.log(count);
        i = count;
        document.getElementById("counterStatus").innerHTML = count;

        //Check to see if font is changing on each click
        console.log(bodySize());
        console.log(h1Size());
        console.log(h2Size());
        
        //Selection statement to choose Font size change based upon number of button clicks
        if (i = 0) {
          document.querySelector("body, h1, h2").setAttribute("style", "font-size: 28px;"); 
          //console.log(style);
            return (i);
        } else if (i = 1) {
            i = i + 1;
            document.querySelector("body, h1, h2").setAttribute("style", "font-size: 30px;"); 
            return (i);
        } else if (i = 2) {
            document.querySelector("body, h1, h2").setAttribute("style", "font-size: 32px;"); 
            return (i);
        } else if (i >= 3) {
            document.querySelector("body, h1, h2").setAttribute("style", "font-size: 34px;"); 
            return (i);
        } 

        //Redraw page to display headings?
    })

    function bodySize() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
    // https://www.youtube.com/watch?reload=9&v=2vc9AK-zgXM
    // Specs CSS id & calculates the value of the selected style
    let fontS = document.querySelector('body');
    let compStyles = window.getComputedStyle(fontS);
    // Gets "font-size" out of the specifice "body" section of the CSS
    let bodyfontValue = compStyles.getPropertyValue('font-size');
    //console.log(bodyfontValue);
    return (bodyfontValue);
    }

    function h1Size() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
        // Specs CSS id & calculates the value of the selected style
        let fontS = document.querySelector('h1');
        let compStyles = window.getComputedStyle(fontS);
        // Gets "font-size" out of the specifice "body" section of the CSS
        let h1fontValue = compStyles.getPropertyValue('font-size');
        //console.log(bodyfontValue);
        return (h1fontValue);
        }

        function h2Size() {
            // https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
            // Specs CSS id & calculates the value of the selected style
            let fontS = document.querySelector('h2');
            let compStyles = window.getComputedStyle(fontS);
            // Gets "font-size" out of the specifice "body" section of the CSS
            let h2fontValue = compStyles.getPropertyValue('font-size');
            //console.log(bodyfontValue);
            return (h2fontValue);
            }
    
            function increaseBodySize(bodyfontValue) {
                //let finalbodyfontSize = (parseFloat(bodyfontValue) + incr) % max + min;
                let finalbodyfontSize = (parseFloat(bodyfontValue));
                //let finalbodyfontSize = parseFloat
                //fontSize = document.getPropertyValue('font-size') 
                //console.log(fontSize);
                //return (fontSize) + 'px';
                return (finalbodyfontSize);
            }

})
