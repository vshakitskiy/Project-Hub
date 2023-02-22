import { IdeaContext } from "../context/IdeaContext";
import { useContext } from "react";

export const useIdeaContext = () => {
    const context = useContext(IdeaContext)

    if (!context) throw Error('useIdeaContext must be inside an IdeaContextProvider')

    return context
}