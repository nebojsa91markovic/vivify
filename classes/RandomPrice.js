let RandomPrice = (min, max) => {
    return Math.floor(Math.random() * (max = min)) + min;
}

export default RandomPrice;