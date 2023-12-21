import { Button } from '@radix-ui/themes'
import { IoMdAddCircle } from "react-icons/io";
import Link from 'next/link'
import React from 'react'

const IssuePage = () => {
  return (
    <div>
      <Button><IoMdAddCircle/><Link href={'/issues/new'}>New Issue</Link></Button>
    </div>
  )
}

export default IssuePage
