import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  AccumulativeShadows,
  RandomizedLight,
  Center,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { MeshDistortMaterial } from "@react-three/drei";

export default function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
      <group position={[0, -0.65, 0]}>
        <Sphere />
        <AccumulativeShadows
          temporal
          frames={200}
          color="red"
          colorBlend={0.5}
          opacity={1}
          scale={10}
          alphaTest={0.85}
        >
          <RandomizedLight
            amount={8}
            radius={5}
            ambient={0.5}
            position={[5, 3, 2]}
            bias={0.001}
          />
        </AccumulativeShadows>
      </group>
      <Env />
      <OrbitControls
        autoRotate
        autoRotateSpeed={1}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
      />
    </Canvas>
  );
}

function Sphere() {
  const [clicked, setClicked] = useState(false);
  const springs = useSpring({ color: clicked ? "#569AFF" : "#ff6d6d" });
  const handleClick = () => setClicked((x) => !x);
  const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);
  return (
    <Center top>
      <mesh castShadow onClick={handleClick}>
        <sphereGeometry args={[0.75, 64, 64]} />
        <AnimatedMeshDistortMaterial
          speed={3}
          distort={0.6}
          color={springs.color}
        />
      </mesh>
    </Center>
  );
}

function Env() {
  return <Environment preset={"sunset"} background blur={1} />;
}
