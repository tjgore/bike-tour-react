import React from 'react';

const NotFound = () => {
  return (
    <div>
      <section className="transparent-headerimg hg-120" style={{backgroundImage: "url(/images/biker2.jpg)"}}>
        <div className="bg-black-4 hg-120">
          <div className="container">
            <div className="row">
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center py-8 montserrat font-weight-bold">
              <h1>404</h1>
              <h3>Page Not Found</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFound;