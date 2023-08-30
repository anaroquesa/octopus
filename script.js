var objImage = null;
var container = null;
var containerWidth = 0;
var containerHeight = 0;

    function init() {
      objImage = document.getElementById("octo");
      objImage.style.position = "relative";
      objImage.style.left = "0px";
      objImage.style.top = "0px";

    }

    function hideButton() {
      var button = document.getElementById("walkme");
      button.style.display = "none";
    }

    function getKeyAndMove(e) {
      hideButton();

      var key_code = e.which || e.keyCode;
      switch (key_code) {
        case 37:
          moveLeft();
          break;
        case 38:
          moveUp();
          break;
        case 39:
          moveRight();
          break;
        case 40:
          moveDown();
          break;
      }
    }

    function moveLeft() {
      objImage.style.left = parseInt(objImage.style.left) - 60 + "px";
    }

    function moveUp() {
      objImage.style.top = parseInt(objImage.style.top) - 60 + "px";
    }

    function moveRight() {
      objImage.style.left = parseInt(objImage.style.left) + 60 + "px";
    }

    function moveDown() {
      objImage.style.top = parseInt(objImage.style.top) + 60 + "px";
    }

    window.onload = init;

    function ShowWork() {
      const y = document.getElementById('founders');
      const x = document.getElementById('work');
      const z = document.getElementById('contacts');

      if (y.style.display = 'block') {
        x.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'none';
      } else if (z.style.display = 'block') {
        x.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'none';
      } else {
        x.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'none';
      }
      return hideButton();
    }

    function ShowFounders() {
      const x = document.getElementById('work');
      const y = document.getElementById('founders');
      const z = document.getElementById('contacts');

      if (x.style.display = 'block') {
        x.style.display = 'none';
        y.style.display = 'block';
        z.style.display = 'none';
      } else if (z.style.display = 'block') {
        x.style.display = 'none';
        y.style.display = 'block';
        z.style.display = 'none';
      } else {
        x.style.display = 'none';
        y.style.display = 'block';
        z.style.display = 'none';
      }
      return hideButton();
    }

    function ShowContacts() {
      const x = document.getElementById('work');
      const y = document.getElementById('founders');
      const z = document.getElementById('contacts');

      if (x.style.display = 'block') {
        x.style.display = 'none';
        y.style.display = 'none';
        z.style.display = 'block';
      } else if (y.style.display = 'block') {
        x.style.display = 'none';
        y.style.display = 'none';
        z.style.display = 'block';
      } else {
        x.style.display = 'none';
        y.style.display = 'none';
        z.style.display = 'block';
      }
      return hideButton();
    }

    function GoHome() {
      const x = document.getElementById('work');
      const y = document.getElementById('founders');
      const z = document.getElementById('contacts');
      x.style.display = 'none';
      y.style.display = 'none';
      z.style.display = 'none';
    }
