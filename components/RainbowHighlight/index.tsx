import React from "react";
import { RoughNotation } from "react-rough-notation";

type RainbowHighlightProps = {
  color: string;
  children: React.ReactNode;
};

export default function RainbowHighlight({
  color,
  children,
}: RainbowHighlightProps) {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(30 * (children as string).length);

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
}
  

