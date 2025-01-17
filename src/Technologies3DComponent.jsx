import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";
import { FontLoader } from "three/examples/jsm/Addons.js";
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { TTFLoader } from "three/examples/jsm/Addons.js";
import theFont from "./fonts/font.json";

function Technologies3DComponent() {
  const refContainer = useRef(null);

  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable alpha for transparency
    renderer.setSize(200, 200);
    renderer.setClearColor(0xffffff, 0); // Set background to white with 0 alpha (translucent)
    renderer.shadowMap.enabled = true; // Enable shadow maps

    if (refContainer.current) {
      refContainer.current.innerHTML = ''; // Clear any existing elements
      refContainer.current.appendChild(renderer.domElement);
    }

    // const texture = new THREE.TextureLoader().load("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuYdLEzBvwemix8pwsncUkLLOQqnByncadg&s");

    // var geometry = new THREE.SphereGeometry(1, 32, 32);
    // var material = new THREE.MeshStandardMaterial({ map: texture });
    // var sphere = new THREE.Mesh(geometry, material);
    // sphere.castShadow = true; // Enable casting shadows
    // scene.add(sphere);

    var planeGeometry = new THREE.PlaneGeometry(500, 500);
    var planeMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1;
    plane.receiveShadow = true; // Enable receiving shadows
    scene.add(plane);

    var light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(0, 5, 4); // Position the light directly above the sphere
    light.castShadow = false; // Enable light to cast shadows
    scene.add(light);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    camera.position.z = 2;

    // const loader = new FontLoader();

    // loader.load( {theFont}, function ( font ) {

    //   const geometry = new TextGeometry( 'Hello three.js!', {
    //     font: font,
    //     size: 80,
    //     depth: 5,
    //     curveSegments: 12,
    //     bevelEnabled: true,
    //     bevelThickness: 10,
    //     bevelSize: 8,
    //     bevelOffset: 0,
    //     bevelSegments: 5
    //   } );
    // } );

    var animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <div ref={refContainer}></div>
  );
}

export default Technologies3DComponent;