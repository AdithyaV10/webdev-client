"use client";
import { createContext, useContext } from "react";
export const ModuleState = createContext({ collapsed: false, setCollapsed: (_value: boolean) => { void _value; }, expansion: 0, published: true });
export const useModuleState = () => useContext(ModuleState);
