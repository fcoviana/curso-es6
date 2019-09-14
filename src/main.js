const minhaPromise = () => new Promise((resolve, reject) =>{
    setTimeout(() => {resolve('OK')}, 2000);
});

async function executaPromise(){
    console.log(await minhaPromise());
    console.log(await minhaPromise()+' 2x');
    console.log(await minhaPromise()+' 3x');
}

executaPromise();