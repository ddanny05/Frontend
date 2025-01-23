import Link from "next/link";
const Navbar = () => {
    return (
        <div>
           <Link href="/Categorias">
           Categorias           
           </Link>
            <Link href="/Productos">
            Productos           
            </Link>
           
        </div>
    )
    
}
export default Navbar;