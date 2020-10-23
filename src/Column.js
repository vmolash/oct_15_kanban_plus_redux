import React from 'react';
import CardItem from "./CardItem";

import {Col} from 'reactstrap';


function Column(props) {

    const {cards, column} = props;


  return (
    <Col className='col-sm'>
        {column.status}
        {cards.filter(el => el.status === column.status).map(el => <CardItem key={el._id} card={el}/>)}
    </Col>
  );
}

export default Column;