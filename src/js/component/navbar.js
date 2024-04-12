import React,{useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "./navbar.css"

export const Navbar = () => {
  const {store,actions} = useContext (Context)




	return (		
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="" width="100" height="60" />
    <div class="collapse navbar-collapse" id="dropdown">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle btn btn-primary " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }} >
            favorites
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              {store.favorites.filter((item)=>item.category === "people").map((item)=>{
                return(
                  <div class="d-flex">
                    <p>{item.name}</p>
                    <button onClick={()=> actions.deleteFavorite(item.name)}>x</button>
                  </div>
                )
              })} 
            </li>
            <li>
              {store.favorites.filter((item)=>item.category === "planet").map((item)=>{
                return(
                  <div class="d-flex">
                    <p>{item.name}</p>
                    <button onClick={()=> actions.deleteFavorite(item.name)}>x</button>
                  </div>
                )
              })} 
            </li>
            <li>
              {store.favorites.filter((item)=>item.category === "vehicle").map((item)=>{
                return(
                  <div class="d-flex">
                    <p>{item.name}</p>
                    <button onClick={()=> actions.deleteFavorite(item.name)}>x</button>
                  </div>
                )
              })} 
            </li>
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
};
