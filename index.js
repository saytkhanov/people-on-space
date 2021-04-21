window.addEventListener('DOMContentLoaded', () => {
  fetch("http://api.open-notify.org/dstros.json")
    .then((res) => {
      return res.json();// возвращаем значение текстом с помощью json
    })
    // тогда полученные данные обрабатываем
    .then((data) => {
     const count = document.getElementById('count');// получаем элемент count, чтобы мы могли его изменить
     const table = document.querySelector('table');// получаем класс table, чтобы мы могли добавить содержимое
     
     count.prepend(data.number)// в коунт добавляем количество человек из объекта data
     // запускаем цикл,для того чтобы создавались строки

     for(let i = 0; i < data.people.length; i++) {
       const tr = document.createElement('tr');// создаем узел tr
       const numberPeople = document.createElement('td');// создаем узел td
       const place = document.createElement('td');// создаем второй узел td
       const namePeople = document.createElement('td');// создаем третий узел td

       tr.append(numberPeople, place, namePeople);//в конец узла tr добавляем все столбцы
       
       numberPeople.textContent = i + 1; // к первому столбцу добавляем номер, который будет увеличиваться с каждым прохождением цикла
       place.textContent = data.people[i].craft// ко второму столбцу добавляем место
       namePeople.textContent = data.people[i].name// к третьему столбцу добавляем имена людей в космосе, обращаясь к объекту
       
       table.append(tr);//в конец таблицы добавляем узел tr
     }
    })
    // создаем обработчик ошибок
    .catch(() => {
      const span = document.querySelector('span');// получаем класс span, дабы изменить содержимое
      span.textContent = "неизвестно";// в случае ошибки выводит текст неизвестно

      const table = document.querySelector('table')// получаем узел table
      const div = document.createElement('div');// создаем узел div

      div.classList.add('error');//пприсваиваем диву класс 
      div.prepend('error')//добавляем текст в конец дива

      table.replaceWith(div)// заменяем table на div методом replaceWith в случае ошибки
    })
});