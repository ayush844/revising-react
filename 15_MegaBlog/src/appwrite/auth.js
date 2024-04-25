import { Client, Account, ID } from "appwrite";
import conf from "../conf/config";

// const client = new Client().setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

// const account = new Account(client);

// const user = await account.create(
//     ID.unique(),
//     "email@example.com",
//     'password'
// )


export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = this.account.create(ID.unique(), email, password, name);

            if(userAccount){
                // call another method
                return this.login({email, password});
            }else{
                return userAccount;
            }


        } catch (error) {
            throw error;
        }
    } 




    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }


    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logOut(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("appwrite service :: logout :: error", error);
        }
    }


};

const authService = new AuthService();

export default authService;