import { useEffect } from "react";
import { getProject } from "@theatre/core";
import { SheetProvider, editable as e, PerspectiveCamera } from "@theatre/r3f";

const mainSheet = getProject("Project 3D something").sheet("Main Sheet");

export const HomeScene = () => {
  useEffect(() => {
    mainSheet.project.ready.then(() =>
      mainSheet.sequence.play({ iterationCount: 1})
    );
  }, []);

  return (
    <>
      <SheetProvider sheet={mainSheet}>
        <PerspectiveCamera
          theatreKey="Camera"
          makeDefault
          position={[1, 1, 5]}
          fov={75}
          attachArray={undefined}
          attachObject={undefined}
          attachFns={undefined}
        />
        <ambientLight />
        <e.pointLight theatreKey="Light" position={[10, 10, 10]} />
      </SheetProvider>
    </>
  );
};
