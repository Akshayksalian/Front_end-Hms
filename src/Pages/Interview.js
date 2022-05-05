import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table, Stack } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";

export default function Interview() {
  const { id } = useParams();
  const navigate = useNavigate();

  // const [vis, setVis] = useState("show");

  const url1 = "http://localhost:8080/hms/web/interviewers/assign/" + id;

  const interviewPut = (event, availability, interviewers_id) => {
    axios
      .post(url1, {
        interviewerIdentity: {
          availability: availability,
          interviewers_id: interviewers_id,
        },
      })
      .then(function (response) {
        console.log(response);
      });
    alert("Assigned successfully");
  };

  const url =
    "http://localhost:8080/hms/web/interviewers/getInterviewers/" + id;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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

  // if (data === null) {
  //   setVis("hide");
  // }

  if (loading) return <h1>Loading....</h1>;
  if (error) console.log(error);

  if (data) {
    return (
      // <div className={vis}>
      <div className="container4">
        <Header name="Interviewers List ..." />
        <div className="main,body4"></div>
        <Table striped bordered hover variant="dark" className="my-2">
          <thead>
            <tr>
              <th className="text-center">Id</th>
              <th className="text-center">Name</th>
              <th className="text-center">Exp</th>
              <th className="text-center">Status</th>
              <th className="text-center">Interviewer Skills</th>
              <th className="text-center">Interviewer Availability</th>
              <th className="text-center">Assign</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr>
                <td className="text-center">
                  {item.interviewerIdentity.interviewers_id}
                </td>
                <td className="text-center">{item.name}</td>
                <td className="text-center">{item.exp}</td>
                <td className="text-center">{item.status}</td>
                <td className="text-center">{item.interview_skills}</td>
                <td className="text-center">
                  {item.interviewerIdentity.availability}
                </td>

                <td className="text-center">
                  <Button
                    variant="success"
                    className="candidate_button rounded-pill"
                    onClick={(event) =>
                      interviewPut(
                        event,
                        item.interviewerIdentity.availability,
                        item.interviewerIdentity.interviewers_id
                      )
                    }
                  >
                    Assign
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="button5">
          <div className="text-center mt-2">
            <Button
              variant="secondary"
              className="col-md-2 mx-auto rounded-pill"
              onClick={() => {
                navigate(`/questionaire/${id}`);
              }}
            >
              Back
            </Button>
          </div>

          <Stack gap={2} className="col-md-6 mx-auto">
            <Button
              variant="primary"
              className="interview_button my-1 rounded-pill"
              onClick={() => {
                navigate("/job");
              }}
            >
              Back To Home
            </Button>
          </Stack>
        </div>
      </div>
      /* <div className={vis}>
          <div className="container4">
            <Header name="Interviewers List ..." />
            <div className="main,body4"></div>
            <h1>Note : No Interviewer's available</h1>
          </div>
        </div> */
      // </div>
    );
  }
}
