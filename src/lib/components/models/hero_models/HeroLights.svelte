<script lang="ts">
  import { T } from '@threlte/core';
</script>

<T.SpotLight position={[2, 5, 6]} angle={0.15} penumbra={0.2} intensity={100} color="white" />
<T.SpotLight position={[4, 5, 4]} angle={0.3} penumbra={0.5} intensity={40} color="#4cc9f0" />
<T.SpotLight position={[-3, 5, 5]} angle={0.4} penumbra={1} intensity={60} color="#9d4edd" />

<T.RectAreaLight
  color="#a259ff"
  intensity={15}
  width={3}
  height={2}
  position={[1, 3, 4]}
  rotation={[-Math.PI / 4, Math.PI / 4, 0]}
/>

<T.PointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
<T.PointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
