import $ from "jquery";

export function selectBox() {
  // 일반석/ 특화석 selectBox 생성함수
  let area0 = ["티켓 선택", "일반석", "특화석"];
  let area1 = [
    "좌석 선택",
    "내야지정석(1F)",
    "내야지정석(2F)",
    "외야커플석",
    "외야지정석",
  ];
  let area2 = [
    "좌석 선택",
    "포수후면석",
    "포수후면석TV존",
    "중앙탁자석",
    "중앙탁자석",
    "중앙가족석",
    "미니박스(1인)",
    "내야응원단석",
    "내야탁자석",
    "내야하단탁자석",
    "중앙메디칼존(내야커플석)",
    "VIP커플석",
    "덕아웃지정석",
    "익사이팅존",
    "익사이팅커플석",
    "불펜지정석",
    "외야라운지석",
    "스테이인터뷰존",
    "잔디석	",
    "필드박스(1인)",
  ];

  const areaA = {
    일반석: [
      "좌석 선택",
      "내야지정석(1F)",
      "내야지정석(2F)",
      "외야커플석",
      "외야지정석",
    ],
    특화석: [
      "포수후면석",
      "포수후면석TV존",
      "중앙탁자석",
      "중앙탁자석",
      "중앙가족석",
      "미니박스(1인)",
      "내야응원단석",
      "내야탁자석",
      "내야하단탁자석",
      "중앙메디칼존(내야커플석)",
      "VIP커플석",
      "덕아웃지정석",
      "익사이팅존",
      "익사이팅커플석",
      "불펜지정석",
      "외야라운지석",
      "스테이인터뷰존",
      "잔디석	",
      "필드박스(1인)",
    ],
  };

  // 일반/특화 선택 박스 초기화
  $("#sido1").each(function (i, item) {
    if (i === 0) {
      let $selsido = $(this);
      $.each(eval(area0), function () {
        $selsido.append(
          "<option value = ' " + this + " '>" + this + "</option>"
        );
      });
      $selsido.next().append("<option value=''>좌석 선택</option>");
    }
  });
  // 일반 특화 선택시 좌석 선택
  $("select[name^=sido]").change(function (e) {
    let area =
      "area" + $("option", $(this)).index($("option:selected", $(this))); // 선택지역의 구군 Array
    let $gugun = $(this).next(); // 선택영역 좌석 객체
    $("option", $gugun).remove(); // 좌석 초기화

    if (area === "area0") $gugun.append("<option value=''>좌석 선택</option>");
    else {
      $.each(eval(area), function () {
        $gugun.append("<option value='" + this + "'>" + this + "</option>");
      });
    }
  });
}
