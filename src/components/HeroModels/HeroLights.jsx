export default function HeroLights() {
  return (
    <>
      <spotLight
        position={[2, 5, 6]}
        intensity={100}
        angle={0.15}
        penumbra={0.2}
        color="white"
      />
    </>
  );
}
