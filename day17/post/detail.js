// detail.js (포스트 상세 화면용 JavaScript)
const apiUrl = "https://jsonplaceholder.typicode.com";

// 포스트 상세 정보 표시
async function displayPostDetail() {
  // URL에서 postId 가져오기
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("postId");
    if (!postId) throw new Error("No post ID provided");
    let post = {};

    // localStorage에서 캐시 확인 (도전 과제)
    const cacheKey = `post_${postId}`; // 키 이름: post_[id]
    const cachedData = localStorage.getItem(cacheKey);

    // localStorage에서 캐시가 조건에 충족하면 캐시 사용하여 post 초기화 (도전 과제)
    if (cachedData) {
      const { post: cachedPost, timestamp } = JSON.parse(cachedData);
      const now = Date.now();
      const fiveMinutes = 5 * 60 * 1000; // 5분을 밀리초로 변환

      // 5분 내 캐시인지 확인
      if (now - timestamp < fiveMinutes) {
        post = cachedPost;
        console.log("Post loaded from localStorage");
      } else {
        // 만료된 캐시 삭제
        localStorage.removeItem(cacheKey);
        // 서버에서 새로 가져오기
        const response = await fetch(`${apiUrl}/posts/${postId}`);
        if (!response.ok) throw new Error("Failed to fetch post details");
        post = await response.json();

        // 새 캐시 저장 (타임스탬프 포함)
        const cacheData = {
          post: post,
          timestamp: Date.now(),
        };
        localStorage.setItem(cacheKey, JSON.stringify(cacheData));
        console.log("Post fetched from API");
      }
    }
    // localStorage에서 캐시가 조건에 충족하지 않으면 상세 데이터 fetch하여 post 초기화
    else {
      const response = await fetch(`${apiUrl}/posts/${postId}`);
      if (!response.ok) throw new Error("Failed to fetch post details");
      post = await response.json();

      // 캐시 저장 (타임스탬프 포함)
      const cacheData = {
        post: post,
        timestamp: Date.now(),
      };
      localStorage.setItem(cacheKey, JSON.stringify(cacheData));
      console.log("Post fetched from API");
    }

    renderPost(post);
  } catch (error) {
    console.error("Error:", error.message);
    document.getElementById("post-detail").innerHTML =
      "<p>Error loading post details</p>";
  }
}

// 포스트 렌더링 함수
function renderPost(post) {
  const postDetail = document.getElementById("post-detail");
  postDetail.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;
}

// 페이지 로드 시 포스트 상세 정보 표시
displayPostDetail();
