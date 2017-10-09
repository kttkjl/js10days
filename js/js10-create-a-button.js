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
  newButton.name = options.bName;
  newButton.innerHTML = options.initInnerVal||"";
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
 * @param  {[type]} ident [the constant in the ID]
 * @return {[type]}       [void]
 */
function centerRotate(ident){
  let b1 = document.getElementById(ident.concat(1)),
      b2 = document.getElementById(ident.concat(2)),
      b3 = document.getElementById(ident.concat(3)),
      b4 = document.getElementById(ident.concat(4)),
      b6 = document.getElementById(ident.concat(6)),
      b7 = document.getElementById(ident.concat(7)),
      b8 = document.getElementById(ident.concat(8)),
      b9 = document.getElementById(ident.concat(9)),
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

function createNumPad(){
  for(var i = 0; i < 9; i++){
    
  }
}


$body.appendChild(createButton({
  cName: "counterButton", 
  bId: "",
  initInnerVal: "0",
  bType: "counter"
}));