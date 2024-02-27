// console.log("start");

// const message = new Promise((resolve, reject) => {
//   const val = true;
//   setTimeout(() => {
//     if (val) {
//       resolve("it resolved");
//     } else {
//       reject(new Error("the value is not true"));
//     }
//   }, 1000);
// });
// console.log(
//   message
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// );

// const message = Promise.resolve("it is fullfilled");
// console.log(message);
// message.then((result) => {
//   console.log(result);
// });
// console.log("stop");

// previous callback example with promise.

// console.log("start");

// function subscribe(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(username);
//     }, 1000);
//   });
// }

// function likedVideos(videos) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(videos);
//     }, 1000);
//   });
// }

// function shareVideos(share) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(share);
//     }, 100);
//   });
// }

// subscribe("sourav")
//   .then((val) => {
//     console.log("user name is ", val);
//     likedVideos("callback").then((val) => {
//       console.log(`like this video ${val}`);
//       shareVideos("promise-video").then((val) => {
//         console.log("share the video ", val);
//       });
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("stop");

// now previous example with promise chaining.

console.log("start");

function subscribe(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(username);
    }, 1000);
  });
}

function likedVideos(videos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(videos);
    }, 1000);
  });
}

function shareVideos(share) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(share);
    }, 1000);
  });
}

subscribe("sourav")
  .then((val) => {
    console.log("user name is ", val);
    return likedVideos("callback");
  })
  .then((res) => {
    console.log(`like this video ${res}`);
    return shareVideos("promise-video");
  })
  .then((res) => {
    console.log("share the video ", res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("stop");
