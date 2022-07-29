const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
    console.log('foo')
    setTimeout(bar, 0)
    Promise.resolve('should be right after baz, before bar').then(resolve => console.log(resolve)).catch(reject => console.log(reject))
    baz()
}
//event loop in javascript example
foo()