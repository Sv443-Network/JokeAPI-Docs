import { ComponentProps } from "react";

type LinkProps = {
  href: string;
  children?: React.ReactNode;
} & Partial<ComponentProps<"a">>;

export function Link({ href, children, ...rest }: LinkProps) {
  return (
    <a {...{
      href,
      target: "_blank",
      rel: "noopener noreferrer",
      ...rest,
    }}>
      {children ?? href}
    </a>
  );
}
