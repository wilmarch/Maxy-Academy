function hitungFaktorial() {
    const bilangan = parseInt(document.getElementById("inputNumber").value);

    if (isNaN(bilangan) || bilangan < 0) {
        document.getElementById("result").innerHTML = "Maaf, hanya bilangan bulat positif yang diperbolehkan.";
    } else {
        let faktorial = 1;
        for (let i = 2; i <= bilangan; i++) {
            faktorial *= i;
        }
        document.getElementById("result").innerHTML = `Faktorial dari ${bilangan} adalah ${faktorial}`;
    }
}
