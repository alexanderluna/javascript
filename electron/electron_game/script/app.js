var canvas;
var engine;
var scene;

document.addEventListener("DOMContentLoaded", startBabylonJS, false);

function startBabylonJS() {
  if (BABYLON.Engine.isSupported()){
    canvas = document.getElementById("renderCanvas");
    engine = new BABYLON.Engine(canvas, true);
    scene = new BABYLON.Scene(engine);

    var cam = new BABYLON.FreeCamera("freecam", new BABYLON.Vector3(0, 0, -10), scene);
    cam.attachControl(canvas);

    var cube = BABYLON.Mesh.CreateBox("cube", 2, scene);
    var light = new BABYLON.PointLight("plight", new BABYLON.Vector3(5, 10, -4), scene);


    engine.runRenderLoop(function(){
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      scene.render();
    });
  }
}
