import React from 'react';
import {connect} from 'react-redux';

import { Card, CardBody, CardTitle,CardSubtitle, CardFooter,Button } from 'reactstrap';
import {deleteCard, moveRightCard} from "./redux/actions";

function CardItem(props) {
    console.log('CARDS PROPS', props)
    const {card} = props;
    const {name, status, priority, _id} = card;

    const deleteButtonHandler = () => {
        props.deleteCard(_id)
    }
  return (
    <div >
        <Card>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{status}</CardSubtitle>
                {priority}
                <button>↓</button>
                <button>↑</button>
            </CardBody>
            <CardFooter>
                <Button disabled={status === props.columns[0].status} onClick={() => props.moveLeft(_id)}>←</Button>
                {' '}
                <Button onClick={deleteButtonHandler}>Delete</Button>
                {' '}
                <Button disabled={status === props.columns[props.columns.length -1].status} onClick={() => props.moveRight(card, props.columns)}>→</Button>
            </CardFooter>
        </Card>
    </div>
  );
}
const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})
const mapDispatchToProps = (dispatch) => ({
    deleteCard: (cardId) => dispatch(deleteCard(cardId)),
    moveRight: (card, columns) => dispatch(moveRightCard(card, columns)),
    moveLeft: (cardId) => dispatch({type: 'MOVE_LEFT', payload: cardId})
})
export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
