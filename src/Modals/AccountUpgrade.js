import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './modal.css'
const AccountUpgrade = ({ handleClose }) => {
  return (
    <div className='modal-upgrade-account'>
      <Modal show={true} onHide={handleClose} size={"md"}>

        <Modal.Body className='text-light'>
          <h2 >Upgrade Account</h2>
          <p className='mt-5'>Choose one of the options</p>
          <div className="d-flex justify-content-between mb-4">
            <div>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
              <label class="form-check-label mx-3" for="flexCheckChecked">
                Annually
              </label>
              <span className="badge text-success mx-4 border border-success rounded">
                save up to 20%
              </span>
            </div>
            <div className="price">
              55, 00 $
            </div>
          </div>
          <div className="d-flex justify-content-between mb-5">
            <div>
              <input class="form-check-input  border border-muted" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label mx-3" for="flexCheckChecked">
                Monthly
              </label>

            </div>
            <div className="price">
              15, 00 $
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between mb-5">
            <div>
              <label class="form-check-label mx-3" for="flexCheckChecked">
                Total
              </label>

            </div>
            <div className="price">
              55, 00 $ / 1 year
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Button>Upgrade</Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AccountUpgrade
