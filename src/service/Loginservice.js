import * as userapi from '../service/api';

export const logIn = (user, password)=>{
 if(user=== userapi.user.username  && password === userapi.user.password){
     return true;
 }
 return false;

}