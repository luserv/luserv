<script lang="ts">
  import { T } from '@threlte/core';
  import { OrbitControls } from '@threlte/extras';
  import { onMount } from 'svelte';
  import Room from './Room.svelte';
  import HeroLights from './HeroLights.svelte';
  import Particles from './Particles.svelte';

  let isMobile = $state(false);
  let isTablet = $state(false);

  onMount(() => {
    const check = () => {
      isMobile = window.innerWidth <= 768;
      isTablet = window.innerWidth <= 1024;
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  });
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
<T.AmbientLight intensity={0.2} color="#1a1a40" />

<OrbitControls
  enablePan={false}
  enableZoom={!isTablet}
  maxDistance={20}
  minDistance={5}
  minPolarAngle={Math.PI / 5}
  maxPolarAngle={Math.PI / 2}
/>

<HeroLights />
<Particles count={100} />
<T.Group scale={isMobile ? 0.7 : 1} position={[0, -3.5, 0]} rotation={[0, -Math.PI / 4, 0]}>
  <Room />
</T.Group>
