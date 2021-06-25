// import React, { Component, useLayoutEffect, useEffect,useRef,useState } from "react";
// import ReactDOM from "react-dom";
// import * as THREE from "three"

// const Three = () => {

//     const mountRef = useRef(null);
//     const [dimensions, setDimensions] = useState({ width:0, height: 0 });

    

//     useEffect(() => {
//       const width = mountRef.current.offsetWidth;
//       const height = mountRef.current.offsetHeight;
//         var scene = new THREE.Scene();
//         scene.background = new THREE.Color();
//     var camera = new THREE.PerspectiveCamera( 100, width/height, 0.1, 100 );
//         var renderer = new THREE.WebGLRenderer();
//         renderer.setClearColor(0xbebdbd, 1);
        

//     renderer.setSize( width, height );
//     mountRef.current.appendChild( renderer.domElement );

//     var geometry = new THREE.BoxGeometry( 21, 3, 3 );
//     var material = new THREE.MeshBasicMaterial( { color: 0xfff400 } );
//     var cube = new THREE.Mesh( geometry, material );

//     scene.add( cube );
//     camera.position.z = 5;

//     var animate = function () {
//       requestAnimationFrame( animate );
//       cube.rotation.x += 0.01;
//       renderer.render( scene, camera );
//     }

//     let onWindowResize = function () {
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//       renderer.setSize( width, height );
//     }

//     window.addEventListener("resize", onWindowResize, false);

//       animate();
//       console.log("fda")
//     return () => mountRef.current.removeChild( renderer.domElement);
//   }, []);

//     return <div className="bottom-right-wrapper" ref={mountRef}></div>;
// }

// export default Three;













































// // const style = {
// //   height: 500, // we can control scene size by setting container dimensions
// // };
// // const Three = () => {
// //     const targetRef = useRef();

// //     useEffect(() => {
// //         if (targetRef.current) {


// //             var geometry = new THREE.BoxGeometry(1, 1, 1);
// //             var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// //             var cube = new THREE.Mesh(geometry, material);
// //             scene.add(cube);

// //             camera.position.z = 5;

// //             var animate = function () {
// //                 requestAnimationFrame(animate);

// //                 cube.rotation.x += 0.01;
// //                 cube.rotation.y += 0.01;

// //                 renderer.render(scene, camera);
// //             };

// //             animate();
// //         }
// //     })
// //     var scene = new THREE.Scene();
// //     var camera = new THREE.PerspectiveCamera(
// //         75,
// //         width / height,
// //         0.1,
// //        1000
// //     );

// //     var renderer = new THREE.WebGLRenderer();
// //     console.log(renderer)
// //     renderer.setSize(width, height);

// //   return (
// //     <div className="bottom-right-wrapper" ref={targetRef}>
// //       <p>{width}</p>
// //       <p>{height}</p>
// //     </div>  
// //   );
// // }

