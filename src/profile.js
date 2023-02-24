'use strict';

(function () {
    window.addEventListener("load", init);
  
    function init() {
      let addButton = document.getElementById("add-button");
      addButton.addEventListener("click", () => {
        add();
      });
      let removeItem = document.querySelector("#remove");
      removeItem.addEventListener("click", remove);
    }

    function add() {
      let list = document.getElementById("userlist");
      let inputText = document.getElementById("input-text");
      let orderedList = document.createElement("li");
      orderedList.textContent = inputText.value;
      list.appendChild(orderedList);
      console.log(inputText);
      inputText.value = "";
      console.log(orderedList);
    }
  
    function remove() {
      let toDelete = document.getElementById("userlist");
      toDelete.innerHTML = "";
    }

  })();