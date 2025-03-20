import { MDBInput, MDBTooltip } from "mdb-react-ui-kit";
import { Button, Col, Form, Modal, Row,  } from "react-bootstrap";
import InstituicoesTable from "../components/InstituicoesTable";
import { Formik } from "formik";
import {ToastContainer, toast } from "react-toastify";
import useInstituicao from '../context/InstituicoesContext';

const Instituicoes = () => {

  let {
    instituicoes, 
    setInstituicoes,
    instituicoesInitialValues,
    schema,
    show,
    handleShow,
    setShow
  } = useInstituicao();

 
  const handleSubmit = (values, actions) => {
    //POST, PUT e DELETE
    fetch('http://localhost:3000/instituicoes', {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          
          toast.success('Instituição cadastrada com sucesso!');
          
          setInstituicoes([...instituicoes, values]);
          
          setShow(!show);
        }
      })
      .catch((error) => {
        console.log(error)
        toast.error('Problema no envio dos dados da instituição!');
      });

    actions.setSubmitting(false);
  };

  return (
    <>
      <div>Instituições</div>

      <div>
        <Row>
          <Col>
            <MDBInput label="Buscar" id="formControlSm" type="text" size="sm" />
          </Col>
          <Col>
            <MDBTooltip tag="span" wrapperClass="d-inline-block" title="Adicionar Propriedade">
              <Button onClick={handleShow}>+</Button>
            </MDBTooltip>
          </Col>
        </Row>
      </div>
      
      <InstituicoesTable />

      <ToastContainer />
      
      <Modal show={show} onHide={handleShow} size="lg" aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Cadastrar</Modal.Title>
        </Modal.Header>
        <Formik
         initialValues={{
           instituicoesInitialValues
         }} 
         validationSchema={schema}
          onSubmit={handleSubmit}>
          {({ values, errors, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Nome da Região</Form.Label>
                  <Form.Control 
                  type="text" 
                  name="NO_REGIAO" 
                  value={values.NO_REGIAO} 
                  onChange={handleChange} 
                  isInvalid={!!errors.NO_REGIAO}/>
                  
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Estado (UF)</Form.Label>
                  <Form.Control 
                  type="text" 
                  name="NO_UF" 
                  value={values.NO_UF} 
                  onChange={handleChange} 
                  isInvalid={!!errors.NO_UF}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Município</Form.Label>
                  <Form.Control type="text"
                    name="NO_MUNICIPIO"
                    value={values.NO_MUNICIPIO}
                    onChange={handleChange} 
                    isInvalid={!!errors.NO_MUNICIPIO}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mesorregião</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="NO_MESORREGIAO" 
                    value={values.NO_MESORREGIAO} 
                    onChange={handleChange} 
                    isInvalid={!!errors.NO_MESORREGIAO}/>

                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Microrregião</Form.Label>
                  <Form.Control type="text" 
                    name="NO_MICRORREGIAO" 
                    value={values.NO_MICRORREGIAO} 
                    onChange={handleChange} 
                    isInvalid={!!errors.NO_MICRORREGIAO}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Entidade</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="NO_ENTIDADE" 
                    value={values.NO_ENTIDADE} 
                    onChange={handleChange} 
                    isInvalid={!!errors.NO_ENTIDADE}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Matrícula Básica</Form.Label>
                  <Form.Control 
                    type="number" 
                    name="QT_MAT_BAS" 
                    value={values.QT_MAT_BAS} 
                    onChange={handleChange} 
                    isInvalid={!!errors.QT_MAT_BAS}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Matrícula Infantil</Form.Label>
                  <Form.Control 
                    type="number" 
                    name="QT_MAT_INF" 
                    value={values.QT_MAT_INF} 
                    onChange={handleChange} 
                    isInvalid={!!errors.QT_MAT_INF}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Matrícula Fundamental</Form.Label>
                  <Form.Control 
                    type="number" 
                    name="QT_MAT_FUND" 
                    value={values.QT_MAT_FUND} 
                    onChange={handleChange} 
                    isInvalid={!!errors.QT_MAT_FUND}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Matrícula Ensino Médio</Form.Label>
                  <Form.Control 
                    type="number" 
                    name="QT_MAT_MED" 
                    value={values.QT_MAT_MED} 
                    onChange={handleChange} 
                    isInvalid={!!errors.QT_MAT_MED}/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Matrícula Ensino Médio Técnico</Form.Label>
                  <Form.Control 
                    type="number" 
                    name="QT_MAT_MED_CT" 
                    value={values.QT_MAT_MED_CT} 
                    onChange={handleChange} 
                    isInvalid={!!errors.QT_MAT_MED_CT}/>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleShow}>
                  Fechar
                </Button>
                <Button variant="primary" type="submit">
                  Adicionar
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default Instituicoes;
