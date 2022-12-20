const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formEl);
    const data = new URLSearchParams(formData);
    
    fetch('https://script.google.com/macros/s/AKfycby4OcwpMhjrZmtormXbS9yw-myZ251hYQo_DLRSbCAuqjZvPXyFRb_Rd6wtjrYco9wADg/exec', {
        method: 'POST',
        body: data
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(erro => console.log(erro));
});

