export const pizzas = [
  {
    desc: 'La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.',
    id: 'P001',
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c',
    ingredients: ['mozzarella', 'tomates', 'jamón', 'orégano'],
    name: 'napolitana',
    price: 5950
  },
  {
    desc: 'La Pizza Española es una variante de la pizza tradicional que incorpora ingredientes típicos de la gastronomía española, creando una mezcla de sabores únicos. Posee algunos ingredientes como el chorizo y el jamón serrano, así como ingredientes frescos como el pimiento y la cebolla, pero puedes armarla a tu gusto.',
    id: 'P002',
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab',
    ingredients: ['mozzarella', 'tomates', 'jamón', 'choricillo'],
    name: 'española',
    price: 7250
  },
  {
    desc: 'Es una deliciosa variante de pizza que se caracteriza por la presencia del salami (un embutido curado) como ingrediente principal, junto con los clásicos ingredientes de una pizza tradicional, como la salsa de tomate y el queso mozzarella.',
    id: 'P003',
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3',
    ingredients: ['mozzarella', 'tomates', 'salame', 'orégano'],
    name: 'salame',
    price: 5990
  },
  {
    desc: 'La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.',
    id: 'P004',
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be',
    ingredients: ['mozzarella', 'salame', 'aceitunas', 'champiñones'],
    name: 'cuatro estaciones',
    price: 9590
  },
  {
    desc: 'La pizza Cuatro Estaciones es una de las pizzas más populares y tradicionales de la cocina italiana. Se caracteriza por dividirse en cuatro secciones, cada una con un ingrediente diferente que representa una estación del año',
    id: 'P005',
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-salame.jpg?alt=media&token=ab3d4bf8-01f2-4810-982b-bd7fb6b517b2',
    ingredients: ['mozzarella', 'tomates cherry', 'bacon', 'orégano'],
    name: 'bacon',
    price: 6450
  },
  {
    desc: 'La pizza Pollo Picante es una variante deliciosa y sabrosa de pizza, perfecta los amantes del picor y sabor. En esta receta, el pollo se combina con ingredientes como jalapeños, salsas picantes y queso para crear una pizza llena de sabor y con un toque de calor.',
    id: 'P006',
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be',
    ingredients: ['mozzarella', 'pimientos', 'pollo grillé', 'orégano'],
    name: 'pollo picante',
    price: 8500
  }
]

// Simulación de un carrito de compras
export const pizzaCart = [
  {
    id: 'P001',
    name: 'Napolitana',
    price: 5950,
    count: 1,
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c'
  },
  {
    id: 'P002',
    name: 'Española',
    price: 7250,
    count: 1,
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab'
  },
  {
    id: 'P003',
    name: 'Salame',
    price: 5990,
    count: 1,
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3'
  }
]
