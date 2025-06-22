namespace GithubActionsReport;

public class StringUtilities
{
    public string Reverse(string input)
    {
        if (string.IsNullOrEmpty(input))
        {
            return input;
        }
        
        char[] chars = input.ToCharArray();
        Array.Reverse(chars);
        return new string(chars);
    }

    public bool IsPalindrome(string input)
    {
        if (string.IsNullOrEmpty(input))
        {
            return true;
        }
        
        string cleanInput = input.ToLower().Replace(" ", "");
        return cleanInput == Reverse(cleanInput);
    }

    public int CountVowels(string input)
    {
        if (string.IsNullOrEmpty(input))
        {
            return 0;
        }
        
        const string vowels = "aeiouAEIOU";
        return input.Count(c => vowels.Contains(c));
    }

    public string ToTitleCase(string input)
    {
        if (string.IsNullOrEmpty(input))
        {
            return input;
        }
        
        var words = input.Split(' ');
        for (int i = 0; i < words.Length; i++)
        {
            if (!string.IsNullOrEmpty(words[i]))
            {
                words[i] = char.ToUpper(words[i][0]) + words[i].Substring(1).ToLower();
            }
        }
        
        return string.Join(" ", words);
    }
}
