const koa = require('koa')
const app = new koa()

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);

    if (ctx.path === '/api/users') {
        ctx.body = {
            users: [
                { name: 'zhangsan' },
                { name: 'lisi' },
                { name: 'wangwu' }
            ]
        }
    }
});


app.listen(3000, () => {
    console.log('server is running at port 3000');
}
);