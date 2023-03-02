let leftBtn = document.getElementById("left_btn");
let rightBtn = document.getElementById("right_btn");

let slyder = document.getElementById("slyder_main_item");
let offset = 0;

leftBtn.onclick = () => {
    offset += 100;
    if (offset > 0) {
        offset = -200;
    }
    slyder.style.left = offset + "%";
    console.log(slyder.style.left);
};

rightBtn.onclick = () => {
    offset -= 100;
    if (offset < -200) {
        offset = 0;
    }
    slyder.style.left = offset + "%";
    console.log(slyder.style.left);
};


