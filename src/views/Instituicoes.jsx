import { MDBInput, MDBTooltip } from "mdb-react-ui-kit";
import { useState } from "react";
import { Button, Col, Form, Modal, Row,  } from "react-bootstrap";
import InstituicoesTable from "../components/InstituicoesTable";
import * as Yup from "yup";
import { Formik } from "formik";
import {ToastContainer, toast } from "react-toastify";

const Instituicoes = () => {
  const [instituicoes, setInstituicoes] = useState([]);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);


  const schema = Yup.object().shape({
    NO_REGIAO: Yup.string().required("Campo obrigatório"),
    NO_UF: Yup.string().required("Campo obrigatório"),
    NO_MUNICIPIO: Yup.string().required("Campo obrigatório"),
    NO_MESORREGIAO: Yup.string().required("Campo obrigatório"),
    NO_MICRORREGIAO: Yup.string().required("Campo obrigatório"),
    NO_ENTIDADE: Yup.string().required("Campo obrigatório"),
    QT_MAT_BAS: Yup.number().min(0).integer(),
    QT_MAT_INF: Yup.number().min(0).integer(),
    QT_MAT_FUND: Yup.number().min(0).integer(),
    QT_MAT_MED: Yup.number().min(0).integer(),
    QT_MAT_MED_CT: Yup.number().min(0).integer(),
  });

 

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch("http://localhost:3000/instituicoes", {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setInstituicoes([...instituicoes,values ]);
        
        toast.success("Validando os dados...", {
          autoClose: 1800,
          hideProgressBar: false
        })
          
        setTimeout(() => {
          setShow(!show);
          toast.success("Instituição cadastrada com sucesso!", {
            autoClose: 2000,
            hideProgressBar: true
          });
        }, 2200);
        
      }
    } catch (error) {
      console.log("Erro ao enviar dados!", error);
      toast.error("Ocorreu um erro!")
    }
    setSubmitting(false);
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
      
      <InstituicoesTable 
      instituicoes={instituicoes} 
      setInstituicoes={setInstituicoes} 
      />

      <ToastContainer />
      
      <Modal show={show} onHide={handleShow} size="lg" aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Cadastrar</Modal.Title>
        </Modal.Header>
        <Formik
         initialValues={{
          NO_REGIAO: "",
          NO_UF: "",
          NO_MUNICIPIO: "",
          NO_MESORREGIAO: "",
          NO_MICRORREGIAO: "",
          NO_ENTIDADE: "",
          QT_MAT_BAS: "",
          QT_MAT_INF: "",
          QT_MAT_FUND: "",
          QT_MAT_MED: "",
          QT_MAT_MED_CT: "",
         }
         } 
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
