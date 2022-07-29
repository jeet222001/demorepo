using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
namespace EntityPractice
{
    public class Blog 
    {
        public int BlogID { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public virtual List<Post> Posts { get; set; }
    }
    public class Post 
    {
        public int PostID { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public int BlogID { get; set; }
        public virtual Blog Blog { get; set; }
    }
    public class BloggingContext : DbContext
    {
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Post> Posts { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
        using (var db = new BloggingContext())
        {
                Console.Write("Enter a Name For a New Blog");
                var name = Console.ReadLine();

                var blog = new Blog() { Name = name };
                db.Blogs.Add(blog);
                db.SaveChanges();

                var query =
                        from b in db.Blogs
                        orderby b.Name
                        select b;
                foreach(var item in query)
                {
                    Console.WriteLine(item.Name);
                }
        }
        }
    }
}
