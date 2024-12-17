console.log(jQuery);

$(document).ready(function() {
    let selectedCount = 0; // 선택된 rectangle의 개수를 추적
    
    // 모든 .rectangle 요소에 클릭 이벤트 리스너 추가
    $(".rectangle").click(function() {
        $(this).toggleClass("clicked"); // 클릭된 요소에 클래스 토글

        // selectedCount 업데이트
        if ($(this).hasClass("clicked")) {
            selectedCount++;
        } else {
            selectedCount--;
        }

        console.log("Selected Count:", selectedCount); // 디버깅용 로그

        // 선택된 개수가 5개일 경우 가로 폭 좁히기
        if (selectedCount === 7) {
            $(".rectangle").css("height", "1px"); // 가로 폭 좁히기
        } else {
            $(".rectangle").css("height", "50px"); // 가로 폭 원래대로
        }
    });
});