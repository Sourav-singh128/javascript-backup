const Fact = (n) => {
  console.log("called", n);
  const val = n <= 1 ? 1 : n * Fact(n - 1);
  return val;
};

export default Fact;
