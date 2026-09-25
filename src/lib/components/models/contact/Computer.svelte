<script lang="ts">
  import { T } from '@threlte/core';
  import { useDraco, useGltf } from '@threlte/extras';

  const gltf = useGltf('/models/computer-optimized-transformed.glb', { dracoLoader: useDraco() });
</script>

{#if $gltf?.nodes.Object_2}
  <T.Group>
    <T.Mesh
      castShadow
      receiveShadow
      geometry={$gltf.nodes.Object_2.geometry}
      material={$gltf.materials.default}
    />
  </T.Group>
{/if}
