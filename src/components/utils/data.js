const products = [
    {
        id: "abc123",
        title: "Ryzen 7 7800X3D",
        description: "With 4.20 GHz clock speed for reliable and fast execution of instructions to ensure maximum convenience and feasibility this processor provides dependable and fast execution of tasks with maximum efficiency.Graphics Frequency : 2200 MHZ.Number of CPU Cores : 8. Maximum Operating Temperature (Tjmax) : 89°C.",
        stock: 7,
        price: 449,
        pictureUrl: "https://m.media-amazon.com/images/I/51HqC0rU9HL._AC_SX355_.jpg",
    },
    {
        id: "abc456",
        title: "Ryzen 9 7950X3D",
        description: "Processor with 4.20 GHz clock speed for quick and dependable processing of data to ensure maximum productivity, this hexadeca-core (16 Core) processor core efficiently handles data to ensure quicker transfer of information with maximum usability.",
        stock: 5,
        price: 699,
        pictureUrl: "https://m.media-amazon.com/images/I/51jNS8epPeL._AC_SX450_.jpg",
    },
]

const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products);
    }, 3000)
});

export default getProducts;