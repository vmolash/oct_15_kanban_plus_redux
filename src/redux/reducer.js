const initialState = {
    cards: [
        {
            _id: 1,
            name: 'Olya',
            status: 'todo',
            priority: 1
        },
        {
            _id: '5f8de007d55904003c9934dc',
            name: 'Alice',
            status: 'progress',
            priority: 2
        },
        {
            _id: 3,
            name: 'Allian',
            status: 'review',
            priority: 4
        },
        {
            _id: 4,
            name: 'Mike',
            status: 'done',
            priority: 5
        },
    ],
    columns: [
        {_id: 1, status: 'todo'},
        {_id: 2, status: 'progress'},
        {_id: 3, status: 'review'},
        {_id: 4, status: 'done'},
    ]
};
const colStatuses = initialState.columns.map(el => el.status);

const kanban = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CARDS':
            return {
                ...state,
                cards: action.payload
            }
        case 'ADD_CARD' :
            return {
                ...state,
                cards: [...state.cards, {
                    _id: Math.random(),
                    name: 'Mira',
                    status: 'review',
                    priority: 3
                }]
            }
        case 'DELETE_CARD':
            const newCards = state.cards.filter(el => el._id !== action.payload);
            return {
                ...state,
                cards: newCards
            }
        case 'MOVE_RIGHT' :
            const newList = state.cards.map(el => {
                if (el._id === action.payload) {
                    return {...el, status: colStatuses[colStatuses.indexOf(el.status) + 1]}
                } else {
                    return el
                }
            })
            return {
                ...state,
                cards: newList
            }
        case 'MOVE_LEFT':
            const newCardsLeft = state.cards.map(el => {
                if (el._id === action.payload) {
                    return {...el, status: colStatuses[colStatuses.indexOf(el.status) - 1]}
                }
                return el
            })
            return {
                ...state,
                cards: newCardsLeft
            }

        default:
            return state
    }
}

export default kanban;