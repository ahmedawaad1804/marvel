
import marvelImageAxiosInstance from './marvelImageAxiosInstance';

export default dataService = {
    
    getCharacterPhoto: (url,size) => {
        return marvelImageAxiosInstance
            .get(url+size);
    },
    




}
