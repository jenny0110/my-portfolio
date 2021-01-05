window.onload = function () {
    var posi = 0
    var contain = document.querySelector('.container')
    document.querySelector('.btn1').addEventListener('click', function () {
        {
            if (0 > posi)
                posi = posi + 560
            contain.style.transform = "translate(" + posi + "px)"

        }
    });
    document.querySelector('.btn2').addEventListener('click', function () {
        {
            if (-3800 < posi)
                posi = posi - 530
            contain.style.transform = "translate(" + posi +"px)"
        }
    });

}