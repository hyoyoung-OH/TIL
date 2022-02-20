'use strict';

var jwt = require('jsonwebtoken');

// 정책을 생성해서 반환하는 함수
/* 정책 문서 형식
    {
        "principalId": "...", 
        "policyDocument": {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Action": "*",
                    "Resource": "*"
                }
            ]
        }
    }
*/
var generatePolicy = function(principalId, effect, resource) {
    var authResponse = {};
    authResponse.principalId = principalId;

    if (effect && resource) {
        var policyDocument = {};
        policyDocument.Version = '2012-10-17';
        policyDocument.Statement = [];

        var StatementItem = {};        
        StatementItem.Effect = effect;
        StatementItem.Action = 'execute-api:Invoke';
        StatementItem.Resource = resource;

        policyDocument.Statement[0] = StatementItem;
        authResponse.policyDocument = policyDocument;
    }

    return authResponse;
};

exports.handler = function(event, context, callback) {

    if (!event.authorizationToken) {
        callback('Could not find authorizationToken');
        return 
    }

    // "authorizationToken": "Bearer xxxxx.yyyyy.zzzzz"
    // JWT 토큰을 추출
    var token = event.authorizationToken.split(' ')[1];

    // auth0.com에서 제공하는 Client Secret을 환경변수로부터 읽어와서 변수로 할당
    var secretKey = process.env.AUTH0_SECRET;

    // JWT 토큰을 검증
    jwt.verify(token, secretKey, function(error, decoded) {
        if (error) {
            console.log('Failed jwt verification: ', error);
            callback('Authorization Failed');
        } else {
            // 람다 함수 실행 정책을 생성해서 반환
            var policy = generatePolicy('user', 'allow', event.methodArn);
            console.log(policy);
            callback(null, policy);
        }
    });
};
