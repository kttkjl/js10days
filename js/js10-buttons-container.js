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

/**
 * Rotates elements with unique IDs around a numpad config
 * with numpad5 in the middle.
 * the IDs will need to be configured in a numpad 1-9 setting
 * @param  {[type]} btnBaseId [the constant in the ID]
 * @return {[type]}       [void]
 */
function centerRotate(btnBaseId){
  let b1 = document.getElementById(btnBaseId+1),
      b2 = document.getElementById(btnBaseId+2),
      b3 = document.getElementById(btnBaseId+3),
      b4 = document.getElementById(btnBaseId+4),
      b6 = document.getElementById(btnBaseId+6),
      b7 = document.getElementById(btnBaseId+7),
      b8 = document.getElementById(btnBaseId+8),
      b9 = document.getElementById(btnBaseId+9),
      temp = b1.innerHTML;
  b1.innerHTML = b4.innerHTML;
  b4.innerHTML = b7.innerHTML;
  b7.innerHTML = b8.innerHTML;
  b8.innerHTML = b9.innerHTML;
  b9.innerHTML = b6.innerHTML;
  b6.innerHTML = b3.innerHTML;
  b3.innerHTML = b2.innerHTML;
  b2.innerHTML = temp;
  return;
}

/**
 * Creates a 3x3 NumPad Div.
 * @param  {[type]} contId    [container ID]
 * @param  {[type]} btnBaseId [button series name]
 * @param  {[type]} btnsClass [button class]
 * @return {[type]}           [completed 3x3 numpad]
 */
function createNumPad(contId, btnBaseId, btnsClass){
  let contDiv = document.createElement("div");
  contDiv.id = contId;
  for(var i = 1; i <= 9; i++){
    contDiv.appendChild(createButton({
      cName: btnsClass,
      bId: btnBaseId+i,
      initInnerVal:i
    }))
  }
  return contDiv;
}

/**
 * Adds centerRotate() as response to listener
 * @param {[type]} btnBaseId [button series name]
 */
function addNumRotator(btnBaseId){
  let centerButtonId = btnBaseId+5,
      centerButton = document.getElementById(centerButtonId);
  centerButton.addEventListener("click", ()=>{centerRotate(btnBaseId)});
}

$body.appendChild(createNumPad("btns", "btn", "displayButton"));
addNumRotator("btn");