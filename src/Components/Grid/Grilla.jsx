
import axios from "axios"
import { useRef,useEffect, useState, } from "react"
import { Search } from "../Search/Search"
import { Libros } from "../Libros/Libros"
import { Verses } from "../Verses/Verses"
import { BookName } from "../BookName/BookName"
import styles from './Grid.module.css'
import { Spinner } from "../Spinner/Spinner"

 

const API_URL ='https://api.scripture.api.bible/v1/bibles/'
 
 
export const Grilla = ({bibleId,version}) => {

  const searchInput = useRef(null)
  const [datos,setDatos]= useState([])
  const [errorMsg , setErrorMsg] = useState("")
   
  const [isLoading, setIsLoading] = useState(false)

   
    const fetch = async () => {
       
      try{ 
        if (searchInput.current.value) {
         setIsLoading(true)
         setErrorMsg('')
      const {data} = await axios.get(
        `${API_URL}${bibleId}/search?query=${searchInput.current.value}`,
        {
          headers: {
            'api-key': import.meta.env.VITE_API_KEY,
          },
          /*params: {
            Search: searchInput.current.value,
          },*/
        }
      );
          //${API_URL}${BIBLE_ID}/books/GEN/chapters/3
        //${API_URL}${BIBLE_ID}/search?query=${searchInput.current.value}
         
      setDatos([data.data])
      setIsLoading(false)
    }
    }catch (error) {
       
      setErrorMsg("Ingrese un valor valido.")
      console.log('error')
      setIsLoading(false)
    }
    }


    useEffect(() => {
       
      fetch()
       
    },[bibleId, searchInput]);


     
     
     //funcion para seleccionar opcion de busqueda
    const handleSelection = (selection) =>{
        searchInput.current.value = selection
        fetch()
    }
    
    console.log(datos)
     
     
  return (
    <div>
      <h2 className={styles.titulo}>Versiones Biblicas</h2>   
         
         <h3 className={styles.version}>{version}</h3>
            {/*busquedas */}
            <Search searchInput={searchInput} fetch={fetch}/>

            {/**mensaje de error */}
            {errorMsg && <p className={styles.error}>{errorMsg}</p>}

            {/**filters de los libros */}
            <BookName  handleSelection={handleSelection}/>

           
          {/*<h3 className={styles.version}>{bibleId}</h3>*/}

             
        
        {isLoading ? (
          <Spinner/>
        ) : ( 

    <div className={styles.grilla}> 
 
      {datos.map((book) => (
        <div key={book.id}> {book.name}
             
        {book.total === 0 ? (
            <p className={styles.error}>resultados encontrados 0</p>// Muestra el mensaje de error si book.total es 0
            ) : (
            book.verses ? (
               //componente que retorna palabras relacionadas
              <Verses datos={datos} />
            ) : (
              //componente que retorna los libros 
            <Libros datos={datos} />
              )
        )}

            {/*
               book.verses ? <Verses errorMsg={errorMsg} datos={datos} /> : <Libros datos={datos} />
            */}

        </div>
      ))}

  </div>
    )}


    </div>
  )
}
