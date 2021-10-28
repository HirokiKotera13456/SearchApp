import React,{useState} from "react";

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
        <label>画像検索</label>
        <input type="text" name="first-name" placeholder="" value={term} onChange={(event)=>{setTerm(event.target.value)}} />
      </div>
    </form>
    </div>
  );
};

export default SearchBar;