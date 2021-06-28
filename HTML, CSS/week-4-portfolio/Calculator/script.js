nn = []
let oo;
let foo;
yy = ['+', '.', '/', 'x', '-']
$(document).ready(() => {
  $('.buttons-n,.buttons-m').click((e) => {
    if (!$('#mainbord').val() && e.target.id == 'sqrt') {
    } else {
      if (!$('#mainbord').val() && e.target.id == '-') {
        $('#mainbord').val($('#mainbord').val() + '-')
      }
      if (e.target.value == '+' || e.target.value == 'x' || e.target.value == '/' || e.target.value == '-') {
        if ($('#mainbord').val()[$('#mainbord').val().length - 1] == '+' || $('#mainbord').val()[$('#mainbord').val().length - 1] == 'x' || $('#mainbord').val()[$('#mainbord').val().length - 1] == '/' || $('#mainbord').val()[$('#mainbord').val().length - 1] == '-') {
        } else {
          nn = []
          if (!$('#mainbord').val()) {
            // $('#mainbord').val($('#mainbord').val() + e.target.value)
          } else {
            $('#mainbord').val($('#mainbord').val() + e.target.value)
            foo = '';
          }
        }
      } else {
        if (nn.some(x => x == '.') && e.target.value == '.') {
        } else {
          nn.push(e.target.value)
          $('#mainbord').val($('#mainbord').val() + e.target.value);
          foo = '';
        }
      }
    }
  })
  $('#clear').click(() => {
    $('#mainbord').val('');
    foo = ''
  })
  $('#c').click(() => {
    foo = ($('#mainbord').val()).slice(0, $('#mainbord').val().length - 2)
    $('#mainbord').val(foo);
  })
  $('#sqrt').click(() => {
    if (!$('#mainbord').val()) { } else {
      let str3 = '';
      let str1 = $('#mainbord').val();
      let str2 = str1.split('')
      let ch = str2.some(x => x == '=')
      let numb2 = '';
      if (ch === true) {
        let opeIndexeq = str2.lastIndexOf('=');
        str3 = str2.slice(opeIndexeq + 1)
        numb2 = str3;
      } else {
        str3 = $('#mainbord').val();
        numb2 = str3.split('')
      }
      let sq = numb2.join('')
      $('#mainbord').val($('#mainbord').val() + '=' + Math.sqrt(Number(+sq)));
      foo = Math.sqrt(Number(+sq))
    }
  })
  $('#equal').click(() => {
    if (!$('#mainbord').val()) { } else {

      if ($('#mainbord').val()[$('#mainbord').val().length - 1] == '+' || $('#mainbord').val()[$('#mainbord').val().length - 1] == 'x' || $('#mainbord').val()[$('#mainbord').val().length - 1] == '/' || $('#mainbord').val()[$('#mainbord').val().length - 1] == '-') {
      } else {
        if (foo) {
          $('#mainbord').val(foo)
        }
        let str3 = '';
        let str1 = $('#mainbord').val();
        let str2 = str1.split('')
        let ch = str2.some(x => x == '=')
        let numb2 = '';
        if (ch === true) {
          let opeIndexeq = str2.lastIndexOf('=');
          str3 = str2.slice(opeIndexeq + 1)
          numb2 = str3;
        } else {
          str3 = $('#mainbord').val();
          numb2 = str3.split('')
        }
        let res = 0;
        let str = $('#mainbord').val();
        let numb4 = numb2
        let numb5
        if (numb4[0] == '-') {
          numb5 = numb4.splice(0, 2, -numb2[1])
        }
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
            // if (numb2[0] == '-') {
            //   let mi = (numb2.slice(0, opeIndex[i])).join('')
            //   console.log(num2)
            //   arrNumbers.push(mi.unshift('-'));
            // } else {
            //   arrNumbers.push((numb2.slice(0, opeIndex[i])).join(''));
            //   console.log(numb2)
            //   console.log(arrNumbers)
            // }
            arrNumbers.push((numb2.slice(0, opeIndex[i])).join(''));
          } else if (i == opeIndex.length) {
            arrNumbers.push((numb2.slice(Number(opeIndex[i - 1]) + 1)).join(''));
          } else {
            arrNumbers.push((numb2.slice(Number(opeIndex[i - 1]) + 1, opeIndex[i])).join(''));
          }
        }
        let numbers = [];
        for (let i = 0; i < arrNumbers.length; i++) {
          if (!arrNumbers[i]) {
          } else {
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
          } else {
            result.push(newArray[i])
          }
        }
        for (let i = 0; i < result.length; i++) {

          if (result[i] == 'x') {
            oo = String("x" + result[i + 1])
            res = result[i - 1] * result[i + 1];
            result.splice(i - 1, 3, res)
            i--;
          } else if (result[i] == '/') {
            oo = String("/" + result[i + 1])
            res = result[i - 1] / result[i + 1];
            result.splice(i - 1, 3, res)
            i--;
          }
        }
        for (let i = 0; i < result.length; i++) {
          if (result[i] == '+') {
            ///////////////////////////////////////////////////////////////////
            oo = String("+" + result[i + 1])
            ///////////////////////////////////////////////////////////////////
            res = Number(result[i - 1]) + Number(result[i + 1]);
            // console.log(Number(result[i + 1]))
            result.splice(i - 1, 3, res)
            i--;
          } else if (result[i] == '-') {
            ///////////////////////////////////////////////////////////////////
            oo = String("-" + result[i + 1])
            ///////////////////////////////////////////////////////////////////
            res = result[i - 1] - result[i + 1];
            result.splice(i - 1, 3, res)
            i--;
          }
        }
        // console.log(result[0] + oo)
        // nn = oo;
        foo = result[0] + oo
        // console.log(oo)
        // console.log(foo)
        // $('#mainbord').val(str + '=' + result[0]);
        $('#mainbord').val(str + '=' + result[0]);
      }
    }
  })
})
