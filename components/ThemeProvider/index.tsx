"use client";

import React from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

type ThemeProviderProps = {
  attribute: string;
  children: React.ReactNode;
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
