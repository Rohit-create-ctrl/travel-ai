import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus, MeshDistortMaterial } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';

const FloatingBox = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;

      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.3;

      const mouse = new Vector3(
        state.mouse.x * 2,
        state.mouse.y * 2,
        0
      );
      meshRef.current.position.lerp(
        new Vector3(
          position[0] + mouse.x * 0.5,
          meshRef.current.position.y,
          position[2] + mouse.y * 0.5
        ),
        0.05
      );

      if (hovered) {
        meshRef.current.scale.lerp(new Vector3(1.3, 1.3, 1.3), 0.1);
      } else {
        meshRef.current.scale.lerp(new Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <Box
      ref={meshRef}
      position={position}
      args={[1, 1, 1]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </Box>
  );
};

const FloatingSphere = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;

      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.cos(time + position[0] * 2) * 0.4;

      const mouse = new Vector3(
        state.mouse.x * 2,
        state.mouse.y * 2,
        0
      );
      meshRef.current.position.lerp(
        new Vector3(
          position[0] + mouse.x * 0.3,
          meshRef.current.position.y,
          position[2] + mouse.y * 0.3
        ),
        0.05
      );

      if (hovered) {
        meshRef.current.scale.lerp(new Vector3(1.5, 1.5, 1.5), 0.1);
      } else {
        meshRef.current.scale.lerp(new Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <Sphere
      ref={meshRef}
      position={position}
      args={[0.6, 32, 32]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <MeshDistortMaterial
        color={color}
        distort={0.3}
        speed={2}
        metalness={0.8}
        roughness={0.2}
      />
    </Sphere>
  );
};

const FloatingTorus = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.015;

      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.sin(time * 1.5 + position[0] * 3) * 0.35;

      const mouse = new Vector3(
        state.mouse.x * 2,
        state.mouse.y * 2,
        0
      );
      meshRef.current.position.lerp(
        new Vector3(
          position[0] + mouse.x * 0.4,
          meshRef.current.position.y,
          position[2] + mouse.y * 0.4
        ),
        0.05
      );

      if (hovered) {
        meshRef.current.scale.lerp(new Vector3(1.4, 1.4, 1.4), 0.1);
      } else {
        meshRef.current.scale.lerp(new Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <Torus
      ref={meshRef}
      position={position}
      args={[0.5, 0.2, 16, 32]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </Torus>
  );
};

const Interactive3D = () => {
  return (
    <section
      id="interactive"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-800"
    >
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Interactive 3D Experience
          </h2>
          <p className="text-xl text-gray-400">
            Move your mouse to interact with the floating objects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl"
        >
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} color="#06b6d4" intensity={2} />
            <pointLight position={[10, 10, 5]} color="#8b5cf6" intensity={1.5} />

            <FloatingBox position={[-2, 0, 0]} color="#06b6d4" />
            <FloatingSphere position={[2, 0.5, -1]} color="#3b82f6" />
            <FloatingTorus position={[0, -1, 0]} color="#8b5cf6" />
            <FloatingBox position={[-1.5, 1.5, -2]} color="#ec4899" />
            <FloatingSphere position={[1.5, -1.5, 1]} color="#10b981" />
          </Canvas>

          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-900/50 pointer-events-none"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">
            Experience the power of modern web technologies combined with AI
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-medium shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow"
          >
            Start Exploring
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Interactive3D;
