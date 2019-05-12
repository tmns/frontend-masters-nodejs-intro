var api = require('./api');

function showPostsForCurrentUser(userId, cb) {
  return api.getPostsForUser(userId, function callback(posts) {
    var postTemplates = posts.map(function mapper(post) {
      return `
          ${post.title}
          ${post.body}
          ${post.createdBy}
      `
    })
    return cb(postTemplates);
  })
}

function showUserProfile(userId, cb) {
  return api.getUserById(userId, function callback(user) {
    var profile = `
      ${user.name}
    `
    return cb(profile);
  })
}

module.exports = { showPostsForCurrentUser, showUserProfile };