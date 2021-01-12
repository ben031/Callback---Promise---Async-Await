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

// getPost();
createPost({ title: "Post Three", body: "This is post three" }).then(getPost);
