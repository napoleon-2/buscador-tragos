import React, {createContext, useState, useEffect} from 'react';
import Axios from 'axios';

//crear el context
export const CategoriasContext = createContext();
//provider es donde se encuentran las funciones y el state

const CategoriasProvider = (props) => {
    //crear el state del context
    const [categorias, guardarCategorias] = useState([]);
    //ejecutar el llamado a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.freetogame.com/api/games'
        
            const categorias = await Axios.get(url);
            guardarCategorias(categorias.data[0])
            // console.log(categorias.data[0])
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