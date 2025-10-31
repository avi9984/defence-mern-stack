function otpGenerator() {
    let min = 1000;
    let max = 9999;
    let otp = Math.floor(Math.random() * (max - min + 1) + min)
    return otp
}

console.log(otpGenerator());
