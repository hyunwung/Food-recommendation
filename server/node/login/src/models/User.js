"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }
    async login() {
        const client = this.body;
        try{
            const user = await UserStorage.getUserInfo(client.id);
        if (user){
            if (user.id === client.id && user.psword === client.psword){
                return { success : true};
            }
            return { success : false, msg : "비밀번호를 정확히 입력해주세요."};
        }
        return { success : false, msg : "아이디를 정확히 입력해주세요."};
    } catch(err){
        return { success : false, err}
    }
}
    async signup(){
        const client = this.body;
        try{
            const response = await UserStorage.save(client);
            return response;
        } catch (err){
            return { success : false, err};
        }
}
    async result() {
        const client = this.body;
        try{
            const foods = await UserStorage.append(client);
        
        if (foods){
            if (foods){
                
                return { success : true};
            }
            return { success : false, msg : "잘못된 접근 입니다."};
        }
        return { success : false, msg : "잘못된 접근 입니다."};
    } catch(err){
        return { success : false, msg : "잘못된 접근 입니다."}
    }
}
    

}
module.exports = User;