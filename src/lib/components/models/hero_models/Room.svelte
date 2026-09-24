<script lang="ts">
  import { T } from '@threlte/core';
  import { useTexture } from '@threlte/extras';
  import * as THREE from 'three';
  import { onMount } from 'svelte';

  const matcapTexture = useTexture('/images/textures/mat1.png');

  let nodes = $state<any>(null);
  let materials = $state<any>(null);

  const curtainMaterial = new THREE.MeshPhongMaterial({ color: '#d90429' });
  const tableMaterial = new THREE.MeshPhongMaterial({ color: '#582f0e' });
  const radiatorMaterial = new THREE.MeshPhongMaterial({ color: '#fff' });
  const compMaterial = new THREE.MeshStandardMaterial({ color: '#fff' });
  const pillowMaterial = new THREE.MeshPhongMaterial({ color: '#8338ec' });
  const chairMaterial = new THREE.MeshPhongMaterial({ color: '#000' });

  onMount(async () => {
    const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
    const loader = new GLTFLoader();
    loader.load('/models/optimized-room.glb', (gltf) => {
      nodes = (gltf as any).nodes;
      materials = (gltf as any).materials;
    });
  });
</script>

{#if nodes}
  <T.Group>
    {#if nodes._________6_blinn1_0}
      <T.Mesh geometry={nodes._________6_blinn1_0.geometry} material={curtainMaterial} />
    {/if}
    {#if nodes.body1_blinn1_0}
      <T.Mesh geometry={nodes.body1_blinn1_0.geometry} material={new THREE.MeshPhongMaterial({ map: $matcapTexture })} />
    {/if}
    {#if nodes.cabin_blinn1_0}
      <T.Mesh geometry={nodes.cabin_blinn1_0.geometry} material={tableMaterial} />
    {/if}
    {#if nodes.chair_body_blinn1_0}
      <T.Mesh geometry={nodes.chair_body_blinn1_0.geometry} material={chairMaterial} />
    {/if}
    {#if nodes.comp_blinn1_0}
      <T.Mesh geometry={nodes.comp_blinn1_0.geometry} material={compMaterial} />
    {/if}
    {#if nodes.emis_lambert1_0}
      <T.Mesh geometry={nodes.emis_lambert1_0.geometry} material={materials.lambert1} />
    {/if}
    {#if nodes.handls_blinn1_0}
      <T.Mesh geometry={nodes.handls_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.keyboard_blinn1_0}
      <T.Mesh geometry={nodes.keyboard_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.kovrik_blinn1_0}
      <T.Mesh geometry={nodes.kovrik_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.lamp_bl_blinn1_0}
      <T.Mesh geometry={nodes.lamp_bl_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.lamp_white_blinn1_0}
      <T.Mesh geometry={nodes.lamp_white_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.miuse_blinn1_0}
      <T.Mesh geometry={nodes.miuse_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.monitor2_blinn1_0}
      <T.Mesh geometry={nodes.monitor2_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.monitor3_blinn1_0}
      <T.Mesh geometry={nodes.monitor3_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.pCylinder5_blinn1_0}
      <T.Mesh geometry={nodes.pCylinder5_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.pillows_blinn1_0}
      <T.Mesh geometry={nodes.pillows_blinn1_0.geometry} material={pillowMaterial} />
    {/if}
    {#if nodes.polySurface53_blinn1_0}
      <T.Mesh geometry={nodes.polySurface53_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.radiator_blinn1_0}
      <T.Mesh geometry={nodes.radiator_blinn1_0.geometry} material={radiatorMaterial} />
    {/if}
    {#if nodes.radiator_blinn1_0001}
      <T.Mesh geometry={nodes.radiator_blinn1_0001.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.railing_blinn1_0}
      <T.Mesh geometry={nodes.railing_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.red_bttns_blinn1_0}
      <T.Mesh geometry={nodes.red_bttns_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.red_vac_blinn1_0}
      <T.Mesh geometry={nodes.red_vac_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.stylus_blinn1_0}
      <T.Mesh geometry={nodes.stylus_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.table_blinn1_0}
      <T.Mesh geometry={nodes.table_blinn1_0.geometry} material={tableMaterial} />
    {/if}
    {#if nodes.tablet_blinn1_0}
      <T.Mesh geometry={nodes.tablet_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.triangle_blinn1_0}
      <T.Mesh geometry={nodes.triangle_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.vac_black_blinn1_0}
      <T.Mesh geometry={nodes.vac_black_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.vacuum1_blinn1_0}
      <T.Mesh geometry={nodes.vacuum1_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.vacuumgrey_blinn1_0}
      <T.Mesh geometry={nodes.vacuumgrey_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.vires_blinn1_0}
      <T.Mesh geometry={nodes.vires_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.window_blinn1_0}
      <T.Mesh geometry={nodes.window_blinn1_0.geometry} material={materials.blinn1} />
    {/if}
    {#if nodes.window4_phong1_0}
      <T.Mesh geometry={nodes.window4_phong1_0.geometry} material={materials.phong1} />
    {/if}
  </T.Group>
{/if}
