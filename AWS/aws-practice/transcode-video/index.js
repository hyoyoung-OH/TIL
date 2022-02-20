'use strict';

var AWS = require('aws-sdk');

var elasticTranscoder = new AWS.ElasticTranscoder({
    region: 'us-east-1'
});

exports.handler = function(event, context, callback) {
    console.log('transcode-video handler function is called');

    // event 파라미터에서 S3 버킷에 저장된 객체명을 추출
    // https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/with-s3.html
    var key = event.Records[0].s3.object.key;

    // URL 인코딩되어서 전달된 파일명을 원본 형태로 변경
    // 객체(파일) 이름에 포함된 "+" 기호를 " " 문자로 대체하고 URL 디코딩
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
    var sourceKey = decodeURIComponent(key.replace(/\+/g, ' '));

    // 확장자를 제거 = 파일 이름 부분만 추출
    var outputKey = sourceKey.split('.')[0];

    // Elastic Transcoder의 파이프라인에 전달할 값(인자)
    var params = {
        PipelineId: '1645038055515-guouz5', // 본인이 생성한 Elastic Transcoder 파이프라인 ID
        Input: {
            Key: sourceKey
        }, 
        Outputs: [
            {   // 트랜스코딩된 결과 파일명 => 원본파일이름/원본파일이름-프리셋.mp4
                Key: outputKey + '/' + outputKey + '-1080p' + '.mp4',
                
                // 프리셋 = 미리 정의되어 있는 동영상 포맷
                // https://docs.aws.amazon.com/ko_kr/elastictranscoder/latest/developerguide/system-presets.html
                // 일반 1080p
                PresetId: '1351620000001-000001'
            }, 
            {   
                Key: outputKey + '/' + outputKey + '-720p' + '.mp4',
                // 일반 720p
                PresetId: '1351620000001-000010'
            }, 
            {   
                Key: outputKey + '/' + outputKey + '-web-720p' + '.mp4',
                // 웹: Facebook, SmugMug, Vimeo, YouTube
                PresetId: '1351620000001-100070'
            }
        ]
    };

    elasticTranscoder.createJob(params, function(error, res) {
                             // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                             // 파라미터, 트랜스코딩 과정이 끝났을 때 호출될 콜백 함수 
        // 트랜스코딩 과정에서 오류가 발생하면 핸들러 함수를 호출한 곳으로 오류를 반환                    
        if (error) {
            callback(error);
        }

    });
};
