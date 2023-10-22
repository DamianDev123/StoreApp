"use client";
import React, { ReactNode , useState} from 'react'
import { Add, Sub } from './cal'
import Refresh from './Cart/Refresh';
import { createPortal } from 'react-dom';

interface Props {
    children?: ReactNode,
    className?: string,
    name?: string
    // any props that come into the component
}
export function AddButton({children, className,name}:Props ) {
  return (
    <form action={Add} className={className} >
        <input name="text" type="hidden" className="" value={name} />
        <button type="submit" >{children}</button></form>
  )
}
export function SubButton({children, className,name}:Props ) {
    return (
      <form action={Sub} className={className}>
        <input name="text" type="hidden" className="" value={name} />
          <button type="submit" >{children}</button></form>
    )
  }
  
