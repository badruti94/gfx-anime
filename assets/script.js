let index = 0

const nameElement = document.querySelector(".name")
const sourceElement = document.querySelector(".source")
const descriptionElement = document.querySelector(".description")
const birthdayDateElement = document.querySelector(".birthday-date span")
const imageElement = document.querySelector("img")
const linkWikiElement = document.querySelector(".link-wiki")
const dateElement = document.querySelector(".date span")
const clockElement = document.querySelector(".clock span")
const leftArrowElement = document.querySelector(".left-arrow")
const rightArrowElement = document.querySelector(".right-arrow")
const bodyElement = document.querySelector('body')

const loadData = () => {
    const dataToLoad = data[index];
    nameElement.innerHTML = dataToLoad.name;
    sourceElement.innerHTML = dataToLoad.source;
    descriptionElement.innerHTML = dataToLoad.description;

    const date = new Date(dataToLoad.birtday_date);
    const formattedDate = new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'long'
    }).format(date);
    birthdayDateElement.innerHTML = formattedDate;

    imageElement.src = `./assets/images/${dataToLoad.image}`
    linkWikiElement.href = dataToLoad.wiki_link
    bodyElement.style.background = `linear-gradient(to right, ${dataToLoad.background_gradient[0]}, ${dataToLoad.background_gradient[1]})`;

    document.querySelector(".name-wrapper").style.color = dataToLoad.color
    document.querySelector(".description").style.border = `2px solid ${dataToLoad.color}`
    document.querySelector(".date").style.border = `2px solid ${dataToLoad.color}`
    document.querySelector(".date").style.color = dataToLoad.color
    document.querySelector(".clock").style.border = `2px solid ${dataToLoad.color}`
    document.querySelector(".clock").style.color = dataToLoad.color
    document.querySelector(".link-wiki").style.border = `2px solid ${dataToLoad.color}`
    document.querySelector(".link-wiki").style.setProperty("color", dataToLoad.color, "important");
    document.querySelector(".left-arrow").style.color = dataToLoad.color
    document.querySelector(".right-arrow").style.color = dataToLoad.color
}

const refreshTime = () => {
    setTimeout(() => {
        const now = new Date();

        const day = now.getDate().toString().padStart(2, '0'); // Mendapatkan hari dengan zero-padding jika < 10
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Mendapatkan bulan (ditambah 1 karena bulan mulai dari 0)
        const year = now.getFullYear();

        const hours = now.getHours().toString().padStart(2, '0'); // Mendapatkan jam dan menambahkan "0" jika kurang dari 10
        const minutes = now.getMinutes().toString().padStart(2, '0'); // Mendapatkan menit dan menambahkan "0" jika kurang dari 10
        const second = now.getSeconds().toString().padStart(2, '0');

        const formattedDate = `${day}/${month}/${year}`;
        const formattedTime = `${hours}:${minutes}:${second}`;

        clockElement.innerHTML = formattedTime
        dateElement.innerHTML = formattedDate

        refreshTime()


    }, 500);
}

document.addEventListener('DOMContentLoaded', function () {
    // Kode Anda di sini
    console.log("DOM sudah siap!");

    loadData()
    refreshTime()
});

leftArrowElement.addEventListener("click", event => {
    if (index === 0){
        index = data.length - 1
    }else{
        index--;
    }
    loadData()
})
rightArrowElement.addEventListener("click", event => {
    if (index === data.length - 1){
        index = 0
    }else{
        index++;
    }
    loadData()
})