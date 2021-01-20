using Calculator.BL.Repositories;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Calculator.Tests
{
    [TestClass]
    public class CalcTests
    {
        private CalculatorRepository _calculatorRepository = new CalculatorRepository(); 
        [TestMethod]
        public void SimpleAdd()
        {
            Assert.AreEqual(_calculatorRepository.Evaluate("15 + 15"), 30);
        }
        [TestMethod]
        public void DecimalAdd()
        {
            Assert.AreEqual(_calculatorRepository.Evaluate("1.5 + 1.7"), 3.2);

        }
        [TestMethod]
        public void MultipleExpressions()
        {
            Assert.AreEqual(_calculatorRepository.Evaluate("15 + 5 / 2"), 17.5);

        }
        [TestMethod]
        public void Divide()
        {
            Assert.AreEqual(_calculatorRepository.Evaluate("15 / 2"), 7.5);

        }
    }
}
