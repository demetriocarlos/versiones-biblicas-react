 
import { Link } from "react-router-dom"
import Bible from '../Bible/Bible.json'
import styles from './Navbar.module.css'
export const Navbar = () => {
  return (
    <>                   
                                 {/*bg-body-tertiary*/}
<nav className={ "navbar navbar-expand-lg  .bg-transparent"}>
 
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="bg-light  navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="  navbar-toggler-icon"></span>
    </button>
     
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
     
      <ul className="navbar-nav">
         
                 
         
        <li className={`${styles.media} dropdown`}>
          <a className="  text-light nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             versiones
          </a>
          <ul className={`${styles.media}  dropdown-menu`}   >

          <li className={`    dropdown-divider`}></li>
            <li  className={`${styles.scroll} overflow-y-scroll overflow-x-scroll`}>
              {Bible.map((x) => (
                <li className="    dropdown-item" key={x.id}> 

                <Link   className={`${styles.media}  dropdown-item`} to={`${x.ruta}`} >{x.version}</Link>
                <li><strong>{x.idioma} </strong></li>
                </li>
              ))}
            </li>
          </ul>
        </li>
         
      </ul>
       
    </div>
    
  </div>
   
</nav>
    </>
  )
}
