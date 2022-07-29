using ExtensionMethod;
using System;
using System.ComponentModel;

namespace ExtensionMethod
{
    public static class Extension
    {
        public static string GetEnumDescription(this Enum enumValue)
        {
            var field = enumValue.GetType().GetField(enumValue.ToString());
            if (Attribute.GetCustomAttribute(field, typeof(DescriptionAttribute)) is DescriptionAttribute attribute)
            {
                return attribute.Description;
            }
            throw new ArgumentException("Item not found.", nameof(enumValue));
        }
    }
}
namespace ExtensionMethodPractice
{
    class Program
    {
        public enum FlagshipSmartphone
        {
            [Description("iPhone 13 Pro Max")]
            Apple,
            [Description("Samsung Galaxy Note 20")]
            Samsung,
            [Description("OnePlus 9 Pro")]
            OnePlus,
            [Description("Google Pixel 6 Pro")]
            Google
        }
        static void Main(string[] args)
        {

            FlagshipSmartphone Samsung = FlagshipSmartphone.Samsung;
            string Description = Samsung.GetEnumDescription();
            Console.WriteLine(Description);
        }
    }
}
