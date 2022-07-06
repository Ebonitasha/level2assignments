const getBut = document.getElementById('getbut')
const post = document.getElementById('postbut')

const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.vschool.io/eboni/todo');

    xhr.onload = () => {
        // console.log(xhr.response)
        const data = JSON.parse(xhr.response)
        console.log(data)
    };

    xhr.send()
};


const sendData = () => {};

getBut.addEventListener('click', getData);
post.addEventListener('click', sendData)