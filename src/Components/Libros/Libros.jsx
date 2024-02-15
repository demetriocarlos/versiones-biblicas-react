 
 import styles from './Libros.module.css'

export const Libros = ({datos}) => {
  return (
    <div  className={` ${styles.scroll}   overflow-y-scroll  overflow-hidden`}> 

        {datos.map((book,index) =>(

           <div className={styles.grilla} key={index}> {book.name}
            
            {book.passages.map((y) =>(
            <div className={styles.passages} key={y.id}>
                <p>{/*y.content*/}</p>
                
                <strong><p className={styles.parrafo}>{y.reference}</p></strong> 
                <div className={styles.parrafo} dangerouslySetInnerHTML={{ __html: y.content }} />
            </div>
                ))}
        </div> 
        ))}

    </div>
  )
}
