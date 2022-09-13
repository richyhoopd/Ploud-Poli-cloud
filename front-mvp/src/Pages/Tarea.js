import "../Styles/tarea.scss";
import React, { useContext, useEffect, useReducer } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Store } from "../Store";
import { getError } from "../utils";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, orders: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function OrderHistoryScreen() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();

  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const { data } = await axios.get(
          `/api/orders/mine`,

          { headers: { Authorization: `Bearer ${userInfo.token}` } }
        );
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({
          type: "FETCH_FAIL",
          payload: getError(error),
        });
      }
    };
    fetchData();
  }, [userInfo]);
  return (
    <>
    <div className="orders">
      <Helmet>
        <title>Order History</title>
      </Helmet>

      
        
        <div className="orders__container">
          <h2>tareas por hacer</h2>
          <div className="orders__container__table">
            <table>
              <thead>
                <tr>
                  <th>Nombre de tarea</th>
                  <th>Materia</th>
                  <th>Fecha Limite</th>
                  <th>Status</th>
                  <th>Calificacion</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
       
                  <tr>
                    <td>Evolucion de las aplicaciones web</td>
                    <td>Diseño de Aplicaciónes web</td>
                    <td>15 sep 2022</td>
                    <td>
                      No entregada
                    </td>
                    <td>
                     /
                    </td>
                    <td>
                      <button
                        type="button"
                        variant="light"
                        onClick={() => {
                          navigate(`/materia/entrega`);
                        }}
                      >
                        Detalles
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Investigación de analisis</td>
                    <td>Analisis de Requerimientos</td>
                    <td>22 sep 2022</td>
                    <td>
                      No entregada
                    </td>
                    <td>
                     /
                    </td>
                    <td>
                      <button
                        type="button"
                        variant="light"
                        onClick={() => {
                          navigate(`/materia/entrega`);
                        }}
                      >
                        Detalles
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Algoritmos en Linux</td>
                    <td>Instalación de Software</td>
                    <td>19 sep 2022</td>
                    <td>
                      No entregada
                    </td>
                    <td>
                     /
                    </td>
                    <td>
                      <button
                        type="button"
                        variant="light"
                        onClick={() => {
                          navigate(`/materia/entrega`);
                        }}
                      >
                        Detalles
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Historia de los sistemas operativos</td>
                    <td>Instalación de Software</td>
                    <td>12 sep 2022</td>
                    <td>
                      No entregada
                    </td>
                    <td>
                     /
                    </td>
                    <td>
                      <button
                        type="button"
                        variant="light"
                        onClick={() => {
                          navigate(`/materia/entrega`);
                        }}
                      >
                        Detalles
                      </button>
                    </td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        </div>
    </div>
    </>
  );
}
