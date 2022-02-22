import { FC } from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

import ILogo from './Logo.types'

const Logo: FC<ILogo> = ({ className, ...rest }) => {
  return (
    <Link href="/">
      <a className={classnames(className)} {...rest}>
        <Image src="/assets/logo.svg" alt="logo" width={212} height={36} />
      </a>
    </Link>
  )
}

export default Logo
