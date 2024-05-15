import { createContext, useContext } from "react";

// setting default values
export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: ()=>{},
    lightTheme: ()=>{}
});

// exporting provider wrapper from our ThemeContext
export const ThemeProvider = ThemeContext.Provider;

// making a custom hook to acces the context
export default function useTheme(){
    return useContext(ThemeContext)
}