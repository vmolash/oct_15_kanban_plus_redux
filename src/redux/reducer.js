const initialState = {
    cards: [
        {
            _id: 1,
            name: 'Olya',
            status: 'todo',
            priority: 1
        },
        {
            _id: 2,
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
        {
            _id: 1,
            title: 'todo'
        },
        {
            _id: 2,
            title: 'progress'
        },
        {
            _id: 3,
            title: 'review'
        },
        {
            _id: 4,
            title: 'done'
        },


    ]
};
const kanban = (state = initialState, action) => {
    switch(action.type) {
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
            const newCards = state.cards.filter(el => el._id!== action.payload);
            return {
                    ...state,
                    cards: newCards
            }
        default:
            return state
    }
    return state
}

export default kanban;