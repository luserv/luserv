<script lang="ts">
  import { T } from '@threlte/core';
  import * as THREE from 'three';
  import { onMount } from 'svelte';

  let nodeGeom: THREE.BufferGeometry | undefined = $state();
  let defaultMat: THREE.Material | undefined = $state();

  onMount(async () => {
    const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
    const loader = new GLTFLoader();
    loader.load('/models/computer-optimized-transformed.glb', (gltf) => {
      const scene = gltf.scene;
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (mesh.name === 'Object_2' || !nodeGeom) {
            nodeGeom = mesh.geometry;
            defaultMat = mesh.material as THREE.Material;
          }
        }
      });
    });
  });
</script>

{#if nodeGeom && defaultMat}
  <T.Group>
    <T.Mesh castShadow receiveShadow geometry={nodeGeom} material={defaultMat} />
  </T.Group>
{/if}
