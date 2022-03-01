/* eslint-disable @typescript-eslint/no-useless-constructor */
// <h2>{this.state.data.toLocaleTimeString()}.</h2>
import { Component } from "react";

class Componente extends Component<{}, { data: Date }> {
    private temporizador
    constructor(props) {
        super(props);
        this.state = {
            data: new Date()
        }
    }
    alteracao() {
        this.setState({
            data: new Date()
        })
    }
    componentDidMount() {
        this.temporizador = setInterval(
            () => this.alteracao(),
            1000
        );
    }
    render() {
        return (
            <div>
                <h1>Data e hora de agora</h1>
                <h2>
                    Data: {this.state.data.toLocaleDateString()}
                    <span> </span>
                    Hora: {this.state.data.toLocaleTimeString()}
                </h2>
            </div>
        );
    }
}
export default Componente

