function roll(){
    const numdice = document.getElementById("numdice");
    const result = document.getElementById("result");
    const diceimages = document.getElementById("images");
    const values=[];
    const images=[];

    //roll dices for fist chance
    for(let i=0;i<numdice.value;i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src=images/${value}.png alt=Dice${value}>`);
    }
        console.log(values);
        console.log(images);
        result.textContent = `You rolled ${values.join(', ')}`;
        diceimages.innerHTML = images.join('');
       
}