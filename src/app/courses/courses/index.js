// TODO: callBack
let naruto = "ibag";

function getCall() {
  if (naruto === 'ibag') {
    console.log('ibag nvo');
  } else if (naruto === !"ibag") {
    console.log('not naruto')
  }

  return naruto;
}

console.log(getCall())
