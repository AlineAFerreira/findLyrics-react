import React, {Component} from 'react';
import Display from './Display';
import PassoForm from './PassoForm';
import Buttons from './Buttons';

class Contador extends Component {
    state = {
        numero: 2,
        passo: 1
    }

    mais = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    menos = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }
     
    updatePasso = (number) => {
        this.setState({
            passo: number
        })
    }

    render () {
        return (
            <div>
                <p>Contador</p>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} update={this.updatePasso}/>
                <Buttons incrementar={this.mais} decrementar={this.menos}/>
            </div>
        );
    }
}

export default Contador;
