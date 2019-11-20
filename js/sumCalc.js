const sumCalc = () => {
    let userValue = document.getElementById('userValue').value;
    let discount = document.querySelector('.discount-value');
    let sum = document.querySelector('.sum-value');
    let totalSum = 0;
    let totalDiscount = 0;

    if (+userValue > 5 && +userValue <= 100) {
        totalSum = (+userValue * 110) / 100 * 95;
        totalDiscount = (+userValue * 110) / 100 * 5;
        discount.innerHTML = `5 % і ${totalDiscount} грн`;
        sum.innerHTML = `${totalSum} грн`;
    } else if (+userValue > 100) {
        totalSum = (+userValue * 110) / 100 * 90;
        totalDiscount = (+userValue * 110) / 100 * 10;
        discount.innerHTML = `10 % і ${totalDiscount} грн`;
        sum.innerHTML = `${totalSum} грн`;
    } else if (userValue == "" || +userValue === 0 || +userValue <= 5) {
        totalSum = (+userValue * 120);
        discount.innerHTML = `${totalDiscount} %`;
        sum.innerHTML = `${totalSum} грн`;
    }

};
