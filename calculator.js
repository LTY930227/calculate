function appendToDisplay(value) {
    const display = document.getElementById('display');
    // 清除"錯誤"提醒
    if(display.value ==="錯誤"){
        display.value = '';
    }
    display.value += value;
}
// 清除資料
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
// 運算
function calculate() {
    const display = document.getElementById('display');

    try {
        /*
        replace(/%/g, '/100')
        替換(/%/全部匹配,換成/100)
        */
        display.value = eval(display.value.replace(/%/g, '/100'));
    } catch (error) {
        display.value = '錯誤';
    }
}