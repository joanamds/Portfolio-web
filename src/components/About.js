import React from 'react'; 
import foto from './fotojoana.jpeg';

class About extends React.Component{
    render(){
        return(
            <div className='aboutme'>
            <img src={foto} alt="foto da Joana" width="190px" className="minhafoto"></img>
            <h1>Joana Maria dos Santos</h1>
            <p>Tenho 25 anos, sou natural do Rio Grande do Sul. Me formei em Pedagogia em 2021 e atualmente estou estudando Desenvolvimento Web na Trybe!</p>
            </div>
        );
    }
}

export default About;