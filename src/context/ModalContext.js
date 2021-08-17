import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

//crear el context

export const ModalContext = createContext();

const ModalProvider = (props) => {
    //state del provider
    const [idReceta, guardarIdReceta] = useState(null);
    const [informacion, guardarReceta] = useState({});

    
    // una vez que tenemos una receta, llamar a la api
    useEffect(() => {
        const obtenerReceta = async () => {
            if(!idReceta) return;
            const url = `https://www.freetogame.com/api/game?id=${idReceta}`;

            const resultado = await axios.get(url);
            guardarReceta(resultado);

        }
        obtenerReceta();
    }, [idReceta])
    
    return ( 
        <ModalContext.Provider
            value={{
                informacion,
                guardarIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;