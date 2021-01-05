// Import all necessary dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import './App.css';
import { nextFrame } from "@tensorflow/tfjs";

// Import drawing functionality here
import {drawRect} from "./utilities"; 

function App() {
  let webcamRef = useRef(null);
  let canvasRef = useRef(null);

  /*// Glytch integration
  let port = process.env.PORT || 3000;
  server.listen(port, ()=> {
  console.log('listening at ', port);
  });*/


  // Main function
  let runCoco = async () => {

    // This section loads up the graph model for detections
    let net = await tf.loadGraphModel('https://tensorflowrealtimejsmodelasl.s3.us-east.cloud-object-storage.appdomain.cloud/model.json')
    
    //  Detect hand movements at a rate of 16.7 to sync with refresh rates
    setInterval(() => {
      detect(net);
    }, 17.7);
  };

  let detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties (Pulled from React WebCam component...)
      let video = webcamRef.current.video;
      let videoWidth = webcamRef.current.video.videoWidth;
      let videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // The video feed from our webcam is converted to pixels 
      let img = tf.browser.fromPixels(video)

      // The internal image is resized to 640x480
      let resized = tf.image.resizeBilinear(img, [640,480])

      // Performance buff due to the model expecting an integer value for this.
      let casted = resized.cast('int32')

      // Places video into another array layer, and matches code conventions for React/TF.
      let expanded = casted.expandDims(0)

      // Processed image will be passed through "executeAsync"
      let obj = await net.executeAsync(expanded)
      console.log(obj)

      // Base definition for the output boxes
      let boxes = await obj[1].array()
      let classes = await obj[2].array()
      let scores = await obj[4].array()
      
      // Draw object detection mesh
      let ctx = canvasRef.current.getContext("2d");

      // Update drawing utility 
      // Grab through 1st detection, and pass classes over...
      requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx)}); 

      // These variables eventually disposed of in order to manage memory within the application.
      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)
    }
  };

  useEffect(()=>{runCoco()},[]);

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          muted={true} 
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            background: "https://media.giphy.com/media/5SxdtXRaHYoG0QFa7P/source.gif",
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

export default App;
