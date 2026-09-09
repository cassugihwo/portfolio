import { useEffect, useRef, useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import pdfWorkerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import resumeFile from '../files/resume/Cas_Sugihwo_Resume.pdf'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerSrc

function ResumePdfPage({ page }) {
  const canvasRef = useRef(null)
  const [x0, y0, x1, y1] = page.view

  useEffect(() => {
    const scale = 2 * (window.devicePixelRatio || 1)
    const viewport = page.getViewport({ scale })
    const canvas = canvasRef.current
    canvas.width = viewport.width
    canvas.height = viewport.height

    const renderTask = page.render({ canvasContext: canvas.getContext('2d'), viewport })
    renderTask.promise.catch(() => {})

    return () => renderTask.cancel()
  }, [page])

  return (
    <canvas
      ref={canvasRef}
      className="w-full max-w-5xl rounded-sm"
      style={{ aspectRatio: `${x1 - x0} / ${y1 - y0}` }}
    />
  );
}

export default function ResumePreview() {
  const [pages, setPages] = useState([])
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    const loadingTask = pdfjsLib.getDocument({ url: resumeFile })

    loadingTask.promise
      .then(async (pdf) => {
        const loadedPages = await Promise.all(
          Array.from({ length: pdf.numPages }, (_, i) => pdf.getPage(i + 1)),
        )
        if (!cancelled) setPages(loadedPages)
      })
      .catch((error) => {
        if (!cancelled) {
          console.error('Failed to load resume PDF:', error)
          setFailed(true)
        }
      })

    return () => {
      cancelled = true
      loadingTask.destroy()
    }
  }, [])

  if (failed) return null

  return (
    <div className="flex flex-col gap-25 max-w-5xl">
      {pages.map((page) => (
        <ResumePdfPage key={page.pageNumber} page={page} />
      ))}
    </div>
  )
}
