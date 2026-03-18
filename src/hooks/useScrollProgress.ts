import { useEffect } from 'react'

export function useScrollProgress(progressId = 'scroll-progress') {
  useEffect(() => {
    const progressBar = document.getElementById(progressId)
    if (!progressBar) return

    let frameId = 0

    const updateProgress = () => {
      frameId = 0

      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0

      progressBar.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`
    }

    const requestUpdate = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(updateProgress)
    }

    requestUpdate()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [progressId])
}
