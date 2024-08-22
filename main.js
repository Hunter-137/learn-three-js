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

// // Сцена
// // добавили сцену, где будем всё показывать
// const scene = new THREE.Scene();
// const axesHelper = new THREE.AxesHelper(4); // показывает ось координат
// scene.add(axesHelper); // добавляем это на сцену

// // Объект
// const geometry = new THREE.BoxGeometry(1, 1, 1); // задали фигуру
// const material = new THREE.MeshBasicMaterial({
//   color: "purple", // задали цвет фигуре
//   wireframe: true, // вместо всей заливки указать линии чертежа
// });
// // const mesh = new THREE.Mesh(geometry, material); // объединили фигуру и цвет

// // position: x, y, z — перемещение как на оси координат
// // если 0 в центре, то + это вправо, а - это влево
// // добавления x y или z обязательно, без него не работает

// // mesh.position.x = -0.5;
// // mesh.position.y = 1;
// // mesh.position.z = -1;
// // mesh.scale.x = 1.1;
// // mesh.scale.y = 1.5;
// // mesh.scale.z = 1.1;

// // mesh.rotation.x = Math.PI * -0.25;
// // mesh.rotation.y = Math.PI * 0.25;
// // mesh.rotation.z = Math.PI * 0.5;

// // mesh.rotation.reorder("YXZ");

// // scene.add(mesh); // добавили на сцену

// const group = new THREE.Group();
// group.scale.y = 1.4;
// group.rotation.x = Math.PI * 0.25;

// const cube1 = new THREE.Mesh(geometry, material);
// cube1.position.x = -1.1;
// const cube2 = new THREE.Mesh(geometry, material);
// cube2.position.x = 0;
// const cube3 = new THREE.Mesh(geometry, material);
// cube3.position.x = 1.1;

// group.add(cube1, cube2, cube3);
// scene.add(group);

// // Камера
// const sizes = {
//   width: 600,
//   height: 600,
// };
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// camera.position.z = 5; // добавили, чтобы отодвинуть камеру от объекта
// camera.position.y = 1;
// scene.add(camera);

// // camera.lookAt(new THREE.Vector3(0, -1, 0));

// // Отрисовщик
// const canvas = document.querySelector(".canvas");
// const renderer = new THREE.WebGLRenderer({ canvas });
// renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);

// *****************************************************************************************

// Сцена
const scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(4);
scene.add(axesHelper);

// Объект
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "white",
  wireframe: true,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Камера
const sizes = {
  width: 600,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Отрисовщик
const canvas = document.querySelector(".canvas");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// Ванильная анимация фреймов
// let time = Date.now();

// const tick = () => {
//   // console.log(tick);

//   const currentTime = Date.now();
//   const delta = currentTime - time;
//   time = currentTime;

//   // mesh.rotation.y += 0.1 * delta;
//   // mesh.rotation.x += 0.1 * delta;
//   mesh.rotation.z += 0.1 * delta;
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(tick);
// };

// tick();

// Анимация фрейма через three.js
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  // mesh.rotation.z = elapsedTime * 50;

  // mesh.position.x = Math.cos(elapsedTime);
  // mesh.position.y = Math.sin(elapsedTime);
  console.log(elapsedTime);

  camera.position.x = Math.cos(elapsedTime);
  camera.position.y = Math.sin(elapsedTime);
  camera.position.z = Math.sin(elapsedTime - 1);

  camera.lookAt(mesh.position);
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
