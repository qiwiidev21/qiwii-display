import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../redux/actions";
import { Link } from "react-router-dom";
import "./styles.css";
import PropTypes from "prop-types";
import {
  PeopleFill,
  ClockFill,
  LockFill,
  MegaphoneFill,
} from "react-bootstrap-icons";

const Home = (props) => {
  useEffect(() => {
    const id_organization = "137";
    const id_area = "256";
    fetchCounters(id_organization, id_area);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function fetchCounters(id_org, id_area) {
    props.fetchCounters(id_org, id_area);
  }

  return (
    <div>
      <header>
        <div className="navbar-expand-md navbar-dark bg-primary d-flex justify-content-between px-5 py-md-2">
          <div className="connection-status">
            <div>
              <h6 className="page-text">1</h6>
            </div>
          </div>
          <div>
            <h5 className="page-text">Selamat datang di Qiwii</h5>
          </div>
          <div className="connection-status">
            <span></span>
          </div>
        </div>
      </header>
      {/* Start Of Menu */}
      <div className="d-flex flex-wrap card-wrapper p-2">
        {props.dataCounters.data &&
          props.dataCounters.data.map((item, index) => (
            <Link key={index} to={"/detail"}>
              <div
                className="card-menu mx-3 my-2 shadow-sm"
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
            </Link>
          ))}
      </div>
      {/* End Of Menu */}
    </div>
  );
};

Home.defaultProps = {
  fetchCounters: () => {},
};

Home.propTypes = {
  fetchCounters: PropTypes.func,
};

const mapStateToProps = (state) => ({
  dataCounters: state.dataCounters,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
