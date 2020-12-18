import React, { Component } from 'react'
import './SecaoMensagem.css'

class SecaoMensagem extends Component {

    state = {
        mensagem: [

            {

                usuario: '',
                texto: ''
            },

        ],

        valorInputUsuario: '',
        valorInputTexto: ''



    };


    onchangeUsuario = (e) => {
        console.log(e.target.value)
        this.setState({
            valorInputUsuario: e.target.value


        })
    }

    onchangeMensagem = (e) => {
        console.log(e.target.value)
        this.setState({
            valorInputTexto: e.target.value
        })
    }

    adiconaMensagem = () => {
        const novaMensagem = {

            usuario: this.state.valorInputUsuario,
            texto: this.state.valorInputTexto
        }

const novasMensagens = [...this.state.mensagem,novaMensagem]
         
        this.setState({mensagem:novasMensagens})


    }




    render() {

        const imprimirMensagem = this.state.mensagem.map((mensagem) => {

            return (

                <p>
                    {mensagem.usuario} : {mensagem.texto}

                </p>
            );
        });


        return <div className={"container-mensagem"}>

    <div> {imprimirMensagem}</div>

            <input
                className={'input-usuario'}
                placeholder={'Usuário'}
                value={this.state.valorInputUsuario}
                onChange={this.onchangeUsuario}

            />


            <input
                className={'input-mensagem'}
                placeholder={'Mensagem'}
                value={this.state.valorInputTexto}
                onChange={this.onchangeMensagem}

            />


            <button onClick={this.adiconaMensagem}>Enviar </button>
        </div>


    }

}

export default SecaoMensagem
