const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPost() {
  let output = "";
  setTimeout(() => {
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      if (post) {
        resolve();
      } else {
        reject((err) => console.log(err));
      }
    }, 2000);
  });
}

// async / await 는 .then을 대신하는 코드라고 생각해야 겠다.
// 읽기 좋은 코드를 만드는 방법

async function init() {
  await createPost({ title: "POST THREE", body: "this is post therr" });
  getPost();
}

init();

// async / awiat / fetch
// fetch 할 때 가독성이 좋다.

async function fetchUsers() {
  // fetch가 끝날 떄 까지 기다려줘
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  // result를 json 형식으로 바꿀 때 까지 기다려줘
  const data = await result.json();
  // 모든 게 완료 되었으니까 이제 콘솔 창에 띄워줘
  console.log(data);
  data.forEach((user) => {
    console.log(user.name);
  });
}

fetchUsers();
