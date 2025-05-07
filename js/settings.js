
function toggleSettings() {
  const panel = document.getElementById("settings-panel");
  panel.style.display = (panel.style.display === "block") ? "none" : "block";
}
function setLang(lang) {
  localStorage.setItem("lang", lang);
  alert("Language set to: " + lang);
}
function setVolume(val) {
  const audio = document.getElementById("bg-music");
  if (audio) audio.volume = val;
}
function toggleMusic() {
  const audio = document.getElementById("bg-music");
  if (audio) {
    if (audio.paused) audio.play();
    else audio.pause();
  }
}
