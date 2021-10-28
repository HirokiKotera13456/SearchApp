import React,{useState} from "react";
import axios from "axios";

const SearchBar = ({onSubmit}) => {
   const[term,setTerm] =useState("");
   const onFormSubmit = (event) => {
     event.preventDefault();
     onSubmit(term);
   }
  return(

    <div className="ui segment ">
    <form onSubmit={onFormSubmit} className="ui form">
      <div className="field">
        <label>Image Search</label>
        <input type="text" name="first-name" placeholder="" value={term} onChange={(event)=>{setTerm(event.target.value)}} />
      </div>
    </form>
    </div>
  );
};

export default SearchBar;