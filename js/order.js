$(document).ready(function() {
  var total = 0;

$('#royal-cheeseAdd').click(function() {
  console.log("Burger Clicked");
  $("<tr><td>Royal With Cheese</td></tr>").appendTo('.item')
  $("<tr><td>$8.99</td></tr>").appendTo('.price')
  tTotal(8.99)

})

$('#arugula-pieAdd').click(function() {
  console.log("Pie Clicked");
  $("<tr><td>Arugula Pie</td></tr>").appendTo('.item')
  $("<tr><td>$11.99</td></tr>").appendTo('.price')
  tTotal(11.99)

})

$('#smoked-swineAdd').click(function() {
  console.log("swine Clicked");
  $("<tr><td>Smoked Swine</td></tr>").appendTo('.item')
  $("<tr><td>$14.99</td></tr>").appendTo('.price')
  tTotal(14.99)

})

$('#cream-biscutAdd').click(function() {
  console.log("ice cream Clicked");
  $("<tr><td>Cream Biscut</td></tr>").appendTo('.item')
  $("<tr><td>$7.99</td></tr>").appendTo('.price')
  tTotal(7.99)
})

var tTotal = function(amount){
  total += amount;
  var tax = total * .08;
  total += tax;
  console.log("TOTAL: ",total);
  $('#total2').empty();
  $('#total2').append(total.toFixed(2));
  $('#tax2').empty();
  $('#tax2').append(tax.toFixed(2));
}

//     //----  Array variables to push results to
//     var totalArr = [];
//     var tax = 0;
//     //boulder food tax rate =  8.995%
//     var subTotalArr = [];
//
//     //----  Dom set variables to access totals via click function
//     // var body = document.getElementById("body")
//     // var creamBiscut =
//     //creamBiscut.
//     // var arugulaPie =
//     //
//     // var royalCheese =
//     //
//
//     //royal with cheese-add to order
//
//     $('#royal-cheeseAdd').addEventListener('click', function() {
//         if (event.target.id === "royal-cheeseAdd") {
//             subTotalArr.push($('#royal-cheeseP').innerHTML)
//         }
//     })
//
//     //arugula pie-add to order
//
//     $('#arugula-pieAdd').addEventListener('click', function() {
//         if (event.target.id === "arugula-pieAdd") {
//             subTotalArr.push($('#arugula-pieP').innerHTML)
//         }
//     })
//
//     //smoked swine-add to order
//
//     $('#smoked-swineAdd').addEventListener('click', function() {
//         if (event.target.id === "smoked-swineAdd") {
//             subTotalArr.push($('#smoked-swineP').innerHTML)
//         }
//     })
//
//     //cream biscut-add to order
//
//     $('#cream-biscutAdd').addEventListener('click', function() {
//         if (event.target.id === "cream-biscutAdd") {
//             subTotalArr.push($('#cream-biscutP').innerHTML)
//         }
//     })
//
//     //---- loop through subTotalArr for subtotal price
//
//     function subTotal(array) {
//       subTotalArr.replace(/$/, "");
//         for (var i = 0; i < subTotal.length; i++) {
//             subTotalArr += subTotal[i];
//         }
//         return $('#subTotal').append(subTotalArr);
//     }
//
//     //---- to do  --  push subTotalArr to html display
//     //place order alert
//
//
// // var subPush = document.getElementById('subtotal');
// //     subPush.push(subTotalArr).innerText
//
//     //----  tax  ---- round --> var numb = 123.23454;
//     //------------------------> numb = numb.toFixed(2);
//
//     function taxF(subTotalArr) {
//         tax = (.08995 * subTotalArr);
//         var taxPush = tax.toFixed(2);
//
//     }
//      return $('tax').append('taxPush')
//
//     //----  End tax  ------------------------------------
//     //----  Total  --------------------------------------
//
// for (var i = 0; i < array.length; i++) {
//   array[i]
// }
//
//     function total {
//         totalArr.push(subTotalArr)
//         totalArr.push(tax)
//         for (var i = 0; i < totalArr.length; i++) {
//             totalArr += totalArr[i];
//         }
//         return $('#tax').append(totalArr)
//     }
//     //----  End total  -----------------------------------
//     //push to subArr to create an array
//
//     //----  End  ---------------------------------------------->
})
// //----  End  -------------------------------------------------->
//
// //----------------------------------------
//
//
// // var number1 = '12,000.00';
// // var number2 = '12,000.00';
// //
// // function parseCurrency(num) {
// //     return parseFloat(num.replace(/$/g, ''));
// }
