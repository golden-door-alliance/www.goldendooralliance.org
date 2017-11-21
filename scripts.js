var url = new URL(location.href);
for(var key of url.searchParams.keys()) {
  if (key) {
    var el = document.querySelector('#' + key);
    var val = url.searchParams.get(key);
    if (el) {
      el.innerHTML = val;
    }
    var phoneLink = document.querySelector('#' + key + 'Link');
    if (phoneLink) {
      var phone = val.replace("(", "").replace(")", "").replace(" ", "").replace("-", "");
      phoneLink.setAttribute('href', 'tel:+1' + phone);
    }
  }
}
