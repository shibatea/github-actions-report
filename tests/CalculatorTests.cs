using Xunit;
using GithubActionsReport;

namespace GithubActionsReport.Tests;

public class CalculatorTests
{
    private readonly Calculator _calculator = new();

    [Fact]
    public void Add_TwoPositiveNumbers_ReturnsSum()
    {
        // Arrange
        int a = 5;
        int b = 3;

        // Act
        int result = _calculator.Add(a, b);

        // Assert
        Assert.Equal(8, result);
    }

    [Theory]
    [InlineData(10, 5, 15)]
    [InlineData(-5, 5, 0)]
    [InlineData(-10, -5, -15)]
    [InlineData(0, 0, 0)]
    public void Add_VariousInputs_ReturnsCorrectSum(int a, int b, int expected)
    {
        // Act
        int result = _calculator.Add(a, b);

        // Assert
        Assert.Equal(expected, result);
    }

    [Fact]
    public void Subtract_TwoNumbers_ReturnsDifference()
    {
        // Arrange
        int a = 10;
        int b = 4;

        // Act
        int result = _calculator.Subtract(a, b);

        // Assert
        Assert.Equal(6, result);
    }

    [Theory]
    [InlineData(5, 3, 15)]
    [InlineData(-5, 3, -15)]
    [InlineData(0, 100, 0)]
    public void Multiply_VariousInputs_ReturnsCorrectProduct(int a, int b, int expected)
    {
        // Act
        int result = _calculator.Multiply(a, b);

        // Assert
        Assert.Equal(expected, result);
    }

    [Fact]
    public void Divide_ValidNumbers_ReturnsQuotient()
    {
        // Arrange
        int a = 10;
        int b = 2;

        // Act
        double result = _calculator.Divide(a, b);

        // Assert
        Assert.Equal(5, result);
    }

    [Fact]
    public void Divide_ByZero_ThrowsException()
    {
        // Arrange
        int a = 10;
        int b = 0;

        // Act & Assert
        Assert.Throws<DivideByZeroException>(() => _calculator.Divide(a, b));
    }

    [Theory]
    [InlineData(2, true)]
    [InlineData(3, false)]
    [InlineData(0, true)]
    [InlineData(-4, true)]
    public void IsEven_VariousNumbers_ReturnsCorrectResult(int number, bool expected)
    {
        // Act
        bool result = _calculator.IsEven(number);

        // Assert
        Assert.Equal(expected, result);
    }

    [Theory]
    [InlineData(0, 1)]
    [InlineData(1, 1)]
    [InlineData(5, 120)]
    [InlineData(6, 720)]
    public void Factorial_ValidInput_ReturnsCorrectResult(int n, int expected)
    {
        // Act
        int result = _calculator.Factorial(n);

        // Assert
        Assert.Equal(expected, result);
    }

    [Fact]
    public void Factorial_NegativeNumber_ThrowsException()
    {
        // Arrange
        int n = -5;

        // Act & Assert
        Assert.Throws<ArgumentException>(() => _calculator.Factorial(n));
    }
}
