import { createContext } from "react";

export const DarkModeContext = createContext<{
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    isDarkMode: false,
    setIsDarkMode: () => { },
});