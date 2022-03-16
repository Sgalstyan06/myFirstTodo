import { useState } from "react"

function Search({saerchField}){
    
    return(
        <div>
            Search
            <input type="text" onChange = {(e)=>{
                saerchField(e.target.value);
            }}/>
        </div>
    )
}
export default Search;