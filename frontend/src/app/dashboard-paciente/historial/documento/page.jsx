'use client'
import ViewPDF from '../../../../components/ui/Perfil/ViewPDF'
import 
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function PDFpage() {
  const router = useRouter()
  const [query, setQuery] = useState({})

  useEffect(() => {
    if (router) {
      const urlParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlParams.entries());
      setQuery(params)
    }
  }, [router])
  return (
    <div>
      <ViewPDF file={query.documento} />
    </div>
  )
}
