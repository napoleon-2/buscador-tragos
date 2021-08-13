import React, {createContext, useState} from 'react';

//crear el context
export const CategoriasContext = createContext();
//provider es donde se encuentran las funciones y el state

const CategoriasProvider = (props) => {
    //crear el state del context
    const [hola, guardarHola] = useState('hola')
    return ( 
        <CategoriasContext.Provider
            value={{
                hola
            }}
        >
            {props.children}
        </CategoriasContext.Provider> 
     );
}
 
export default CategoriasProvider;