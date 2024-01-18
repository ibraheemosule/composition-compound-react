import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export const CardContext = createContext<{
  service: string;
  setService: Dispatch<SetStateAction<string>>;
} | null>(null);

export const useCardContext = () => {
  const context = useContext(CardContext);

  if (!context) throw 'Component must be used within the Card component Scope';
  return context;
};
