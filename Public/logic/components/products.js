class Product {
  constructor(name, price, description, quantity, productCategory, imagePath) {
    this._name = name;
    this._price = price;
    this._description = description;
    this._quantity = quantity;
    this._category = productCategory;
    this._imagePath = imagePath;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  get description() {
    return this._description;
  }

  set description(newDescription) {
    this._description = newDescription;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(newQuantity) {
    this._quantity = newQuantity;
  }

  get category() {
    return this._category;
  }

  set category(newCategory) {
    this._category = newCategory;
  }

  get imagePath() {
    return this._imagePath;
  }

  set imagePath(newImagePath) {
    this._imagePath = newImagePath;
  }
}

let products = [];

function addProduct(name, price, description, quantity, category, imagePath) {
  const newProduct = new Product(
    name,
    price,
    description,
    quantity,
    category,
    imagePath
  );
  const productDetails = [
    "name",
    "price",
    "description",
    "quantity",
    "category",
    "imagePath",
  ];

  // products.push(
  //   Object.fromEntries(productDetails.map((prop) => [prop, newProduct[prop]]))
  // );
  products.push(newProduct);

  return newProduct;

  // console.log("Producto añadido exitosamente:");
  // console.log(products);
}
// clocks

addProduct(
  "cartier Pre sihh",
  19.99,
  "Sumérgete en la sofisticación atemporal con el Cartier Pre-SIHH. Un reloj que fusiona la elegancia clásica con innovaciones modernas, creando un estilo incomparable para aquellos que aprecian el lujo sin esfuerzo.",
  30,
  "clock",
  "/Public/img/products/clock/reloj cartier Pre SIHH.png"
);

addProduct(
  "cartier ronde en cuero",
  19.99,
  "Experimenta la sofisticación en cada momento con el Cartier Ronde en cuero. Este reloj no solo marca el tiempo, sino que también refleja tu estilo distintivo. La correa de cuero agrega un toque de lujo y comodidad.",
  30,
  "clock",
  "/Public/img/products/clock/reloj cartier ronde en cuero.png"
);

addProduct(
  "fosil f5 dorado",
  19.99,
  "Ilumina tu estilo diario con el Fossil F5 Dorado, un reloj que fusiona la elegancia del dorado con la esencia del lujo casual. Este accesorio contemporáneo aporta un toque de glamour a cualquier ocasión.",
  30,
  "clock",
  "/Public/img/products/clock/reloj_fossil_FS_dorado.png"
);

addProduct(
  "fosil jr negro",
  20.8,
  "Haz una declaración de estilo audaz con el Fossil JR Negro. Este reloj combina a la perfección la elegancia atemporal con un toque moderno en un diseño negro clásico. Con su esfera llamativa y correa duradera.",
  30,
  "clock",
  "/Public/img/products/clock/reloj_fossil_JR_negro.png"
);

addProduct(
  "swarvoski crystallin",
  20.8,
  "Experimenta la opulencia con el Swarovski Crystalline, un tributo deslumbrante a la elegancia. Con su esfera adornada con cristales brillantes, este reloj redefine el lujo con un toque moderno. ",
  30,
  "clock",
  "/Public/img/products/clock/reloj_swarvoski_crystallin_aura_OroRosa.png"
);

addProduct(
  "rolex cosmograph",
  22.05,
  "Desata el poder del tiempo con el Rolex Cosmograph, un ícono de elegancia y rendimiento. Este reloj, meticulosamente elaborado, fusiona la artesanía excepcional con la funcionalidad de vanguardia.",
  30,
  "clock",
  "/Public/img/products/clock/rolex cosmograph de oro.png"
);

addProduct(
  "rolex milgauss",
  45.22,
  "Descubre la armonía entre la sofisticación y la tecnología con el Rolex Milgauss. Este reloj icónico no solo encarna la elegancia atemporal de Rolex, sino que también desafía los límites magnéticos con su innovador diseño.",
  30,
  "clock",
  "/Public/img/products/clock/rolex Milgauss.png"
);

addProduct(
  "rolex oyster",
  40.05,
  "Sumérgete en la esencia de la autenticidad con el Rolex Oyster, una leyenda que perdura en el tiempo. Este reloj emblemático fusiona la resistencia excepcional con la elegancia atemporal. ",
  30,
  "clock",
  "/Public/img/products/clock/rolex oyster.png"
);

addProduct(
  "rolex sea-dweller",
  40.05,
  "Embárcate en una odisea submarina con el Rolex Sea-Dweller, un reloj que fusiona la elegancia con la resistencia. Diseñado para desafiar las profundidades marinas, este ícono de la relojería combina la estética audaz con un rendimiento submarino impecable.",
  30,
  "clock",
  "/Public/img/products/clock/rolex Sea-Dweller.png"
);

addProduct(
  "rolex yacht master",
  40.05,
  "Navega hacia la excelencia con el Rolex Yacht-Master, un tributo a la sofisticación náutica. Este reloj, meticulosamente elaborado, personifica la elegancia y el rendimiento marítimo. Desde su distintiva bisel giratorio hasta la precisión cronométrica, cada detalle del Yacht-Master refleja la pasión de Rolex por la navegación y la aventura. ",
  30,
  "clock",
  "/Public/img/products/clock/rolex Yacht-Master black-rose.png"
);

// clocks

// shoes
addProduct(
  "adiddas adistar beige",
  12.5,
  "Sumérgete en el estilo con las zapatillas Adidas Adistar en tono beige, donde la elegancia se encuentra con el rendimiento deportivo. Estas zapatillas fusionan comodidad y moda en un diseño moderno y versátil.",
  30,
  "shoes",
  "/Public/img/products/shoes/adidas adistar beige.png"
);

addProduct(
  "adiddas falcon",
  18.2,
  "Desata tu lado audaz con las zapatillas Adidas Falcon, un viaje al pasado con un toque contemporáneo. Inspiradas en el estilo retro, estas zapatillas capturan la esencia del streetwear con colores vibrantes y líneas llamativas. ",
  30,
  "shoes",
  "/Public/img/products/shoes/adidas falcon negros.png"
);

addProduct(
  "adiddas forum low",
  18.2,
  "Explora la esencia del estilo urbano con las zapatillas Adidas Forum Low. Inspiradas en el clásico de los años 80, estas zapatillas combinan el legado retro con un toque moderno. Con su diseño de corte bajo y la distintiva correa en el tobillo.",
  30,
  "shoes",
  "/Public/img/products/shoes/adidas forum low.png"
);

addProduct(
  "adiddas nikanor",
  18.2,
  "Las Adidas Nikanor representan la última revolución en el mundo del calzado urbano, fusionando la elegancia contemporánea con la innovación técnica. Inspiradas en la fusión de la naturaleza y la ciudad.",
  30,
  "shoes",
  "/Public/img/products/shoes/adidas nikanor negro-gris.png"
);

addProduct(
  "airforce 1",
  18.2,
  "Eleva tu estilo con las icónicas Nike Air Force 1 en negro, un símbolo atemporal de moda urbana. La simplicidad del blanco puro se combina con el diseño legendario, creando un calzado versátil que se adapta a cualquier ocasión.",
  30,
  "shoes",
  "/Public/img/products/shoes/airForce1 Black.png"
);

addProduct(
  "airforce 1",
  18.2,
  "Eleva tu estilo con las icónicas Nike Air Force 1 en blanco, un símbolo atemporal de moda urbana. La simplicidad del blanco puro se combina con el diseño legendario, creando un calzado versátil que se adapta a cualquier ocasión.",
  30,
  "shoes",
  "/Public/img/products/shoes/airForce1 blancos.png"
);

addProduct(
  "jordan retro 4",
  18.2,
  "Descubre la fusión perfecta entre estilo icónico y sofisticación neutra con las Jordan Retro 4 en beige. Estas zapatillas rinden homenaje al legado de la cultura urbana mientras elevan tu presencia a nuevas alturas. El tono beige sutil agrega un toque de refinamiento a un diseño clásico que ha resistido la prueba del tiempo.",
  30,
  "shoes",
  "/Public/img/products/shoes/jordan retro 4 beige.png"
);

addProduct(
  "jordan retro 4",
  18.2,
  "Descubre la fusión perfecta entre estilo icónico y sofisticación neutra con las Jordan Retro 4 en blanco. Estas zapatillas rinden homenaje al legado de la cultura urbana mientras elevan tu presencia a nuevas alturas. El tono blanco sutil agrega un toque de refinamiento a un diseño clásico que ha resistido la prueba del tiempo.",
  30,
  "shoes",
  "/Public/img/products/shoes/jordan retro 4 blancos.png"
);

addProduct(
  "jordan retro 4",
  18.2,
  "Descubre la fusión perfecta entre estilo icónico y sofisticación neutra con las Jordan Retro 4 en negro. Estas zapatillas rinden homenaje al legado de la cultura urbana mientras elevan tu presencia a nuevas alturas. El tono negro sutil agrega un toque de refinamiento a un diseño clásico que ha resistido la prueba del tiempo.",
  30,
  "shoes",
  "/Public/img/products/shoes/jordan retro 4 negros.png"
);

addProduct(
  "nike tw",
  18.2,
  'Sumérgete en el futuro del estilo deportivo con las Nike TW "SkyStrike", una fusión innovadora de rendimiento y elegancia. En un atrevido diseño blanco y azul, estas zapatillas encapsulan la esencia de la velocidad y la sofisticación.',
  30,
  "shoes",
  "/Public/img/products/shoes/nike TW blancoAzul.png"
);
// shoes

// vapers

addProduct(
  "geek vape aegis leged",
  5.0,
  "Introduce un nuevo nivel de durabilidad y estilo con el GeekVape Aegis Legend. Diseñado para resistir los desafíos más extremos, este mod es una obra maestra de ingeniería que combina rendimiento y estética.",
  30,
  "vapers",
  "/Public/img/products/vapers/geek vape aegis legend.png"
);

addProduct(
  "geek vape l200",
  5.0,
  "Experimenta el futuro del vapeo con el GeekVape L200 Aegis X. Este mod de alta potencia combina un diseño robusto con tecnología de vanguardia para ofrecer una experiencia de vapeo sin igual",
  30,
  "vapers",
  "/Public/img/products/vapers/geek vape L200 blue.png"
);

addProduct(
  "geek vape flint",
  5.0,
  "Introduciendo el GeekVape Flint, la respuesta compacta y elegante para aquellos que buscan la simplicidad en el vapeo. Este dispositivo todo en uno ofrece una experiencia de vapeo sin complicaciones con un diseño intuitivo y portátil.",
  30,
  "vapers",
  "/Public/img/products/vapers/geek_vape_flint black.png"
);

addProduct(
  "geek vape aegis booost",
  6.25,
  "Descubre el poder y la adaptabilidad del GeekVape Aegis Boost. Este pod mod compacto combina la robustez característica de la línea Aegis con la portabilidad de un sistema de vainas, ofreciéndote una experiencia de vapeo potente en un paquete resistente.",
  30,
  "vapers",
  "/Public/img/products/vapers/geekvape-aegis-boost.png"
);

addProduct(
  "drag3 brown",
  4.25,
  "Este innovador dispositivo combina la potencia del vapeo con la sofisticación de un acabado marrón rico y aterciopelado, inspirado en la calidez y la profundidad de un café de calidad.",
  30,
  "vapers",
  "/Public/img/products/vapers/recarga drag3 brown.png"
);

addProduct(
  "vape drag2 ocean",
  3.2,
  "una versión exclusiva que rinde homenaje a la serenidad del océano. Este cautivador dispositivo presenta un diseño elegante que evoca la calma de las olas y la frescura del aire marino.",
  30,
  "vapers",
  "/Public/img/products/vapers/vape drag2 ocean.png"
);

addProduct(
  "vape drag2 platinum",
  3.2,
  "una joya de la tecnología de vapeo. Con un elegante acabado platino que refleja la luz como un metal precioso, este dispositivo combina rendimiento avanzado con un toque de lujo.",
  30,
  "vapers",
  "/Public/img/products/vapers/vape drag2 platinum.png"
);

addProduct(
  "vape dragE60 light rose",
  3.2,
  " Este dispositivo combina la potencia del vapeo con un toque de feminidad en un tono rosa suave que ilumina tus momentos.Con un diseño delicado y contemporáneo, el Light Rose presenta una carcasa suave al tacto con detalles en tonos dorados para realzar su estética. ",
  30,
  "vapers",
  "/Public/img/products/vapers/vape dragE60 light rose.png"
);

addProduct(
  "vape house party",
  3.2,
  "Lleva la diversión a un nivel superior con el Vape House Party Edition, el compañero perfecto para tus momentos de celebración. Este vaporizador no solo es una expresión de estilo, sino también una explosión de sabores diseñados para realzar tus experiencias festivas.",
  30,
  "vapers",
  "/Public/img/products/vapers/vape houseParty.png"
);

addProduct(
  "vape koleksi nomer",
  3.2,
  "umérgete en la experiencia única del Vape Koleksi Nomer, donde la elegancia se encuentra con la innovación numerada. Este dispositivo de vapeo exclusivo presenta un diseño moderno y aerodinámico, con números grabados de manera artística en su carcasa, creando una conexión intrigante entre el mundo digital y analógico.",
  30,
  "vapers",
  "/Public/img/products/vapers/vape Rose koleksi Nomer 57.png"
);

// vapers
export { products, addProduct, Product };