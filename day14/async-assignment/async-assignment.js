// 카운트다운 타이머 구현
// 요구사항: var, let, const 각각 최소 1회 사용

// const 사용: 상수 선언
const MAX_TIME = 10;
const MIN_TIME = 1;

// let 사용: 변수 선언 (값이 변경될 수 있음)
let timerInterval = null;
let timerCount = 0;

// var 사용: 변수 선언 (함수 스코프)
var timerMessage = "";

// DOM 요소 가져오기
const timerInput = document.getElementById("timerInput");
const startButton = document.getElementById("startTimer");
const timerDisplay = document.getElementById("timerDisplay");

// 타이머 시작 함수 (함수 선언문 + 매개변수 기본값)
function startTimer(seconds = 10) {
  // 입력 유효성 검사
  if (isNaN(seconds) || seconds < MIN_TIME || seconds > MAX_TIME) {
    // 에러 메시지 출력
    timerMessage = "유효한 숫자(1-10)를 입력하세요!";
    timerDisplay.textContent = timerMessage;
    timerDisplay.classList.add("error");
    return;
  }

  // 에러 클래스 제거 (이전 에러 스타일 제거)
  timerDisplay.classList.remove("error");

  // 타이머 카운트 설정
  timerCount = seconds;

  // 버튼 비활성화
  startButton.disabled = true;

  // 초기 카운트 표시
  timerMessage = `타이머: ${timerCount}초`;
  timerDisplay.textContent = timerMessage;

  // setInterval로 1초마다 카운트다운 실행
  timerInterval = setInterval(function () {
    timerCount = timerCount - 1;

    // 조건문과 연산자 사용
    if (timerCount >= 1) {
      // 카운트다운 진행 중
      timerMessage = `타이머: ${timerCount}초`;
      timerDisplay.textContent = timerMessage;
    } else {
      // 타이머 종료
      timerMessage = "타이머 종료!";
      timerDisplay.textContent = timerMessage;

      // 타이머 정리
      clearInterval(timerInterval);
      timerInterval = null;

      // 버튼 재활성화
      startButton.disabled = false;
    }
  }, 1000); // 1초마다 실행
}

// 입력값 유효성 검사 함수
function validateInput(inputValue) {
  // 빈 값 체크
  if (inputValue === "" || inputValue === null) {
    return false;
  }

  // 숫자 변환
  const numberValue = Number(inputValue);

  // isNaN과 범위 체크 (&&, >=, <= 연산자 사용)
  if (isNaN(numberValue) || numberValue < MIN_TIME || numberValue > MAX_TIME) {
    return false;
  }

  return true;
}

// 이벤트 리스너 등록 (click 이벤트)
startButton.addEventListener("click", function () {
  // 현재 타이머가 실행 중인지 확인
  if (timerInterval !== null) {
    return; // 이미 실행 중이면 무시
  }

  // 입력값 가져오기
  const inputValue = timerInput.value;

  // 입력값 유효성 검사
  if (validateInput(inputValue)) {
    // 유효한 입력: 타이머 시작
    const seconds = Number(inputValue);
    startTimer(seconds);
  } else {
    // 유효하지 않은 입력: 에러 메시지 출력
    timerMessage = "유효한 숫자(1-10)를 입력하세요!";
    timerDisplay.textContent = timerMessage;
    timerDisplay.classList.add("error");
  }
});

// Enter 키 입력으로도 타이머 시작 가능하도록 추가 기능
timerInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    startButton.click();
  }
});

// 페이지 로드 시 초기화
document.addEventListener("DOMContentLoaded", function () {
  // 초기 상태 설정
  timerDisplay.textContent = "";
  timerInput.focus(); // 입력란에 포커스
});
