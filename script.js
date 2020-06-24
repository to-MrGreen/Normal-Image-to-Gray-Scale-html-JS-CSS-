var image;
function upload(){
  var imgcanvas=document.getElementById("c1");
  var filename=document.getElementById("finput");
  image=new SimpleImage(filename);
  image.drawTo(imgcanvas);
 // var filename=fileinput.value;
 // alert("Chose"+filename);
}
function gogray(){
  for(var pixel of image.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var imgcanvas=document.getElementById("c1");
  image.drawTo(imgcanvas);
}