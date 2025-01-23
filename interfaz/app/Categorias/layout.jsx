export const metadata = {
    title: "layout de titulo categorias 1",
    description: "aqui estan todas las categorias",
  };

import Navbar2 from "../componentes/navbar2";

export default function CategoriasLayout ({children}){
    return (
        <>

        <Navbar2/>
        {children}
        </>
    )
}
