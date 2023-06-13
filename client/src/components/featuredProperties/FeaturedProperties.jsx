import React from "react";
import useFetch from "../../hooks/useFetch";
import "./FeaturedProperties.css";

function FeaturedProperties() {
  const {data, loading, error} = useFetch("/hotels/?featured=0&limit=4");
  return (
    <div className="fp">
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data.map((item)=>(
          <div className="fpItem" key={item._id}>
            <img
              src="https://www.tajhotels.com/content/dam/tajhotels/ihcl/vivanta/vivanta_sikkim_ihcl.jpg"
              alt=""
              className="fpImg"
            />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice">{item.cheapestPrice}</span>
            {item.rating && <div className="fpRating">
              <button>{item.rating}</button>
              <span>Excellent</span>
            </div>}
          </div>
        ))}
        </>
      )}
    </div>
  );
}

export default FeaturedProperties;
