function createDiv() {
    $(document).ready(function () {
      var test = {
        id: "div",
        class: "divclass",
        css: {
          "color": "Green"
        }
      };
      var $div = $("<div>", test);
      $div.html("New div tag created");
      $("body").append($div);
    });
  }