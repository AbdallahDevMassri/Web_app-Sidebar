import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import "./Table.css";

export const Table = ({ dataInit }) => {
  const [data, setData] = useState([]);
  const handleInitData = async () => {
    let res = await dataInit();
    setData(res);
  };

  useEffect(() => {
    handleInitData();
  }, []);

  const handleDelete = (id) => {
    let nItem = data.filter((m) => m.id !== id);
    setData(nItem);
  };

  const handleLike = (id) => {
    let item = data.find((m) => m.id === id);
    item.isLike = !item.isLike;
    setData([...data]);
  };

  return (
    <table className="table">
      {data &&
        Array.isArray(data) &&
        data.map((m) => {
          return (
            <MDBContainer fluid className="my-5">
              <MDBRow className="justify-content-center">
                <MDBCol md="8" lg="6" xl="4">
                  <MDBCard style={{ borderRadius: "15px" }}>
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image rounded hover-overlay"
                    >
                      <MDBCardImage
                        src="https://picsum.photos/200/200"
                        fluid
                        className="w-100"
                        style={{
                          borderTopLeftRadius: "15px",
                          borderTopRightRadius: "15px",
                        }}
                      />
                      <a href="#!">
                        <div className="mask"></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody className="pb-0">
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>
                            <a href="#!" className="text-dark">
                              {m.id}
                            </a>
                          </p>
                          <p className="small text-muted">{m.title}</p>
                        </div>
                        <div>
                          <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                            <MDBIcon fas icon="star" />
                          </div>
                          <p className="small text-muted">{m.rate}</p>
                        </div>
                      </div>
                    </MDBCardBody>
                    <hr class="my-0" />
                    <MDBCardBody className="pb-0">
                      <div className="d-flex justify-content-between">
                        <p>
                          <a href="#!" className="text-dark">
                            have in stock {m.stock}
                          </a>
                        </p>
                        <p className="text-dark">#### 8787</p>
                      </div>
                      <p className="small text-muted">VISA Platinum</p>
                    </MDBCardBody>
                    <hr class="my-0" />
                    <MDBCardBody className="pb-0">
                      <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                        <a href="#!" className="text-dark fw-bold">
                          Cancel
                        </a>
                        <MDBBtn color="primary">Buy now</MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          );
        })}
    </table>
  );
};
