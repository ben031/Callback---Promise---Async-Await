const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

getPost();

//  creatPost 는 작동 하지 않는다.
//  getPost의 setTime은 1초, createPost, 2초이기 때문이다.
//  따라서 getPost를 createPost의 매개변수에 콜백함수로서 넣어준다.
//  createPost를 하고 콜백 큐에 있는 콜백 함수(getPost)를 실행시켜 주세요!!

createPost({ title: "Post Three", body: "This is post three" }, getPost);
