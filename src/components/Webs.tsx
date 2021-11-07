import React from "react";
interface Web {
  src: string;
  title: string;
  children: any;
}

function Webs(props: Web) {
  console.log(props.children);
  return (
    <div className="col-lg-6 col-xs-12 pb-5">
      <div className="row">
        <img className="img-fluid d-block mx-auto mb-4" src={props.src} alt="" />
        <div className="col-12">
          <a href="/">
            <h2>{props.title} &#8594;</h2>
          </a>
        </div>
        <div className="col-12">
          <p className="fs-5 text-secondary">{props.children}</p>
        </div>
      </div>
    </div>
  );
}

export default Webs;
