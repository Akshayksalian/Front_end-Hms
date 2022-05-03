import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table, Stack, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";

export default function Candidate() {
  const { id } = useParams();

  let nav = useNavigate();

  const url = "http://localhost:8080/hms/web/candidates/domain/" + id;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  useEffect(() => {
    users();
  }, [url]);

  function users() {
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
  }

  function deleteUser(id) {
    fetch("http://localhost:8080/hms/web/candidates/" + id, {
      method: "DELETE",
    }).then((result) => {
      users();
      result.json().then((resp) => {
        console.warn(resp);
      });
    });
  }

  function check(status) {
    console.log(status);
    if (status === "Y") {
      return false;
    } else {
      return true;
    }
  }

  if (loading) return <h1>Loading....</h1>;
  if (error) console.log(error);

  if (data) {
    return (
      <div className="container4">
        <Header name="Candidates List ..." />
        <div className="main,body4">
          <Table striped bordered hover variant="dark" className="my-2">
            <thead>
              <tr>
                <th className="text-center">Id</th>
                <th className="text-center">Name</th>
                <th className="text-center">Skills</th>
                <th className="text-center">Exp</th>
                <th className="text-center">Status</th>
                <th className="text-center">Interviewer Name</th>
                <th className="text-center">Interviewer Date</th>
                <th className="text-center">Feedback</th>
                <th className="text-center">Que</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr>
                  <td className="text-center">{item.candidates_id}</td>
                  <td className="text-center">{item.name}</td>
                  <td className="text-center">{item.candidate_skills}</td>
                  <td className="text-center">{item.exp}</td>
                  <td className="text-center">
                    {item.status ? `${item.status}` : "No"}
                  </td>
                  <td className="text-center">
                    {item.interviewer
                      ? `${item.interviewer.name}`
                      : "Not Assigned"}
                  </td>
                  <td className="text-center">
                    {item.interviewer
                      ? `${item.interviewer.interviewerIdentity.availability}`
                      : "Not Scheduled"}
                  </td>
                  <td className="text-center">
                    <Form.Control
                      type="text"
                      className="text-center"
                      disabled={check(`${item.status}`)}
                      placeholder="feedback"
                    />
                  </td>
                  <td className="text-center">
                    <a href={`/questionaire/${item.candidates_id}`}>
                      <Button variant="success">Next</Button>
                    </a>
                  </td>
                  <td className="text-center">
                    <Button
                      variant="danger"
                      onClick={() => deleteUser(item.candidates_id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p className="col-md-6 mx-auto">
            Note : You can't delete the candidate if they are assigned to a
            Interviewer.
          </p>
          <div className="button5">
            <Stack gap={2} className="col-md-6 mx-auto">
              <Button
                variant="primary"
                className="interview_button my-1"
                onClick={() => {
                  nav("/job");
                }}
              >
                Back
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    );
  }
}
