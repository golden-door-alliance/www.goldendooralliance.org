var url = new URL(location.href);
for(var key of url.searchParams.keys()) {
  if (key) {
    console.log(key);
    var el = document.querySelector('#' + key);
    if (el) {
      el.innerHTML = url.searchParams.get(key);
    }
  }
}
