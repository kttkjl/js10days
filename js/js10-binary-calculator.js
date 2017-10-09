let $body = document.body;

/**
 * Creates a button with an options Object
 * @param  {Object} options [cName: class name, 
 *                           bId: buttonId,
 *                           bName: button name,
 *                           bType: button type - defined in function  
 *                          ]
 * @return {DOM Element}    [a button Element]
 */
function createButton (options) {
  let newButton = document.createElement("button");
  newButton.className = options.cName;
  newButton.id = options.bId;
  newButton.name = options.bName || "";
  newButton.innerHTML = options.initInnerVal || "";
  switch (options.bType){
    case "counter":
      newButton.addEventListener("click", ()=>{
        var count = parseInt(newButton.innerHTML);
        newButton.innerHTML = ++count;
      });
      break;
  }
  return newButton;
}

function createDiv(divId, divClass) {
  let div = document.createElement("div");
  div.id = divId;
  div.class = divClass;
  return div;
}

function addListenerById(listenerId, targetId, listFunction) {
  let trigger = document.getElementById(listenerId),
      target = document.getElementById(targetId);
  trigger.addEventListener("click", ()=>{listFunction(targetId, trigger.innerHTML)});
}

function insertIntoRes(targetId, insertChar){
  target = document.getElementById(targetId);
  target.innerHTML += insertChar;
}

function clearAll(targetId){
  target = document.getElementById(targetId);
  target.innerHTML = "";
}

function calc(targetId){
  let target = document.getElementById(targetId),
      targetString = document.getElementById(targetId).innerHTML,
      splitString = targetString.match(/[+/*-]+|[0-9]+/g),
      convertedString = splitString.map((x)=>{
        return (parseInt(x, 2)) ? parseInt(x, 2) : x;
      }),
      answerString = eval(convertedString.join('')).toString(2);
  target.innerHTML = answerString;
}

$body.appendChild(createDiv("btns", "container"));
let btnsDiv = document.getElementById("btns");
btnsDiv.appendChild(createDiv("res"));
btnsDiv.appendChild(createButton({bId: "btn0", initInnerVal: "0"}));
addListenerById("btn0", "res", insertIntoRes);
btnsDiv.appendChild(createButton({bId: "btn1", initInnerVal: 1}));
addListenerById("btn1", "res", insertIntoRes);
btnsDiv.appendChild(createButton({bId: "btnClr", initInnerVal: "C"}));
addListenerById("btnClr", "res", clearAll);
btnsDiv.appendChild(createButton({bId: "btnEql", initInnerVal: "="}));
addListenerById("btnEql", "res", calc);
btnsDiv.appendChild(createButton({bId: "btnSum", initInnerVal: "+"}));
addListenerById("btnSum", "res", insertIntoRes);
btnsDiv.appendChild(createButton({bId: "btnSub", initInnerVal: "-"}));
addListenerById("btnSub", "res", insertIntoRes);
btnsDiv.appendChild(createButton({bId: "btnMul", initInnerVal: "*"}));
addListenerById("btnMul", "res", insertIntoRes);
btnsDiv.appendChild(createButton({bId: "btnDiv", initInnerVal: "/"}));
addListenerById("btnDiv", "res", insertIntoRes);