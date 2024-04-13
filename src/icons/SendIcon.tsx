import type { IconProps } from "../types";

export const SendIcon = ({ size, color }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path fill={color || "currentColor"} d="m2 21l21-9L2 3v7l15 2l-15 2z" />
  </svg>
);
