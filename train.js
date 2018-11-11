  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyADjn-CBB8_5GIL7tpIZzkbUUSb1VEdpxQ",
    authDomain: "zednontrain.firebaseapp.com",
    databaseURL: "https://zednontrain.firebaseio.com",
    projectId: "zednontrain",
    storageBucket: "zednontrain.appspot.com",
    messagingSenderId: "1054029896336"
  };
  firebase.initializeApp(config);

  var database=firebase.database()


  $("#addTrain").on("click", function(event) {
    event.preventDefault();
    var trainName = $("#trains").val().trim();
    var Destination  
    var Frequency
    // var TravelTime
    var firstTrainTime
    if (trainName === "blackRiver"){
      Destination = "Bronx"
      Frequency = 30
      // TravelTime = 30
      firstTrainTime = "06:00"
   } else if (trainName === "Sugar") {
    Destination = "Waipahu"
    Frequency = 200
    // TravelTime = 30
    firstTrainTime = "12:00"
   } else if (trainName === "WC") {
    Destination = "Napa"
    Frequency = 10
    // TravelTime = 30
    firstTrainTime = "1:30"
   } else if (trainName === "crip") {
    Destination = "LittleTown"
    Frequency = 600
    // TravelTime = 30
    firstTrainTime = "19:00"
   } else if (trainName === "crip") {
    Destination = "LittleTown"
    Frequency = 600
    // TravelTime = 30
    firstTrainTime = "19:00"
   }
    database.ref("/trains").push({
      trainName: trainName , 
      Destination: Destination,
      Frequency: Frequency,
      // TravelTime: TravelTime,
    })
    //     var RV = $("#RV").val().trim();
// var bR = $("#bR").val().trim();
// var sugar = $("#Sugar").val().trim();
// var smoky = $("#smoky").val().trim();
// var BHC = $("#BHC").val().trim()
 
  })

  database.ref("/trains").on("child_added", function(snap){
    console.log(snap.val())
    var calMinAway = 16
    var calnextArrival = 5 
    var newRow = "<tr><td>" + snap.val().trainName + 
    "</td><td>" + snap.val().Destination +
    "</td><td>" + snap.val().Frequency +
    // "</td><td>" + snap.val().TravelTime +
    "</td><td>" + calMinAway +
    "</td><td>" + "calnextArrival" +
      +"</td></tr>"
    $("#train-table").append(newRow)
  })