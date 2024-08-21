import { chakra, PropsOf } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { NavItem } from '@saas-ui/react'

type SidebarLinkProps = PropsOf<typeof chakra.a> & {
  href?: string
  icon?: React.ReactElement
}

const SidebarLink = (props: SidebarLinkProps) => {
  const { href, icon, children, ...rest } = props

  const { asPath } = useRouter()
  const isActive = asPath === href

  const isDisabled = !href

  let link = (
    <NavItem
      isActive={isActive}
      variant="neutral"
      color="muted"
      _active={{
        color: 'inherit',
        fontWeight: 'medium',
      }}
      _hover={{
        color: 'inherit',
        bg: 'blackAlpha.100',
        _dark: {
          bg: 'whiteAlpha.100',
        },
      }}
      {...rest}
    >
      {children}
    </NavItem>
  )

  if (href) {
    link = (
      <NextLink href={href} passHref legacyBehavior>
        {link}
      </NextLink>
    )
  }

  return link
}

export default SidebarLink
