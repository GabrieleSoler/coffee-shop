import React, { ReactNode, createContext, useState } from 'react'  

type FilterContextData = {
  filter: number | null;
  getFilter: Function;
}

export const FilterContext = createContext<FilterContextData>({} as FilterContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<number | null>(null)

  function getFilter(value: number) {
    if (!value) return
    setFilter(value);
  }

  return (
    <FilterContext.Provider value={{filter, getFilter}}>
      {children}
    </FilterContext.Provider>
  )
}
