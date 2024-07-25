'use client'
import { useState } from 'react'
import { Document, Page,pdfjs } from 'react-pdf'
 import { Worker } from '@react-pdf-viewer/core'
export default function ViewPDF({ file }) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  // eslint-disable-next-line no-unused-expressions
  pdfjs.GlobalWorkerOptions.workerSrc = Worker
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  return (
    <div>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>
        Previous
      </button>
      <button disabled={pageNumber >= numPages} onClick={() => setPageNumber(pageNumber + 1)}>
        Next
      </button>
    </div>
  )
}
