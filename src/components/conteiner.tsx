import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const containerVariants = cva("mx-auto", {
  variants: {
    size: {
      md: "max-w-[31.5rem] px-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface ContainerProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof containerVariants> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({
  as = "div",
  children,
  className,
  ...props
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: containerVariants({ className }),
      ...props,
    },
    children
  );
}
