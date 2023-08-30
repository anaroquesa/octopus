var objImage = null;

    function init() {
      objImage = document.getElementById("octo");
      objImage.style.position = "relative";
      objImage.style.left = "0px";
      objImage.style.top = "0px";
    }

    function hideButton() {
      var button = document.getElementById("myButton");
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
