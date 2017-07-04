

function bootCamper(name, street){
  this.name=name;
  this.street=street;
  this.info=function(){
    return "My name is "+this.name+" and I live on "+ this.street;
  };
  }
  
const jasonO= new bootCamper("Jason Ogaga", "Road 13 Ajah");
console.log(jasonO.info());
console.log("Jason is a bootcamper "+(jasonO instanceof bootCamper));

function changeStatus(bootcamper){
  bootcamper.name="Andelan";
}
changeStatus(jasonO);
console.log("Jason became an "+jasonO.name);

function Andelan(name){
  this.name=name;
  this.getInfo=function(){
    return "The andelans's name is "+ this.name;
  };
}

Andelan.prototype.mood="happy";
Andelan.prototype.currentMood=function(){
  return this.name+" is a very "+ this.mood+" fellow ";
};

const femi =new Andelan("Femi");
console.log(femi.currentMood());

for (const prop in femi){
  console.log(prop+":"+ femi[prop]);
}

console.log("name Property of femi: "+ femi.hasOwnProperty("name"));
console.log("mood Property of Femi: "+ femi.hasOwnProperty("mood"));