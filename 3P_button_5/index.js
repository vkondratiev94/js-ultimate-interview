// solution 1
function createButtons() {
  for (let i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = "Button " + i;
    button.onclick = function () {
      alert("This is button " + i);
    };
    body.appendChild(button);
  }
}

// solution 2
function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = "Button " + i;
    (function (index) {
      button.onclick = function () {
        alert("This is button " + index);
      };
      body.appendChild(button);
    })(i);
  }
}

// solution 3
function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = "Button " + i;
    btnClickHandler(button, i);
    body.appendChild(button);
  }
}

function btnClickHandler(button, index) {
  button.onclick = function () {
    alert("This is button " + index);
  };
}

createButtons();
