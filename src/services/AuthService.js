// **********
// Class for handling user authentication
// *********

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
    // @return Promise<{ status: string, user: object, message: string }>
    signIn(email, pwd){
        return new Promise((resolve, reject)=>{
            // Set timeout of 1 second to immitate service wait time
            setTimeout(()=>{
                const userListJson = localStorageService.getItem(localStorageKeys.userList) || '[]';
                let userList = JSON.parse(userListJson);

                // Check if user exists
                for(let user of userList){
                    if(user.email === email && user.pwd === pwd){
                        // User credentials are a match
                        const jsonUser = JSON.stringify(user);
                        localStorageService.setItem(localStorageKeys.userKey, jsonUser);
                        resolve({ status: 'OK', user: user, message: ''});
                        return;
                    }
                }

                resolve({ status: 'ERROR', user: null, message: 'Invalid email and password. Try again.'});
            }, 1000);
        });
    }

    getCurrentUser(){
        const json = localStorageService.getItem(localStorageKeys.userKey);
        return JSON.parse(json);
    }

    // Mocks an API service call that creates a user in a database
    // @return Promise<{ status: string, message: string }>
    createUser(userData){
        return new Promise((resolve, reject)=>{
            // Set timeout of 1 second to immitate service wait time
            setTimeout(()=>{
                const userListJson = localStorageService.getItem(localStorageKeys.userList) || '[]';
                let userList = JSON.parse(userListJson);
        
                // Check if user exists
                for(let user of userList){
                    if( user.email === userData.email){
                        // User already exists
                        resolve({ status: 'ERROR', message: 'User account already exists with that email.'});
                        return;
                    }
                }
        
                // Set current user
                const jsonUser = JSON.stringify(userData);
                localStorageService.setItem(localStorageKeys.userKey, jsonUser);
        
                // Update user list
                userList.push(userData);
                const json = JSON.stringify(userList);
                localStorageService.setItem(localStorageKeys.userList, json);
                
                resolve({ status: 'OK', message: 'User created successfully!' });
            }, 1000);
        });
    }
}

const instance = new AuthService();
export default instance;