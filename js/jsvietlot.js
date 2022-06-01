function vietlot() {

    var randomNumbers = []; // mang chua 6 so ngau nhien
    var ticketNumbers = []; // mang nguoi dung mua ve
// tao ngau nhien 6 so 0-45
    while (randomNumbers.length < 6) {
        var r = Math.random();
        r = r * 46;
        r = parseInt(r);
        if (!randomNumbers.includes(r)) {   //tra ve true neu ham co r roi
            randomNumbers.push(r);
        }
    }

//Yeu cau nhap 6 so khac nhau 0-45
    while (ticketNumbers.length < 6) {
        var n = prompt("Nhap so tu 0->45:");
        n = parseInt(n);
        if (!isNaN(n) && !ticketNumbers.includes(n) && n >= 0 && n <= 45) {
            ticketNumbers.push(n);
        }
    }

//so sanh 2 bo so
    var dem = 0;
    for (var i = 0; i < randomNumbers.length; i++) {
        if (ticketNumbers.includes(randomNumbers[i])) {
            dem++;
        }
    }

// switch (dem) {
//     case 6:
//         alert("Chuc mung ban da trung 100 ty");
//         break;
//     case 5:
//         alert("Chuc mung ban da trung 10 trieu");
//         break;
//     case 4:
//         alert("Chuc mung ban da trung 30.0000");
//         break;
//     case 3:
//         alert("Chuc mung ban da trung 50.000");
//         break;
//     default:
//         alert("Chuc may man lan sau!");
// }

// setTimeout(function ()            //delay cong viec nao do 1 lan khoang thoi gian nao do
// {
//     switch (dem) {
//         case 6:
//             alert("Chuc mung ban da trung 100 ty");
//             break;
//         case 5:
//             alert("Chuc mung ban da trung 10 trieu");
//             break;
//         case 4:
//             alert("Chuc mung ban da trung 30.0000");
//             break;
//         case 3:
//             alert("Chuc mung ban da trung 50.000");
//             break;
//         default:
//             alert("Chuc may man lan sau!");
//     }
// },5000);

// setInterval(function ()            //Sau 1s dinh ki lam 1 lan
// {
//     switch (dem) {
//         case 6:
//             alert("Chuc mung ban da trung 100 ty");
//             break;
//         case 5:
//             alert("Chuc mung ban da trung 10 trieu");
//             break;
//         case 4:
//             alert("Chuc mung ban da trung 30.0000");
//             break;
//         case 3:
//             alert("Chuc mung ban da trung 50.000");
//             break;
//         default:
//             alert("Chuc may man lan sau!");
//     }
// },1000);

    var x = 0;  //Thuc hien 3 lan roi dung
    var xyz = setInterval(function () {
        switch (dem) {
            case 6:
                alert("Chuc mung ban da trung 100 ty");
                break;
            case 5:
                alert("Chuc mung ban da trung 10 trieu");
                break;
            case 4:
                alert("Chuc mung ban da trung 30.0000");
                break;
            case 3:
                alert("Chuc mung ban da trung 50.000");
                break;
            default:
                alert("Chuc may man lan sau!");
        }
        x++;
        if (x == 3) {
            clearInterval(xyz);
        }
    }, 1000);
}