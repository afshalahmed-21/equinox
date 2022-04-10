import { faDollarSign } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cross from '../../../Assets/HomePageImages/Icons/cross.png'
import check from '../../../Assets/HomePageImages/Icons/check.png'
import userSelection from '../../../Assets/HomePageImages/Icons/icon04.png'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const FavorableRatesCard = () => {
    return (
        <div className='FavorableRatesCard bg-dark'>
            <Row>
                <Col lg={2} className='mobileMargin p-0'>
                    <div className="favorableCard advanced">
                        <h5 className='mb-4'>Advanced <br /> analytics</h5>
                        <div className='FavorableRatesCardUl'>
                            <ul>
                                <li>
                                    Total Image Uploads Per Month
                                </li>
                                <li>
                                    Total Image Uploads Per Month <br />
                                    (Tournament Mode)
                                </li>
                                <li>
                                    Game Analytics Dashboard
                                </li>
                                <li>
                                    Analytics Report Donwload
                                </li>
                                <li>
                                    Create your own Dashboards
                                </li>
                                <li>
                                    Performance Comparison
                                </li>
                            </ul>
                            <div className="cost">
                                <Row>
                                    <Col lg={2} className='col-1'>
                                        <FontAwesomeIcon className='dollar' icon={faDollarSign} />
                                    </Col>
                                    <Col lg={10} className='col-11 m-auto'>
                                        <p className='text-light mb-0'> Cost</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={2} className='p-0 mobileMargin text-center'>
                    <div className="favorableCard bg-transparent">
                        <div className='d-flex justify-content-center align-items-center userSelection text-muted'>
                            <img className='userSelectionImg' src={userSelection} alt="userSelectionImg" /> User Selection
                        </div>
                        <h5 className='mb-4'>Guest</h5>
                        <div className='GuestCardUl'>
                            <Row>
                                <Col lg={6} className='col-8 mobileCards'>
                                    <div className='FavorableRatesCardUl'>
                                        <ul>
                                            <li>
                                                Total Image Uploads Per Month
                                            </li>
                                            <li>
                                                Total Image Uploads Per Month
                                                (Tournament Mode)
                                            </li>
                                            <li>
                                                Game Analytics Dashboard
                                            </li>
                                            <li>
                                                Analytics Report Donwload
                                            </li>
                                            <li>
                                                Create your own Dashboards
                                            </li>
                                            <li>
                                                Performance Comparison
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={12} className='col-4'>
                                    <ul>
                                        <li>
                                            SGD $0.30 <br /> Per Image
                                        </li>
                                        <li>
                                            SGD $0.50 <br /> Per Image
                                        </li>
                                        <li>
                                            N/A
                                        </li>
                                        <li>
                                            N/A
                                        </li>
                                        <li>
                                            N/A
                                        </li>
                                        <li>
                                            N/A
                                        </li>
                                    </ul>
                                </Col>
                                <Col lg={6} className='col-8 amount'>
                                    <div className="cost forMobileCost">
                                        <Row>
                                            <Col lg={2} className='col-2'>
                                                <FontAwesomeIcon className='dollar' icon={faDollarSign} />
                                            </Col>
                                            <Col lg={10} className='m-auto col-8 text-start'>
                                                <p className='text-light mb-0'> Cost</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg={6} className='col-4 m-auto'>
                                    <div className="cost forMobileCost">
                                        <p className='text-light mb-0'>0$</p>
                                    </div>
                                </Col>
                            </Row>
                            <button className='btn-warning w-100 text-center mt-3 hoverBuyBtn'>BUY</button>
                        </div>
                    </div>
                </Col>
                <Col lg={2} className='p-0 mobileMargin'>
                    <div className="favorableCard bg-transparent  text-center">
                        <div className='d-flex justify-content-center align-items-center userSelection text-muted'>
                            <img className='userSelectionImg' src={userSelection} alt="userSelectionImg" /> User Selection
                        </div>
                        <h5 className='mb-4'>Free</h5>
                        <div className='FreeCardUl'>
                            <Row>
                                <Col lg={6} className='col-8 mobileCards'>
                                    <div className='FavorableRatesCardUl'>
                                        <ul>
                                            <li>
                                                Total Image Uploads Per Month
                                            </li>
                                            <li>
                                                Total Image Uploads Per Month
                                                (Tournament Mode)
                                            </li>
                                            <li>
                                                Game Analytics Dashboard
                                            </li>
                                            <li>
                                                Analytics Report Donwload
                                            </li>
                                            <li>
                                                Create your own Dashboards
                                            </li>
                                            <li>
                                                Performance Comparison
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={12} className='col-4'>
                                    <ul>
                                        <li>
                                            50
                                        </li>
                                        <li>
                                            <img className='cross' src={cross} alt="cross" />
                                        </li>
                                        <li>
                                            <img className='check' src={check} alt="check" />
                                        </li>
                                        <li>
                                            <img className='check' src={check} alt="check" />
                                        </li>
                                        <li>
                                            <img className='cross' src={cross} alt="cross" />
                                        </li>
                                        <li>
                                            <img className='cross' src={cross} alt="cross" />
                                        </li>
                                    </ul>
                                </Col>
                                <Col lg={6} className='col-8 amount'>
                                    <div className="cost forMobileCost">
                                        <Row>
                                            <Col lg={2} className='col-2'>
                                                <FontAwesomeIcon className='dollar' icon={faDollarSign} />
                                            </Col>
                                            <Col lg={10} className='m-auto col-8 text-start'>
                                                <p className='text-light mb-0'> Cost</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg={6} className='col-4 m-auto'>
                                    <div className="cost forMobileCost text-light">
                                        Free
                                    </div>
                                </Col>
                            </Row>
                            <button className='btn-warning w-100 text-center mt-3 hoverBuyBtn'>BUY</button>
                        </div>
                    </div>
                </Col>
                <Col lg={2} className='p-0 mobileMargin'>
                    <div className="favorableCard bg-transparent  text-center">
                        <div className='d-flex justify-content-center align-items-center userSelection text-muted'>
                            <img className='userSelectionImg' src={userSelection} alt="userSelectionImg" /> User Selection
                        </div>
                        <h5 className='mb-4'>Exploring</h5>
                        <div className='FreeCardUl'>
                            <Row>
                                <Col lg={6} className='col-8 mobileCards'>
                                    <div className='FavorableRatesCardUl'>
                                        <ul>
                                            <li>
                                                Total Image Uploads Per Month
                                            </li>
                                            <li>
                                                Total Image Uploads Per Month
                                                (Tournament Mode)
                                            </li>
                                            <li>
                                                Game Analytics Dashboard
                                            </li>
                                            <li>
                                                Analytics Report Donwload
                                            </li>
                                            <li>
                                                Create your own Dashboards
                                            </li>
                                            <li>
                                                Performance Comparison
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={12} className='col-4'>
                                    <ul>
                                        <li>
                                            100
                                        </li>
                                        <li>
                                            <img className='cross' src={cross} alt="cross" />
                                        </li>
                                        <li>
                                            <img className='check' src={check} alt="check" />
                                        </li>
                                        <li>
                                            <img className='check' src={check} alt="check" />
                                        </li>
                                        <li>
                                            <img className='cross' src={cross} alt="cross" />
                                        </li>
                                        <li>
                                            <img className='cross' src={cross} alt="cross" />
                                        </li>
                                    </ul>
                                </Col>
                                <Col lg={6} className='col-8 amount'>
                                    <div className="cost forMobileCost">
                                        <Row>
                                            <Col lg={2} className='col-2'>
                                                <FontAwesomeIcon className='dollar' icon={faDollarSign} />
                                            </Col>
                                            <Col lg={10} className='m-auto col-8 text-start'>
                                                <p className='text-light mb-0'> Cost</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg={6} className='col-4 m-auto'>
                                    <div className="cost forMobileCost text-light">
                                        5$
                                    </div>
                                </Col>
                            </Row>
                            <button className='btn-warning w-100 text-center mt-3 hoverBuyBtn'>BUY</button>
                        </div>
                    </div>
                </Col>
                <Col lg={2} className='p-0 mobileMargin'>
                    <div className="favorableCard bg-transparent  text-center">
                        <div className='d-flex justify-content-center align-items-center userSelection text-muted'>
                            <img className='userSelectionImg' src={userSelection} alt="userSelectionImg" /> User Selection
                        </div>
                        <h5 className='mb-4'>Serious</h5>
                        <div className='FreeCardUl'>
                            <Row>
                                <Col lg={6} className='col-8 mobileCards'>
                                    <div className='FavorableRatesCardUl'>
                                        <ul>
                                            <li>
                                                Total Image Uploads Per Month
                                            </li>
                                            <li>
                                                Total Image Uploads Per Month
                                                (Tournament Mode)
                                            </li>
                                            <li>
                                                Game Analytics Dashboard
                                            </li>
                                            <li>
                                                Analytics Report Donwload
                                            </li>
                                            <li>
                                                Create your own Dashboards
                                            </li>
                                            <li>
                                                Performance Comparison
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={12} className='col-4'>
                                    <ul>
                                        <li>
                                            300
                                        </li>
                                        <li>
                                            <img className='cross' src={cross} alt="cross" />
                                        </li>
                                        <li>
                                            <img className='check' src={check} alt="check" />
                                        </li>
                                        <li>
                                            <img className='check' src={check} alt="check" />
                                        </li>
                                        <li>
                                            <img className='cross' src={cross} alt="cross" />
                                        </li>
                                        <li>
                                            <img className='cross' src={cross} alt="cross" />
                                        </li>
                                    </ul>
                                </Col>
                                <Col lg={6} className='col-8 amount'>
                                    <div className="cost forMobileCost">
                                        <Row>
                                            <Col lg={2} className='col-2'>
                                                <FontAwesomeIcon className='dollar' icon={faDollarSign} />
                                            </Col>
                                            <Col lg={10} className='m-auto col-8 text-start'>
                                                <p className='text-light mb-0'> Cost</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg={6} className='col-4 m-auto'>
                                    <div className="cost forMobileCost text-light">
                                        10$
                                    </div>
                                </Col>
                            </Row>
                            <button className='btn-warning w-100 text-center mt-3 hoverBuyBtn'>BUY</button>
                        </div>
                    </div>
                </Col>
                <Col lg={2} className='p-0 mobileMargin'>
                    <div className="favorableCard bg-transparent  text-center">
                        <div className='d-flex justify-content-center align-items-center userSelection text-muted'>
                            <img className='userSelectionImg' src={userSelection} alt="userSelectionImg" /> User Selection
                        </div>
                        <h5 className='mb-4'>Profeccional</h5>
                        <div className='FreeCardUl'>
                            <Row>
                                <Col lg={6} className='col-8 mobileCards'>
                                    <div className='FavorableRatesCardUl'>
                                        <ul>
                                            <li>
                                                Total Image Uploads Per Month
                                            </li>
                                            <li>
                                                Total Image Uploads Per Month
                                                (Tournament Mode)
                                            </li>
                                            <li>
                                                Game Analytics Dashboard
                                            </li>
                                            <li>
                                                Analytics Report Donwload
                                            </li>
                                            <li>
                                                Create your own Dashboards
                                            </li>
                                            <li>
                                                Performance Comparison
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={12} className='col-4'>
                                    <ul>
                                        <li>
                                            1000
                                        </li>
                                        <li>
                                            <img className='cross' src={cross} alt="cross" />
                                        </li>
                                        <li>
                                            <img className='check' src={check} alt="check" />
                                        </li>
                                        <li>
                                            <img className='check' src={check} alt="check" />
                                        </li>
                                        <li>
                                            <img className='cross' src={cross} alt="cross" />
                                        </li>
                                        <li>
                                            <img className='cross' src={cross} alt="cross" />
                                        </li>
                                    </ul>
                                </Col>
                                <Col lg={6} className='col-8 amount'>
                                    <div className="cost forMobileCost">
                                        <Row>
                                            <Col lg={2} className='col-2'>
                                                <FontAwesomeIcon className='dollar' icon={faDollarSign} />
                                            </Col>
                                            <Col lg={10} className='m-auto col-8 text-start'>
                                                <p className='text-light mb-0'> Cost</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg={6} className='col-4 m-auto'>
                                    <div className="cost forMobileCost text-light">
                                        15$
                                    </div>
                                </Col>
                            </Row>
                            <button className='btn-warning w-100 text-center mt-3 hoverBuyBtn'>BUY</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default FavorableRatesCard