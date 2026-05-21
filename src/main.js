import './styles.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createIcons, Orbit, RotateCcw } from 'lucide';

const sectionData = [
  {
    id: 'hull',
    name: 'Kadłub',
    label: 'Kadłub i burty',
    color: '#0f766e',
    camera: { position: [8.8, 4.6, 9.2], target: [0, -0.32, 0] },
    description: 'Preparaty do mycia powierzchni zewnętrznych, usuwania osadów solnych, rdzy nalotowej i zabrudzeń portowych.',
    chemistry: ['alkaliczne środki myjące', 'odrdzewiacze powierzchniowe', 'preparaty do usuwania soli', 'powłoki ochronne i pasywujące']
  },
  {
    id: 'deck',
    name: 'Pokład',
    label: 'Pokład roboczy',
    color: '#f59e0b',
    camera: { position: [6.6, 7.4, 7.2], target: [0.2, 0.3, 0] },
    description: 'Chemia do codziennego utrzymania pokładu, osprzętu, relingów i powierzchni narażonych na słoną wodę.',
    chemistry: ['odtłuszczacze techniczne', 'neutralne detergenty pokładowe', 'środki antypoślizgowe', 'koncentraty do myjek ciśnieniowych']
  },
  {
    id: 'cargo',
    name: 'Ładownia',
    label: 'Ładownia i zbiorniki',
    color: '#2563eb',
    camera: { position: [8.2, 5.8, 5.4], target: [-0.8, 0.28, 0] },
    description: 'Produkty do czyszczenia ładowni, zbiorników i przestrzeni transportowych po różnych typach ładunków.',
    chemistry: ['cleanery do zbiorników', 'emulgatory olejowe', 'środki do usuwania osadów organicznych', 'neutralizatory zapachu']
  },
  {
    id: 'engine',
    name: 'Maszynownia',
    label: 'Maszynownia',
    color: '#dc2626',
    camera: { position: [-6.7, 4.9, 7.0], target: [-1.9, -0.08, 0] },
    description: 'Rozwiązania do czyszczenia silników, wymienników, części metalowych, bilge area i instalacji pomocniczych.',
    chemistry: ['degreasery przemysłowe', 'środki do mycia części', 'odkamieniacze do układów', 'separatory oleju i bilge cleaners']
  },
  {
    id: 'bridge',
    name: 'Nadbudówka',
    label: 'Nadbudówka i mostek',
    color: '#7c3aed',
    camera: { position: [4.6, 6.4, 8.6], target: [1.45, 1.42, 0] },
    description: 'Łagodne produkty do szkła, tworzyw, powierzchni lakierowanych i przestrzeni załogi.',
    chemistry: ['płyny do szyb morskich', 'cleanery do tworzyw', 'neutralne środki sanitarne', 'preparaty do stali nierdzewnej']
  }
];

const canvas = document.querySelector('#shipCanvas');
const viewerRegion = document.querySelector('.viewer-region');
const hoverPopup = document.querySelector('#hoverPopup');
const selectedSection = document.querySelector('#selectedSection');
const sectionTabs = document.querySelector('#sectionTabs');
const resetButton = document.querySelector('[data-action="reset"]');
const rotateButton = document.querySelector('[data-action="toggle-rotate"]');

createIcons({ icons: { Orbit, RotateCcw } });

const scene = new THREE.Scene();
scene.background = new THREE.Color('#eef3f6');
scene.fog = new THREE.Fog('#eef3f6', 16, 34);

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  preserveDrawingBuffer: true
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
camera.position.set(7.2, 3.6, 7.4);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 5;
controls.maxDistance = 18;
controls.maxPolarAngle = Math.PI * 0.48;
controls.target.set(0, 0, 0);

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const clickableObjects = [];
const focusTarget = new THREE.Vector3(0, 0, 0);
const focusCamera = new THREE.Vector3().copy(camera.position);
let focusedId = 'hull';
let autoRotate = true;
let pointerStart = null;

const materials = new Map();
const outlineMaterials = new Map();

sectionData.forEach((section) => {
  materials.set(section.id, new THREE.MeshStandardMaterial({
    color: section.color,
    roughness: 0.52,
    metalness: 0.14,
    emissive: new THREE.Color(section.color),
    emissiveIntensity: 0.04
  }));
  outlineMaterials.set(section.id, new THREE.MeshBasicMaterial({
    color: section.color,
    transparent: true,
    opacity: 0.18,
    depthWrite: false
  }));
});

const neutralMaterial = new THREE.MeshStandardMaterial({
  color: '#6b7280',
  roughness: 0.68,
  metalness: 0.16
});

const darkMaterial = new THREE.MeshStandardMaterial({
  color: '#26323d',
  roughness: 0.48,
  metalness: 0.24
});

const glassMaterial = new THREE.MeshStandardMaterial({
  color: '#a7d8ec',
  transparent: true,
  opacity: 0.58,
  roughness: 0.05,
  metalness: 0.02
});

const waterMaterial = new THREE.MeshStandardMaterial({
  color: '#5aa5b8',
  roughness: 0.44,
  metalness: 0,
  transparent: true,
  opacity: 0.42
});

const ship = new THREE.Group();
ship.rotation.y = -0.33;
ship.scale.setScalar(0.78);
scene.add(ship);

buildLights();
buildEnvironment();
buildShip();
buildTabs();
selectSection('hull', false);

resetButton.addEventListener('click', () => selectSection(focusedId, true));
rotateButton.addEventListener('click', () => {
  autoRotate = !autoRotate;
  rotateButton.classList.toggle('is-active', autoRotate);
  rotateButton.setAttribute('aria-pressed', String(autoRotate));
});
rotateButton.classList.add('is-active');
rotateButton.setAttribute('aria-pressed', 'true');

canvas.addEventListener('pointermove', onPointerMove);
canvas.addEventListener('pointerdown', (event) => {
  pointerStart = { x: event.clientX, y: event.clientY };
  hideSectionPopup();
});
canvas.addEventListener('pointerup', onPointerUp);
canvas.addEventListener('pointerleave', hideSectionPopup);
window.addEventListener('resize', resize);

resize();
animate();

function buildLights() {
  const hemi = new THREE.HemisphereLight('#ffffff', '#7d8b94', 1.45);
  scene.add(hemi);

  const sun = new THREE.DirectionalLight('#ffffff', 2.2);
  sun.position.set(4.5, 8, 5);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 25;
  sun.shadow.camera.left = -8;
  sun.shadow.camera.right = 8;
  sun.shadow.camera.top = 8;
  sun.shadow.camera.bottom = -8;
  scene.add(sun);

  const rim = new THREE.DirectionalLight('#d6f6ff', 1.2);
  rim.position.set(-6, 4, -5);
  scene.add(rim);
}

function buildEnvironment() {
  const water = new THREE.Mesh(
    new THREE.CircleGeometry(12, 96),
    waterMaterial
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = -0.92;
  water.receiveShadow = true;
  scene.add(water);

  const grid = new THREE.GridHelper(20, 20, '#8fb8c4', '#c7d7dd');
  grid.position.y = -0.9;
  grid.material.transparent = true;
  grid.material.opacity = 0.2;
  scene.add(grid);
}

function buildShip() {
  const hullShape = new THREE.Shape();
  hullShape.moveTo(-4.7, -0.52);
  hullShape.quadraticCurveTo(-4.15, -1.05, -2.1, -1.18);
  hullShape.lineTo(2.72, -1.18);
  hullShape.quadraticCurveTo(4.5, -1.05, 5.02, -0.48);
  hullShape.lineTo(4.52, 0.32);
  hullShape.quadraticCurveTo(1.2, 0.52, -4.12, 0.32);
  hullShape.closePath();

  const hullGeometry = new THREE.ExtrudeGeometry(hullShape, {
    depth: 1.84,
    bevelEnabled: true,
    bevelThickness: 0.16,
    bevelSize: 0.18,
    bevelSegments: 4
  });
  hullGeometry.center();
  const hull = makeSectionMesh(hullGeometry, 'hull', 'Kadłub i burty');
  hull.rotation.x = Math.PI / 2;
  hull.scale.z = 1.06;
  hull.position.y = -0.27;
  ship.add(hull);

  const deck = makeSectionMesh(
    new THREE.BoxGeometry(7.6, 0.24, 1.74, 2, 1, 1),
    'deck',
    'Pokład roboczy'
  );
  deck.position.set(-0.48, 0.4, 0);
  deck.castShadow = true;
  ship.add(deck);

  const bowDeck = makeSectionMesh(
    new THREE.ConeGeometry(0.92, 1.34, 4),
    'deck',
    'Pokład dziobowy'
  );
  bowDeck.rotation.set(0, 0, Math.PI / 4);
  bowDeck.scale.set(1.3, 0.54, 0.24);
  bowDeck.position.set(3.92, 0.42, 0);
  bowDeck.castShadow = true;
  ship.add(bowDeck);

  const cargoBase = makeSectionMesh(
    new THREE.BoxGeometry(3.35, 0.62, 1.46),
    'cargo',
    'Ładownia i zbiorniki'
  );
  cargoBase.position.set(-0.82, 0.88, 0);
  cargoBase.castShadow = true;
  ship.add(cargoBase);

  [-1.86, -0.82, 0.22].forEach((x) => {
    const hatch = makeSectionMesh(
      new THREE.BoxGeometry(0.84, 0.16, 1.16),
      'cargo',
      'Pokrywy ładowni'
    );
    hatch.position.set(x, 1.28, 0);
    hatch.castShadow = true;
    ship.add(hatch);
  });

  const engineBlock = makeSectionMesh(
    new THREE.BoxGeometry(1.2, 0.82, 1.34),
    'engine',
    'Maszynownia'
  );
  engineBlock.position.set(-3.12, 0.88, 0);
  engineBlock.castShadow = true;
  ship.add(engineBlock);

  const stack = makeSectionMesh(
    new THREE.CylinderGeometry(0.23, 0.29, 0.9, 20),
    'engine',
    'Komin i wentylacja maszynowni'
  );
  stack.position.set(-3.28, 1.68, 0);
  stack.castShadow = true;
  ship.add(stack);

  const bridgeBase = makeSectionMesh(
    new THREE.BoxGeometry(1.42, 0.78, 1.28),
    'bridge',
    'Nadbudówka'
  );
  bridgeBase.position.set(1.64, 1.08, 0);
  bridgeBase.castShadow = true;
  ship.add(bridgeBase);

  const bridgeTop = makeSectionMesh(
    new THREE.BoxGeometry(1.08, 0.58, 1.02),
    'bridge',
    'Mostek'
  );
  bridgeTop.position.set(1.78, 1.74, 0);
  bridgeTop.castShadow = true;
  ship.add(bridgeTop);

  const windowBand = new THREE.Mesh(
    new THREE.BoxGeometry(1.13, 0.18, 1.06),
    glassMaterial
  );
  windowBand.position.set(1.79, 1.84, 0);
  windowBand.castShadow = true;
  ship.add(windowBand);

  const mast = new THREE.Mesh(
    new THREE.CylinderGeometry(0.035, 0.045, 1.2, 12),
    darkMaterial
  );
  mast.position.set(2.38, 2.22, 0);
  mast.castShadow = true;
  ship.add(mast);

  const boom = new THREE.Mesh(
    new THREE.BoxGeometry(0.08, 0.08, 1.7),
    darkMaterial
  );
  boom.position.set(2.38, 2.66, 0);
  boom.castShadow = true;
  ship.add(boom);

  [-2.1, -1.15, -0.2, 0.75, 3.05].forEach((x) => {
    [-0.88, 0.88].forEach((z) => {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.07, 0.06), neutralMaterial);
      rail.position.set(x, 0.68, z);
      rail.castShadow = true;
      ship.add(rail);
    });
  });

  addSectionHalo('hull', new THREE.BoxGeometry(8.7, 0.22, 2.18), [0.08, -0.78, 0], [1, 1, 1]);
  addSectionHalo('deck', new THREE.BoxGeometry(7.8, 0.08, 1.92), [-0.44, 0.62, 0], [1, 1, 1]);
  addSectionHalo('cargo', new THREE.BoxGeometry(3.6, 0.08, 1.66), [-0.82, 1.4, 0], [1, 1, 1]);
  addSectionHalo('engine', new THREE.BoxGeometry(1.48, 0.08, 1.5), [-3.16, 1.38, 0], [1, 1, 1]);
  addSectionHalo('bridge', new THREE.BoxGeometry(1.68, 0.08, 1.44), [1.72, 2.08, 0], [1, 1, 1]);
}

function makeSectionMesh(geometry, sectionId, title) {
  const mesh = new THREE.Mesh(geometry, materials.get(sectionId));
  mesh.userData.sectionId = sectionId;
  mesh.userData.title = title;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  clickableObjects.push(mesh);
  return mesh;
}

function addSectionHalo(sectionId, geometry, position, scale) {
  const halo = new THREE.Mesh(geometry, outlineMaterials.get(sectionId));
  halo.position.set(...position);
  halo.scale.set(...scale);
  halo.visible = false;
  halo.userData.isHalo = true;
  halo.userData.sectionId = sectionId;
  ship.add(halo);
}

function buildTabs() {
  sectionTabs.innerHTML = '';
  sectionData.forEach((section) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'section-tab';
    button.dataset.sectionId = section.id;
    button.innerHTML = `
      <span class="section-swatch" style="--section-color: ${section.color}"></span>
      <span>${section.label}</span>
    `;
    button.addEventListener('click', () => selectSection(section.id, true));
    sectionTabs.appendChild(button);
  });
}

function selectSection(sectionId, moveCamera = true) {
  const section = sectionData.find((item) => item.id === sectionId);
  if (!section) return;
  focusedId = section.id;

  materials.forEach((material, id) => {
    material.emissiveIntensity = id === sectionId ? 0.32 : 0.035;
    material.opacity = id === sectionId ? 1 : 0.72;
    material.transparent = id !== sectionId;
  });

  ship.children.forEach((child) => {
    if (child.userData.isHalo) {
      child.visible = child.userData.sectionId === sectionId;
    }
  });

  document.querySelectorAll('.section-tab').forEach((button) => {
    const isActive = button.dataset.sectionId === sectionId;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-current', isActive ? 'true' : 'false');
  });

  selectedSection.innerHTML = `
    <div class="section-title-row">
      <span class="large-swatch" style="--section-color: ${section.color}"></span>
      <div>
        <p class="section-kicker">Wybrana sekcja</p>
        <h2>${section.label}</h2>
      </div>
    </div>
    <p>${section.description}</p>
    <ul>
      ${section.chemistry.map((item) => `<li>${item}</li>`).join('')}
    </ul>
  `;

  if (moveCamera) {
    focusCamera.copy(getCameraPosition(section));
    focusTarget.set(...section.camera.target);
  } else {
    camera.position.copy(getCameraPosition(section));
    controls.target.set(...section.camera.target);
    focusCamera.copy(camera.position);
    focusTarget.copy(controls.target);
  }
}

function onPointerMove(event) {
  const hit = getPointerHit(event);
  canvas.classList.toggle('is-hovering-section', Boolean(hit));
  if (hit?.object?.userData.sectionId) {
    showSectionPopup(hit.object.userData.sectionId, event);
  } else {
    hideSectionPopup();
  }
}

function onPointerUp(event) {
  const dragged = pointerStart
    ? Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y) > 7
    : false;
  pointerStart = null;
  if (dragged) return;

  const hit = getPointerHit(event);
  if (hit?.object?.userData.sectionId) {
    selectSection(hit.object.userData.sectionId, true);
  }
}

function showSectionPopup(sectionId, event) {
  const section = sectionData.find((item) => item.id === sectionId);
  if (!section) return;

  hoverPopup.innerHTML = `
    <div class="popup-heading">
      <span class="section-swatch" style="--section-color: ${section.color}"></span>
      <strong>${section.label}</strong>
    </div>
    <ul>
      ${section.chemistry.map((item) => `<li>${item}</li>`).join('')}
    </ul>
  `;
  hoverPopup.classList.add('is-visible');
  hoverPopup.setAttribute('aria-hidden', 'false');
  positionPopup(event);
}

function hideSectionPopup() {
  hoverPopup.classList.remove('is-visible');
  hoverPopup.setAttribute('aria-hidden', 'true');
}

function positionPopup(event) {
  const viewerRect = viewerRegion.getBoundingClientRect();
  const popupRect = hoverPopup.getBoundingClientRect();
  const gap = 18;
  const margin = 14;

  let left = event.clientX - viewerRect.left + gap;
  let top = event.clientY - viewerRect.top + gap;

  if (left + popupRect.width > viewerRect.width - margin) {
    left = event.clientX - viewerRect.left - popupRect.width - gap;
  }

  if (top + popupRect.height > viewerRect.height - margin) {
    top = event.clientY - viewerRect.top - popupRect.height - gap;
  }

  hoverPopup.style.left = `${Math.max(margin, left)}px`;
  hoverPopup.style.top = `${Math.max(margin, top)}px`;
}

function getPointerHit(event) {
  const rect = canvas.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  return raycaster.intersectObjects(clickableObjects, false)[0];
}

function resize() {
  const { clientWidth, clientHeight } = canvas.parentElement;
  renderer.setSize(clientWidth, clientHeight, false);
  camera.aspect = clientWidth / clientHeight;
  camera.updateProjectionMatrix();

  const section = sectionData.find((item) => item.id === focusedId);
  if (section) {
    focusCamera.copy(getCameraPosition(section));
  }
}

function animate() {
  requestAnimationFrame(animate);

  camera.position.lerp(focusCamera, 0.045);
  controls.target.lerp(focusTarget, 0.045);

  if (autoRotate) {
    ship.rotation.y += 0.0024;
  }

  controls.update();
  renderer.render(scene, camera);
}

function getCameraPosition(section) {
  const position = new THREE.Vector3(...section.camera.position);
  const target = new THREE.Vector3(...section.camera.target);
  const viewportBoost = camera.aspect < 0.72 ? 1.28 : 1;
  return target.clone().add(position.sub(target).multiplyScalar(viewportBoost));
}
