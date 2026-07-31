(function () {
  "use strict";

  var year = document.getElementById("year");
  if (year) { year.textContent = new Date().getFullYear(); }

  var toggle = document.getElementById("theme");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var now = document.documentElement.dataset.theme;
      if (!now) {
        now = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      document.documentElement.dataset.theme = now === "dark" ? "light" : "dark";
    });
  }

  /* Exercise pages: clicking an entry in the list swaps the embedded video.
     Autoplay is added only on a click, never on first load. */
  var list = document.querySelector(".eplist");
  var frame = document.getElementById("player-frame");
  var caption = document.getElementById("player-caption");
  if (!list || !frame) { return; }

  list.addEventListener("click", function (e) {
    var btn = e.target.closest("button[data-url]");
    if (!btn) { return; }
    var url = btn.dataset.url;
    frame.src = url + (url.indexOf("?") === -1 ? "?" : "&") + "autoplay=1&rel=0";
    if (caption) { caption.textContent = btn.dataset.title || btn.textContent.trim(); }
    Array.prototype.forEach.call(list.querySelectorAll("button"), function (b) {
      b.removeAttribute("aria-current");
    });
    btn.setAttribute("aria-current", "true");
  });
})();
