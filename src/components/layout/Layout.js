import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
//Um codigo JSX precisa ter um elemento root amarrando a si mesmo.
//Resolvemos isso adicionando o AUX;
const layout = ( props ) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className = {classes.Conteudo}>
        {props.children}
        </main>
    </Aux>
);
export default layout;