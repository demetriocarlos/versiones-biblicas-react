

 import { useEffect,useState } from "react";
 import axios from "axios";

 import styles from './BooksName.module.css'
 import { FaBookMedical } from "react-icons/fa";
 const API_URL ='https://api.scripture.api.bible/v1/bibles/'
 const API_KEY ='de38c3c9241888aa17df6f6a3f0958d2'

export const BookName = ({handleSelection}) => {
     
     
     

       
  return (
    <div> 
        <div className={styles.filters}>
                      
          <div className="dropdown">
            <button className="btn   btn-sm  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FaBookMedical className={styles.icono} />
            </button>
            {/**opciones de busqueda */}
            <ul className={`${styles.scroll}  dropdown-menu `}>

            <li> <strong ><p>puede o no aplicar<br /> para algunas<br />versiones </p></strong></li>
               

              <li><div className="dropdown-item" onClick={() =>  handleSelection(`genesis ${1}`)}>Genesiss</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`exodo ${1}`)}>Exodo</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`levitico ${1}`)}>Levitico</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`numeros ${1}`)}>Numeros</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`deuteronomio ${1}`)}>Deuteronomio</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`josue ${1}`)}>Josue</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`jueces ${1}`)}>Jueses</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`rut ${1}`)}>Rut</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`1 samuel ${1}`)}>1 Samuel</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`2 samuel ${1}`)}>2 samuel</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`1 Reyes ${1}`)}>1 Reyes</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`2 Reyes ${1}`)}>2 Reyes</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`1 Crónicas ${1}`)}>1 Crónicas</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`2 Crónicas ${1}`)}>2 Crónicas</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Esdras ${1}`)}>Esdras</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Nehemías ${1}`)}>Nehemías</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Ester ${1}`)}>Ester</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Job ${1}`)}>Job</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Salmos  ${1}`)}>Salmos</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Proverbios ${1}`)}>Proverbios</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Eclesiastés ${1}`)}>Eclesiastes</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Cantar de los Cantares  ${1}`)}>Cantar de los Cantares</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Jeremías  ${1}`)}>Jeremías</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Lamentaciones  ${1}`)}>Lamentaciones</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Ezequiel  ${1}`)}>Ezequiel</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Daniel  ${1}`)}>Daniel</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Oseas  ${1}`)}>Oseas</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Joel  ${1}`)}>Joel</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Amós  ${1}`)}>Amós</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Abdías  ${1}`)}>Abdías</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Jonás  ${1}`)}>Jonás</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Miqueas  ${1}`)}>Miqueas</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Nahúm ${1}`)}>Nahúm</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Habacuc ${1}`)}>Habacuc</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Sofonías ${1}`)}>Sofonías</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Hageo  ${1}`)}>Hageo</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Zacarías ${1}`)}>Zacarías</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Malaquías ${1}`)}>Malaquías</div></li>

              <li> <strong><div>Nuevo Testamento</div></strong></li>

              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Mateo ${1}`)}>Mateo</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Marcos  ${1}`)}>Marcos</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Lucas ${1}`)}>Lucas</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Juan ${1}`)}>Juan</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Hechos ${1}`)}>Hechos</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Romanos ${1}`)}>Romanos</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`1 Corintios  ${1}`)}>1 Corintios</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`2 Corintios ${1}`)}>2 Corintios</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Gálatas ${1}`)}>Gálatas</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Efesios ${1}`)}>Efesios</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Filipenses ${1}`)}>Filipenses</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Colosense ${1}`)}>Colosense</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`1 Tesalonicenses ${1}`)}>1 Tesalonicenses</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`2 Tesalonicenses ${1}`)}>2 Tesalonicenses</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`1 Timoteo ${1}`)}>1 Timoteo</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`2 Timoteo ${1}`)}>2 Timoteo</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Tito ${1}`)}>Tito</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Filemón ${1}`)}>Filemón</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Hebreos ${1}`)}>Hebreos</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Santiago ${1}`)}>Santiago</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`1 Pedro ${1}`)}>1 Pedro</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`2 Pedro ${1}`)}>2 Pedro</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`1 Juan ${1}`)}>1 Juan</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`2 Juan ${1}`)}>2 Juan</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`3 Juan ${1}`)}>3 Juan</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Judas ${1}`)}>Judas</div></li>
              <li><div className="dropdown-item" onClick={() =>  handleSelection(`Apocalipsis ${1}`)}>Apocalipsis</div></li>
            </ul>
          </div>
               

        </div>

    </div>
  )
}
