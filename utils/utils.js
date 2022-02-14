

export const getRandomColor = () => {
    const random = Math.random();
    const color = {
        p1: "hsl(" + random * 360 + ", 100%, 95%)",
        p2: "hsl(" + random * 360 + ", 100%, 91%)"
    }
    return color;
}