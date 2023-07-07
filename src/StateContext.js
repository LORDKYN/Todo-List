import { createContext , useState } from "react";

const StateContext = createContext()

export const StateContextProvider = ({children}) => {

        const [data , setData] = useState([
            { id : 1 , title : "Somke Til Im High"   , important : true , },
            { id : 2 , title : "Drink Till Im Drunk"   , important : false , },
            { id : 3 , title : "Crossing On The Hills"   , important : true , },
            { id : 4 , title : "Wake Up In The Sky" ,  important : false , }
        ])
    return(
        <StateContext.Provider value={{data , setData}} >
            {children}
        </StateContext.Provider>
    )
}
export default StateContext;
