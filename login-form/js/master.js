var i = 0;

function _form() {
    var i = 0;
    var _email = document.forms['login']['email'].value
    var _pass = document.forms['login']['pass'].value
    if (_email.indexOf('@') == -1) {
        document.getElementsByClassName('reson1')[0].style.display = "flex";
        document.querySelector('.main>form>div:nth-of-type(4)').style.marginTop = "10px";
        i++
    }
    if (_email.indexOf('.') == -1) {
        document.getElementsByClassName('reson1')[0].style.display = "flex";
        document.querySelector('.main>form>div:nth-of-type(4)').style.marginTop = "10px";
        i++
    }
    if (_email.length < 8 || _email.length > 25) {
        document.getElementsByClassName('reson2')[0].style.display = "flex";
        document.querySelector('.main>form>div:nth-of-type(4)').style.marginTop = "10px";
        i++
    }
    if (_email.lastIndexOf('.') < 14 || _email.indexOf('@') < 4) {
        document.getElementsByClassName('reson4')[0].style.display = "flex";
        document.querySelector('.main>form>div:nth-of-type(4)').style.marginTop = "10px";
        i++
    }
    if (_pass.length < 5 || _pass.length > 15) {
        document.getElementsByClassName('reson3')[0].style.display = "flex";
        i++
    }

    if (((_pass.search(/[0-9]/)) == -1)) {
        document.getElementsByClassName('reson7')[0].style.display = "flex";
        i++
    }
    if (((_pass.search(/[A-Z]/)) == -1)) {
        document.getElementsByClassName('reson5')[0].style.display = "flex";
        i++
    }
    if (((_pass.search(/[a-z]/)) == -1)) {
        document.getElementsByClassName('reson6')[0].style.display = "flex";
        i++
    }
    if (i > 0) {
        var _email = document.forms['login']['email'].value = ""
        var _pass = document.forms['login']['pass'].value = ""
        document.getElementById('email').focus()
    } else {
        document.forms['login'].submit()
    }

}