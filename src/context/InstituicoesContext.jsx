import { createContext, useContext, useState } from 'react';
import * as Yup from 'yup';


const InstituicoesContext = createContext();

export function InstituicoesContextProvider({ children }) {

      const [instituicoes, setInstituicoes] = useState([]);

      const [showAdd, setShowAdd] = useState(false);
      const [showEdit, setShowEdit] = useState(false);
      const [editarInstituicao, setEditarInstituicao] = useState(null);

      const handleShowEdit = (instituicao) => {
        setEditarInstituicao(instituicao); 
        setShowEdit(!showEdit);
      };

      const handleShowAdd = (instituicao) => {
        setEditarInstituicao(instituicao);
        console.log("Chamando handleShowAdd", showAdd); 
        setShowAdd(!showAdd); 
      };
      
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
    
  
    let instituicoesInitialValues = {
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
    };
  
    
  
    return (
      <InstituicoesContext.Provider
        value={{
        instituicoes, 
        setInstituicoes,
        instituicoesInitialValues,
        schema,
        handleShowAdd,
        handleShowEdit,
        editarInstituicao,
        showAdd, 
        setShowAdd,
        setShowEdit,
        showEdit,

        }}
      >
        {children}
      </InstituicoesContext.Provider>
    );
  }
  
  export default function useInstituicao() {
    return useContext(InstituicoesContext);
  }