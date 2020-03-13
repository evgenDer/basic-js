const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let time;
  let number;
  number=parseFloat(sampleActivity);
  if(typeof(sampleActivity)!="string"){
    return false;}
  if(sampleActivity==""){
    return false;}
    else 
      {
      number=parseFloat(sampleActivity);
      time=Math.ceil((Math.log(MODERN_ACTIVITY/(number)))*HALF_LIFE_PERIOD/(0.693));
      
    if(time<=0 || isFinite(time)==false ) 
    return false;
    
    else return time;}
  if(isNaN(Number(sampleActivity))==true){
    return false;}
  //throw 'Not implemented';
  // remove line with error and write your code here
}
