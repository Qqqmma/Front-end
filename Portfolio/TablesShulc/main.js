let box = document.getElementsByTagName("td")

for (let randomIndex, i = 1; i < 26; i++) {
    randomIndex = Math.floor(Math.random() * 25);
    if (box[randomIndex].textContent != '0') {
        i--;
        continue;
    }
    else {
        box[randomIndex].textContent = i;
    }
}