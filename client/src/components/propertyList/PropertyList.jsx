import React from "react";
import useFetch from "../../hooks/useFetch";
import "./PropertyList.css";

function PropertyList() {
  const { data, loading, error } = useFetch("/hotels/countByType");
  return (
    <div className="propertyList">
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data.map((item,i) => (
            <div className="propertyListItem" key={i}>
              <img
                src="https://www.tajhotels.com/content/dam/tajhotels/ihcl/vivanta/vivanta_sikkim_ihcl.jpg"
                alt=""
                className="propertyListImg"
              />
              <div className="propertyListTitle">
                <h1>{data[i]?.type}</h1>
                <h2>{data[i]?.count} {data[i]?.type}s</h2>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default PropertyList;
