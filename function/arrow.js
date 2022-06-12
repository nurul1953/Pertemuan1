function fungsi1(callback, callback1) {
  console.log("Hai");
  callback();
  callback1();
}

// Anonymous arrow function
fungsi1(
  () => console.log("Assalamu'alaikum"),
  () => console.log("Assalamu'alaikum")
);
