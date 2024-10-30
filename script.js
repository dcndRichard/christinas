function fetch1(callback) {
  let request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, JSON.parse(request.responseText));
    } else if (request.readyState === 4) {
      callback(new Error(), undefined);
    }
  });
  request.open("GET",);
  request.send();
}
