// 학생 시험 점수 관리기

// 사용자 입력 (prompt는 항상 문자열로 반환)
let inputStr = prompt("점수를 입력하세요.");

// 정수로 변환
let score = parseInt(inputStr);

// 도전과제: 입력 유효성 검사
if (isNaN(score) || score < 0 || score > 100) {
  console.log("Invalid score! Please enter a number between 0 and 100.");
} else {
  // 도전과제: 추가 연산들

  // 단항 산술: 점수 1점 증가
  score++;

  // 기본과제: 이항 산술 + 복합 대입 (5점 보너스 추가)
  score += 5;

  // 도전과제: 복합 대입 (10% 스케일링)
  score *= 1.1;

  // 도전과제: 복잡한 조건 (점수가 100 초과하면 100으로 제한)
  if (score > 100) {
    score = 100;
  }

  // 기본과제: 등급 결정
  var grade;
  if (score >= 100) {
    grade = "S";
  } else if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  // 기본과제: 합격/불합격 여부 결정 (삼항 연산자)
  let Status = score >= 60 ? "Pass" : "Fail";

  // 기본과제: 등급에 따른 메시지 출력 (switch문)
  let Message;
  switch (grade) {
    case "S":
      // 도전과제: 특수 case (점수가 정확히 100이면 특별 메시지)
      if (score === 100) {
        Message = "Perfect Score!";
      } else {
        Message = "Super!!";
      }
      console.log(Message);
      break;
    case "A":
      Message = "Excellent work!";
      console.log(Message);
      break;
    case "B":
      Message = "Good job!";
      console.log(Message);
      break;
    case "C":
      Message = "Satisfactory performance.";
      console.log(Message);
      break;
    case "D":
      Message = "Needs improvement.";
      console.log(Message);
      break;
    default:
      Message = "Please try harder!";
      console.log(Message);
      break;
  }

  // 기본과제: 최종 결과 출력
  console.log(
    `Final Score: ${score}
Grade: ${grade}
Status: ${Status}
Message: ${Message}`
  );
}
