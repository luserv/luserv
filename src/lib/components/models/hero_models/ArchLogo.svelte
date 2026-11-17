<script lang="ts">
  import { T } from '@threlte/core';
  import * as THREE from 'three';
  import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
  import { siArchlinux } from 'simple-icons';

  // Extrude the official Arch Linux mark (simple-icons path, 24x24, y down).
  // The path's second subpath is the tiny trademark glyph; keep only the logo.
  const logoPath = siArchlinux.path.split('zM')[0] + 'z';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="${logoPath}"/></svg>`;
  const data = new SVGLoader().parse(svg);
  const shapes = data.paths.flatMap((p) => SVGLoader.createShapes(p));

  const geometry = new THREE.ExtrudeGeometry(shapes, {
    depth: 2.4,
    bevelEnabled: true,
    bevelThickness: 0.25,
    bevelSize: 0.2,
    bevelSegments: 3,
    curveSegments: 16
  });
  geometry.center();
  // SVG y axis points down; flip so the mark stands upright.
  geometry.scale(1, -1, 1);
  // Flipping reverses face winding, so fix the normals.
  geometry.computeVertexNormals();
</script>

<T.Mesh {geometry} scale={0.21}>
  <T.MeshStandardMaterial color="#1793D1" emissive="#1793D1" emissiveIntensity={0.35} metalness={0.35} roughness={0.4} side={THREE.DoubleSide} />
</T.Mesh>
