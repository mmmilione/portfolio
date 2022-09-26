import * as THREE from 'three';
import moon from '../assets/images/moon6.jpeg'
import btc from '../assets/images/btc.jpeg'
import eth from '../assets/images/ethereum3.png'
import bnb from '../assets/images/bnb.jpeg'
import usdt from '../assets/images/usdt2.png';
import matic from '../assets/images/matic.jpeg';
import link from '../assets/images/chainlink.jpeg';
import dai from '../assets/images/dai.jpeg';

let camera, scene, renderer, al, planet;
let bitcoin, ethereum, binance, tether, polygon, chainlink, daiCoin;

const animateMoon = () => {
    planet.rotateY(0.015);
    if(planet.position.x < 2){
        planet.position.setX(planet.position.x += 0.06);
    }
    if(planet.position.z < 0 && planet.position.x >= 2){
        planet.position.setZ(planet.position.z += 0.04);
    }
}

const animateBTC = () => {

    bitcoin.rotateY(0.004);
    bitcoin.rotateX(0.03);
    bitcoin.rotateZ(-0.05);

    if(bitcoin.position.y < 2.2){
        bitcoin.position.setY(bitcoin.position.y += .02);
    }

    if(bitcoin.position.x < -1.3){
        bitcoin.position.setX(bitcoin.position.x += .02);
    }

    if(bitcoin.position.z > -0.1){
        bitcoin.position.setZ(bitcoin.position.z -= .04);
    }

}

const animateEth = () => {

    ethereum.rotateX(0.03);
    ethereum.rotateZ(0.04);
    ethereum.rotateY(-0.02);

    if(ethereum.position.y < -0.9){
        ethereum.position.setY(ethereum.position.y += .018);
    }

    if(ethereum.position.z < 0){
        ethereum.position.setZ(ethereum.position.z += .02);
    }

}

const animateBNB = () => {

    binance.rotateX(0.04);
    binance.rotateZ(0.035);
    binance.rotateY(0.02);

    if(binance.position.y < -1.70){
        binance.position.setY(binance.position.y += .018);
    }

    if(binance.position.x > -0.4){
        binance.position.setX(binance.position.x -= .018);
    }

    if(binance.position.z < 0){
        binance.position.setZ(binance.position.z += .02);
    }

}

const animateUSDT = () => {

    tether.rotateX(-0.03);
    tether.rotateZ(0.02);
    tether.rotateY(0.03);

    if(tether.position.x > -2){
        tether.position.setX(tether.position.x -= .007);
    }

    if(tether.position.z < 2.5){
        tether.position.setZ(tether.position.z += .02);
    }

}

const animatePolygon = () => {
    polygon.rotateX(-0.03);
    polygon.rotateZ(-0.025);
    polygon.rotateY(0.032);

    if(polygon.position.y > 2.5){
        polygon.position.setY(polygon.position.y -= .015);
    }

    if(polygon.position.x < 5){
        polygon.position.setX(polygon.position.x += .015);
    }

    if(polygon.position.z < 0){
        polygon.position.setZ(polygon.position.z += .02);
    }

}

const animateLink = () => {

    chainlink.rotateX(-0.03);
    chainlink.rotateZ(0.03);
    chainlink.rotateY(-0.02);

    if(chainlink.position.y > -2.5){
        chainlink.position.setY(chainlink.position.y -= .056);
    }

    if(chainlink.position.x < 4.8){
        chainlink.position.setX(chainlink.position.x += .74);
    }

    if(chainlink.position.z < 0){
        chainlink.position.setZ(chainlink.position.z += .02);
    }

}

const animateDai = () => {

    daiCoin.rotateX(0.022);
    daiCoin.rotateZ(-0.028);
    daiCoin.rotateY(-0.023);

    if(daiCoin.position.y > 2.9){
        daiCoin.position.setY(daiCoin.position.y -= .016);
    }

    if(daiCoin.position.x > -4.7){
        daiCoin.position.setX(daiCoin.position.x -= .014);
    }

    if(daiCoin.position.z < 0){
        daiCoin.position.setZ(daiCoin.position.z += .02);
    }

}

const coinFactory = (coinTexture, x, y, z) => {
    const coinGeometry = new THREE.CylinderGeometry(0.35, 0.35, 0.035, 32 );
    const coinMaterial = new THREE.MeshBasicMaterial({ color: 'grey' });
    const texture = new THREE.TextureLoader().load(coinTexture);
    const material1 = new THREE.MeshLambertMaterial( {map: texture} );
    const material2 = new THREE.MeshLambertMaterial( {map: texture} );
    const materials = [coinMaterial, material1, material2];
    const coin = new THREE.Mesh( coinGeometry, materials );
    coin.position.setX(x);
    coin.position.setY(y);
    coin.position.setZ(z);
    return coin;
}

const planetFactory = (planetTexture, radius, widthSegments, heightSegments) => {
    const geometry = new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments);
    const texture = new THREE.TextureLoader().load(planetTexture);
    const material = new THREE.MeshBasicMaterial( {map: texture} );
    const sphere = new THREE.Mesh( geometry, material );
    sphere.position.setX(-2);
    sphere.position.setY(0);
    sphere.position.setZ(-5);
    return sphere;
}

const resizeRendererToDisplaySize = (renderer) => {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
}

const animate = () => {

    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    animateMoon();
    animateBTC();
    animateEth();
    animateBNB();
    animateUSDT();
    animatePolygon();
    animateLink();
    animateDai();

    renderer.render(scene, camera);
}

export const init3JS = () => {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 
        70, 
        window.innerWidth / window.innerHeight, 
        0.01, 
        10 
    );

    camera.position.z = 5;

    //Ambien Light
    al = new THREE.AmbientLight(0xffffff, 1);
    scene.add(al);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor('white', 0);

    document.querySelector('#animationBox').appendChild(renderer.domElement);
    
    //MOON
    planet = planetFactory(moon, 2, 50, 50);
    scene.add(planet);
    
    //BTC
    bitcoin = coinFactory(btc, -6, -4, 7);
    scene.add( bitcoin );
    
    //Eth
    ethereum = coinFactory(eth, -1.5, -5, -4);
    scene.add( ethereum );

    //BNB
    binance = coinFactory(bnb, 4.5, -5.5, -3);
    scene.add( binance );

    //USDT
    tether = coinFactory(usdt, 0, -1, -3);
    scene.add( tether );

    //Matic
    polygon = coinFactory(matic, 1, 5, -6);
    scene.add( polygon );

    //Link
    chainlink = coinFactory(link, 4, 5, -2);
    scene.add( chainlink );

    //dai
    daiCoin = coinFactory(dai, 0, 5, -2.6);
    scene.add( daiCoin );

    return setInterval(() => animate(), 30)

}