# IAM(Identity and Access Management)
- AWS 서비스와 리소스에 대한 액세스 관리
- 사용자, 그룹, 역할, 정책으로 구성
- 리전에 속하는 서비스가 아닌 글로벌 서비스

## 사용자
AWS의 기능과 자원을 이용하는 객체로 사람(Management Console에 로그인이 가능) 또는 애플리케이션(액세스 키와 비밀 액세스 키를 제공받아 이용)

## 그룹
여러 사용자에게 공통으로 권한을 부여하기 위해서 만든 개념으로 여러 사용자에게 일관된 권한 정책을 쉽게 적용하는 것이 가능

## 권한
AWS의 서비스나 자원에 어떤 작업을 할 수 있는 지 여부를 명시한 규칙 (ex. 서울 region에 있는 모든 EC2 인스턴스를 조회할 수 있다.)

## 정책
- 권한의 모음으로 사용자, 그룹, 역할에 적용 가능
- JSON 문석 형으로 구성: **사용자, 그룹, 역할에 권한을 직접 적용할 수 없고 정책을 생성한 후 적용해야 함**

## 역할(role)
어떤 행위를 하는 객체에게 여러 정책을 적용한다는 점에서 사용자와 비슷하지만, 객체 사용자가 아닌 서비스나 다른 AWS 계정의 사용자라는 차이가 있다. **사용자가 아닌 특정 서비스에서 생성한 객체에 권한을 부여하는데 사용**

### 정책을 정의하는 방법
1. 작업(Action): 사용자가 허용하는 AWS 서비스 작업
2. 리소스(Resource): 해당 작업을 수행할 수 있는 AWS 리소스
3. 효과(Effect): 액세스를 허용할 지 거부할 지 여부를 설정(기본값은 거부)
4. 조건(Condition): 정책이 적용되기 위해 필요한 조건

```JASON
# JSON표현식으로 정책을 정의 예시
  {
       "Version": "2012-10-17", 		//정책 문서의 버전
	"Statement": [                  //정책을 기술한 배열
		{
			"Resource": "*",        // Resourece
			"Action": "*",          // Action
			"Effect": "Allow"       // Effect
		}
	]
  }
```
### 안전한 권한 부여 방법: 최소 권한의 원칙(Least Privilege Policy)
0. 모든 리소스에 대해 모든 것을 허용(*필요 이상의 권한을 부여하기 때문에 보안적으로 안전하지 않음*)
```JASON
{
"Resource": "*", 
	"Action": "*", 
	"Effect": "Allow"
}
```
1. Action을 구체화: 모든 리소스(ex. DynamoDB의 모든 테이블)에 대해서 read/write 가능
```JASON
{
"Resource": "*", 
	"Action": [
        "dynamodb: GetItem",     //구체적인 DynamoDB액션
        "dynamodb: PutItem"
    ],
	"Effect": "Allow"
}
```

2. 특정 DynamoDB 리소스로 한정: MyTable에 대해서만 read/write하도록 제한
```JASON
{
"Resource": "arn:aws:dynamodb:us-east-2:111111122222233333:table/Mytable",       //사용할 특정 테이블을 지정(한정) 
	"Action": [
        "dynamodb: GetItem",     //구체적인 DynamoDB액션
        "dynamodb: PutItem"
    ],
	"Effect": "Allow"
}
```

3. 특정 조건을 명시: 1.1.1.1 IP주소로 접근하는 경우에만 MyTable을 read/write하도록 제한
```JASON
{
"Resource": "arn:aws:dynamodb:us-east-2:111111122222233333:table/Mytable",       //사용할 특정 테이블을 지정(한정) 
	"Action": [
        "dynamodb: GetItem",     //구체적인 DynamoDB액션
        "dynamodb: PutItem"
    ],
	"Effect": "Allow"
    "Condition": [             
        "IpAddress": {
            "aws:SourceIp"; "1.1.1.1"               
        }             //소스 IP를 제한
    ]
}
```
