<script lang="ts" setup>
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const props = defineProps<{ src: string }>();
const container = ref<HTMLElement | null>(null);

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let frameId: number;

onMounted(async () => {
  await nextTick();
  // 設定場景
  scene = new THREE.Scene();
  scene.background = null;

  // 設定相機
  const width = container.value!.clientWidth;
  const height = container.value!.clientHeight;
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 5, 10);

  // 設定Renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  container.value!.appendChild(renderer.domElement);

  // 控制器
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 2;
  controls.enablePan = false;
  controls.minDistance = 5;
  controls.maxDistance = 20;


  // 光源
  scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1.2));
  const dir = new THREE.DirectionalLight(0xffffff, 0.8);
  dir.position.set(5, 10, 7.5);
  scene.add(dir);

  // 載入那張 unicorn.png 貼圖

  const textureLoader = new THREE.TextureLoader();
  const stickerTex = textureLoader.load('/models/unicorn.png');
  stickerTex.colorSpace = THREE.SRGBColorSpace;
  stickerTex.wrapS = THREE.RepeatWrapping;
  stickerTex.wrapT = THREE.RepeatWrapping;
  stickerTex.repeat.set(1, 1);

  // 載入 OBJ 模型
  const loader = new OBJLoader();
  loader.load(
    props.src,
    (obj) => {
      const box = new THREE.Box3().setFromObject(obj);
      const size = box.getSize(new THREE.Vector3());
      const maxAxis = Math.max(size.x, size.y, size.z);

      const scale = 4 / maxAxis;
      obj.scale.multiplyScalar(scale);
      // 重新計算中心點並移到原點
      box.setFromObject(obj);
      const center = box.getCenter(new THREE.Vector3());
      obj.position.sub(center);

      // 把貼圖套到每個 Mesh 上
      obj.traverse(child => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.material = new THREE.MeshPhongMaterial({
            map: stickerTex,
            // 你也可以順便加點反射、光澤度：
            shininess: 50,
          });
          mesh.material.needsUpdate = true;
        }
      });
      scene.add(obj);
    },
    (xhr) => {
      console.log(`模型載入 ${(xhr.loaded / xhr.total * 50).toFixed(1)}%`);
    },
    (err) => {
      console.error('載入模型錯誤', err);
    }
  );

  // 處理 Resize
  window.addEventListener('resize', onWindowResize);

  // Animation Loop
  const animate = () => {
    controls.update();
    renderer.render(scene, camera);
    frameId = requestAnimationFrame(animate);
  };
  animate();
});

onUnmounted(() => {
  cancelAnimationFrame(frameId);
  window.removeEventListener('resize', onWindowResize);
  renderer.dispose();
});
// 處理視窗大小變動
const onWindowResize = () => {
  if (!container.value) return;
  const w = container.value.clientWidth;
  const h = container.value.clientHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
};
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
