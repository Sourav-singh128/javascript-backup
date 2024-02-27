// 1st attempt.

// console.log("start");

// const func1 = (func) => {
//   setTimeout(() => {
//     console.log("function1 is executing");
//     func(func3);
//   }, 1000);
// };

// const func2 = (func) => {
//   setTimeout(() => {
//     console.log("function2 is executing");
//     func(func4);
//   }, 500);
// };

// const func3 = (func) => {
//   setTimeout(() => {
//     console.log("function3 is executing");
//     func();
//   }, 100);
// };

// const func4 = () => {
//   setTimeout(() => {
//     console.log("function4 is executing");
//   }, 100);
// };

// func1(func2);
// // func2();
// // func3();
// console.log("end");

// 2nd attempt.

// console.log("start");

// const func1 = (func) => {
//   setTimeout(() => {
//     console.log("func1 is executing");
//     func();
//   }, 1000);
// };

// const func2 = (func) => {
//   setTimeout(() => {
//     console.log("func2 is executing");
//     func();
//   }, 1000);
// };

// const func3 = (func) => {
//   setTimeout(() => {
//     console.log("func3 is executing");
//     func();
//   }, 1000);
// };

// const func4 = (func) => {
//   setTimeout(() => {
//     console.log("func4 is executing");
//     func();
//   }, 1000);
// };

// func1(() => {
//   func2(() => {
//     func3(() => {
//       func4();
//     });
//   });
// });
// console.log("end");

// tomorrow try for  order Id , payment Id, reciept. example by yourself.

console.log("start");

const generateOrder = (user, func) => {
  if (user) {
    setTimeout(() => {
      const orderId = user + "1234";

      func(orderId);
    }, 1000);
  } else {
    return false;
  }
};

const createPayment = (orderId, func) => {
  if (orderId) {
    setTimeout(() => {
      const paymentId = orderId + "sghdi";
      func(paymentId);
    }, 1000);
  } else {
    return false;
  }
};

const createInvoice = (paymentId, func) => {
  if (paymentId) {
    setTimeout(() => {
      const invoiceId = paymentId + "-comp";

      func(invoiceId);
    }, 1000);
  } else {
    return false;
  }
};

const paymentComplete = (invoiceId, func) => {
  if (invoiceId) {
    setTimeout(() => {
      const paymentDone = invoiceId + "-done";
      func(paymentDone);
    }, 1000);
  } else {
    return false;
  }
};

generateOrder("sourav", (orderId) => {
  console.log("orderId ", orderId);
  createPayment(orderId, (paymentId) => {
    console.log("paymentId ", paymentId);
    createInvoice(paymentId, (invoiceId) => {
      console.log("invoiceId ", invoiceId);
      paymentComplete(invoiceId, (paymentDone) => {
        console.log("payment is done ", paymentDone);
        paymentComplete(invoiceId, (paymentDone) => {
          console.log("payment is done ", paymentDone);
          paymentComplete(invoiceId, (paymentDone) => {
            console.log("payment is done ", paymentDone);
            paymentComplete(invoiceId, (paymentDone) => {
              console.log("payment is done ", paymentDone);
            });
          });
        });
      });
    });
  });
});
console.log("end");
