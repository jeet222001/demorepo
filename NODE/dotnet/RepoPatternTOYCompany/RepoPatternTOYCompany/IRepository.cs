﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RepoPatternTOYCompany.Models;

namespace RepoPatternTOYCompany
{
    public interface IRepository<TEntity> where TEntity : class
    {
        TEntity Add(TEntity entity);
        IEnumerable<TEntity> GetAll();
        TEntity GetById(int id);
        TEntity Remove(TEntity entity);
        void RemoveRange(IEnumerable<TEntity> entities);
        TEntity Update(TEntity entity);
        void AddRange(IEnumerable<TEntity> entities);
    }

    public class Repository<T> : IRepository<T> where T : class
    {
        public ToyCompanyContext DbContext { get; set; }
        public Repository(ToyCompanyContext Context)
        {
            DbContext = Context;
        }
        public IEnumerable<T> GetAll()
        {
            return DbContext.Set<T>().ToList();
        }
        public T GetById(int id)
        {
            return DbContext.Set<T>().Find(id);
        }
        public T Remove(T entity)
        {
            DbContext.Set<T>().Remove(entity);
            DbContext.SaveChanges();
            return entity;
        }
        public void RemoveRange(IEnumerable<T> entities)
        {
            DbContext.Set<T>().RemoveRange(entities);
        }

        public T Update(T entity)
        {

            DbContext.Update(entity);
            DbContext.SaveChanges();
            return entity;

        }
        public T Add(T entity)
        {
            DbContext.Add(entity);
            DbContext.SaveChanges();
            return entity;
        }
        public void AddRange(IEnumerable<T> entities)
        {
            DbContext.Set<T>().AddRange(entities);
        }
    }
}
