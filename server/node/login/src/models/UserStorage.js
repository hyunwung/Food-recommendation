"use strict";

const db = require("../config/db");

class UserStorage{
    static getUserInfo(id){
        return new Promise((resolve,reject)=>{
            const query = "select * from users where id = ?;";
            db.query(query, [id], (err,data)=>{
                if (err) reject(`${err}`);
                else resolve(data[0]);
        }); 
    });
}
    static async save(userInfo) {
        return new Promise((resolve,reject)=>{
            const query = "insert into users(id,name,psword,email,gender) values(? ,? ,? , ?, ?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.psword, userInfo.email , userInfo.gender], (err)=>{
                if (err) reject(`${err}`);
                else resolve({ success : true });
            }); 
        });
    }
    static async append(whatfood) {
        return new Promise((resolve,reject)=>{
            const query = "select ? from foods;";
            db.query(query, [whatfood], (err)=>{
                if (err) reject(`${err}`);
                else resolve({ success : true });
            }); 
        });
    }
}
module.exports = UserStorage;
