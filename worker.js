export default {
  fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.kiln-vm.com") {
      url.hostname = "kiln-vm.com";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
