import React from 'react;'

 class SecaoMensagem extends Component {

    state = {
        texto: '',
    }

    onchangeMensagem = (e) => {
        console.log(e.target.value)
        this.setState({
            texto: e.target.value
        })
    }

    render() {

        return <div className={"container-mensagem"}>

            <input
                className={'input-usuario'}
                placeholder={'Usuário'}
                value={this.state.texto}
                onChange={this.onchangeMensagem}

            />


            <input
                className={'input-mensagem'}
                placeholder={'Mensagem'}
                value={this.state.texto}
                onChange={this.onchangeMensagem}

            />


            <button onClick={this.props.aoEnviar}>Enviar </button>
        </div>


    }

}

export default SecaoMensagem
