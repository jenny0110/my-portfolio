window.onload = function(){
// 타이핑 애니메이션 시작
    let target = document.querySelector('#dynamic');
    function randomString(){
        let stringArr = ['소통과 협력을 기릅니다.',"팀에서의 역할을 수행합니다.","C랩에서 코딩을 배웁니다.","문제정의 심화 프로젝트를 진행합니다."];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
    }
    //타이핑 리셋
    function resetTyping(){
        target. textContent = "";
        dynamic(randomString()); 
    }
    // 한글자씩 출력 함수
    function dynamic(randomArr){
        if(randomArr.length > 0){
            target.textContent += randomArr.shift();
            setTimeout(function(){
                dynamic(randomArr);
            },80);
        }else{
            setTimeout(resetTyping, 3000);
        }
    }
    dynamic(randomString()); 
    //커서 깜빡임 효과
    function blink(){
        target.classList.toggle("active");
    }
    setInterval(blink, 500);
//타이핑 애니메이션 끝

}