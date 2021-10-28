import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import ImageList from "./components/ImageList";
import logo from "./pixabaylogo.png"
import "./styles/ImageList.css";
import Footer from "./components/footer";

const App = () => {
  const[images,setImages] = useState([]);
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
  const onSearchSubmit = async(term) => {
    try{
      const params = {
        key: API_ENDPOINT ,
        q: term,
      };
      const response = await axios.get("https://pixabay.com/api/",{params});
      setImages(response.data.hits);
      if(response.data.total===0){
        window.alert("お探しの画像はありません");
      }
    }catch{
      window.alert("写真の取得に失敗しました");
    }
  };

  return(
    <div className="ui container" style={{ marginTop: "20px"}}>
      <h1>フリー素材検索</h1><img src={logo} alt="pixabay-logo" className="pixabay" />
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
      <Footer />
    </div>
  );
};

export default App;