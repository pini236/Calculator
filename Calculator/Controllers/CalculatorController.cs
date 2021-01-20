using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Calculator.BL.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Calculator
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {
        private readonly CalculatorRepository _calculatorRepository;
        public CalculatorController(CalculatorRepository calculatorRepository)
        {
            _calculatorRepository = calculatorRepository;
        }
        [HttpGet]
        public ActionResult Calc(string expression)
        {
            try
            {
                var result = _calculatorRepository.Evaluate(expression);
                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
