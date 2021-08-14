import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
    const [recetas, guardarRecetas] = useState([]);
    const [busqueda, buscarRecetas] = useState({
        nombre: '',
        categoria: ''
    })

    const [consultar, guardarConsultar] = useState(false);
    const {nombre, categoria} = busqueda;

    useEffect(() => {
        if(consultar){
            const obtenerRecetas = async () => {
                const url = `https://api.punkapi.com/v2/beers?beer_name=${nombre}&food=${categoria}`
            
                console.log(url)
            }
            obtenerRecetas();  
        }
        
    }, [busqueda]);

    return ( 
        <RecetasContext.Provider
            value={{
                buscarRecetas,
                guardarConsultar   
            }}
        >
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;