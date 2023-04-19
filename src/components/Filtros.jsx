import { useState, useEffect } from "react";

function Filtros({ filter, setFiltro }) {
  return (
    <div className="filtros sombra contenedor">
      <form action="">
        <div className="campo">
          <label htmlFor="">Filtrar Gastos</label>
          <select
            value={filter}
            onChange={(e) => {
              setFiltro(e.target.value);
            }}
          >
            <option value="">-- Todas las categorías --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="subcripciones">Subcripciones</option>
            <option value="gastos">Gastos Varios</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Filtros;
