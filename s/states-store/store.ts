import React from "react";
import { PageStore } from "./states/page-store";

export const stores = Object.freeze({
	pageStore: new PageStore()
})

export const storesContext = React.createContext(stores)
export const StoresProvider = storesContext.Provider