const check = () => {
    const ANSWER_LIST = {"1kumi":["グラフィック", "ぐらふぃっく", "graphic", "Graphic", "GRAPHIC"], 
                         "2kumi":["渋谷", "澁谷", "シブヤ", "しぶや", "shibuya", "Shibuya", "SHIBUYA"], 
                         "3kumi":["レインボー", "れいんぼー", "レインボウ", "れいんぼう", "rainbow", "Rainbow", "RAINBOW", "にじ", "ニジ", "虹", "虹色", "にじいろ", "ニジイロ"]};
    var answer = document.getElementById("answer").value;

    if (ANSWER_LIST["1kumi"].includes(answer)) {
        document.cookie = "class1=clear";
        document.getElementById("undeciphered-1").style.display = "none";
        document.getElementById("deciphered-1").style.display = "block";
        document.getElementById("miss").innerHTML = '　'
        openModal1();
    } else if (ANSWER_LIST["2kumi"].includes(answer)) {
        document.cookie = "class2=clear";
        document.getElementById("undeciphered-2").style.display = "none";
        document.getElementById("deciphered-2").style.display = "block";
        document.getElementById("miss").innerHTML = '　'
        openModal2();
    } else if (ANSWER_LIST["3kumi"].includes(answer)) {
        document.cookie = "class3=clear";
        document.getElementById("undeciphered-3").style.display = "none";
        document.getElementById("deciphered-3").style.display = "block";
        document.getElementById("miss").innerHTML = '　'
        openModal3();
    }else {
        if (document.getElementById("answer").value != '') {
            document.getElementById("miss").innerHTML = '「'+ document.getElementById("answer").value + '」は不正解です';
        }
    }
    document.getElementById("answer").value = '';
  };

  const openModal1 = () => {
    document.querySelector('.modal1').classList.add('is-open');
  }

  const openModal2 = () => {
    document.querySelector('.modal2').classList.add('is-open');
  }

  const openModal3 = () => {
    document.querySelector('.modal3').classList.add('is-open');
  }

  const openNotYetModal1 = () => {
    document.querySelector('.notyetmodal1').classList.add('is-open');
  }

  const openNotYetModal2 = () => {
    document.querySelector('.notyetmodal2').classList.add('is-open');
  }

  const openNotYetModal3 = () => {
    document.querySelector('.notyetmodal3').classList.add('is-open');
  }


  const closeModal = () => {
    document.querySelector('.modal1').classList.remove('is-open');
    document.querySelector('.modal2').classList.remove('is-open');
    document.querySelector('.modal3').classList.remove('is-open');
    document.querySelector('.notyetmodal1').classList.remove('is-open');
    document.querySelector('.notyetmodal2').classList.remove('is-open');
    document.querySelector('.notyetmodal3').classList.remove('is-open');

  }
  
  function getCookieValue(key) {
    const cookies = document.cookie.split(';')
    const foundCookie = cookies.find(
      (cookie) => cookie.split('=')[0].trim() === key.trim()
    )
    if (foundCookie) {
      const cookieValue = decodeURIComponent(foundCookie.split('=')[1])
      return cookieValue
    }
    return ''
  }

if (getCookieValue("class1") == "clear") {
    document.getElementById("undeciphered-1").style.display = "none";
    document.getElementById("deciphered-1").style.display = "block";
}
if (getCookieValue("class2") == "clear") {
    document.getElementById("undeciphered-2").style.display = "none";
    document.getElementById("deciphered-2").style.display = "block";
}
if (getCookieValue("class3") == "clear") {
    document.getElementById("undeciphered-3").style.display = "none";
    document.getElementById("deciphered-3").style.display = "block";
}
  