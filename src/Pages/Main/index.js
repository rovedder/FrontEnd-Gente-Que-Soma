import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Container, Row, Col } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'

import ListaInscritos from "../../Components/ListaInscritos"
import FormAdicionaInscrito from '../../Components/FormAdicionaInscrito'

const Main = () => {

    const [inscritos, setInscritos] = useState([])
    
    useEffect(() => {
        const BuscarInscritosIniciais = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            const { data } = response

            const inscritosIniciais = []

            data.map(item => inscritosIniciais.push({ nome: item.name, email: item.email, cidade: item.address.city }))

            setInscritos(inscritosIniciais)
        }
        BuscarInscritosIniciais()
    }, [])

    useEffect(() => {
        if(inscritos.length !== 0) {
            toast.dark('Novo Inscrito!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            })
        }
    }, [inscritos])

    const adicionaInscrito = (novoInscrito) => {
        setInscritos(estadoAntigo => [...estadoAntigo, novoInscrito])
    }

    return (
        <Container className="mt-5 mb-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <FormAdicionaInscrito adicionaInscrito={ adicionaInscrito } />
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <h3>Lista de pessoas inscritas</h3>
                    <ListaInscritos inscritos={ inscritos } />
                </Col>
            </Row>
            <ToastContainer newestOnTop />
        </Container>
    )
}

export default Main