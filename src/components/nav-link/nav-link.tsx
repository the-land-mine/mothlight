import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

type NavLinkRenderProps = {
  isActive: boolean;
};

type Props = {
  href: string;
  children: (props: NavLinkRenderProps) => React.ReactNode;
};

const NavLink = ({ href, children, ...rest }: Props) => {
  const router = useRouter();

  console.log(router);

  const isActive = router.asPath === href;

  return (
    <Link href={href} {...rest}>
      {children({ isActive })}
    </Link>
  );
};

export default NavLink;
