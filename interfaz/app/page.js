import Bienvenidad from "./componentes/bienvenidad";
import Tarjeta from "./componentes/productos";

const Inicio = () => {
  return (
    <>
    <Bienvenidad/>
    <Tarjeta titulo= "react" nombre= "John Doe" texto="hola" imagen="https://i0.wp.com/streetliftingacademy.com/wp-content/uploads/2023/04/dominadas-supinas-para-fuerza.jpg?fit=724%2C1024&ssl=1"/>
    <Tarjeta titulo= "dijango" nombre= "Danny Diaz" texto="hola" imagen="https://i0.wp.com/streetliftingacademy.com/wp-content/uploads/2023/04/dominadas-supinas-para-fuerza.jpg?fit=724%2C1024&ssl=1"/>
    <Tarjeta titulo="nextjs" nombre= "carlo P" texto= "hola" imagen="https://i0.wp.com/streetliftingacademy.com/wp-content/uploads/2023/04/dominadas-supinas-para-fuerza.jpg?fit=724%2C1024&ssl=1"/>
     
    </>
  )
}
export default Inicio;