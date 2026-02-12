import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React, { useState, useEffect } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MOTION_PROPS = [
  "initial",
  "animate",
  "exit",
  "whileInView",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileDrag",
  "transition",
  "viewport",
  "variants",
  "layout",
  "layoutId",
  "drag",
  "dragConstraints",
] as const;

function stripMotionProps(
  props: Record<string, unknown>,
): Record<string, unknown> {
  const cleaned = { ...props };
  for (const key of MOTION_PROPS) {
    delete cleaned[key];
  }
  return cleaned;
}

// Module-level cache for the resolved motion.div component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cached: React.ComponentType<any> | false | undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loadMotionDiv: Promise<React.ComponentType<any> | false> =
  import("framer-motion")
    .then((mod) => {
      cached = mod.motion.div;
      return cached;
    })
    .catch(() => {
      cached = false;
      return false;
    });

export type MotionDivProps = React.ComponentPropsWithRef<"div"> & {
  initial?: unknown;
  whileInView?: unknown;
  transition?: unknown;
  viewport?: unknown;
  animate?: unknown;
  [key: string]: unknown;
};

export const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(
  function MotionDiv(props, ref) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [MotionComponent, setMotionComponent] = useState<
      React.ComponentType<any> | false | undefined
    >(cached);

    useEffect(() => {
      if (MotionComponent === undefined) {
        loadMotionDiv.then((resolved) => setMotionComponent(() => resolved));
      }
    }, [MotionComponent]);

    // Still loading — render a plain div without motion props
    if (MotionComponent === undefined || MotionComponent === false) {
      const cleaned = stripMotionProps(props as Record<string, unknown>);
      return <div {...cleaned} ref={ref} />;
    }

    return <MotionComponent {...props} ref={ref} />;
  },
);
