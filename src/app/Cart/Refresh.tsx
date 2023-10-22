import React from 'react'
import { useRouter } from "next/navigation";

export default function Refresh({refresh=false}) {
    
  const router = useRouter();
  if (refresh==true) {
    router.refresh();
  }
  return (
    <div className='absolute'>Refresh</div>
  )
}
