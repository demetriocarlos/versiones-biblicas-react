
import style from './Search.module.css'
import { IoSearchSharp } from "react-icons/io5";

export const Search = ({searchInput, fetch}) => {
    const handleSearch = (event) =>{
        event.preventDefault();
        // eslint-disable-next-line react/prop-types
        console.log(searchInput.current.value)
         fetch()
      }

  return (
    <div> 
        <form  className={style.search} onSubmit={handleSearch}>
            <div className={style.searchBox}> 
                <input 
                className={style.searchInput}
                type="text" 
                placeholder="search bible"
                ref={searchInput}
                />
                <button className={style.searchButton} type="submit"> <IoSearchSharp size={20}/></button>
            </div>
        </form>
         
    </div>
  )
}
