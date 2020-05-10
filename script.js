document.getElementById('btn1').addEventListener('click' , () => {
    document.getElementById('red1').style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
`;
document.getElementById('red2').style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
`;
document.getElementById('red3').style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
`;

document.getElementById('app1').style.cssText = `
display: flex;
justify-content: center;
align-items: center;
`;
document.getElementById('app2').style.cssText = `
display: flex;
justify-content: center;
align-items: center;
`;

document.getElementById('brand1').style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    document.getElementById('brand2').style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
    `;
document.getElementById('brand3').style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
    `;
})

document.getElementById('btn2').addEventListener('click' , () =>{
    document.getElementById('red1').style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    document.getElementById('red2').style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    document.getElementById('red3').style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    document.getElementById('app1').style.display = 'none';
    document.getElementById('app2').style.display = 'none';

    document.getElementById('brand1').style.display = 'none'
    document.getElementById('brand2').style.display = 'none'
    document.getElementById('brand3').style.display = 'none'
})

document.getElementById('btn3').addEventListener('click' , () => {
    document.getElementById('app1').style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    document.getElementById('app2').style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    document.getElementById('red1').style.display = 'none';
    document.getElementById('red2').style.display = 'none';
    document.getElementById('red3').style.display = 'none';

    document.getElementById('brand1').style.display = 'none'
    document.getElementById('brand2').style.display = 'none'
    document.getElementById('brand3').style.display = 'none'
})

document.getElementById('btn4').addEventListener('click' , () => {
    document.getElementById('brand1').style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    document.getElementById('brand2').style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
    `;
document.getElementById('brand3').style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    document.getElementById('app1').style.display = 'none';
    document.getElementById('app2').style.display = 'none';

    document.getElementById('red1').style.display = 'none';
    document.getElementById('red2').style.display = 'none';
    document.getElementById('red3').style.display = 'none';
})