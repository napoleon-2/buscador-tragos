
import React, {useContext, useState} from 'react';
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({receta}) => {
    // configuracion del modal  de material 
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false); 

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false); 
    }

    //extraer los valores del context 
    const {informacion, guardarIdReceta, guardarReceta} = useContext(ModalContext);
    //muestra y formatea los ingredientes
    const mostrarIngredientes = informacion => {
        let ingredientes = [];
        for(let i = 1; i < 16; i++){
            if(informacion[`{i}`]){
                ingredientes.push(
                    <li>{informacion[`{i}`]} 
                    {informacion[`${i}`]}
                    </li>
                )
            }
        }
        return ingredientes;
    }
    
    return ( 
        <div className="col-md4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.id}</h2>

                <img className="card-img-top" src={receta.thumbnail} alt={`imagen de ${receta.title}`} />

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            guardarIdReceta(receta.id)
                        }}
                    >
                        Ver Receta
                    </button>
                        <Modal 
                            open={open}
                            onClose={() => {
                                guardarIdReceta(null)
                                guardarReceta({})
                                
                                handleClose()

                            }}
                        >
                            <div style={modalStyle} className={classes.paper}>
                                <h2>{informacion}</h2>
                                <h3 className="mt-4">instrucciones</h3>
                                <p>{informacion}</p>
                                <img className="img-fluid my-4" src={informacion}/>

                                <h3>Ingredientes y cantidades</h3>
                                <ul>
                                    {mostrarIngredientes(informacion)}
                                </ul>
                            </div>
                        </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Receta;