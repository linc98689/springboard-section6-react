const testBoxes = [
    {color:"c1", width: 1, height:1},
    {color:"c2", width: 2, height:2},
    {color:"c3", width: 3, height:3},
    {color:"c4", width: 4, height:5}
];
const tbox = {id:0, color:"c", width:1, height:1 ,
    deleteBox(id){
        let btn = document.getElementById(id);
        btn.remove();
    }};

export {testBoxes, tbox};