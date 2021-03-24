function relocatecell(parent,col){
  let colsize = col.length;
  let r = 0;
  let c = 0;
  //debugger;

  for(let row of parent){
    if(row.length<colsize){
      c=0;
      for(let cell of row){
        if(cell===undefined){c+=1;continue;}
        if(cell.str==='PROVINSI ')debugger;
        if(c>col.length){debugger;break};
        let lf = col[c-1]?col[c-1]['r']:0;
        let rg = col[c+1]?col[c+1]['r']:1e+12;
        if(cell.x>lf&&cell.x<rg){c+=1;continue;}

        //debugger;
        parent[r].splice(c,0,{str:' '});
        c+=1;
      }
    }
    r+=1;
  }

}

//module.exports = relocatecell
export {relocatecell}