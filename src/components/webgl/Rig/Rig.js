// import { useEffect } from "react";
import { useFrame, useThree } from "react-three-fiber"
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function Rig({ mouse }) {
    const { camera } = useThree()
    // const controls = new OrbitControls(camera, gl.domElement);
    useFrame(() => {
        camera.position.x += (mouse.current[0] / 50 - camera.position.x) * 0.05
        camera.position.y += (-mouse.current[1] / 50 - camera.position.y) * 0.05
        camera.lookAt(0, 0, 0)
        // controls.update()
    })
    // useEffect(
    //     () => {
    
    //       controls.minDistance = 10;
    //       controls.autoRotate = true;
    //       controls.enableZoom = false;
    //       controls.maxDistance = 10;
    //       return () => {
    //         controls.dispose();
    //       };
    //     },
    //     [camera, controls, gl]
    //   );
    return null
}
export default Rig