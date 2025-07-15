// 다중 데이터 가져오기 구현
// 요구사항: var, let, const 각각 최소 1회 사용

// const 사용: 상수 선언
const MIN_ID = 1;
const MAX_ID = 100;
const API_BASE_URL = "https://jsonplaceholder.typicode.com/posts/";

// let 사용: 변수 선언 (값이 변경될 수 있음)
let isLoading = false;
let validPostIds = [];

// var 사용: 변수 선언 (함수 스코프)
var outputMessage = "";

// DOM 요소 가져오기
const postIdsInput = document.getElementById("postIds");
const fetchButton = document.getElementById("fetchPosts");
const output = document.getElementById("output");

// 화살표 함수 + ...rest 매개변수 사용
const fetchMultiplePosts = async (...postIds) => {
  const results = {};

  // for...of로 ID 순회
  for (const id of postIds) {
    try {
      // fetch와 async/await 사용
      const response = await fetch(`${API_BASE_URL}${id}`);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: 게시물을 찾을 수 없습니다`);
      }

      const post = await response.json();
      results[id] = post;
    } catch (error) {
      // 개별 게시물 에러 처리
      results[id] = { error: error.message };
    }
  }

  return results;
};

// 입력값 유효성 검사 함수
function validateInput(inputValue) {
  // 빈 값 체크
  if (!inputValue || inputValue.trim() === "") {
    return { valid: false, message: "유효한 ID(1-100)를 입력하세요!" };
  }

  // 쉼표로 분리
  const idStrings = inputValue.split(",");
  const validIds = [];

  // 각 ID 검증
  for (const idStr of idStrings) {
    const trimmedId = idStr.trim();
    const id = Number(trimmedId);

    // 숫자이고 범위 내에 있는지 확인
    if (!isNaN(id) && id >= MIN_ID && id <= MAX_ID && Number.isInteger(id)) {
      // 중복 제거
      if (!validIds.includes(id)) {
        validIds.push(id);
      }
    }
  }

  if (validIds.length === 0) {
    return { valid: false, message: "유효한 ID(1-100)를 입력하세요!" };
  }

  return { valid: true, ids: validIds };
}

// 결과 렌더링 함수
function renderResults(posts) {
  let htmlContent = "";

  // for...in으로 결과 객체 순회
  for (const postId in posts) {
    const post = posts[postId];

    if (post.error) {
      // 에러가 있는 경우
      htmlContent += `<div class="post">post${postId}: 에러: ${post.error}</div>`;
    } else {
      // 성공한 경우 - 제목과 내용 일부 표시
      const truncatedBody =
        post.body.length > 100
          ? post.body.substring(0, 100) + "..."
          : post.body;

      htmlContent += `
                <div class="post">
                    <strong>post${postId}: ${post.title}</strong>
                    <p class="mb-0 text-muted">${truncatedBody}</p>
                </div>
            `;
    }
  }

  return htmlContent;
}

// 함수 표현식으로 메인 로직 구현
const runChallenge = async function () {
  // 이미 로딩 중이면 무시
  if (isLoading) {
    return;
  }

  // 입력값 가져오기
  const inputValue = postIdsInput.value;

  // 입력값 유효성 검사
  const validation = validateInput(inputValue);

  if (!validation.valid) {
    // 에러 메시지 출력
    outputMessage = validation.message;
    output.innerHTML = `<div class="error">${outputMessage}</div>`;
    output.classList.add("error");
    return;
  }

  // 에러 클래스 제거
  output.classList.remove("error");

  // 로딩 상태 설정
  isLoading = true;
  fetchButton.disabled = true;

  // 로딩 메시지 표시
  output.innerHTML = '<div class="loading">게시물을 가져오는 중...</div>';

  try {
    // ...rest를 사용해서 여러 ID 전달
    validPostIds = validation.ids;
    const posts = await fetchMultiplePosts(...validPostIds);

    // 결과 렌더링
    const htmlContent = renderResults(posts);
    output.innerHTML = htmlContent;

    // 성공 메시지 (선택적)
    if (validPostIds.length > 0) {
      outputMessage = `${validPostIds.length}개의 게시물을 성공적으로 가져왔습니다.`;
    }
  } catch (error) {
    // 전체적인 에러 처리 (try/catch 사용)
    outputMessage = `오류가 발생했습니다: ${error.message}`;
    output.innerHTML = `<div class="error">${outputMessage}</div>`;
    output.classList.add("error");
  } finally {
    // 로딩 상태 해제
    isLoading = false;
    fetchButton.disabled = false;
  }
};

// 이벤트 리스너 등록 (click 이벤트)
fetchButton.addEventListener("click", runChallenge);

// Enter 키 지원 추가
postIdsInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    runChallenge();
  }
});

// 입력값 실시간 검증 (선택적 기능)
postIdsInput.addEventListener("input", function () {
  // 이전 에러 스타일 제거
  if (output.classList.contains("error")) {
    output.classList.remove("error");
    output.innerHTML = "";
  }
});

// 페이지 로드 시 초기화
document.addEventListener("DOMContentLoaded", function () {
  // 초기 상태 설정
  output.innerHTML = "";
  postIdsInput.focus(); // 입력란에 포커스

  // 예시 입력값 힌트 (선택적)
  postIdsInput.placeholder = "예: 1,2,3,4,5";
});
