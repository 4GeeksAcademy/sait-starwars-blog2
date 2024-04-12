
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";




const PeoplesCard = ({data,handleUpdateFavorites}) => {
    const {store,action} = useContext(Context)
    
    return(
        <div class="container">
            <div class="row">
                <div class="col" > 
                        <div class="card" style={{width: "18rem"}}>
                        <img src="..." class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{data.name}</h5>
                                <p class="card-text">{data.hair_color}</p>
                                <p class="card-text">{data.skin_color}</p>
                                <p class="card-text">{data.eye_color}</p>
                                <Link to= {`/person_details/${data.uid}`} class="btn btn-outline-primary">Learn More</Link>
                                <button style={{marginLeft:"60px"}} onClick={() => handleUpdateFavorites(data,"people")} class="btn btn-outline-warning">
                                    like
                                </button>
                            </div>
                        </div>
                    </div>

            </div>
            
                
            
                 
        </div>
   
    )
};
	


export default PeoplesCard;