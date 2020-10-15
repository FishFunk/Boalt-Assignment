class LocalStorageService {
    constructor(){
        if(!localStorage){
            throw new Error("Browser local storage is required for this site to run properly");
        }
    }

    clearAll(){
        localStorage.clear();
    }

    // Set a value into local storage
    setItem(key, value){
        if(typeof(key) === 'string' && typeof(value) === 'string'){
            localStorage.setItem(key, value);
        } else {
            throw new Error("Bad param types. Local storage accepts only string values");
        }
    }

    // Retrieve a stored value form local storage
    getItem(key){
        if(typeof(key) === 'string'){
            return localStorage.getItem(key);
        } else {
            throw new Error("Bad param types. Local storage accepts only string values");
        }
    }
}

const instance = new LocalStorageService();
export default instance;