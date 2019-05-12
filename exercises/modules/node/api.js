var data = require('./data');

function getUserById(id, cb) {
  // simulate API call
  return setTimeout(function () {
    var user = data.users.find(function finder(user) {
      return user.id == id;
    });
    return cb(user);
  }, 150);
}

function getPostsForUser(userId, cb) {
  // simulate API call
  return setTimeout(function () {
    var posts = data.posts.filter(function filterPosts(post) {
      return post.createdBy == userId;
    });
    return cb(posts);
  }, 150);
}

module.exports = { getUserById, getPostsForUser }