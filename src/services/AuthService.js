import localStorageService from './LocalStorageService';
import { localStorageKeys } from '../Constants';

class AuthService {
    isUserLoggedIn(){
        return localStorageService.getItem(localStorageKeys.userKey) != null;
    }

    signOut(){
        localStorageService.clearAll();
    }

    // Mocks an API service authentication call
    // @return user data if exsist or null
    signIn(email, pwd){
        const userListJson = localStorageService.getItem(localStorageKeys.userList) || '[]';
        let userList = JSON.parse(userListJson);

        console.log(email, pwd);

        // Check if user exists
        for(let user of userList){
            if(user.email === email && user.pwd === pwd){
                // User credentials are a match
                const jsonUser = JSON.stringify(user);
                localStorageService.setItem(localStorageKeys.userKey, jsonUser);
                return user;
            }
        }
    }

    getCurrentUser(){
        const json = localStorageService.getItem(localStorageKeys.userKey);
        return JSON.parse(json);
    }

    // Mocks an API service call that creates a user in a database
    // @return { status: string, message: string }
    createUser(userData){
        const userListJson = localStorageService.getItem(localStorageKeys.userList) || '[]';
        let userList = JSON.parse(userListJson);

        // Check if user exists
        for(let user of userList){
            if( user.email === userData.email){
                // User already exists
                return { status: 'ERROR', message: 'User account already exists with that email.'};
            }
        }

        // Set current user
        const jsonUser = JSON.stringify(user);
        localStorageService.setItem(localStorageKeys.userKey, jsonUser);

        // Update user list
        userList.push(userData);
        const json = JSON.stringify(userList);
        localStorageService.setItem(localStorageKeys.userList, json);
        
        return { status: 'OK', message: 'User created successfully!' };
    }
}

const instance = new AuthService();
export default instance;