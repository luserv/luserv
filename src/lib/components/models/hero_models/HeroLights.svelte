<script lang="ts">
  import { T } from '@threlte/core';
</script>

<T.SpotLight position={[2, 5, 6]} angle={0.15} penumbra={0.2} intensity={100} color="white" />
<T.SpotLight position={[4, 5, 4]} angle={0.3} penumbra={0.5} intensity={40} color="#d9ecff" />
<T.SpotLight position={[-3, 5, 5]} angle={0.4} penumbra={1} intensity={60} color="#839cb5" />

<T.RectAreaLight
  color="#d9ecff"
  intensity={15}
  width={3}
  height={2}
  position={[1, 3, 4]}
  rotation={[-Math.PI / 4, Math.PI / 4, 0]}
/>

<T.PointLight position={[0, 1, 0]} intensity={10} color="#839cb5" />
<T.PointLight position={[1, 2, -2]} intensity={10} color="#2d2d38" />
