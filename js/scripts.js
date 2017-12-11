function Place(name, location,landmarks, timeYearStart, timeYearEnd, description) {
  this.name = name;
  this.location = location;
  this.landmarks = landmarks;
  this.timeYearStart = timeYearStart;
  this.timeYearEnd = timeYearEnd;
  this.description = description;
}
  Place.prototype.bestTimeRange = function() {
  return this.timeYearStart + " to " + this.timeYearEnd;
}

$(document).ready(function() {
  $("form#placeForm").submit(function(event) {
    event.preventDefault();
    var name = $("input#placeName").val();
    var location = $("input#location").val();
    var landmarks = $("input#landmarks").val();
    var timeYearStart = $("input#timeYearStart").val();
    var timeYearEnd = $("input#timeYearEnd").val();
    var description = $("input#description").val();
    var newPlace = new Place(name, location, landmarks, timeYearStart, timeYearEnd, description);

    $("ul#places").append("<li><span class='places'>" + newPlace.name + "</span></li>");
    alert(newPlace.name);

      $(".places").last().click(function() {
        $("#show-place").show();
        $("#show-place h2").text(newPlace.name);
        $(".name").text(newPlace.name);
        $(".location").text(newPlace.name);
      });
    });
    $('#placesList').click(function(){
      $('#myModal').modal('toggle');
    });
});
