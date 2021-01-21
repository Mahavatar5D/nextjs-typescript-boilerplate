/* eslint-disable no-use-before-define */
import React from 'react'
import Link, { LinkProps } from 'next/link'

interface AppLinkProps extends LinkProps {
  href: string;
  label: string;
}

const AppLink: React.FC<AppLinkProps> = ({ href, label }: AppLinkProps) => {
  return (
    <Link href={href}>
      <a>{label}</a>
    </Link>
  )
}

export default AppLink
