// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
// - Un nuevo Set con los nombres de tu familia
const nombresFamilia = ["Cristina", "Pedro", "Marta", "Andrés", "Miguel", "Angel", "Jose Luis", "Jose Luis"];
const miSet = new Set(nombresFamilia);
console.log(nombresFamilia)
console.log(miSet);

//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
miSet.add("Jose Luis");
console.log(nombresFamilia);
console.log(miSet);

//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

miSet.add("JavaScript");
console.log(miSet);
