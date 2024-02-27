console.log("start");

function subscribe(username, cb) {
  setTimeout(() => {
    cb(username);
  }, 1000);
}

function likedVideos(videos, cb) {
  setTimeout(() => {
    cb(videos);
  }, 1000);
}

function shareVideos(videos, func) {
  setTimeout(() => {
    func(videos);
  }, 100);
}
const message = subscribe("sourav", function user(username) {
  console.log(`hey user ${username} subscribe to my channedl`);
  likedVideos("callback", (like) => {
    console.log(`like this video ${like}`);
    shareVideos("promise-video", (share) => {
      console.log(`share the video ${share}`);
    });
  });
});

// const like = likedVideos("callback", (like) => {
//   console.log(`like this video ${like}`);
// });

console.log("stop");
