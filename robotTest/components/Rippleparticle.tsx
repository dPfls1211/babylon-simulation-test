import * as React from 'react';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders'; // 필요한 경우

interface RippleparticleProps {
    scene: BABYLON.Scene;
}

class Rippleparticle extends React.Component<RippleparticleProps> {
    async componentDidMount() {
        const { scene } = this.props;
        
        // 파티클 시스템 생성
        const particleSystem = await BABYLON.ParticleHelper.CreateFromSnippetAsync("2JRD1A#111", scene, false);

        // 파티클 시스템을 원하는 대상에 연결하거나 추가 작업 수행
        particleSystem.emitter = new BABYLON.Vector3(0, 0, 0); // 예: 파티클 시스템의 발사 위치 설정

        // 씬에 파티클 시스템 추가
        particleSystem.start(); // 파티클 애니메이션 시작
    }

    render() {
        return null; // 파티클 시스템은 DOM에 렌더링되지 않으므로 null을 반환합니다.
    }
}

export default Rippleparticle;
