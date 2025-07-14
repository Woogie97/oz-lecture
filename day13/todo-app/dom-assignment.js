// 과제:
// HTML 파일에 연결하여 브라우저에서 실행하세요

// DOM 요소 선택
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearButton");

// 입력값 검증 및 할 일 추가 함수
function addTask() {
  const taskText = taskInput.value.trim();

  // 입력값이 비어있는지 확인 (유효성 검증) early-return;
  console.log(taskText);
  if (taskText === "") {
    alert("할일을 입력해주세요");
    return;
  }

  // 새로운 리스트 아이템 생성
  const li = document.createElement("li");
  li.className = "task-item";

  // 할 일 텍스트 추가
  const span = document.createElement("span");
  span.textContent = taskText;

  // 도전과제: 우선순위 처리 (select 요소가 있는 경우)
  const prioritySelect = document.getElementById("priority");
  if (prioritySelect && prioritySelect.value === "high") {
    span.style.color = "red";
  }

  // 삭제 버튼 생성
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  deleteButton.className = "delete-button";

  // 삭제 버튼 이벤트 리스너
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(li);
    updateTaskCount(); // 도전과제: 할 일 개수 업데이트
  });

  // 완료 상태 토글 이벤트 리스너
  span.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  // 요소 조립
  li.appendChild(span);
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  // 입력창 초기화
  taskInput.value = "";

  // 도전과제: 할 일 개수 업데이트
  updateTaskCount();
}

// 모든 할 일 삭제 함수
function clearAllTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  // 도전과제: 할 일 개수 업데이트
  updateTaskCount();
}

// 추가 버튼 클릭 이벤트 적용
addButton.addEventListener("click", addTask);

// 입력창에서 Enter 키 이벤트 적용 (event.key === 'Enter')
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// 전체 삭제 버튼 클릭 이벤트 적용
clearButton.addEventListener("click", clearAllTasks);

// 도전과제: 할 일 개수 표시 함수
function updateTaskCount() {
  // 기존 taskCount 요소가 있는지 확인
  let taskCount = document.getElementById("taskCount");

  // 없으면 생성하여 ul 위에 추가
  if (!taskCount) {
    taskCount = document.createElement("div");
    taskCount.id = "taskCount";
    taskCount.style.margin = "10px 0";
    taskCount.style.fontWeight = "bold";

    // taskList 앞에 삽입
    const container = taskList.parentNode;
    container.insertBefore(taskCount, taskList);
  }

  // 현재 할 일 개수 계산 및 표시
  const currentCount = taskList.children.length;
  taskCount.textContent = `현재 할 일: ${currentCount}개`;
}

// 도전과제: querySelector/querySelectorAll 사용
// 페이지 로드 시 기존 요소들에 이벤트 리스너 추가
document.addEventListener("DOMContentLoaded", function () {
  // 기존에 있는 모든 삭제 버튼 선택
  const existingDeleteButtons = document.querySelectorAll(".delete-button");

  // 각 버튼에 이벤트 리스너 추가
  existingDeleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const li = button.parentNode;
      taskList.removeChild(li);
      updateTaskCount();
    });
  });

  // 기존 span 요소들에 완료 토글 이벤트 추가
  const existingSpans = document.querySelectorAll(".task-item span");
  existingSpans.forEach(function (span) {
    span.addEventListener("click", function () {
      span.classList.toggle("completed");
    });
  });

  // 초기 할 일 개수 표시
  updateTaskCount();
});
