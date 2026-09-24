<script lang="ts">
  import { T } from '@threlte/core';
  import { GLTF, Float, OrbitControls } from '@threlte/extras';
  import * as THREE from 'three';

  let { model }: { model: { name: string; modelPath: string; scale: number; rotation: [number, number, number] } } = $props();

  let sceneRef = $state<THREE.Group | undefined>();

  function handleLoad(e: any) {
    if (model.name === 'Database Engineer' && e.scene) {
      e.scene.traverse((child: any) => {
        if (child.isMesh && child.name === 'Object_5') {
          child.material = new THREE.MeshStandardMaterial({ color: 'white' });
        }
      });
    }
    sceneRef = e.scene;
  }
</script>

<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov={45} />
<T.AmbientLight intensity={0.3} />
<T.DirectionalLight position={[5, 5, 5]} intensity={1} />
<T.SpotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} />

<Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
  <GLTF
    url={model.modelPath}
    scale={model.scale}
    rotation={model.rotation}
    onloaded={handleLoad}
  />
</Float>

<OrbitControls enableZoom={false} />
