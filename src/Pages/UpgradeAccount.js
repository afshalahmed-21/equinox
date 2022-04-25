import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import WithSideMenu from './../Wrapper/WithSideMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/fontawesome-free-solid';
import userselection from '../Assets/Dashboard/Icons/bxs-face-mask.png'
import FavorableRatesCard from './../Components/CommonComponents/FavorableRates/FavorableRatesCard';
const UpgradeAccount = () => {
  return (
    <WithSideMenu>
      <Container fluid>
        <Row>
          <div className="hero-upgrade-account">
            <div className="ms-lg-5 ps-lg-5">
              <h2>Upgrade Account</h2>
              <p>
                Your Current Plan: <a href="javascript:void(0)" className="text-warning">Exploring</a>
              </p>
            </div>
          </div>
        </Row>
        <Row className="">
          <FavorableRatesCard showUpgradeButton noTopImg />
        </Row>
      </Container>
    </WithSideMenu>

  )
}

export default UpgradeAccount