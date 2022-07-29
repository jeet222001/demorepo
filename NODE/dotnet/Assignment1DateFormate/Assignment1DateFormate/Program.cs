using System;

namespace Assignment1DateFormate
{
    class Program
    {
        static void Main(string[] args)
        {
            
            //Complete date Formate: 6/8/2016 11:49:00 AM
            Console.WriteLine(DateTime.Now.ToString("MM'/'dd'/'yyyy h:mm:ss tt"));

            //Short Date Format: 6 / 8 / 2016
            Console.WriteLine(DateTime.Now.ToString("MM'/'dd'/'yyyy"));

            /*Display date using 24-hour clock format:
            6 / 8 / 2016 12:00 AM
            06 / 08 / 2016 00:00*/
            Console.WriteLine(DateTime.Now.ToString("MM'/'dd'/'yyyy h:mm tt"));
            Console.WriteLine(DateTime.Now.ToString("MM'/'dd'/'yyyy HH:mm"));

            /*
             Write a C# Sharp program to display the Day properties (year, month, day, 
hour, minute, second, millisecondetc.)
             */
            Console.WriteLine("Year is:-" +DateTime.Now.Year);
            Console.WriteLine("Month us:-" + DateTime.Now.Month);
            Console.WriteLine("Day of the Month is:-" + DateTime.Now.Day);
            Console.WriteLine("Hour is:-" + DateTime.Now.Hour);
            Console.WriteLine("Second is:-" + DateTime.Now.Minute);
            Console.WriteLine("MilliSecond is:-" + DateTime.Now.Millisecond);

            //3. Write a C# Sharp program to determine the day of the week 40 days after current Date
            Console.WriteLine("Today's Day is:-"+ DateTime.Now.DayOfWeek.ToString());

            DateTime date = DateTime.Now.AddDays(40);
            Console.WriteLine("40 days After The DayName is:-" +date.DayOfWeek.ToString()+"\n\n");

            /*
             Write a C# Sharp program to display the date of past and future fifteen 
years of a specified date.
             */

            Console.WriteLine("Base Date : \t" + DateTime.Now +"\n");
            for(int i = 1; i <= 15; i++)
            {
                Console.WriteLine($"{i} Years Ago Date is:--\t" + DateTime.Now.AddYears(-i));
            }
            for (int i = 1; i <= 15; i++)
            {
                Console.WriteLine($"{i} Years After Date is:--\t" + DateTime.Now.AddYears(i));
            }
        }
    }
}
