import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './Background.scss'

const Background = () => {
  const canvas = useRef()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer()

  useEffect(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color( 0x212121 )
    renderer.setSize(window.innerWidth, window.innerHeight)
    canvas.current.appendChild(renderer.domElement)
    camera.position.z = 5

    const cubes = []

    const createCube = () => {
      const randSize = Math.floor(Math.random() * 4) + 2
      const randColor = Math.floor(Math.random() * 8) + 1
      const color = parseInt(`${20 + randColor}${20 + randColor}${20 + randColor}`, 16)

      const geometry = new THREE.BoxGeometry(randSize, randSize, randSize)
      const material = new THREE.MeshBasicMaterial({
        color,
        opacity: 0.1,
        transparent: true,
      })

      const cube = new THREE.Mesh(geometry, material)

      cube.position.x = Math.random() * 200 - 100
      cube.position.y = Math.random() * 200 - 100
      cube.position.z = Math.random() * 200 - 100

      cube.rotation.x = Math.random()
      cube.rotation.y = Math.random()

      scene.add(cube)
      cubes.push({
        cube,
        shrink: (Math.random() + 1) / 2,
        color
      })
    }

    for (let i = 0; i < 1000; i++) {
      createCube()
    }

    const animate = () => {
      requestAnimationFrame(animate)

      cubes.forEach(({ cube, shrink }, i) => {
        cube.material.opacity += 0.05

        cube.rotation.x += 0.01 / shrink
        cube.rotation.y += 0.01 / shrink

        cube.scale.x -= (0.01 * shrink)
        cube.scale.y -= (0.01 * shrink)
        cube.scale.z -= (0.01 * shrink)

        if (cube.scale.x < 0 || cube.scale.y < 0 || cube.scale.z < 0) {
          cubes.splice(i, 1)
          scene.remove(cube)

          createCube()
        }
      })

      renderer.render(scene, camera)
    }
    
    animate()
  }, [camera, renderer])


  useEffect(() => {
    const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', onWindowResize, false)
  }, [camera, renderer])

  return <div className="background" ref={ canvas } />
}

export default Background
