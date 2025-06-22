using Xunit;
using GithubActionsReport;

namespace GithubActionsReport.Tests;

public class StringUtilitiesTests
{
    private readonly StringUtilities _stringUtilities = new();

    [Theory]
    [InlineData("hello", "olleh")]
    [InlineData("world", "dlrow")]
    [InlineData("a", "a")]
    [InlineData("", "")]
    [InlineData(null, null)]
    public void Reverse_VariousInputs_ReturnsReversedString(string input, string expected)
    {
        // Act
        string result = _stringUtilities.Reverse(input);

        // Assert
        Assert.Equal(expected, result);
    }

    [Theory]
    [InlineData("racecar", true)]
    [InlineData("A man a plan a canal Panama", true)]
    [InlineData("hello", false)]
    [InlineData("", true)]
    [InlineData(null, true)]
    public void IsPalindrome_VariousInputs_ReturnsCorrectResult(string input, bool expected)
    {
        // Act
        bool result = _stringUtilities.IsPalindrome(input);

        // Assert
        Assert.Equal(expected, result);
    }

    [Theory]
    [InlineData("hello world", 3)]
    [InlineData("AEIOU", 5)]
    [InlineData("xyz", 0)]
    [InlineData("", 0)]
    [InlineData(null, 0)]
    public void CountVowels_VariousInputs_ReturnsCorrectCount(string input, int expected)
    {
        // Act
        int result = _stringUtilities.CountVowels(input);

        // Assert
        Assert.Equal(expected, result);
    }

    [Theory]
    [InlineData("hello world", "Hello World")]
    [InlineData("HELLO WORLD", "Hello World")]
    [InlineData("hELLo WoRLd", "Hello World")]
    [InlineData("", "")]
    [InlineData(null, null)]
    public void ToTitleCase_VariousInputs_ReturnsTitleCasedString(string input, string expected)
    {
        // Act
        string result = _stringUtilities.ToTitleCase(input);

        // Assert
        Assert.Equal(expected, result);
    }

    [Fact]
    public void ToTitleCase_SingleWord_ReturnsTitleCase()
    {
        // Arrange
        string input = "programming";

        // Act
        string result = _stringUtilities.ToTitleCase(input);

        // Assert
        Assert.Equal("Programming", result);
    }

    [Fact]
    public void Reverse_JapaneseCharacters_ReversesCorrectly()
    {
        // Arrange
        string input = "こんにちは";

        // Act
        string result = _stringUtilities.Reverse(input);

        // Assert
        Assert.Equal("はちにんこ", result);
    }
}
