<script lang="ts">
  import { T } from '@threlte/core';
  import { GLTF, Float, OrbitControls, useDraco } from '@threlte/extras';
  import { prefersReducedMotion } from '$lib/motion';

  const reduceMotion = prefersReducedMotion();

  let { model }: { model: { name: string; modelPath: string; scale: number; rotation: [number, number, number] } } = $props();
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 9]} fov={45}>
  <OrbitControls enableZoom={false} enablePan={false} />
</T.PerspectiveCamera>
<T.AmbientLight intensity={1.2} />
<T.HemisphereLight args={['#ffffff', '#1c1c21', 1.5]} />
<T.DirectionalLight position={[5, 5, 5]} intensity={2.5} />
<T.DirectionalLight position={[-5, -2, 3]} intensity={1} />

<Float
  speed={reduceMotion ? 0 : 5.5}
  rotationIntensity={reduceMotion ? 0 : 0.5}
  floatIntensity={reduceMotion ? 0 : 0.9}
>
  <GLTF
    url={model.modelPath}
    dracoLoader={useDraco()}
    scale={model.scale}
    rotation={model.rotation}
  />
</Float>
