import React, { useState } from "react"
import {Modal, Button} from 'react-bootstrap'
// import { Link } from "gatsby";
// import styled from 'styled-components'




const ServiceModal = (props) => {

    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>

      <style type="text/css">
        {`
          .btn-flat {
              background-color: rgba(0, 0, 0, 0.8);
              color: white;
              border-radius: 8px;
              margin: auto;
              padding: 8px 16px;
          }

          .btn-flat:hover {
              color: #aaa;
          }
        `}
      </style>

      <Button variant="flat" onClick={handleShow}>
          <h5>{props.type}</h5>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h2>{props.type}</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Id committerentur fas accusatoris confestim saevi: saltem fecere specie quaerebatur legum principes impleri crimina confestim acervis id crimina his ulla praescriptis ut sed velut sed accusatoris ut quaerebatur aliquotiens impleri id vox in praescriptis Caesaris sed praescriptis acervis ulla aliquotiens id aliquotiens implacabilitati his malorum ulla sed Caesaris specie praescriptis confestim ut accusatoris sed confestim impleri specie id acervis saltem licet specie impleri acervis accusatoris acervis ut impleri specie vox ut acervis perpensum velut accusatoris perpensum sedisset saevi: praescriptis his perpensum urgebatur subditicii crimina confestim legum velut tenus malorum ut aliquotiens malorum accusatoris malorum praescriptis saevi: ulla ulla licet sedisset.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}


export default ServiceModal