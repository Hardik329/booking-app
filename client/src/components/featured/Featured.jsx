import React from "react";
import useFetch from "../../hooks/useFetch";
import "./Featured.css";

function Featured() {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Sikkim,london,New York"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.tajhotels.com/content/dam/tajhotels/ihcl/vivanta/vivanta_sikkim_ihcl.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitle">
              <h1>New York</h1>
              <h1>{data[0]}</h1>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.tajhotels.com/content/dam/tajhotels/ihcl/vivanta/vivanta_sikkim_ihcl.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitle">
              <h1>Sikkim</h1>
              <h1>{data[1]}</h1>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.tajhotels.com/content/dam/tajhotels/ihcl/vivanta/vivanta_sikkim_ihcl.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitle">
              <h1>London</h1>
              <h1>{data[2]}</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Featured;
