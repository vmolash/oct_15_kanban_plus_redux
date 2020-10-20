import React from 'react';
import {connect} from 'react-redux';


function Card(props) {
    console.log('CARD', props)
  return (
    <div >
        <button onClick={props.addCard}>add card</button>

        {props.cards.map(el =>
            <p key={el._id}>
                {el.name}
                <button onClick={() => props.deleteCard(el._id)}>delete</button>
            </p>)}

    </div>
  );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})
const mapDispatchToProps = (dispatch) => ({
    addCard: () => dispatch({type:'ADD_CARD'}),
    deleteCard: (cardId) => dispatch({type: 'DELETE_CARD', payload: cardId})
})
export default connect(mapStateToProps, mapDispatchToProps)(Card);
