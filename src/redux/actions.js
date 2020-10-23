import axios from "axios";

export const getCards = () => {
    return (dispatch) => {
    axios.get('https://nazarov-kanban-server.herokuapp.com/card/')
        .then(res => {
            dispatch({
                type: 'GET_CARDS',
                payload: res.data
            })
        })
        .catch()
    }
}

export const addCard = (card) => {
    return (dispatch) => {
        axios.post('https://nazarov-kanban-server.herokuapp.com/card/', card)
            .then(res => {
                dispatch(getCards())
            })
            .catch()
    }
}

export function deleteCard(cardId) {
    return (dispatch) => {
        axios.delete('https://nazarov-kanban-server.herokuapp.com/card/'+ cardId)
            .then(res => {
                dispatch(getCards())
            })
            .catch()
    }
}
export function moveRightCard(card, columns) {
    const colStatuses = columns.map(el => el.status);
    const newStatus = colStatuses[colStatuses.indexOf(card.status) + 1];

    return (dispatch) => {
        axios.patch('https://nazarov-kanban-server.herokuapp.com/card/'+ card._id, {status: newStatus})
            .then(res => {
                dispatch(getCards())
            })
            .catch()
    }
}

// export function cardDeleteById(cardId) {
//     return (dispatch) => {
//         axios({
//             url: `https://nazarov-kanban-server.herokuapp.com/card/${cardId}`,
//             method: 'DELETE'
//         })
//             .then((res) => console.log(res, 'OK'))
//             .catch((err) => console.log(err, 'error'))
//     }
// }