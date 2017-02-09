var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateTotalSalesTax(salesData, taxRates) {
  // Implement your code here
  var result = {};
  for(var i =0; i < salesData.length; i++){
      var co = salesData[i];
      var taxRate = getTaxRate(co.province);
      //console.log(taxRate);
      var totalSales5 = calcSales(co.sales);
      var totalTaxes5 = calcTax(co.sales, taxRate);
      //console.log(totalTaxes);
    if(!result[co.name]) {
      result[co.name] = {totalSales: totalSales5, totalTaxes: totalTaxes5};
    }
    else {
      var obj = result[co.name];
      obj.totalSales += totalSales5;
      obj.totalTaxes += totalTaxes5;
    }
  }
  console.log(result);

  function calcTax(sales, taxRates) {
    var totalTax = 0;
    for(var i=0; i < sales.length; i++){
      totalTax += (sales[i] * taxRates);
    }
    return totalTax;
  }
//   //console.log(calcTax(companySalesData[0], salesTaxRates))

  function calcSales(sales){
   var total = 0;
   for(var i=0; i < sales.length; i++){
    total += sales[i];
   }
    return total;
  }
  //console.log(calcSales(companySalesData[2]));
  function getTaxRate(province){
    return salesTaxRates[province];
  }

  function p(item){
    console.log(item);
  }

}

 calculateTotalSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

