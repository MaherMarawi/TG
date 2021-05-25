$(document).ready(()=>{
    $('.buttons-n,.buttons-m').click((e)=>{
        $('#mainbord').val($('#mainbord').val() + e.target.value);
    })
    $('#clear').click(()=>{
        $('#mainbord').val('');
    })
    $('#sqrt').click(()=>{
      let str3 = '';
      let str1 = $('#mainbord').val();
      let str2 = str1.split('')
      let ch = str2.some(x => x == '=')
      let numb2 = '';
      if (ch === true) {
        let opeIndexeq = str2.lastIndexOf('=');
        str3 = str2.slice(opeIndexeq +1)
        numb2 = str3;
      }else{
        str3 = $('#mainbord').val();
        numb2 = str3.split('')
      }
        let sq = numb2.join('')
      $('#mainbord').val($('#mainbord').val() +'='+ Math.sqrt(Number(+sq)));
    })
    $('#equal').click(()=>{
      let str3 = '';
      let str1 = $('#mainbord').val();
      let str2 = str1.split('')
      let ch = str2.some(x => x == '=')
      let numb2 = '';
      if (ch === true) {
        let opeIndexeq = str2.lastIndexOf('=');
        str3 = str2.slice(opeIndexeq +1)
        numb2 = str3;
      }else{
        str3 = $('#mainbord').val();
        numb2 = str3.split('')
      }
        let res = 0;
        let str = $('#mainbord').val();
        let ope = numb2.filter(x => x == '+' || x == '-' || x == 'x' || x == '/');
        let opeIndex = [];
        for (const i in numb2) {
          for (const j in ope) {
            if (ope[j] == numb2[i]) {
              opeIndex.push(i)
            }
          }
        }
        let arrNumbers = [];
        for (let i = 0; i <= opeIndex.length; i++) {
          if (i == 0) {
            arrNumbers.push((numb2.slice(0,opeIndex[i])).join(''));
          }else if(i == opeIndex.length){
            arrNumbers.push((numb2.slice(Number(opeIndex[i-1])+1)).join(''));
          }else{
            arrNumbers.push((numb2.slice(Number(opeIndex[i-1])+1,opeIndex[i])).join(''));
          }
        }
        let numbers = [];
        for (let i = 0; i < arrNumbers.length; i++) {
          if (!arrNumbers[i]) {
          }else{
            numbers.push(arrNumbers[i])
          }
        }
        newArray = [];
        for (let i = 0; i < numbers.length + ope.length; i++) {
          newArray.push(numbers[i])
          newArray.push(ope[i])
        }
        let result = [];
        for (let i = 0; i < newArray.length; i++) {
          if (!newArray[i]) {
          }else{
            result.push(newArray[i])
          }
        }
        for (let i = 0; i < result.length; i++) {
          if (result[i] == 'x') {
            res = result[i - 1] * result[i + 1];
            result.splice(i - 1,3,res)
            i--;
          }else if (result[i] == '/') {
            res = result[i - 1] / result[i + 1];
            result.splice(i - 1,3,res)
            i--;
          }
        }
        for (let i = 0; i < result.length; i++) {
          if (result[i] == '+') {
            res = Number(result[i - 1]) + Number(result[i + 1]);
            result.splice(i - 1,3,res)
            i--;
          }else if (result[i] == '-') {
            res = result[i - 1] - result[i + 1];
            result.splice(i - 1,3,res)
            i--;
          }
        }
        $('#mainbord').val(str +'='+result[0]);
    })
})
  