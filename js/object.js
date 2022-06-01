var obj = {
    name:"Nguyen Van An",
    age:18,
    telephone:["091234","868473"],
    girlFriend:{
      name:"Nguyen Thi Ha",
      age:16,
      eat: function ()  {
          console.log("Eat...");
      }
    },
    run:function (){
       console.log(this.name+" running ...");
    }
}
obj.name = "Nguyen Thi Ha";
console.log(obj.name);
obj.run();
obj.name = "Mai Tien Dung";
obj.run();
obj.girlFriend.eat();
// obj.age khac object voi obj.girlFriend.age

console.log(obj.telephone[0]);

var sinhvien = {
    name:"Dao Tran Hung",
    age:18,
    diachi:"Hoan kiem",
    telephone:"0948861322",
    Lophoc:{
     Tenlop:"T2203E",
     Phonghoc:"B16",
    },
    Nhom:{
    Tennhom:"Nhom 4",
    Danhsachthanhvien:[
            {
                name:"Nguyen Van Kien",
                telephone:"1234567890"
            },
            {
                name:"Doan Minh Quan",
                telephone:"888888888"
            }
        ]

}
};

console.log(sinhvien.Lophoc.Tenlop);
console.log(sinhvien.Nhom.Danhsachthanhvien[1].name);

console.log("Danh sach thanh vien:");
for(var i=0;i<sinhvien.Nhom.Danhsachthanhvien.length;i++){
    console.log(sinhvien.Nhom.Danhsachthanhvien[i].name);
}


