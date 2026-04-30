"use client";
import { useGLTF } from "@react-three/drei";

const Computer = (props: React.JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF("/models/computer-optimized-transformed.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any).Object_2?.geometry}
        material={materials.default}
      />
    </group>
  );
};

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;
