<script lang="ts">
  import { Canvas, T } from '@threlte/core';
  import { OrbitControls } from '@threlte/extras';
  import { NO_REDUCED_MOTION_QUERY } from '$lib/motion';
  import ArchLogo from './ArchLogo.svelte';

  const animate = typeof window !== 'undefined' && window.matchMedia(NO_REDUCED_MOTION_QUERY).matches;
</script>

<Canvas>
  <T.PerspectiveCamera makeDefault position={[0, 0, 10]} fov={40} />
  <T.AmbientLight intensity={0.5} color="#9a9cab" />
  <T.DirectionalLight position={[4, 5, 6]} intensity={2.2} color="#f2f3f5" />
  <T.PointLight position={[-5, -2, 4]} intensity={50} color="#f2f3f5" />
  <T.PointLight position={[5, 3, -4]} intensity={30} color="#f2f3f5" />

  <OrbitControls enablePan={false} enableZoom={false} autoRotate={animate} autoRotateSpeed={1.4} />

  <ArchLogo />
</Canvas>
