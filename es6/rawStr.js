function quux (strings, ...values) {
    console.log(strings[0]);
    console.log(strings[1] === "bar");
    console.log(strings.raw[0]);
    console.log(strings[1].raw === "bar");
    console.log(values[0] === 42);
}
exports.(quux(`foo\n${ 42 }bar`));

console.log(String.raw `foo\n${ 42 }bar` === "foo\\n42bar")