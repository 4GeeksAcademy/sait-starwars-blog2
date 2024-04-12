
import React, { useContext,useEffect } from "react";
import { Context } from "../store/appContext";
import {useParams} from "react-router-dom";





const Details = () => {
	const { store,actions } = useContext(Context);
    const {id} = useParams()

    useEffect(() => {
        fetchcharacter()
    },[])

    const fetchcharacter = async () => {
        const character = await actions.loadPersonDetails(id)
        console.log({character,id})
    }

    return (

        <div class="card mb-3" style={{maxwidth: "540px"}}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{store?.charactersDetails?.name || ''}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    
    )
}

export default Details;