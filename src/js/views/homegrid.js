import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PeoplesCard from "../component/peoplescard.js";
import PlanetsCard from "../component/planetscard.js";
import VehiclesCard from "../component/vehiclescard.js";
import "./spacecard.css"





const HomeGrid = () => {
	const { store,actions } = useContext(Context);
    
    const handleUpdateFavorites = (item,category) => {
        item["category"] = category
        let itemIsIncluded = store.favorites.includes (item)
        if (itemIsIncluded) {
            actions.deleteFavorite (item)
        }
        else {
            actions.addFavorite (item)
        }
    }

   
    return (

        <div class="container">
          
            <div>
                <h1 style={{ color: 'hotpink' }}>characters</h1>
                    <div class="spacecard">
                    {store.characters.map((character,index) => (
                        <div key = {index} >

                            <PeoplesCard data = {character} handleUpdateFavorites = {handleUpdateFavorites}/>


                        </div>

                    ))}

                    </div>
                
            </div>
            
            <div>
                <h1 style={{ color: 'hotpink' }}>Planets</h1>
                <div class="spacecard">
                {store.planets.map((planet,index) => (
                    <div key = {index}>

                        <PlanetsCard data = {planet} handleUpdateFavorites = {handleUpdateFavorites}/>

                    </div>

                ))}

                </div>
                
            </div>
            <div>
                <h1 style={{ color: 'hotpink' }}>Vehicles</h1>
                <div class="spacecard">
                {store.vehicles.map((vehicle,index) => (
                    <div key = {index}>

                        <VehiclesCard data = {vehicle} handleUpdateFavorites = {handleUpdateFavorites}/>

                    </div>

                ))}

                </div>
                
            </div>
        </div>
    )
};

export default HomeGrid;