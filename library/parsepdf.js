//const inspectcouple =require('./inspectcouple.js');
import {inspectcouple} from './inspectcouple.js';
//const relocatecell =require('./relocatecell.js');
import {relocatecell} from './relocatecell.js';

function parsepdf(text){
  var items;
  var parent = [];
  var child = [];
  var pair = []; // to inspect if the next string are part of previous string
  var row = []; // to store row position data, i.e. ats, bwh with respect to row index.
  var col = []; // to store column position data, i.e. x and ri with respect to col index.
  var rmax = {r:0,n:0}; // to store the row where have the maximum member
  var colcount = 0;
  var status='';
  
  if (Array.isArray(text.items))items = text.items;
  for (let i = 0; i < items.length; i += 1) {
    //push every single items, including non-empty string
    pair.push(items[i]);
    status = inspectcouple(pair,parent,row,col,rmax);
    //debugger;
  }
  colcount=col.size;debugger;
  relocatecell(parent,col);
  
  return parent;
}

//module.exports = parsepdf 
export {parsepdf}  