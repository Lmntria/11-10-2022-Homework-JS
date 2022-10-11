
let count=0;
let username = [];
let check=true;
alert(`Nickname sayi : ${count}`);
let isAdd = confirm("Nickname elave etmek isteyirsiniz mi?")
if (isAdd) {
    let input = prompt("NickName'i daxil edin:");
    if (isNaN(input)) {
      for (let i = 0; i < username.length; i++) {
        if (username(i)!=input) {
          username.push("input")
          check=true;
        }
      }
      if (check) {
        alert(`elave edildi`);
        count=count+ Number(1);
        alert(`Nickname sayi : ${count}`);
      }
      else{
        alert(`daxil edilmis nickname movcuddur!!!`);
        alert(`Nickname sayi : ${count}`);
      }

    }
    else{
        alert("Yeri get");
    }
}
else{
  alert(`Nickname sayi : ${count}`);
}


