const initialState = [
    {
        name: 'Lilya',
        phoneNumber: '0983129504',
        email: 'lilichkatserkovna@gmail.com'
    }
]

export default function petShelter(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PERSON':
          return [
            ...state,
            {
              name: action.name,
              phoneNumber: action.phoneNumber,
              email: action.email
            }
          ]
        default:
          return state;
    }
}
