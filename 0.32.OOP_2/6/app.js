
const new_Obj = {
  name: 'test'
}



const obj = {
  id: 1,
  key: function (a,b) {
    console.log(this.name);//test
  }
}


const b = obj.key.bind(new_Obj)
b()