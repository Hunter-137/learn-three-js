import * as THREE from "three";

// **************************************************************************************

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// function animate() {
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   renderer.render(scene, camera);
// }
// renderer.setAnimationLoop(animate);

// **************************************************************************************

// Сцена
// добавили сцену, где будем всё показывать
const scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(4); // показывает ось координат
scene.add(axesHelper); // добавляем это на сцену

// Объект
const geometry = new THREE.BoxGeometry(1, 1, 1); // задали фигуру
const material = new THREE.MeshBasicMaterial({
  color: "purple", // задали цвет фигуре
  wireframe: true, // вместо всей заливки указать линии чертежа
});
const mesh = new THREE.Mesh(geometry, material); // объединили фигуру и цвет

// position: x, y, z — перемещение как на оси координат
// если 0 в центре, то + это вправо, а - это влево

mesh.position.x = -0.5;
mesh.position.y = 1;
mesh.position.z = -1;
mesh.scale.x = 2;
mesh.scale.y = 3;
mesh.scale.z = 3;

scene.add(mesh); // добавили на сцену

// Камера
const sizes = {
  width: 600,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3; // добавили, чтобы отодвинуть камеру от объекта
camera.position.y = 1;
scene.add(camera);

// Отрисовщик
const canvas = document.querySelector(".canvas");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
