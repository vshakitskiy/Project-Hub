import { createContext, useReducer } from 'react'

export const IdeaContext = createContext()

export const ideaReducer = (state, action) => {
    switch (action.type) {
        case 'SET_IDEAS':
            return {
                ideas: action.payload,
            }
        case 'POST_IDEA':
            return {
                ideas: [action.payload, ...state.ideas]
            }
        default:
            return state
    }
}

export const IdeaContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ideaReducer, {
        ideas: null
    })

    return (
        <IdeaContext.Provider value={{...state, dispatch}}>
            { children }
        </IdeaContext.Provider>
    )
}