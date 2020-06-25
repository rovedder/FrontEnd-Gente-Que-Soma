import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

import './styles.css'

const FormAdicionaInscrito = (props) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cidade, setCidade] = useState('')

    const onHandleChange = (event) => {
        switch(event.target.name) {
            case "nome":
                setNome(event.target.value)
                break
            
            case "email":
                setEmail(event.target.value)
                break
            
            case "cidade":
                setCidade(event.target.value)
                break

            default:
                break
        }
    }

    const adicionaInscrito = () => {
        const novoInscrito = {
            nome,
            email,
            cidade
        }

        props.adicionaInscrito(novoInscrito)

        setNome('')
        setEmail('')
        setCidade('')
    }

    return (
        <Container>
            <Form.Group>
                    <Form.Control 
                    type="text"
                    placeholder="Nome"
                    name="nome"
                    value={ nome }
                    onChange={ onHandleChange }
                    autoComplete="nope"
                >   
                </Form.Control>
            </Form.Group>

            <Form.Group>
                    <Form.Control 
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    value={ email }
                    onChange={ onHandleChange }
                    autoComplete="nope"
                >   
                </Form.Control>
            </Form.Group>

            <Form.Group>
                    <Form.Control 
                    type="text"
                    placeholder="Cidade"
                    name="cidade"
                    value={ cidade }
                    onChange={ onHandleChange }
                    autoComplete="nope"
                >   
                </Form.Control>
            </Form.Group>

            <Button className="btn-form" onClick={ adicionaInscrito }>
                Inscrever-se
            </Button>
        </Container>
    )
}

export default FormAdicionaInscrito