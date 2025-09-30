"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  return (
    <div
      className={cn(
        "bg-transparent relative text-xl  h-16 w-40 p-[1px] overflow-hidden ",
        otherProps.className
      )}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${rx} * 0.96)` }}
      >
        <motion.div
          className="flex-shrink-0 w-full h-full absolute inset-0 bg-[linear-gradient(90deg,#00ccb1,#7b61ff,#ffc414,#1ca0fb,#00ccb1)]"
          style={{
            borderRadius: `calc(${rx} * 0.96)`,
          }}
          initial={{
            rotate: 0,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: duration / 1000,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          otherProps.containerClassName
        )}
        style={{
          borderRadius: `calc(${rx} * 0.96)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    borderRadius?: string;
    children: React.ReactNode;
    as?: any;
    containerClassName?: string;
    borderClassName?: string;
    duration?: number;
  }
>(
  (
    {
      borderRadius = "1.75rem",
      children,
      as: Component = "button",
      containerClassName,
      borderClassName,
      duration,
      className,
      ...otherProps
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "bg-transparent relative text-xl h-16 w-40 p-[1px] overflow-hidden md:col-span-2 md:row-span-1",
          className
        )}
        {...otherProps}
      >
        <div
          className="absolute inset-0"
          style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
        >
          <MovingBorder duration={duration} rx={borderRadius} ry={borderRadius}>
            <div
              className={cn(
                "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
                containerClassName
              )}
              style={{
                borderRadius: `calc(${borderRadius} * 0.96)`,
              }}
            >
              {children}
            </div>
          </MovingBorder>
        </div>
      </Component>
    );
  }
);

Button.displayName = "Button";