import { createStore } from 'redux';
import reducer from './redurcers/positionsTable';

const store = createStore(reducer, {
    positionsTableList: []
})

export { store };