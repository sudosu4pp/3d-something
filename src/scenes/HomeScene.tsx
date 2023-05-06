import { getProject } from "@theatre/core";
import { useEffect } from "react";
import { SheetProvider, editable as e, PerspectiveCamera } from "@theatre/r3f";
import { OrbitControls } from "@react-three/drei";

const mainSheet = getProject("Project 3D something").sheet("Main Sheet");

export const HomeScene = () => {
  useEffect(() => {
    mainSheet.project.ready.then(() =>
      mainSheet.sequence.play({ iterationCount: Infinity, range: [0, 7]})
    );
  }, []);

  return (
    <>
      <OrbitControls />
      <SheetProvider sheet={mainSheet}>
        <PerspectiveCamera
          theatreKey="Camera"
          makeDefault
          position={[5, 5, -5]}
          fov={75}
          attachArray={undefined}
          attachObject={undefined}
          attachFns={undefined}
        />
        <ambientLight />
        <e.pointLight theatreKey="Light" position={[10, 10, 10]} />
        <e.mesh theatreKey="Cube"  >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </e.mesh>
      </SheetProvider>
    </>
  );
};
