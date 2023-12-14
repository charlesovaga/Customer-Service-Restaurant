import {Row, Col, Container} from "react-bootstrap"

const FormContainer = ({children}) => {
  return (
    <Container>
        <Row className="jusity-content-md-center">
            <Col xs={12} md={6}>
                {children}
            </Col>
        </Row>
    </Container>
  )
}

export default FormContainer