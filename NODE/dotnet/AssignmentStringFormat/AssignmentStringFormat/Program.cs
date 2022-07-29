using System;
using System.Linq;

namespace AssignmentStringFormat
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
             Write a program in C# Sharp to input a string and print it
Input the string : Welcome, w3resource
Expected Output :
The string you entered is : Welcome, w3resourcew
             */
            Console.Write("Enter Some String: ");
            string str = Console.ReadLine();

            Console.WriteLine("The String you have entered is :" + str);

            /*
             Write a program in C# Sharp to find the length of a string without using 
            library function.
            Test Data :
            Input the string : w3resource.com
            Expected Output :
            Length of the string is : 15
             */
            Console.WriteLine("The Length of the string is "+str.Length);

            /*
             Write a program in C# Sharp to separate the individual characters from a 
            string
            Input the string : w3resource.com
            Expected Output :
            The characters of the string are :
            w 3 r e s o u r c e . c o m
             */
            var res = str.ToCharArray();
            Console.WriteLine("The Characters of the string are: -");
            for(var i = 0; i < res.Length; i++)
            {
                Console.Write(res[i]+" ");
            }
            Console.WriteLine("");
            /*
             Write a program in C# Sharp to print individual characters of the string in 
            reverse order.
            Test Data :
            Input the string : w3resource.com
            Expected Output :
            The characters of the string in reverse are :
            m o c . e c r u o s e r 3 w
             */
            Console.WriteLine("The Reverse Order of the Characters of given string are: -");

            for (var i = res.Length-1; i > 0; i--)
            {
                Console.Write(res[i]+" ");
            }
            Console.WriteLine("");

            /*
             Write a program in C# Sharp to count the total number of words in a 
            string
            Input the string : This is w3resource.com
            Expected Output :
            Total number of words in the string is : 3 
             */
            int count = 1;
            for(int i = 0; i < str.Length; i++)
            {
                if(str[i]==' '||str[i]=='\n')
                {
                    count++;
                }
            }
            Console.WriteLine("Number of words in Given String is: " + count);

            /*
             Write a program in C# Sharp to compare two string without using 
            string library functions.
            Test Data :
            Input the 1st string : This is first string
            Input the 2nd string : This is first string
            Expected Output :
            The length of both strings are equal and
            also, both strings are equal.
             */
            string s1 = "This is first string";
            string s2 = "This is first string";
            int yn = 0,cnt=0;
            int l1 = s1.Length;
            int l2 = s2.Length;
            if (l1 == l2)
            {
                for(int i = 0; i < l1; i++)
                {
                    if (s1[i] == s2[i])
                    {
                        yn = 1;
                        cnt++;
                    }
                    else
                    {
                        yn = 0;
                    }
                }
            }
            if (yn == 1 && cnt == l1 && l1 == l2)
            {
                Console.WriteLine("The length of both strings are equal and also, both strings are equal.");
            }
            else Console.WriteLine("The string are not equal");

            /*
             Write a program in C# Sharp to count a total number of alphabets, digits 
            and special characters in a string
            Test Data :
            Input the string : Welcome to w3resource.com
            Expected Output :
            Number of Alphabets in the string is : 21
            Number of Digits in the string is : 1
            Number of Special characters in the string is : 4
             */
            int isSpec = 0, isAlphabet = 0, isNum = 0;

            foreach(char c in str.ToLower())
            {
                
                if (c>'a'&&c<'z' || c>'A'&&c<'Z')
                {
                    isAlphabet++;
                }
                else if (char.IsDigit(c))
                {
                    isNum++;
                }
                else isSpec++;
            }
            Console.WriteLine("Number of Alphabet in string is: -  "+isAlphabet);
            Console.WriteLine("Number of Digits in string is: -" + isNum);
            Console.WriteLine("Number of Special characters in string is: -" + isSpec);

            /*
             Write a program in C# Sharp to copy one string to another string.
            Input the string : This is a string to be copied.
            Expected Output :
            The First string is : This is a string to be copied.
            The Second string is : This is a string to be copied.
            Number of characters copied : 31
             */
            char[] str3 = new char[str.Length];
            str.CopyTo(0, str3, 0, str.Length);
            Console.WriteLine("The First String is: -" + str);
            Console.WriteLine("The Second String is: -"+str3);
            Console.WriteLine("Number of Characters Copied: -"+str3.Length);

            /*
             Write a program in C# Sharp to count a total number of vowel or 
            consonant in a string
            Test Data :
            Input the string : Welcome to w3resource.com
            Expected Output :
            The total number of vowel in the string is : 9
            The total number of consonant in the string is : 12

             */
            int isVowel = 0, isConsonants = 0;
            foreach(char c in str.ToLower())
            {
                if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
                {
                    isVowel++;
                }
                else isConsonants++;
            }
            Console.WriteLine("Number of Vowel in string Are: -" + isVowel);
            Console.WriteLine("Number of Consonants in  string Ara: -" + isConsonants);

            /*
              Write a program in C# Sharp to find maximum occurring character in a 
                string.
                Test Data :
                Input the string : Welcome to w3resource.com.
                Expected Output :
                The Highest frequency of character 'e'
                appears number of times : 4
             */
            int ct=0;
            char r=' ';
             for(int i=0;i<str.Length-1;i++)
            {
                if (str[i] == str[i + 1])
                {
                    r = str[i];
                    ct++;
                }
            }
            Console.WriteLine("The Highest Frequency of Character: "+r);
            Console.WriteLine("appears number of times: "+ct);
            /*
             Write a program in C# Sharp to sort a string array in ascending order.
            Test Data :
            Input the string : this is a string
            Expected Output :
            After sorting the string appears like :
            a g h i i i n r s s s t t
             */

            var result = str.OrderBy((c) => c);
            foreach(var c in result)
            {
                Console.Write(" ");
                Console.Write(c);
            }

            /*
             Write a program in C# Sharp to read a string through the keyboard and 
            sort it using bubble sort.
            Test Data :
            Input number of strings :3
            Input 3 strings below :
            abcd
            zxcv
            mnop
            Expected Output :
            After sorting the array appears like :
            abcd
            mnop
            zxcv
             */

        }
    }
}
