using System;
using System.Collections.Generic;
using System.Text;

namespace ComputeGrade
{
    class Student
    {
        public string Name{ get; set;}

        public string Address { get; set; }

        public int Hindi { get; set; }

        public int english { get; set; }

        public int math { get; set; }

        public int totalPer { get { return (Hindi + english + math) / 3; } }

        public string grade { get {
                if (totalPer > 95)
                {
                    return "A+";
                }
                else if (totalPer > 90)
                {
                    return "A";
                }
                else if (totalPer > 80)
                {
                    return "B+";
                }
                else if (totalPer > 70)
                {
                    return "B";
                }
                else if (totalPer > 60)
                {
                    return "C";
                }
                else if (totalPer > 40)
                {
                    return "D";
                }
                else
                {
                    return "FAIL";
                }
            } }
    }
}
