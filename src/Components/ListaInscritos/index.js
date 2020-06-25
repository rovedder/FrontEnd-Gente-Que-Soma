import React, { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap'

import './styles.css'

const ListaInscritos = (props) => {

    const [inscritos, setInscritos] = useState([])

    useEffect(() => {
        setInscritos(props.inscritos)
    }, [props])

    return (
        <ListGroup>
            <ListGroupItem className="list-group-header">
                <Row>
                    <Col>
                        Nome
                    </Col>
                    <Col>
                        Cidade
                    </Col>
                </Row>
            </ListGroupItem>
            {
                inscritos.map((item, index) => 
                    <ListGroupItem key={ index }>
                        <Row>
                            <Col>
                                {item.nome}
                            </Col>
                            <Col>
                                {item.cidade}
                            </Col>
                        </Row>
                    </ListGroupItem>
                )
            }
        </ListGroup> 
    )
}

export default ListaInscritos