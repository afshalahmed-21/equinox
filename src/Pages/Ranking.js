import React from 'react'
import WithSideMenu from '../Wrapper/WithSideMenu'
import { Row, Button, DropdownButton, Dropdown, Table, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/fontawesome-free-solid';

const Ranking = () => {
  return (
    <WithSideMenu>
      <Row className='m-2'>
        <div className="container">
          <div className="hero-ranking">
            <div className="context-text ms-lg-5 ps-lg-5">
              <h2>Tournament Ranking</h2>
              <p>
                Track the statistics of the best players
              </p>
              <div className="buttons row">
                <div className="col-lg-2">
                  <Button color="primary"><FontAwesomeIcon icon={faArrowDown} className="mx-2 border-bottom" /> EXPORT </Button>

                </div>
                <div className="col-lg-2">
                  <DropdownButton
                    id="dropdown-button-dark-example2"
                    menuVariant="dark"
                    title="MAPS"
                    className='ranking-map'
                  >
                    <Dropdown.Item href="#/action-1" active>
                      All
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">MAP #1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">MAP #2</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">MAP #3</Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Row>
      <Container className='m-2'>
        <Row>
          <div className="col-lg-12 mt-5 m-auto">
            <h3 className='text-muted'>"FRACTURE"  Ranking</h3>
            <Table responsive className='rankings-table'>
              <thead>
                <tr className='border-0 text-center'>
                  <th>POSITION</th>
                  <th>TEAM NAME</th>
                  <th>WINS</th>
                  <th>KILL POINTS</th>
                  <th>PLACEMENT POINTS</th>
                  <th>TOTAL POINTS</th>
                </tr>
              </thead>
              <tbody className='ranking-table-body'>
                <tr className='winner-1'>
                  <td>1</td>
                  <td>GameProWatch</td>
                  <td>8913</td>
                  <td>9812</td>
                  <td>7881</td>
                  <td>333</td>
                </tr>
                <tr className='winner-2' >
                  <td>2</td>
                  <td>NoWith_Man</td>
                  <td>7122</td>
                  <td>9411</td>
                  <td>9881</td>
                  <td>241</td>
                </tr>
                <tr className='winner-3 '>
                  <td>3</td>
                  <td>GameProWatch</td>
                  <td>8913</td>
                  <td>9812</td>
                  <td>7881</td>
                  <td>333</td>
                </tr>

                <tr className=''>
                  <td>4</td>
                  <td>A__KN</td>
                  <td>5543</td>
                  <td>5555</td>
                  <td>5901</td>
                  <td>124</td>
                </tr>
                <tr className=''>
                  <td>5</td>
                  <td>GSTOP</td>
                  <td>5543</td>
                  <td>5555</td>
                  <td>5901</td>
                  <td>124</td>
                </tr>
                <tr className=''>
                  <td>6</td>
                  <td>~4N~</td>
                  <td>5543</td>
                  <td>5555</td>
                  <td>5901</td>
                  <td>124</td>
                </tr>
                <tr className=''>
                  <td>7</td>
                  <td>CraZyNAGIbators69</td>
                  <td>5543</td>
                  <td>5555</td>
                  <td>5901</td>
                  <td>124</td>
                </tr>
                <tr className=''>
                  <td>8</td>
                  <td>SyperТигры</td>
                  <td>5543</td>
                  <td>5555</td>
                  <td>5901</td>
                  <td>124</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Row>
      </Container>
    </WithSideMenu>
  )
}

export default Ranking