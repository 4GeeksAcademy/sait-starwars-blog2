const getState = ({ getStore, getActions, setStore }) => {
	/*
	//People
	{
		name: anakin
		age: 22
	}
	//Planets
	{

	}
	//Vehicles
	{
		model: 
	}
	*/
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: JSON.parse(localStorage.getItem("favorites")) || [],
			charactersDetails: {},
			planetsDetails: {},
			vehiclesDetails: {},
		},
		actions: {
			loadStarWarsPeople: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/people')
					const data = await response.json()
					if (data?.message !== 'ok') throw Error

					const promises = data.results.map(person => fetch(person.url))
					const responses = await Promise.all(promises);
					const finalizedData = await Promise.all(responses.map(response => response.json()));
					const formattedData = finalizedData.map(response => {
						return { 
							description: response.result.description,
							uid: response.result.uid,
							...response.result.properties
						}
					})
					setStore({ characters: formattedData })
				} catch(e) {
					console.error(e)
				}
			},
			loadPersonDetails: async (uid) => {
				const response = await fetch (`https://www.swapi.tech/api/people/${uid}`)
				if(!response.ok){
					throw new Error('fail to fetch person details', error)
				}

				const data = await response.JSON()
				console.log({data})
				setStore ({charactersDetails: data?.result?.properties})


			},
			// Finish these functions!
			loadStarWarsPlanets: async () => {

				try {
					const response = await fetch('https://www.swapi.tech/api/planets')
					const data = await response.json()
					if (data?.message !== 'ok') throw Error

					const promises = data.results.map(planet => fetch(planet.url))
					const responses = await Promise.all(promises);
					const finalizedData = await Promise.all(responses.map(response => response.json()));
					const formattedData = finalizedData.map(response => {
						return { 
							description: response.result.description,
							uid: response.result.uid,
							...response.result.properties
						}
					})
					setStore({ planets: formattedData })
				} catch(e) {
					console.error(e)
				}
			},
			loadStarWarsVehicles: async () => {

				try {
					const response = await fetch('https://www.swapi.tech/api/vehicles')
					const data = await response.json()
					if (data?.message !== 'ok') throw Error

					const promises = data.results.map(vehicle => fetch(vehicle.url))
					const responses = await Promise.all(promises);
					const finalizedData = await Promise.all(responses.map(response => response.json()));
					const formattedData = finalizedData.map(response => {
						return { 
							description: response.result.description,
							uid: response.result.uid,
							...response.result.properties
						}
					})
					setStore({ vehicles: formattedData })
				} catch(e) {
					console.error(e)
				}
			},
			addFavorite: (item) => {
				let store = getStore()
				
				store.favorites.push(item)
				setStore (store)
				localStorage.setItem("favorites",JSON.stringify(newFavorites));

			},
			deleteFavorite: (name) => {
				let store = getStore();
				let newFavorites = store.favorites.filter((item)=>item.name !== name);
				setStore ({favorites: newFavorites})
				localStorage.setItem("favorites",JSON.stringify(newFavorites));
				
				

			}
			
		}
	};
};

export default getState;
