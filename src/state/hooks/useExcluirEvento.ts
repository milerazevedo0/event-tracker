import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../atom"


const useExcluirEvento = () =>{
    const setListaEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
    return(evento: IEvento)=>{
        setListaEventos((listaAntiga) => [
            ...listaAntiga.filter(evt => evento.id !== evt.id)
          ])
    }
}

export default useExcluirEvento