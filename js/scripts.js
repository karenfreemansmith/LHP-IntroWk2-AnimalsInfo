$(document).ready(function() {
  $("#favoriteAnimal form").submit(function(event) {
      event.preventDefault();
      var animalInput = parseInt($("input:radio[name=animal]:checked").val());
      if(animalInput===1) {
        $("#turtles").show();
        $("#favoriteAnimal").hide();
      } else if(animalInput===2) {
        $("#snakes").show();
        $("#favoriteAnimal").hide();
      } else if(animalInput===3) {
        $("#insects").show();
        $("#favoriteAnimal").hide();
      } else {
        alert("please select an animal");
      }
  });
});
