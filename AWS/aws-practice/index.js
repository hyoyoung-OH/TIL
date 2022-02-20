'use strict';

var jwt = require('jsonwebtoken');
var request = require('request');

/* 
    event = {
        "accessToken": "....."
    }
 */
exports.handler = function(event, context, callback) {
    console.log(JSON.stringify(event));

    // event 객체에 accessToken 존재 여부를 확인
    if (!event.accessToken) {
        callback('Could not find accessToken');
        return;
    }

    // 환경변수 DOMAIN의 값은 auth0.com에 설정되어 있는 애플리케이션의 도메인
    // https://auth0.com/docs/api/authentication#user-profile 를 참조해서 
    // 사용자 프로필을 조회할 때 필요한 값을 설정
    var options = {
        url: 'https://' + process.env.DOMAIN + '/userinfo', 
        method: 'GET', 
        json: true,
        body: {
            'access_token': event.accessToken
        }
    };

    request(options, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
            callback(null, body);
        } else {
            callback(error);
        }
    });
};
