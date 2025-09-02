//your JS code here. If required.

const button = document.querySelector('input[type="button"]');
    const select = document.getElementById("colorSelect");

    button.addEventListener("click", function() {
      if (select.selectedIndex !== -1) {  // ensure something is selected
        select.remove(select.selectedIndex);
      }
    });