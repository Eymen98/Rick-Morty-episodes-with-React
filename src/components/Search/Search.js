import './Search.scss'


const Search = ({setSearch, setPageNumber}) => {
  return (
    <div>
      <form className='search d-flex justify-content-center gap-4 mb-5'>
          <input onChange={(e) =>{
            setPageNumber(1);
            setSearch(e.target.value);
          }} 
          type="text" className='d-flex justify-content-center' placeholder='Search for characters' />
      
          <button onClick={(e) => {
            e.preventDefault();
          }}
          className="btn btn-primary fs-5">Search</button>
      </form>
    </div>
    
  )
}

export default Search
