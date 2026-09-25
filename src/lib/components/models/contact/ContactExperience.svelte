<script lang="ts">
  import { T } from '@threlte/core';
  import { OrbitControls } from '@threlte/extras';
  import Computer from './Computer.svelte';
</script>

<T.PerspectiveCamera makeDefault position={[0, 3, 7]} fov={45} />
<T.AmbientLight intensity={0.5} color="#fff4e6" />
<T.DirectionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
<T.DirectionalLight position={[5, 9, 1]} castShadow intensity={2.5} color="#ffd9b3" />

<OrbitControls enableZoom={false} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2} />

<T.Group scale={[1, 1, 1]}>
  <T.Mesh receiveShadow position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
    <T.PlaneGeometry args={[30, 30]} />
    <T.MeshStandardMaterial color="#a46b2d" />
  </T.Mesh>
</T.Group>

<T.Group scale={0.03} position={[0, -1.49, -2]} castShadow>
  <Computer />
</T.Group>
