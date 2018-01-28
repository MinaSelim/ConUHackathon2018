var data;
function updateValues()
{
  if (data[0].message.length > 0) {
    document.getElementById('red-1').style.visibility = "visible";
    document.getElementById('red-1').innerHTML = data[0].message.length;
  }
  if (data[1].message.length > 0) {
      document.getElementById('red-2').style.visibility = "visible";
      document.getElementById('red-2').innerHTML = data[1].message.length;
    }
  
}


document.getElementById("message_1").onclick = function()
{
  alert(data[0]);
  $.get("elders/" + data[0] + "/delete")
}
setInterval(function()
{
  $.get("elders" , function(dat)
  {
    data = dat;
    updateValues();
  });
}
, 1000)
