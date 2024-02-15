

 import styles from './Verses.module.css'

export const Verses = ({datos,}) => {
  return (
    <div className={styles.grilla} > 
    <div className={` ${styles.scroll}   overflow-y-scroll  overflow-hidden`}> 
      { datos.map((book) => (
        <div key={book.id}  > 

         

        {book.verses.map((x) =>(
          <div className={styles.passages} key={x.id}>
              <strong><p className={styles.parrafo}>{x.reference}</p></strong>
              <p className={styles.parrafo}>{x.text}</p>

          </div>

    ))}

    

    </div>
      ))}
</div>

    </div>
  )
}
