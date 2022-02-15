

export const getRandomColor = () => {
    const random = Math.random();
    const color = {
        primaryColor: "hsl(" + random * 360 + ", 100%, 95%)",
        secondaryColor: "hsl(" + random * 360 + ", 100%, 91%)"
    }
    return color;
}