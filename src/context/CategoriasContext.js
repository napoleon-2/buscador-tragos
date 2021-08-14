import React, {createContext, useState, useEffect} from 'react';
import Axios from 'axios';

//crear el context
export const CategoriasContext = createContext();
//provider es donde se encuentran las funciones y el state

const CategoriasProvider = (props) => {
    //crear el state del context
    const [categorias, guardatCategorias] = useState([]);
    //ejecutar el llamado a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://api.punkapi.com/v2/beers'
        
            const categorias = await Axios.get(url);
            guardatCategorias(categorias.data)
        }
        obtenerCategorias();
    }, [])
    return ( 
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider> 
     );
}
 
export default CategoriasProvider;