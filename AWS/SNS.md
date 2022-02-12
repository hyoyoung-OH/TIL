## SNS 클라이언트 유형
- Publisher(게시자): topic에 대한 메시지를 작성, 발송함으로써 구독자와 비동기적으로 통신하는 논리적 엑세스 및 커뮤니케이션 채널
- SUbscriber(구독자): topic을 구독하는 경우 지원하는 프로토콜 중 하나를 통해 메시지 또는 알림을 소비하거나 수신

## SNS 구성
- topic: 여러 endpoint의 그룹화를 통해 통신 채널 역할을 하는 논리적 엑세스 포인트
- subscribe
- publish
- endpoint: HTTP/HTTPS, Email, Amazon Kinesis Data Firehorse, Amazon SQS,  AWS Lamda, SMS, ... 

## 일반적 사용 예
- 응용 프로그램 경고: SMS 또는 이메일을 통해 자정된 사용자에게 알림을 전송(예. 주문 내역을 메일 또는 문자로 전송)사용자 알림 또는 모바일 푸시
- Fanout 시나리오: 사용자가 물품을 구매한 경우, 구매 내역을 DB에 저장하고, 구매 내역을 문자로 발송하고 구매 내역을 CRM 데이터로 복사하는 등 후속업을 구현
