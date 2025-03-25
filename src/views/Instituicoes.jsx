import { MDBInput, MDBTooltip } from "mdb-react-ui-kit";
import { Button, Col, Row,  } from "react-bootstrap";
import InstituicoesTable from "../components/InstituicoesTable";
//import { Formik } from "formik";
import {ToastContainer} from "react-toastify";
import useInstituicao from '../context/InstituicoesContext';
import ModalAdicionarInstituicoes from "../components/ModalAdicionarInstituicoes";
import ModalEditarInstituicoes from "../components/ModalEditarInstituicoes";

const Instituicoes = () => {

  let {
    handleShowAdd
  
  } = useInstituicao();


  return (
    <>
      
      <div>Instituições</div>

      <ModalAdicionarInstituicoes/>
      <ModalEditarInstituicoes/>
      
      <div>
        <Row>
          <Col>
            <MDBInput label="Buscar" id="formControlSm" type="text" size="sm" />
          </Col>
          <Col>
            <MDBTooltip tag="span" wrapperClass="d-inline-block" title="Adicionar Propriedade">
              <Button onClick={handleShowAdd}>+</Button>
            </MDBTooltip>
          </Col>
        </Row>
      </div>
      
      <InstituicoesTable />

      <ToastContainer />
      
    </>
  );
};

export default Instituicoes;
