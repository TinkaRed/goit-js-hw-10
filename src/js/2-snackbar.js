// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


// квайеріселектор для форми
const form = document.querySelector('.form');

//form prevent
form.addEventListener('submit', (event) => {
event.preventDefault();

// змінні для данних
const numDelay = Number(form.delay.value);
const numState = form.state.value;

//ф-ція для промісу
createPromise(numDelay, numState)
    .then((delay) => {

//якщо ок
    iziToast.success({
    title: "Success",
    message: `Fulfilled promise in ${delay}ms`,
    backgroundColor: "#59A10D",
    position: "topRight",
    timeout: 3000,
});
})
    .catch((delay) => {

//якщо еррор
    iziToast.error({
    title: "Error",
    message: `Rejected promise in ${delay}ms`,
    backgroundColor: "#EF4040",
    position: "topRight",
    timeout: 3000,
});
});
});

function createPromise(delay, state) {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (state === "fulfilled") {
            resolve(delay);
} else 
{
            reject(delay);
        }
    }, delay);
});
}
