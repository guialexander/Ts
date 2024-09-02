interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "nokia 92-16",
  price: 150.6,
};

const tablet: Product = {
  description: "ipad Air",
  price: 250.0,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

function taxCalculation(options: TaxCalculationOptions): number[] {
  let total = 0;
  options.products.forEach((product) => {
    total += product.price;
  });

  return [total, total * options.tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxResul] = taxCalculation({
  products: shoppingCart,
  tax: tax,
});

console.log("total", total);
console.log("tax", taxResul);

export {};
