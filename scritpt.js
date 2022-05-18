function thayDoiNhietDo(nhapSo) {
  nhapSo = parseFloat(document.getElementById("fahrenheit").value);
  document.getElementById("celsius").innerHTML = (nhapSo - 32) / 1.8;
}
