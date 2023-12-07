import React from "react";
import poster from "../../assets/poster.webp";
import poster2 from "../../assets/tree-image.jpg";

export default function MovieDetails() {
  return (
    <div className="container my-5">
      <div className="row p-4 pe-lg-0 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-5 fw-bold lh-1 text-success">Interstellar </h1>
          <div>
            <span className="badge border border-secondary text-secondary rounded-pill m-1">
              Sc-Fi
            </span>
            <span className="badge border border-secondary text-secondary rounded-pill m-1">
              Drama
            </span>
            <span className="badge border border-secondary text-secondary rounded-pill m-1">
              Adventure
            </span>
          </div>
          <p className="lead">
            When Earth becomes uninhabitable in the future, a farmer and ex-NASA
            pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a
            team of researchers, to find a new planet for humans.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button
              type="button"
              className="btn btn-outline-warning btn-lg px-4"
            >
              Watch Now
            </button>
          </div>
        </div>
        <div className="col-lg-3 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3 p-2" src={poster} alt="" width="300px" />
        </div>
      </div>
    </div>
  );
}
