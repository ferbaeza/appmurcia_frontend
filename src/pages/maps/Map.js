//import Layout from "../components/layout";
import styles from "../../../styles/style.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";
import Navbar from "../../components/navbar/navbar";

import React, { useEffect, useState } from "react";
const Map = dynamic(() => import("../../components/maps/Map"), {
  loading: () => "Loading...",
  ssr: false,
});
export default function IndexPage() {
  const [locations, setLocations] = useState(['Murcia']);
  const [resourceType, setResourceType] = useState("restaurant");

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${resourceType}.json?access_token=pk.eyJ1IjoiaGVjdG9ycGxpbmlvIiwiYSI6ImNrejQ3cDc2ZTBjbHEyb3J4MzMzZHpmMWMifQ.XT3g3xJFTaNGxYeMBtBoaQ&bbox=-1.27969%2C37.9161%2C-1.06399%2C38.0154&limit=30`;

  useEffect(() => {
    const fetchLocations = async () => {
      await fetch(url)
        .then((response) => response.text())
        .then((res) => JSON.parse(res))
        .then((json) => {
          setLocations(json.features);
        })
        .catch((err) => console.log({ err }));
    };
    fetchLocations();
  }, [resourceType]);
  return(
    <>
      <Head>
          <title>Mapas</title>
      </Head>
      <Navbar/>
      

      <div className={styles.boxCenter}>
        <div className={styles.boxUp}>
          <h1 className={styles.titulo}>Mapas</h1>
          <button className="btn btn-secondary" onClick={() => setResourceType(["gas"])}>Gas</button>
          <button className="btn btn-secondary" onClick={() => setResourceType(["restaurant"])}>Restaurant</button>
          <button className="btn btn-secondary" onClick={() => setResourceType(["hotel"])}>Hotel</button>
          <button className="btn btn-secondary" onClick={() => setResourceType(["shop"])}>Market</button>
          <div className={styles.map}>
            <Map locations={locations} />
          </div>
        </div>
      </div>

    </>
)
}
