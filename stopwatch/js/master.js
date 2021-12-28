$(function () {

    var x;
    var mili = 0;
    var sec = 0;
    var min = 0;
    var hou = 0;
    var flag = 0;

    $('#start').click(function () {
        if (flag == 0) {
            x = setInterval(_start, 10);
            flag++
        } else {
            document.getElementById('start').setAttribute('disabled')
        }
    })

    $('#pause').click(function () {
        flag = 0
        clearInterval(x)
        document.getElementById('start').removeAttribute('disabled')
    })

    $('#reseat').click(function () {
        mili = 0;
        sec = 0;
        min = 0;
        hou = 0;
        $('#sec').text('00')
        $('#min').text('00')
        $('#hou').text('00')
        $('#mili').text('00')
        document.getElementById('start').removeAttribute('disabled')
        clearInterval(x)
        flag = 0
    })

    function _start() {

        if (mili < 99) {
            mili++
        } else {
            mili = 0
            if (sec < 59) {
                sec++
                if (sec < 10) {
                    $('#sec').text('0' + sec)
                } else {
                    $('#sec').text(sec)
                }
            } else {
                sec = 0
                if (min < 59) {
                    min++
                    if (min < 10) {
                        $('#min').text('0' + min)
                    } else {
                        $('#min').text(min)
                    }
                } else {
                    min = 0
                    if (hou < 10) {
                        $('#hou').text('0' + hou)
                    } else {
                        $('#hou').text(hou)
                    }
                }
            }
        }
        $('#mili').text(mili)

    }
})