import { useState } from "react";
import ScrollDialog from "./ScrollDialog";

const ServiceContent = ({ data }) => {
  // const [show, setShow] = useState(false);
  // let hasSeeMore = text.length > 200;
  const { hasDetails, text } = data;
  return (
    <>
      <p>
        {text.slice(0, 200)}{" "}
        {hasDetails ? (
          <span
            style={{
              color: "#fff",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            <ScrollDialog data={data} />
          </span>
        ) : null}
      </p>
    </>
  );
};

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <ServiceContent data={d} />
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
