export function setUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function deleteUser() {
  localStorage.removeItem("user");
}

export function setNewPost(newPost) {
  localStorage.setItem("post", newPost);
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}
