import { MDBBtn, MDBIcon, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import PaginationComponent from "./PaginationComponent";
import PropTypes from "prop-types";
import { toast } from "react-toastify";


const InstituicoesTable = ({instituicoes, setInstituicoes}) =>{
    const [atualPage, setAtualPage] = useState(1);
    const itensPorPage = 15;

    const getInstituicoes = () =>{
        fetch("http://localhost:3000/instituicoes")
            .then((response) => response.json())
            .then((data) => {
                console.log("Dados recebidos:", data);
                setInstituicoes([...data]);
            })
            .catch((error) => {
                console.log("Deu erro!", error);
            });
    };

    useEffect(getInstituicoes,[setInstituicoes]);

    const indexUltimoItem = atualPage * itensPorPage;
    const indexPrimeiroItem = indexUltimoItem - itensPorPage;
    const itensAtuais = instituicoes.slice(indexPrimeiroItem, indexUltimoItem);

    const handleDelete = (event, id) => {
      event.preventDefault();
      //POST, PUT e DELETE
      fetch(`http://localhost:3000/instituicoes/${id}`, {
        method: 'delete',
        mode: 'cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then((response) => {
          if (response.ok) {
            setInstituicoes(instituicoes.filter((instituicao) => instituicao.id !== id));

             
          }

          toast.success("Instituicao apagada com sucesso!",{
            autoClose:500, 
            hideProgressBar:true, 
            newestOnTop:true, 
            closeOnClick:true, 
            draggable:true, 
           });
        })
        .catch((error) => {
          console.log("Deu erro!", error);
        });
    };

    return (
        <>

          <MDBTable hover>
            <MDBTableHead>
              <tr>
              <th scope="col">Região</th>
                <th scope="col">Estado</th>
                <th scope="col">Município</th>
                <th scope="col">Mesorregião</th>
                <th scope="col">Microrregião</th>
                <th scope="col">Entidade</th>
                <th scope="col">Matrícula Básica</th>
                <th scope="col">Matrícula Infantil</th>
                <th scope="col">Matrícula Fundamental</th>
                <th scope="col">Matrícula Médio</th>
                <th scope="col">Matrícula Médio Técnico</th>
                <th scope="col"></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {itensAtuais.map((instituicao, i) => {
                return (
                  <tr key={i}>
                    <td>{instituicao.NO_REGIAO}</td>
                    <td>{instituicao.NO_UF}</td>
                    <td>{instituicao.NO_MUNICIPIO}</td>
                    <td>{instituicao.NO_MESORREGIAO}</td>
                    <td>{instituicao.NO_MICRORREGIAO}</td>
                    <td>{instituicao.NO_ENTIDADE}</td>
                    <td>{instituicao.QT_MAT_BAS}</td>
                    <td>{instituicao.QT_MAT_INF}</td>
                    <td>{instituicao.QT_MAT_FUND}</td>
                    <td>{instituicao.QT_MAT_MED}</td>
                    <td>{instituicao.QT_MAT_MED_CT}</td>
                    <td>

                      {/*botoes */}
                      <MDBBtn floating tag="a" className="mx-2 mb-2" >
                        <MDBIcon fas icon="pen" />
                      </MDBBtn>
    
                      <MDBBtn floating tag="a" className="mx-2" color="danger" onClick={(event) => handleDelete(event,instituicao.id)}>
                        <MDBIcon fas icon="trash-alt" />
                      </MDBBtn>
                    </td>
                  </tr>
                );
              })}
            </MDBTableBody>
          </MDBTable>
    
          {/* Componente de Paginação abaixo da tabela */}
          <PaginationComponent
            totalItems={instituicoes.length}
            itensPorPage={itensPorPage}
            currentPage = {atualPage}
            onPageChange={setAtualPage}
          />
        </>
    );

};

InstituicoesTable.propTypes = {
    instituicoes: PropTypes.array,
    setInstituicoes: PropTypes.func,
};

export default InstituicoesTable;