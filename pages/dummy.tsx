import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import TopUpModal from '../modals/TopUpModal'

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
    <TopUpModal isOpen={true} closeModal={()=>{}} onAdd={()=>{}} />
    </>
  )
}
