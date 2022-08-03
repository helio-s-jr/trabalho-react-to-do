import React, {Component} from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1{
        color: white;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    body{
        background-color: blueviolet;
    }
    
    input{
        padding: 0.5rem;
        outline: none;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 300px;
`

const AddButton = styled.button`
    padding: 0.5rem;
`

export default class Tarefas extends Component{

    state = {
        tarefa: "",
        listaTarefas: []
    }

    buscarTarefas = (event) => {
        this.setState({
            tarefa: event.target.value
        })
    }

    addTarefas = () => {
        if(this.state.tarefa.length > 0){
            this.setState(
                {
                    listaTarefas: this.state.listaTarefas.concat({
                        tarefa: this.state.tarefa,
                        id: Date.now()
                    }),
                    tarefa: ""
                }
            
            )
        }
    }

    removerTarefa = (id) => {
        this.setState({
            listaTarefas: this.state.listaTarefas.filter((item) => {
                return item.id !== id
            })
        })
    }

    render(){
        return(
            <Container>
                <GlobalStyle/>
                <h1>Lista de Tarefas</h1>
                <div>
                    <input onChange={this.buscarTarefas} value={this.state.tarefa} />
                    <AddButton onClick={this.addTarefas}>Adicionar</AddButton>
                </div>

                <section>
                    {this.state.listaTarefas.map((item) => (
                            <div key={item.id}>
                                <p>{item.tarefa}</p>
                                <button onClick={() => this.removerTarefa(item.id)}>Excluir tarefa</button>
                            </div>
                        ))}
                </section>
            </Container>
        )
    }
}