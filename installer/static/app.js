const doc = document;
doc.id = document.getElementById;
var btn = doc.id("btn-start");
var isload = false;
const loadbar = 10;
btn.addEventListener("click", (e) => {
  if (!isload) {
    isload = true;
    var loadCt = doc.id("loader");
    loadCt.classList.toggle("hide");
    var btnload = doc.id("btnload");
    var btntxt = doc.id("btn-text");
    btntxt.classList.toggle("hide");
    btnload.classList.toggle("hide");
    setTimeout(() => {
      one();
    }, 1500);
  }
});
const prog = doc.id("progress");
const setLoad = (value) => {
  prog.style.width = `${value}%`;
  if (value == 100) {
    doc.getElementById("i-text").classList.add("text-success");
    doc.getElementById("text-finish").classList.remove("hide");
    doc.getElementById("btnload").classList.add("hide");
    btn.classList.add("btn-success");
    document.getElementById("progress").classList.add("bg-success");
  }
};
const iText = doc.id("i-text");
const one = () => {
  iText.innerHTML = "downloading python dependencies";
  setLoad(20);
  var itextme = [
    "extracting package",
    "deleting compressed file",
    "writing application",
  ];
  let num = 0;
  setInterval(() => {
    num = num + 1;
    if (num == 50) {
      iText.innerHTML = itextme[0];
      setLoad(35);
    }
    if (num == 100) {
      iText.innerHTML = itextme[1];
      setLoad(45);
    }
    if (num == 150) {
      setLoad(60);
      iText.innerHTML = itextme[2];
    }
    if (num == 200) {
      setLoad(70);
      iText.innerHTML = "Building bundle files";
    }
    if (num == 300) {
      iText.innerHTML = "Setup finished";
      iText.classList.toggle("text-success");
      setLoad(100);
      return;
    }
  }, 50);
};
