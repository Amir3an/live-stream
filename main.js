var video = document.getElementById("liveVideo");
if (Hls.isSupported()) {
  var hls = new Hls();
  // آدرس URL پخش زنده را با لینک واقعی خودتان جایگزین کنید
  hls.loadSource("https://example.com/live/stream.m3u8");
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    video.play();
  });
} else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = "https://example.com/live/stream.m3u8";
  video.addEventListener("loadedmetadata", function () {
    video.play();
  });
}
