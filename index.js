window.addEventListener('DOMContentLoaded', () => {
  fetch("http://api.open-notify.org/astros.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
    const count = document.querySelector('#count');
    count.textContent = data.number;
    for(let i = 0; i < data.people.length; i++) {
      const table = document.querySelector('#table')
      const tr = document.createElement('tr');
      const num = document.createElement('td')
      const place = document.createElement('td')
      const names = document.createElement('td');

      tr.append(num, place, names);

      place.textContent = data.people[i].craft;

      names.textContent = data.people[i].name;

      num.textContent = i + 1

      table.append(tr)

    }

    })
    .catch(() => {
      count.textContent = 'Неизвестно'
      const div = document.createElement('div');
      div.classList.add('error');
      div.textContent = 'Error'
      table.replaceWith(div)

    })
});