    import { theif, thefor, thelist, getFromList, addToList, removeFromList } from './thejs.js';
    theif(
        [
            () => true,
            () => false,
            "else"
        ], 
        [
            () => console.log("pattern true"),
            () => console.log("pattern false"),
            () => console.log("else")
        ]
    );

    thefor(5, (i) =>{
        console.log(i)
    });

    thelist("test", ["test", "example", "testCode"]);
    console.log(getFromList("test", 1));
    console.log(getFromList("test"));
    addToList("test", "exampleCode");
    console.log(getFromList("test"));
    removeFromList("test", 2);
    console.log(getFromList("test"));
