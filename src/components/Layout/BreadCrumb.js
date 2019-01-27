import React from 'react';

const BreadCrumb = (props) => {
  return(
    <div>
      <section className="transparent-headerimg hg-300" style={props.image}>
        <div className="bg-black-4 hg-300">
          <div className="container p-sm-5 position-relative top-20">
            <div className="row">
              <div className="col-12 text-white text-center montserrat">
                <h1 className="txt-40 txt-md-50 font-weight-bold pt-7 pt-md-3">{props.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BreadCrumb;