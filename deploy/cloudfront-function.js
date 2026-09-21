// Associate with the distribution's viewer-request event when using a private
// S3 REST origin. Next.js exports /about/ as the object /about/index.html.
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.endsWith("/")) {
    request.uri += "index.html";
  } else if (!uri.split("/").pop().includes(".")) {
    request.uri += "/index.html";
  }

  return request;
}
