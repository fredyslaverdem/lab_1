import React from 'react';
import '../estilos/perfil.css';

function Perfil(props){
    return(
        <div className='contenedor-perfil'>
            <img className='imagen-perfil'
            src={require(`../imagenes/perfil-${props.imagen}.png`)}
            alt='Foto de desarrollador' />
        <div className='contenedor-texto-perfil'>
            <p className='nombre-perfil'>
               <strong>{props.nombre}</strong> del direcctor {props.direcctor}
            </p>
        <p className='cargo-perfil'>
            {props.cargo} asignado <strong>{props.empresa}</strong>
        </p>
        <p className='texto-perfil'>"{props.perfil}" </p>
        </div>
    </div>
    );
}


export default Perfil;