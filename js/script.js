"use strict";
let islemTipi = "";
let islemTürü = document.getElementById("islemTürleri2");
let html = `<option value="Akaryakıt Gideri"></option>
<option value="Kira Gideri"></option>
<option value="Mutfak Gideri"></option>`;

console.log(document.getElementById("inputTipler").value);
document.getElementById("inputTipler").addEventListener("change", function () {
  islemTipi = document.getElementById("inputTipler").value;
  return islemTipi;
});
document.getElementById("inputTipler").addEventListener("change", function () {
  if (islemTipi === "AFN Çıkış Fatura") {
    html = `
    <option value="Akaryakıt Gideri"></option>
    <option value="Kira Gideri"></option>
    <option value="Mutfak Gideri"></option>
    `;
    islemTürü.insertAdjacentHTML("afterend", html);
  }
  if (islemTipi === "AFN Çıkış Tutanak") {
    html = `
    <option value="Akaryakıt Gideri"></option>
    <option value="Kira Gideri"></option>
    <option value="Mutfak Gideri"></option>
    <option value="Soma This is new"></option>
    `;
    islemTürü.insertAdjacentHTML("afterend", html);
  }
  if (islemTipi === "AFN Giriş Tahsilat") {
    html = `
    <option value="Tahsilat Makbuzu"></option>
    `;
    islemTürü.insertAdjacentHTML("afterend", html);
  }
  if (islemTipi === "AFN Döviz") {
    html = `
    <option value="AFN Döviz Satış"></option>
    <option value="AFN Döviz Alış"></option>
    `;
    islemTürü.insertAdjacentHTML("afterend", html);
  }
  if (islemTipi === "AFN Transfer") {
    html = `
    <option value="AFN Gelen Transfer"></option>
    <option value="AFN Giden Transfer"></option>
    `;
    islemTürü.insertAdjacentHTML("afterend", html);
  }
});
function goToNewPage() {
  var url = document.getElementById("list").value;
  if (url != "none") {
    window.location = url;
  }
}
