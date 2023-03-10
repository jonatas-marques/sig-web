import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { useEffect } from "react";

import styles from '/styles/Map.module.css'

const placeBarueri = [-46.88576749900006, -23.509130797617008];

export default function MapComponent() {
  useEffect(() => {
    new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
            crossOrigin: "anonymous",
          }),
        }),
      ],
      view: new View({
        projection: "EPSG:4326",
        extent: [-180, -90, 180, 90],
        center: placeBarueri,
        zoom: 13,
      }),
    });
  }, []);

  return (
    <>
      <div>
        <div id="map" className={styles.mapdiv}></div>
      </div>
    </>
  );
}