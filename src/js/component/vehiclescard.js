import React, { useContext } from "react";
import { Context } from "../store/appContext";


const VehiclesCard = ({data,handleUpdateFavorites}) => {
    const {store,action} = useContext(Context)
    const changePage = () => {
        navigate("/persondetails");
    }
    return(
        <div class="container">
            <div class="row">
                <div class="col"> 
                    <div class="card" style={{width: "18rem"}}>
                     <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{data.name}</h5>
                            <p class="card-text">{data.model}</p>
                            <p class="card-text">{data.vehicle_class}</p>
                            <p class="card-text">{data.manufacturer}</p>
                            <a onClick={changePage} class="btn btn-primary ">Go somewhere</a>
                            <button onClick={() => handleUpdateFavorites(data,"vehicle")} class="btn btn-outline-warning">like</button>
                            
                        </div>
                    </div>
                </div>
            </div>
                 
        </div>
   
    )
};
	


export default VehiclesCard ;