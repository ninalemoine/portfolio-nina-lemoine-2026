'use client';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// --- LE SHADER (La magie mathématique pour l'effet liquide) ---
const vertexShader = `
uniform float uTime;
uniform vec2 uMouse;
varying vec2 vUv;
void main() {
  vUv = uv;
  vec3 pos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const fragmentShader = `
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    
    // Calcul de la distance de la souris
    float dist = distance(uv, uMouse);
    
    // Création de l'onde (Ripple)
    float wave = sin(dist * 20.0 - uTime * 5.0) * 0.02;
    
    // On atténue l'onde si on est loin de la souris
    float strength = smoothstep(0.5, 0.0, dist);
    
    // On déforme l'image
    uv += wave * strength;

    vec4 color = texture2D(uTexture, uv);
    gl_FragColor = color;
}
`;

function Scene() {
    const mesh = useRef<THREE.Mesh>(null);
    const mouse = useRef(new THREE.Vector2(0.5, 0.5));
    
    // Charge ton image de fond (ASSURE-TOI QU'ELLE EXISTE DANS PUBLIC)
    const texture = useLoader(TextureLoader, '/hero.jpg');

    useFrame((state) => {
        if (!mesh.current) return;
        
        // Mise à jour de la souris (avec un lerp pour que ce soit fluide)
        const targetX = (state.mouse.x + 1) / 2;
        const targetY = (state.mouse.y + 1) / 2;
        
        mouse.current.x += (targetX - mouse.current.x) * 0.1;
        mouse.current.y += (targetY - mouse.current.y) * 0.1;

        // On envoie les infos au Shader
        (mesh.current.material as THREE.ShaderMaterial).uniforms.uMouse.value = mouse.current;
        (mesh.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.getElapsedTime();
    });

    const uniforms = useMemo(
        () => ({
            uTexture: { value: texture },
            uMouse: { value: new THREE.Vector2(0, 0) },
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2(1, 1) }
        }),
        [texture]
    );

    return (
        <mesh ref={mesh}>
            <planeGeometry args={[12, 8]} /> {/* Taille du plan */}
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
            />
        </mesh>
    );
}

export default function RippleEffect() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <Scene />
            </Canvas>
        </div>
    );
}