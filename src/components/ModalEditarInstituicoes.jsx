import { toast } from "react-toastify";
import useInstituicao from "../context/InstituicoesContext";
import { Button, Form, Modal,  } from "react-bootstrap";
import { Formik } from "formik";

const ModalEditarInstituicoes = () =>{

    let {
        instituicoes, 
        setInstituicoes,
        schema,
        showEdit, 
        setShowEdit,
        editarInstituicao,
        handleShowEdit,
      } = useInstituicao();

    const handleUpdate = (values, actions) => {
        fetch(`http://localhost:3000/instituicoes/${values.id}`, {
          method: 'PUT',
          mode: 'cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
          .then((response) => {
            if (response.ok) {
              toast.success('Instituição atualizada com sucesso!');
              setInstituicoes(
                instituicoes.map((inst) => (inst.id === values.id ? values : inst))
              );
              setShowEdit(!showEdit);
            }
          })
          .catch((error) => {
            console.log(error);
            toast.error('Erro ao atualizar a instituição!');
          });
      
        actions.setSubmitting(false);
      };

      return (
        <>
        
          
          <Modal show={showEdit}
            onHide={handleShowEdit} 
            size="lg" 
            aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">Cadastrar</Modal.Title>
            </Modal.Header>
            <Formik
             initialValues={editarInstituicao }
             validationSchema={schema}
    
             onSubmit={handleUpdate}
            
              >
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
                      isInvalid={!!errors.NO_REGIAO}//faz o campo ficar vermelho
                      />
                      
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
                    <Button variant="secondary" onClick={handleShowEdit}>
                      Fechar
                    </Button>
                    <Button variant="primary" type="submit">
                       Salvar Alterações
                    </Button>
                  </Modal.Footer>
                </Form>
              )}
            </Formik>
          </Modal>
        </>
      );
};
export default ModalEditarInstituicoes;