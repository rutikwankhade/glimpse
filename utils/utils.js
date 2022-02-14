export const colors = [
    'bg-gray-100', 'bg-red-100', 'bg-pink-100', 'bg-orange-200', 'bg-yellow-100','bg-green-100', 'bg-teal-100', 'bg-cyan-100', 'bg-blue-100', 'bg-indigo-100', 'bg-violet-100', 'bg-purple-100', 'bg-fuchsia-100', 'bg-rose-100'
];

export const getRandomColor = () => {
    const random = Math.random();
    const color = {
        p1: "hsl(" + random * 360 + ", 100%, 95%)",
                p2: "hsl(" + random * 360 + ", 100%, 91%)"

    }
  return color;
}