/*
 * Detail Screen
 */

import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import ReactPlayer from "react-player";
import {
  ArrowLeft,
  PeopleFill,
  ClockFill,
  LockFill,
  MegaphoneFill,
} from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/images/header-logo.png";

function Detail(props) {
  let history = useHistory();

  const item = {
    avg_call_interval: "0",
    blink: "0",
    calling_name: "kecounter jeda 1",
    checkin: 1,
    display_name: "Konter 1",
    id_area: "256",
    id_organization: "137",
    id_service: "0",
    konter: "281",
    left: 0,
    rata: 0,
    refresh: "0",
    setting: {
      channel: {
        admin: "admin",
        cso: "cso",
        kiosk: "kiosk",
        mobile: "mobile",
        sms: "sms",
      },
      checkin: 1,
      composite: 0,
      id_workflow: "",
      multi_id_konter: "",
      multi_id_service: {
        256: "256",
      },
      workflow: 0,
    },
    status: "aktif",
    text: null,
    ticket: "CS-001",
    tts: "",
  };
  return (
    <div>
      <header>
        <div className="navbar-expand-md navbar-dark bg-primary d-flex justify-content-between px-5 py-md-2">
          <div className="row">
            <button
              className="btn btn-primary-outline"
              onClick={() => history.goBack()}
            >
              <ArrowLeft color="white" size={24} />
            </button>
            <div className="connection-status">
              <div>
                <h6 className="page-text">1</h6>
              </div>
            </div>
          </div>
          <div className="navbar-brand">
            <img
              src={Logo}
              alt=""
              width="90"
              height="45"
              className="img-fluid"
            />
          </div>
          <div className="connection-status">
            <span></span>
          </div>
        </div>
      </header>
      <Header title="Selamat datang di Qiwii" />
      <div className="container">
        <div className="d-flex row m-2">
          <div className="col-sm-4" style={{ backgroundColor: "#f3f3f3" }}>
            <div
              className="card-container mx-3 my-2 shadow-sm"
              style={{
                backgroundColor:
                  item.status === "aktif" ? "#8f1619" : "#afafaf",
              }}
            >
              <div className="justify-content-center align-items-center p-md-4 px-4">
                <h2 className="pt-3 card-title">{item.display_name}</h2>
              </div>
              <div className="ticket-container px-5 row align-items-center justify-content-between">
                <h1 className="pt-3 card-title">{item?.ticket ?? "-"}</h1>
                <div className="ticket-icon">
                  {item.status === "aktif" ? (
                    <MegaphoneFill color="#8f1619" size={20} />
                  ) : (
                    <LockFill color="#afafaf" size={20} />
                  )}
                </div>
              </div>
              <div className="row px-5 align-items-center">
                <PeopleFill color="white" size={20} />
                <h5 className="pt-3 px-md-4 px-2 card-title">
                  {Number(item.left)} Menunggu
                </h5>
              </div>
              <div className="row px-5 align-items-center">
                <ClockFill color="white" size={20} />
                <h5 className="pt-3 px-md-4 px-2 card-title">
                  {Number(item.avg_call_interval)} Menit / antrian
                </h5>
              </div>
            </div>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">No.Antrian</th>
                    <th scope="col">Konten</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>CS-001</td>
                    <td>Dalam penanganan 1</td>
                    <td>Aktif</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>CS-002</td>
                    <td>Dalam penanganan 1</td>
                    <td>Menunggu</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>CS-003</td>
                    <td>Dalam penanganan 1</td>
                    <td>Menunggu</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-sm-8">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=HXl3kOo-eus"
              loop
              controls
              width="100%"
              height="100vh"
            />
          </div>
        </div>
      </div>
      <footer
        className="navbar navbar-expand-md navbar-dark bg-primary"
        style={{ height: "30px" }}
      ></footer>
    </div>
  );
}

export default Detail;
