'use stric';

var AWS = require('aws-sdk');
var s3 = new AWS.S3();

exports.handler = function(event, context, callback) {
    // SNS 서비스가 전달한 이벤트 객체에서 동영상이 저장된 버킷과 키(객체 이름)를 추출
    // 참고1의 붉은색으로 표시한 부분을 가져와서 JSON 형식으로 변환
    var message = JSON.parse(event.Records[0].Sns.Message); 
    var sourceBucket = message.Records[0].s3.bucket.name;
    var sourceKey = message.Records[0].s3.object.key;
    sourceKey = decodeURIComponent(sourceKey.replace(/\+/g, ' '));

    console.log(sourceBucket);
    console.log(sourceKey);



    // 외부에서 접근 가능하도록 동영상의 접근제어목록(ACL) 속성을 public-read로 설정 
    var params = {
        Bucket: sourceBucket, 
        Key: sourceKey,
        ACL: 'public-read'
    };
    s3.putObjectAcl(params, function(err, res) {
        if (err) {
            callback(err);
        }
    });
};
