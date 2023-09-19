export const Regions = (props) => {
  return (
    <div id="regions" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Regions</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <h3>{d}</h3>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
