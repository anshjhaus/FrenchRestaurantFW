import { useEffect } from 'react'

export function useCursor(cursorId = 'cursor') {
  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!canHover) return

    const cursor = document.getElementById(cursorId)
    if (!cursor) return

    const onMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    const onEnter = () => cursor.classList.add('expand')
    const onLeave = () => cursor.classList.remove('expand')

    document.addEventListener('mousemove', onMove)

    const interactables = document.querySelectorAll('a, button')
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [cursorId])
}
