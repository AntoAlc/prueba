import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Category.css";

export default function Category(props) {
  const testId = "category-" + props.data.id;
  const url = "http://100.25.92.28:8080";
  const [totalAlojamientosEnLaCategoria, setTotalAlojamientosEnLaCategoria] = useState(0);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const res = await axios.get(`${url}/alojamientos/categorias/` + props.data.id)
        setTotalAlojamientosEnLaCategoria(res.data.length);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData()
  }, []);

  return (
    <div className="card-container" data-testid={testId}>
      <a href="#" onClick={() => props.handleCategory(props.data.id)}>
        <div className="card-img">
          <img src={props.data.urlImage} alt={props.data.category} />
        </div>
        <div className="card-text">
          <h5>{props.data.category}</h5>
          {
            !loading ? <p>{totalAlojamientosEnLaCategoria + " " + props.data.category}</p> : <p>Cargando la información</p>
          }
        </div>
      </a>
    </div>
  );
}
