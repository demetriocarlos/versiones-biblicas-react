
 import styles from './Spinner.module.css'

export const Spinner = () => {
  return (
    <div> 
        <div className={`  text-center`} >
            <div className= {`${styles.spinner} spinner-border`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
  )
}
