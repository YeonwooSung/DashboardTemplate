//---------------------------------
// Error messages

// Error messages for id
var ERR_MSG_NO_ID = '아이디를 입력해주십시오.'

// Error messages for pw
var ERR_MSG_NO_PASSWORD = '비밀번호를 입력해주십시오.'
var ERR_MSG_PASSWORD_LEN = '비밀번호는 최소 8글자 이상이어야 합니다.'

// Error message for region
var ERR_MSG_NO_MATCHING_REGION = '지역 이름이 잘못되었습니다.'

//---------------------------------
var PASSWORD_MINIMUM_LEN = 8;

var valid_regions = ['구로', '동작', '서초', '합정', '이태원'];


function validateForm() {
    var forms = document.forms["SignInForm"];
    var email = forms["id"].value.trim();
    var password = forms["password"].value.trim();
    var region = forms['region'].value.trim();

    return validateEmail(email) && validatePassword(password) && validateRegion(region);
}

function validateEmail(email) {
    if (email == "") {
        addErrorMessage("Name must be filled out");
        return false;
    }

    return true;
}

function validatePassword(pw) {
    if (pw == "") {
        addErrorMessage(ERR_MSG_NO_PASSWORD);
        return false;
    }

    if (pw.length < PASSWORD_MINIMUM_LEN) {
        addErrorMessage(ERR_MSG_PASSWORD_LEN);
        return false;
    }

    return true;
}

function validateRegion(region) {
    if (valid_regions.includes(region)) {
        return true;
    }

    addErrorMessage(ERR_MSG_NO_MATCHING_REGION);
    return false;
}

function addErrorMessage(msg) {
    var div = document.getElementById('errorMsgContainer');

    // use whild loop to remove all child elements
    while (div.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }

    var p = document.createElement('p');
    p.innerHTML = msg;
    p.classList.add('text-danger');
    p.classList.add('text-center');

    div.appendChild(p);
}
