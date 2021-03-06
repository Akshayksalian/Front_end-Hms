import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import { Button, Stack, Card, Form } from "react-bootstrap";
import Footer from "../layouts/Footer";

export default function Questionaire() {
  const { id } = useParams();

  let navigate = useNavigate();
  // const [items1,setItems1] = useEffect([]);
  const url1 = "http://localhost:8080/hms/web/candidates/que";

  const [data1, setData1] = useState({
    candidates_id: id,
    notice_period1: "",
    expected_ctc1: "",
    shifts1: "",
    relocation1: "",
  });

  function submit(e) {
    e.preventDefault();
    console.log(Number(id));
    axios
      .put(url1, {
        candidates_id: id,
        notice_period: data1.notice_period1,
        expected_ctc: data1.expected_ctc1,
        shifts: data1.shifts1,
        relocation: data1.relocation1,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  function handle(e) {
    const newdata = { ...data1 };
    newdata[e.target.name] = e.target.value;
    setData1(newdata);
    console.log(newdata);
  }

  const url = "http://localhost:8080/hms/web/candidates/" + id;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const [feedback, setFeedback] = useState();
  const url2 = "http://localhost:8080/hms/web/candidates/feedback";

  function saveFeedback(e) {
    axios
      .put(url2, {
        candidates_id: id,
        feedback: feedback,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  function check(status, availability) {
    let d1 = new Date(availability);
    console.log(d1);
    let d2 = new Date(Date().toLocaleString());
    console.log(d2);
    if (status === "Yes" && d1 <= d2) {
      return false;
    } else {
      return true;
    }
  }

  function deleteUser(id) {
    fetch("http://localhost:8080/hms/web/candidates/" + id, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
      });
    });
    alert("Reject Successfull");
    navigate("/job");
  }

  if (loading) return <h1>Loading....</h1>;
  if (error);
  if (data) {
    return (
      <div className="que">
        <Header name="Questionaires" />
        <section className="py-2">
          <div className="container px-4 px-lg-5 my-3">
            <div className="row">
              <div className="col-md-5 order-md-2 mb-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  Basic Questions
                  <span className="badge badge-secondary badge-pill">3</span>
                </h4>
                <ul className="list-group mb-3">
                  <form onSubmit={(e) => submit(e)}>
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                      <label>
                        <h5>
                          1. How would you rate yourself on a scale of 1 to 10 ?
                        </h5>
                        <input
                          onChange={(e) => handle(e)}
                          name="notice_period1"
                          value={data.notice_period1}
                          size="35"
                          type="number"
                          placeholder="0"
                          required
                        />
                      </label>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                      <label>
                        <h5>2. What is your excepted ctc?</h5>
                        <input
                          onChange={(e) => handle(e)}
                          name="expected_ctc1"
                          value={data.expected_ctc1}
                          size="35"
                          type="number"
                          placeholder="0"
                          required
                        />
                      </label>
                      <br />
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                      <label>
                        <h5>3. Are you okay with night shifts?</h5>
                        <input
                          onChange={(e) => handle(e)}
                          name="shifts1"
                          value={data.shifts1}
                          size="35"
                          type="text"
                          placeholder="Enter Your Answer"
                          required
                        />
                      </label>
                      <br />
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                      <label>
                        <h5>4. Are you okay with relocation?</h5>
                        <input
                          onChange={(e) => handle(e)}
                          name="relocation1"
                          value={data.relocation1}
                          size="35"
                          type="text"
                          placeholder="Enter Your Answer"
                          required
                        />
                      </label>
                    </li>
                  </form>

                  <button
                    type="button"
                    className="btn btn-dark px-4 rounded-pill"
                    onClick={(e) => submit(e)}
                  >
                    submit
                  </button>
                </ul>
              </div>
              <div className="col-md-7 order-md-1">
                <h2 className="mb-3">Candidate Details</h2>
                <form className="needs-validation">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <h5>Name</h5>
                      <p>{data.name}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <h5>Contact No</h5>
                      <p>{data.contact_no}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h5>Email</h5>
                      <p>{data.email}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <h5>Skills</h5>
                      <p>{data.candidate_skills}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h5>Experience</h5>
                      <p>{data.exp}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <h5>Current Company Name</h5>
                      <p>{data.company_name}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h5>Current Company Location</h5>
                      <p>{data.candidates_location}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <h5>Self Rating</h5>
                      <p>
                        {data.notice_period
                          ? `${data.notice_period}`
                          : "Not Specified"}
                      </p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h5>Night Shift</h5>
                      <p>{data.shifts ? `${data.shifts}` : "Not Mentioned"}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <h5>Relocation</h5>
                      <p>
                        {data.relocation ? `${data.relocation}` : "Not Decided"}
                      </p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h5>Status</h5>
                      <p>{data.status ? `${data.status}` : "Not Assigned"}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <h5>Feedback</h5>
                      <p>{data.feedback}</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <Card
                      border="success"
                      className="mb-5"
                      style={{ width: "29rem" }}
                    >
                      <Card.Body>
                        <Card.Title>FeedBack</Card.Title>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Control
                            as="textarea"
                            rows={3}
                            disabled={check(
                              data.status,
                              data.interview_sceduled_date
                            )}
                            value={feedback}
                            onChange={(event) =>
                              setFeedback(event.target.value)
                            }
                            onClick={(e) => saveFeedback(e)}
                          />
                        </Form.Group>
                        <Button className="btn btn-dark rounded-pill ">
                          Save
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="button5">
          <Stack gap={0} className="col-md-4 mx-auto mb-5">
            <Button
              variant="danger"
              className="interview_button my-1 rounded-pill"
              onClick={() => deleteUser(data.candidates_id)}
            >
              Reject
            </Button>
            <Button
              variant="success"
              className="interview_button my-1 rounded-pill"
              onClick={() => {
                navigate(`/interview/${data.candidates_id}`);
              }}
            >
              Assign Interviewer
            </Button>
            <Button
              variant="dark"
              className="interview_button my-1 rounded-pill"
              onClick={() => {
                navigate("/job");
              }}
            >
              Back To Home
            </Button>
          </Stack>
        </div>
        <Footer />
      </div>
    );
  }
}
