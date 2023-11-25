import React, { useEffect } from "react";
import * as THREE from "three";

const App = () => {
  useEffect(() => {
  
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("root").appendChild(renderer.domElement);

    const geometry1 = new THREE.BoxGeometry();
    const material1 = new THREE.MeshBasicMaterial({
      color: "red",
      wireframe: true,
    });
    const cube1 = new THREE.Mesh(geometry1, material1);
    cube1.position.x = -1.5;
    scene.add(cube1);

    const geometry2 = new THREE.BoxGeometry();
    const material2 = new THREE.MeshBasicMaterial({
      color: "white",
      wireframe: true,
    });
    const cube2 = new THREE.Mesh(geometry2, material2);
    cube2.position.x = 1.5;
    scene.add(cube2);

    const geometry3 = new THREE.BoxGeometry(); 
    const material3 = new THREE.MeshBasicMaterial({
      color: "blue",
      wireframe: true,
    });
    const skewedCube = new THREE.Mesh(geometry3, material3);
    scene.add(skewedCube);

    const animate = () => {
      requestAnimationFrame(animate);

      cube1.rotation.x += 0.01;
      cube1.rotation.y += 0.01;

      cube2.rotation.x += 0.01;
      cube2.rotation.y += 0.01;

      skewedCube.rotation.x += 0.01;
      skewedCube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div>
      <div id="root" />
    </div>
  );
};

export default App;
