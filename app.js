// listen for load event
// load event waits for all assets such as spritesheets and images to be fully loaded
// before it exectues code in it's callback function
window.addEventListener("load", function () {
  // will place entire code in this anonymous callback function
  // anonymous function is a function without a name
  // I seperate scope of my game from my global scope
  // to make sure my custom class and names dont clash with any outside code
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  // console.log(ctx)
  // when all the assets are fully loaded the code inside will be executed line by line
  canvas.width = 800;
  canvas.height = 720;

    

});
