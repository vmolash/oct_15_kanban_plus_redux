import React, {useEffect} from 'react';

import {connect} from "react-redux";
import Board from "./Board";
import Container from "reactstrap/es/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "reactstrap/es/Button";
import {addCard, getCards} from "./redux/actions";

function App(props) {

    useEffect(() => {
        props.getCards()
    },[])

    const addCardButtonHnadler = () => {
        const newCard = {
            name: 'Mila',
            status: 'todo',
            priority: 5
        }
        props.addCard(newCard)
    }

    return (
        <Container>
            <Button onClick={addCardButtonHnadler}>Add new card</Button>
            <Board cards={props.cards} columns={props.columns}/>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})
const mapDispatchToProps = (dispatch) => ({
    getCards: () => dispatch(getCards()),
    addCard: (card) => dispatch(addCard(card))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
