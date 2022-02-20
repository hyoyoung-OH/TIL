// userController 객체를 정의
var userController = {
    data: {
        auth0Lock: null,
        config: null,
    },
    // HTML 문서에서 제어할 요소들(버튼, 이미지, 라벨, ... 등)에 대한 참조
    uiElements: {
        loginButton: null,
        logoutButton: null,
        profileButton: null,
        profileNameLabel: null,
        profileImage: null,
    },
    // 설정 정보와 제어할 요소들을 초기화
    init: function (config) {
        var that = this;
 
        // config.js 파일에 포함되어 있는 설정 정보를 변수에 할당
        this.data.config = config;
 
        // 로그인 이후에 사용자 정보를 조회할 때 필요한 토큰
        var auth0options = {
            auth: {
                responseType: 'token id_token'
            }
        };
        this.data.auth0Lock = new Auth0Lock(config.auth0.clientId, config.auth0.domain, auth0options);
 
        // HTML 문서에서 id 속성의 값이 auth0-login인 요소를 가져와서 loginButton 변수에 할당
        this.uiElements.loginButton = $('#auth0-login');
        this.uiElements.logoutButton = $('#auth0-logout');
        this.uiElements.profileButton = $('#user-profile');
        this.uiElements.profileNameLabel = $('#profilename');
        this.uiElements.profileImage = $('#profilepicture');
 
        // CSS에서 처리
        // // 최초 로그아웃 버튼과 프로필 버튼을 숨기도록 처리
        // this.uiElements.logoutButton.hide();
        // this.uiElements.profileButton.hide();
       
        // 사용자의 로그인 여부를 확인해서 요청에 필요한 정보를 설정
        this.configAuthenticatedRequests();
 
        // 로컬 스토리지에 accessToken이 존재하는 경우 사용자 정보를 조회해서 출력
        var accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            // 사용자 정보를 조회
            // https://auth0.com/docs/libraries/lock/lock-api-reference
            this.data.auth0Lock.getUserInfo(accessToken, function(err, profile) {
                if (err) {
                    return alert('사용자 프로필을 가져오는데 실패했습니다.' + err.message);
                }
 
                // 사용자 정보 조회에 성공하면 프로필 정보를 출력
                that.showUserAuthenticationDetails(profile);
            });
        }
 
        this.wireEvents();
    },
    // 로컬 스토리지에 저장된 idToken, accessToken을 Authorization, AccessToken 요청 헤더의 값으로 설정
    // => 요청 헤더의 값으로 설정되려면, 로컬 스토리지에 해당 값들이 존재해야 함
    configAuthenticatedRequests: function() {
        $.ajaxSetup({
            'beforeSend': function(xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('idToken'));
                xhr.setRequestHeader('AccessToken', localStorage.getItem('accessToken'));
            }
        })
    },
    // 전달받은 프로필 정보를 사용자 화면에 출력
    showUserAuthenticationDetails: function(profile) {
        // 프로필 정보 여부를 확인해서 있는 경우 사용자 별명과 사진을 출력
        // profile 변수가 null, undefined, ''인 경우 => false
        // profile 변수가 값이 있는 경우 => true
        var showUserAuthenticationElements = !!profile;
        if (showUserAuthenticationElements) {
            this.uiElements.profileNameLabel.text(profile.nickname);
            this.uiElements.profileImage.attr('src', profile.picture);
        }
 
        // showUserAuthenticationDetails() 함수가 호출되었다는 것은 로그인에 성공 상태를 의미하므로,
        // 로그인 버튼이 보이지 않고, 로그아웃 버튼과 프로필 버튼이 보이도록 처리
        this.uiElements.loginButton.hide();
        this.uiElements.logoutButton.show();
        this.uiElements.profileButton.show();
    },
    // 특정 이벤트에 반응하는 함수를 정의
    wireEvents: function() {
        var that = this;

       // Show Profile 버튼 클릭 이벤트 핸들러
       this.uiElements.profileButton.click(function(e) { 
        // user-profile 리소스 호출 URL
        var url = that.data.config.apiBaseUrl + '/user-profile';
        $.get(url, function(data, status) {
            console.log('data >>>', data);
            console.log('status >>>', status);
        }).fail(function(e) {
            console.log(e);
        });
    });

 
        // auth0 lock에서 제공하는 로그인 창에서
        // authenticated 이벤트가 발생하는 경우 수행할 동작을 함수로에 정의
        this.data.auth0Lock.on('authenticated', function(authResult) {
            // 로그인에 성공하면 accessToken, idToken 값을 로컬 스토리지에 저장
            localStorage.setItem('accessToken', authResult.accessToken);
            localStorage.setItem('idToken', authResult.idToken);
 
            // 로그인에 성공하면 사용자 정보를 조회
            that.data.auth0Lock.getUserInfo(authResult.accessToken, function(err, profile) {
                if (!err) {
                    that.showUserAuthenticationDetails(profile);
                }
            });
        });
 
        // 로그인 버튼을 클릭했을 때 처리
        // => auth0 lock에서 제공하는 로그인 화면을 실행
        this.uiElements.loginButton.click(function(e) {
            that.data.auth0Lock.show();
        });
 
        // 로그아웃 버튼을 클릭했을 때 처리
        this.uiElements.logoutButton.click(function(e) {
            // 로그인 성공했을 때 로컬 스토리지에 저장했던 정보를 모두 삭제
            localStorage.removeItem('accessToken');
            localStorage.removeItem('idToken');
 
            // 로그아웃 버튼과 프로필 버튼을 숨기고, 로그인 버튼을 나타나게 처리
            that.uiElements.logoutButton.hide();
            that.uiElements.profileButton.hide();
            that.uiElements.loginButton.show();
        });
 
    },
};
