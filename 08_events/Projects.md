# Projects related to Events & Async JS

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Project 1 - Unlimited Colors Project Solution Code

```javascript
        //generate a random color

        const randomColor = function () {
        const hex = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
        };

        let intervalId;

        const startChangingColor = function () {
        if (!intervalId) {
            intervalId = setInterval(changeBgColor, 1000);
        }

        function changeBgColor() {
            document.body.style.backgroundColor = randomColor();
        }
        };
        const stopChangingColor = function () {
        clearInterval(intervalId);
        intervalId = null;
        };

        document.querySelector('#start').addEventListener('click', startChangingColor);

        document.querySelector('#stop').addEventListener('click', stopChangingColor);

```

# Project 2 - Keyboard Project Solution Code

```javascript

console.log('Project 5');

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
      <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key === ' ' ? 'Space' : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
     </div>
  `;
});



```