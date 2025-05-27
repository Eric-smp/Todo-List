import React from "react";
import { cva, type VariantProps, cx } from "class-variance-authority";
import { textVariants } from "./text";

export const InputTextVariants = cva(
  "border-b border-solid border-gray-200 bg-transparent outline-none focus:border-pink-base",
  {
    variants: {
      size: {
        md: "pb-2 px-2",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },

    defaultVariants: {
      size: "md",
      disabled: false,
    },
  }
);

interface InputTextProps
  extends VariantProps<typeof InputTextVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export default function InputText({
  size,
  className,
  disabled,
  ...props
}: InputTextProps) {
  return (
    <input
      type="text"
      className={cx(
        InputTextVariants({ size, disabled }),
        textVariants(),
        className
      )}
      {...props}
    />
  );
}
