const url = new URL(window.location.href);

if (url.searchParams.get("fromIntro") === "1") {
  sessionStorage.setItem("justFromIntro", "1");

  url.searchParams.delete("fromIntro");
  window.history.replaceState({}, "", url.pathname + url.search + url.hash);

  setTimeout(() => sessionStorage.removeItem("justFromIntro"), 0);
}

if (!sessionStorage.getItem("justFromIntro")) {
  window.location.replace("./landing.html");
}