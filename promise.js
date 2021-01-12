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
    // Producing code
    setTimeout(() => {
      posts.push(post);
      if (post) {
        //성공
        resolve();
      } else {
        //실패
        reject((err) => console.log(err));
      }
    }, 2000);
  });
}

// getPost();
// Consuming code
createPost({ title: "Post Three", body: "This is post three" }).then(getPost);
