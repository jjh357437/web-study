var link ={
  setColor:function(color){
   $('a').css('color',color);
  }
}
var Body ={
  setColor:function(color){
    $('Body').css('color',color);
  },
  setBackgroundColor:function(color){
    $('Body').css('backgroundColor',color);
  }
}
function nightDayHandler(self){
var target = document.querySelector('Body');
if(self.value ==='night'){
  Body.setBackgroundColor('black');
  Body.setColor('white');
  self.value = 'day';
  link.setColor('powderblue');

} else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    link.setColor('blue');
  } 
}