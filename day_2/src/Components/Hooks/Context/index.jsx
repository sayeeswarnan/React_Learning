import { createContext, useState } from "react";

//Create the context
export const GlobalContext = createContext(null);


//create the global state that receipe component as childeren
function GlobalState({children}){

  const [theme,setTheme] = useState('light')

  function ChangetheTheme(){
    setTheme(theme === 'light' ? 'dark': 'light')
  }

    return <GlobalContext.Provider
    value={{theme,setTheme,ChangetheTheme}}
    >
        {children}
    </GlobalContext.Provider>
}

export default GlobalState;