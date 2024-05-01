import React, {useState} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import './weather.css';
const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');

    return (
      <>
   <div className="weather1">
        <form>
        <Row>
          <Col xs={4}>
            <input
              placeholder="Enter city"
              onChange={(event) => setCity(event.target.value)}
              value={city}/>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Button onClick={() => onSearch(city)} className="getweather">Check Weather</Button>
          </Col>
        </Row>
        </form>
        </div>
      </>
    );
  };

export default CitySelector;