import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layouts/Header";

export default function Job() {
  let navigate = useNavigate();

  return (
    <div className="home">
      <Header name="Job Roles That You Can Hire For..." />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://cdn.dribbble.com/users/1083373/screenshots/6555916/android_dev.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h3 className="fw-bolder">Android Developer</h3>
                    <p>
                      Responsible for developing applications for devices
                      powered by the Android operating system.
                    </p>
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-lg"
                      onClick={() => {
                        navigate("/candidate/" + 1);
                      }}
                    >
                      Hire !!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxnn9mDYeRVLJtOdNkMQYA2ciL_GHTgpGM_w&usqp=CAU"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h3 className="fw-bolder">Web Developer</h3>
                    <p>
                      Web developers create and maintain websites. They are also
                      responsible for the site's technical aspects.
                    </p>
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-lg"
                      onClick={() => {
                        navigate("/candidate/" + 2);
                      }}
                    >
                      Hire !!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxs41kGOR4xy02lO2z2Dpbb4qdT71zMUDK7A&usqp=CAU"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h3 className="fw-bolder">Data Scientist</h3>
                    <p>
                      Data Scientist analyse and interpret complex digital data
                      in order to assist a business in its decision-making.
                    </p>
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-lg"
                      onClick={() => {
                        navigate("/candidate/" + 3);
                      }}
                    >
                      Hire !!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://cdn.dribbble.com/users/870476/screenshots/14158960/media/e96025127433e1e54c24bc977d1e3731.jpg?compress=1&resize=400x300&vertical=top"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h3 className="fw-bolder">Cloud Engineer</h3>
                    <p>
                      A Cloud Engineer is an IT professional that builds and
                      maintains cloud infrastructure.
                    </p>
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-lg"
                      onClick={() => {
                        navigate("/candidate/" + 4);
                      }}
                    >
                      Hire !!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://www.nttdata.com/sg/en/-/media/nttdataapac/ndsg/services/big-data-solutions/services-bigdata-header-2732x1536.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h3 className="fw-bolder">Big Data Engineer</h3>
                    <p>
                      Responsible for designing, building, testing and
                      maintaining complex data processing systems that work with
                      large data sets.
                    </p>
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-lg"
                      onClick={() => {
                        navigate("/candidate/" + 5);
                      }}
                    >
                      Hire !!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="https://www.theconsultingreport.com/wp-content/uploads/2020/08/Cybersecurity.jpg"
                  alt="..."
                />

                <div className="card-body p-4">
                  <div className="text-center">
                    <h3 className="fw-bolder">Cyber Analyst</h3>
                    <p>
                      A cybersecurity analyst is a trained cyberprofessional who
                      specializes in network and IT infrastructure security.
                    </p>
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-lg"
                      onClick={() => {
                        navigate("/candidate/" + 6);
                      }}
                    >
                      Hire !!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
