
using System;

namespace ComputeGrade
{
    class Program
    {
        static void Main(string[] args)
        {
            Student student = null;
            int n;
            Console.WriteLine("Enter the Numbers of students you want to enter:-");
            n = Convert.ToInt32(Console.ReadLine());
            Student[] studentsStack = new Student[n];

            for(int i = 0; i <n; i++)
            {
                student = new Student();
                Console.Write("Enter The Student Name:-");
               student.Name= Console.ReadLine();

                Console.Write("Enter the Address of the Student:-");
                    student.Address = Console.ReadLine();

                Console.WriteLine("Enter the Marks according to subject");

                Console.Write("Hindi:-");
                student.Hindi = Convert.ToInt32(Console.ReadLine());

                Console.Write("English:-");
                student.english = Convert.ToInt32(Console.ReadLine());

                Console.Write("Math:-");
                student.math = Convert.ToInt32(Console.ReadLine());

                studentsStack[i] = student;
            }

            Console.WriteLine("==========Studnet Report==============");

            Console.WriteLine("Name    Address    Hindi   English   Maths   TotalMarks    Grade");

            foreach(Student s in studentsStack)
            {
                Console.WriteLine($"{s.Name}\t | {s.Address}\t | {s.Hindi}\t | {s.english}\t | {s.math}\t  | {s.totalPer}\t | {s.grade}");
            }
        }
    }
}
