const BASE_API = 'http://sumajorcko.com/api/Torneo?zona=a';

class Api {
    async getPositionsTable() {
        const query = await fetch(BASE_API);
        const data = await query.json();
        // console.log('entre', data);
        return data;
    }
}

export default new Api();