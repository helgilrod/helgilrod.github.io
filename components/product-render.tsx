'use client'

import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react'
import { useRef, useState } from 'react'
import type { Product } from '@/data/products'

type ProductRenderProps = {
  product: Product
  active: boolean
}

export function ProductRender({ product, active }: ProductRenderProps) {
  const [dragging, setDragging] = useState(false)
  const [rotation, setRotation] = useState({ x: -4, y: 0 })
  const dragOrigin = useRef({ x: 0, y: 0, rotateX: -4, rotateY: 0 })

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId)
    dragOrigin.current = { x: event.clientX, y: event.clientY, rotateX: rotation.x, rotateY: rotation.y }
    setDragging(true)
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!dragging) return
    setRotation({
      x: Math.max(-28, Math.min(28, dragOrigin.current.rotateX - (event.clientY - dragOrigin.current.y) * 0.18)),
      y: Math.max(-42, Math.min(42, dragOrigin.current.rotateY + (event.clientX - dragOrigin.current.x) * 0.22)),
    })
  }

  function stopDragging(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
    setDragging(false)
  }

  return (
    <div
      className={`render-stage render-${product.tone} ${active ? 'is-active' : ''} ${dragging ? 'is-dragging' : ''}`}
      aria-label={`${product.name} product render. Drag to rotate.`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      style={{ '--rotate-x': `${rotation.x}deg`, '--rotate-y': `${rotation.y}deg` } as CSSProperties}
    >
      <div className="render-orbit orbit-one" />
      <div className="render-orbit orbit-two" />
      <div className="render-shadow" />
      <div className="render-object">
        <div className="render-cap" />
        <div className="render-body">
          <span className="render-mark">LUMÉA</span>
          <span className="render-label">{product.name}</span>
          <span className="render-line" />
          <span className="render-submark">SEOUL · 01</span>
        </div>
        {product.tone === 'mist' && <div className="render-nozzle" />}
        {product.tone === 'cream' && <div className="render-lid-line" />}
      </div>
      <span className="render-caption">{dragging ? 'RELEASE TO RESET' : 'DRAG TO EXPLORE'} <b>↔</b></span>
    </div>
  )
}
