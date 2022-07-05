//Tab Menulerin hadef icerigini gösterme

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}


// Tab Menu 1 Making Alert Button

function togglePopupMakeBtn() {
    document.getElementById("popup-2").classList.toggle("active");
}

//button olusturma
var btn = document.createElement("button");
btn.setAttribute("id","btnAlert")
btn.innerText="Alert Button";

//button style özelligi ekleme ve onclick(Alert icin) ekleme
btn.style.cssText = "color:#fff; background:#252525; font-size:16px; padding:8px; border-radius:6px; margin-top: 10px; cursor: pointer;";
btn.onclick = function() {
    window.alert("Merhaba, Hosgeldiniz!")
}

//olusturulan butonu HTML nesnesi icine ekleme
var spanDiv = document.getElementById("span-btn");
spanDiv.appendChild(btn);




   



