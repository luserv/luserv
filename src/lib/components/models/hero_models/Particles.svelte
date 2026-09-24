<script lang="ts">
  import { T, useTask } from '@threlte/core';
  import * as THREE from 'three';

  let { count = 200 }: { count?: number } = $props();

  interface Particle {
    position: [number, number, number];
    speed: number;
  }

  const particles: Particle[] = Array.from({ length: count }, () => ({
    position: [
      (Math.random() - 0.5) * 10,
      Math.random() * 10 + 5,
      (Math.random() - 0.5) * 10
    ] as [number, number, number],
    speed: 0.005 + Math.random() * 0.001
  }));

  const positions = new Float32Array(count * 3);
  particles.forEach((p, i) => {
    positions[i * 3] = p.position[0];
    positions[i * 3 + 1] = p.position[1];
    positions[i * 3 + 2] = p.position[2];
  });

  let pointsRef: THREE.Points | undefined = $state();

  useTask(() => {
    if (!pointsRef) return;
    const posAttr = pointsRef.geometry.attributes.position as THREE.BufferAttribute | undefined;
    if (!posAttr?.array) return;
    const arr = posAttr.array as Float32Array;
    for (let i = 0; i < count; i++) {
      let y = arr[i * 3 + 1];
      y -= particles[i].speed;
      if (y < -2) y = Math.random() * 10 + 5;
      arr[i * 3 + 1] = y;
    }
    posAttr.needsUpdate = true;
  });
</script>

<T.Points bind:ref={pointsRef}>
  <T.BufferGeometry>
    <T.BufferAttribute
      attach="attributes-position"
      array={positions}
      count={count}
      itemSize={3}
    />
  </T.BufferGeometry>
  <T.PointsMaterial color="#ffffff" size={0.05} transparent opacity={0.9} depthWrite={false} />
</T.Points>
