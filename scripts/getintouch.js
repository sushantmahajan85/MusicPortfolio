const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').innerHTML;

    const url = 'https://script.google.com/macros/s/1wn9ubaKZ_CfgSvE4-utWeXYj31XEYO-GiTTIs4t6ydYp3U-PqyWK2Q3J/exec';
    const response = await fetch(`${url}?name=${name}&email=${email}&message=${message}`);
    const result = await response.json();
    console.log(result);
});

