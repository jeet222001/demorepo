using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace RepoPatternTOYCompany.Models
{
    public partial class ToyCompanyContext : DbContext
    {
        public ToyCompanyContext()
        {
        }

        public ToyCompanyContext(DbContextOptions<ToyCompanyContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Address> Addresses { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Plant> Plants { get; set; }
        public virtual DbSet<PurchaseDetail> PurchaseDetails { get; set; }
        public virtual DbSet<Toy> Toys { get; set; }
        public virtual DbSet<ToyType> ToyTypes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
            //    optionsBuilder.UseSqlServer("");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Address>(entity =>
            {
                entity.ToTable("Address");

                entity.HasIndex(e => e.CustomerId, "IX_Address_CustomerID");

                entity.Property(e => e.AddressId).HasColumnName("AddressID");

                entity.Property(e => e.Address1).HasColumnName("Address");

                entity.Property(e => e.CustomerId).HasColumnName("CustomerID");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Addresses)
                    .HasForeignKey(d => d.CustomerId);
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.CustometId);

                entity.ToTable("Customer");

                entity.Property(e => e.CustometId).HasColumnName("CustometID");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.ToTable("Order");

                entity.HasIndex(e => e.AddressId, "IX_Order_AddressID");

                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.AddressId).HasColumnName("AddressID");

                entity.Property(e => e.TotalAmount).HasColumnType("decimal(18, 2)");

                entity.HasOne(d => d.Address)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.AddressId);
            });

            modelBuilder.Entity<Plant>(entity =>
            {
                entity.ToTable("Plant");

                entity.Property(e => e.PlantId).HasColumnName("PlantID");
            });

            modelBuilder.Entity<PurchaseDetail>(entity =>
            {
                entity.HasKey(e => e.PurchaseId);

                entity.ToTable("PurchaseDetail");

                entity.HasIndex(e => e.OrderId, "IX_PurchaseDetail_OrderID");

                entity.HasIndex(e => e.ToyId, "IX_PurchaseDetail_ToyID");

                entity.Property(e => e.PurchaseId).HasColumnName("PurchaseID");

                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.ToyId).HasColumnName("ToyID");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.PurchaseDetails)
                    .HasForeignKey(d => d.OrderId);

                entity.HasOne(d => d.Toy)
                    .WithMany(p => p.PurchaseDetails)
                    .HasForeignKey(d => d.ToyId);
            });

            modelBuilder.Entity<Toy>(entity =>
            {
                entity.ToTable("Toy");

                entity.HasIndex(e => e.ToyTypeId, "IX_Toy_ToyTypeID");

                entity.Property(e => e.ToyId).HasColumnName("ToyID");

                entity.Property(e => e.Price).HasColumnType("decimal(18, 2)");

                entity.Property(e => e.ToyTypeId).HasColumnName("ToyTypeID");

                entity.HasOne(d => d.ToyType)
                    .WithMany(p => p.Toys)
                    .HasForeignKey(d => d.ToyTypeId);
            });

            modelBuilder.Entity<ToyType>(entity =>
            {
                entity.ToTable("ToyType");

                entity.HasIndex(e => e.PlantId, "IX_ToyType_PlantID");

                entity.Property(e => e.ToyTypeId).HasColumnName("ToyTypeID");

                entity.Property(e => e.PlantId).HasColumnName("PlantID");

                entity.HasOne(d => d.Plant)
                    .WithMany(p => p.ToyTypes)
                    .HasForeignKey(d => d.PlantId);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
