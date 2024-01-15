import { ComponentProps } from "react";

type LinkProps = {
  href: string;
  children?: React.ReactNode;
} & Partial<ComponentProps<"a">>;

export default function Link({ href, children, ...rest }: LinkProps) {
  try {
    new URL(href);
  }
  catch {
    throw new Error(`Invalid URL: ${href}`);
  }
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
