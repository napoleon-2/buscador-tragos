import React, {useContext, useState} from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    });


    const {categorias} = useContext(CategoriasContext);
    const {buscarRecetas, guardarConsultar} = useContext(RecetasContext);

    //funcion para leer contenidos
    const obtenerDatos = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    console.log(categorias)
    return ( 
        <form className="col-12"
              onSubmit={e => {
                  e.preventDefault();
                  buscarRecetas(busqueda);
                  guardarConsultar(true);
              }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoria o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por nombre"
                        onChange={obtenerDatos}
                    />
                </div>

                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatos}
                    >
                      <option value="">
                          Seleccione Categoria
                      </option>
                      {categorias.map(categoria => (
                          <option key={categoria.tagline}
                                  value={categoria.tagline} 
                           >{categoria.tagline}</option>       
                      ))}      
                    </select>
                </div>

                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Tragos"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;