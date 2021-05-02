const mysql = require('mysql');
const config = require('../config/config-database.json')

module.exports= {
    load:function(sql){
        var cn = mysql.createConnection(config.mysql);
        cn.connect();
        cn.query(sql,function(error,results,fiels){
            if(error){
                cn.end();
                throw error;
            }

            console.log(results);
            cn.end();

        })
    }
};

