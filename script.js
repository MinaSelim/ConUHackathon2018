function updateValues(data)
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

setInterval(function()
{
  $.get("elders" , function(data)
  {
    updateValues(data);
  });
}
, 1000)
