import { useContext } from "react";
import AuthContext from "../context/authcontext/AuthContext";


const useHookContext = () => {
    const context = useContext(AuthContext);
    return context;
}

export default useHookContext;