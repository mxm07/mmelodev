import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { queue } from '@/utils'

import './Background.scss'

interface Cube {
  color: number
  shrink: number
  cube: THREE.Mesh
}

const Background = () => {
  const canvas = useRef<HTMLDivElement>(null)
  const camera = useMemo(
    () =>
      new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      ),
    []
  )

  const renderer = useMemo(() => new THREE.WebGLRenderer(), [])

  const delta = useRef(0.01)
  const speedFactor = 0.25
  const cubes: Cube[] = useMemo(() => [], [])

  useEffect(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x212121)
    renderer.setSize(window.innerWidth, window.innerHeight)
    const container = canvas.current

    container?.appendChild(renderer.domElement)

    camera.position.z = 5

    const createCube = () => {
      const randSize = Math.floor(Math.random() * 6) + 2
      const randColor = Math.floor(Math.random() * 4) + 1
      const baseCol = 20

      const color = parseInt(
        `${baseCol + randColor}${baseCol + randColor}${baseCol + randColor}`,
        16
      )

      const geometry = new THREE.BoxGeometry(randSize, randSize, randSize)
      const material = new THREE.MeshBasicMaterial({
        color,
        opacity: 0,
        transparent: true,
      })

      const cube = new THREE.Mesh(geometry, material)

      const aspectRatio = window.innerWidth / window.innerHeight
      const maxX = 30 * aspectRatio
      const maxY = 30

      cube.position.x = Math.random() * maxX * 2 - maxX
      cube.position.y = Math.random() * maxY * 2 - maxY
      cube.position.z = Math.random() * 200 - 220

      cube.rotation.x = Math.random()
      cube.rotation.y = Math.random()

      scene.add(cube)
      cubes.push({
        cube,
        shrink: (Math.random() + 1) / 3,
        color,
      })
    }

    const queueCreateCube = queue(createCube, 20)

    for (let i = 0; i < 100; i++) {
      queueCreateCube()
    }

    const animate = (time: number) => {
      const timeInSeconds = time * 0.001
      const deltaTimeInSeconds = timeInSeconds - delta.current || 0.01
      delta.current = timeInSeconds

      cubes.forEach(({ cube, shrink }, i) => {
        const material = cube.material as THREE.Material
        if (material.opacity < 1) {
          material.opacity += 0.01 // Fade-in effect
        }

        cube.rotation.x += (deltaTimeInSeconds / shrink) * speedFactor
        cube.rotation.y += (deltaTimeInSeconds / shrink) * speedFactor

        cube.scale.x -= deltaTimeInSeconds * shrink * speedFactor
        cube.scale.y -= deltaTimeInSeconds * shrink * speedFactor
        cube.scale.z -= deltaTimeInSeconds * shrink * speedFactor

        if (cube.scale.x < 0 || cube.scale.y < 0 || cube.scale.z < 0) {
          cubes.splice(i, 1)
          scene.remove(cube)
        }
      })

      if (cubes.length < 150) {
        for (let i = 0; i < 150 - cubes.length; i++) {
          queueCreateCube()
        }
      }

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate(1000)

    const handleResize = () => {
      if (!container) return

      const width = container.clientWidth
      const height = container.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()

      renderer.setSize(width, height, true)
      renderer.setPixelRatio(window.devicePixelRatio)
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      container?.removeChild(renderer.domElement)
    }
  }, [camera, renderer, cubes])

  useEffect(() => {
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', onWindowResize, false)
  }, [camera, renderer])

  return <div className="background" ref={canvas} />
}

export default Background
