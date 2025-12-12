
function submitMailto(e){
  if(e) e.preventDefault();
  var n=document.getElementById('q_name').value||'';
  var p=document.getElementById('q_phone').value||'';
  var d=document.getElementById('q_device').value||'';
  var m=document.getElementById('q_message').value||'';
  if(!n||!p){alert('Please add name and phone');return;}
  var subject=encodeURIComponent('Service request from ericaengineering.in: '+d);
  var body=encodeURIComponent('Name: '+n+'\nPhone: '+p+'\nDevice: '+d+'\nMessage:\n'+m);
  window.location.href='mailto:erica.repair@gmail.com?subject='+subject+'&body='+body;
}
