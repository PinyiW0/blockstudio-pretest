<script lang="ts" setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const container = ref<HTMLElement | null>(null);

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let frameId: number;

onMounted(async () => {
  await nextTick();

  // 建立場景、相機、Renderer
  scene = new THREE.Scene();
  scene.background = null;

  const width = container.value!.clientWidth;
  const height = container.value!.clientHeight;

  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 0, 5);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 0);
  // 色彩空間屬性
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  container.value!.appendChild(renderer.domElement);

  // OrbitControls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 2;
  controls.enablePan = false;
  controls.minDistance = 1;
  controls.maxDistance = 10;

  // 3. 光源
  scene.add(new THREE.AmbientLight(0xffffff, 1.0));

  // 4. 載入貼圖並建立平面
  const loader = new THREE.TextureLoader();
  loader.load(
    '/models/unicorn.png',
    (tex) => {
      // r152+ 的色彩空間屬性
      tex.colorSpace = THREE.SRGBColorSpace;

      // 不重複
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;

      // 取得圖的寬高比例
      const image = tex.image as HTMLImageElement;
      const aspect = image.width / image.height;

      // 設定平面大小
      const planeHeight = 3;
      const planeWidth = planeHeight * aspect;

      const geo = new THREE.PlaneGeometry(planeWidth, planeHeight);
      const mat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        side: THREE.DoubleSide,
      });

      const plane = new THREE.Mesh(geo, mat);
      scene.add(plane);
    },
    undefined,
    (err) => {
      console.error('貼圖載入失敗：', err)
    }
  );

  // 處理視窗大小變動
  const onResize = () => {
    if (!container.value) return;
    const w = container.value.clientWidth;
    const h = container.value.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };

  window.addEventListener('resize', onResize);

  // 動畫迴圈
  const animate = () => {
    controls.update();
    renderer.render(scene, camera);
    frameId = requestAnimationFrame(animate);
  };
  animate();
});

onUnmounted(() => {
  cancelAnimationFrame(frameId);
  renderer.dispose();
  window.removeEventListener('resize', () => { });
});
</script>

<template>
  <ClientOnly>
    <div ref="container" class="w-full h-80" />
  </ClientOnly>
</template>

<style scoped>
div[ref="container"] {
  position: relative;
}
</style>