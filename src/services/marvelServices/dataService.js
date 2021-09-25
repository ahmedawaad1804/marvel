import marvelAxiosInstance from './marvelAxiosInstance';

export default dataService = {
    
    getCharacters: (offset) => {
        return marvelAxiosInstance
            .get('/v1/public/characters',offset);
    },
    




}

