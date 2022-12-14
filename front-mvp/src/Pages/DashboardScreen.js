import React, { useContext, useEffect, useReducer } from "react";
import Chart from "react-google-charts";
import axios from "axios";
import { Store } from "../Store";
import { getError } from "../utils";
import Nav from "../Components/Nav";
import "../Styles/dashboard__screen.scss";
import Footer from "../Components/Footer";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        summary: action.payload,
        loading: false,
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function DashboardScreen() {
  const [{ loading, summary, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
  });
  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/orders/summary", {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [userInfo]);

  return (
    <div className="dashboard">
      <Nav />
      {loading ? (
        <div>Cargando...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className="dashboard__container">
            <div className="dashboard__container__top">
              <h2>Tablero de administrador</h2>
              <div className="dashboard__container__items">
                <div className="dashboard__container__items-item">
                  <span>
                    {summary.users && summary.users[0]
                      ? summary.users[0].numUsers
                      : 0}
                  </span>
                  <p>Usuarios</p>
                </div>
                <div className="dashboard__container__items-item">
                  <span>
                    {summary.orders && summary.users[0]
                      ? summary.orders[0].numOrders
                      : 0}
                  </span>
                  <p>??rdenes</p>
                </div>
                <div className="dashboard__container__items-item">
                  <span>
                    {summary.services && summary.services[0]
                      ? summary.services[0].numProducts
                      : 0}
                  </span>
                  <p>Servicios activos</p>
                </div>
                <div className="dashboard__container__items-item">
                  <span>
                    $
                    {summary.orders && summary.users[0]
                      ? summary.orders[0].totalSales.toFixed(2)
                      : 0}
                  </span>
                  <p>Recaudado Total</p>
                </div>
                <div className="dashboard__container__items-item">
                  <span>
                    $
                    {summary.earnings && summary.users[0]
                      ? summary.earnings[0].totalEarnings.toFixed(2)
                      : 0}
                  </span>
                  <p>Ganancias Totales</p>
                </div>
              </div>
            </div>
            <div className="dashboard__container__bottom">
              <div className="dashboard__container__stats">
                <h3>Ventas</h3>
                {summary.dailyOrders.length === 0 ? (
                  <span>No hay ventas</span>
                ) : (
                  <Chart
                    width="100%"
                    chartType="AreaChart"
                    loader={<div>Loading Chart...</div>}
                    data={[
                      ["Date", "Sales"],
                      ...summary.dailyOrders.map((x) => [x._id, x.sales]),
                    ]}
                  ></Chart>
                )}
              </div>
              <div className="dashboard__container__stats">
                <h3>Utilidades</h3>
                {summary.dailyEarnings.length === 0 ? (
                  <span>No hay ventas</span>
                ) : (
                  <Chart
                    width="100%"
                    chartType="ScatterChart"
                    loader={<div>Loading Chart...</div>}
                    data={[
                      ["Date", "Sales"],
                      ...summary.dailyEarnings.map((x) => [x._id, x.sales]),
                    ]}
                  ></Chart>
                )}
              </div>
              
              <div className="dashboard__container__stats">
                <h3>Categor??as</h3>
                {summary.productCategories.length === 0 ? (
                  <span>No hay categor??as</span>
                ) : (
                  <Chart
                    width="100%"
                    chartType="PieChart"
                    loader={<div>Loading Chart...</div>}
                    data={[
                      ["Category", "Products"],
                      ...summary.productCategories.map((x) => [x._id, x.count]),
                    ]}
                  ></Chart>
                )}
              </div>
              <div className="dashboard__container__stats">
                <h3>Marcas</h3>
                {summary.productCategories.length === 0 ? (
                  <span>No hay Marcas</span>
                ) : (
                  <Chart
                    width="100%"
                    chartType="PieChart"
                    loader={<div>Loading Chart...</div>}
                    data={[
                      ["Brand", "Products"],
                      ...summary.productBrands.map((x) => [x._id, x.count]),
                    ]}
                  ></Chart>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}
