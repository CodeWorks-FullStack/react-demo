import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { AppState } from "../AppState.js";
import HouseCard from "../components/HouseCard.jsx";
import { api } from "../services/AxiosService.js";
import Pop from "../utils/Pop.js";

function HomePage() {


  useEffect(() => {
    getHouses()
  }, [])

  async function getHouses() {
    try {
      const res = await api.get('https://bcw-sandbox.herokuapp.com/api/houses')
      AppState.houses = res.data
    }
    catch (error) {
      Pop.error(error);
    }
  }


  const houses = AppState.houses.map(h => <HouseCard key={h.id} house={h} />)





  return (
    <div className="home-page">
      <div className="container my-3">
        <div className="row">
          {houses}
        </div>
      </div>
    </div>
  )
}


export default observer(HomePage)
