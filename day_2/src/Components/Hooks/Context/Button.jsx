import { useContext } from "react";
import { GlobalContext } from ".";

function ContextButtonComponent(){

    const { ChangetheTheme } = useContext(GlobalContext);
  
    return <button
     onClick={ChangetheTheme}
    >change Theme</button>
}
export default ContextButtonComponent;