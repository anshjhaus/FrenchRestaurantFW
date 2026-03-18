import { useEffect } from 'react'

export function useScrollReveal(selector = '.reveal') {
  useEffect(() => {
    const observed = new WeakSet<Element>()

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    const observeElements = () => {
      const elements = document.querySelectorAll<HTMLElement>(selector)

      elements.forEach(el => {
        if (observed.has(el) || el.classList.contains('visible')) return
        observed.add(el)
        observer.observe(el)
      })
    }

    observeElements()

    const mutationObserver = new MutationObserver(() => {
      observeElements()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      mutationObserver.disconnect()
      observer.disconnect()
    }
  }, [selector])
}
