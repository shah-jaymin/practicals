let pattern = (rows, type) => {
    let i,j;
    switch(Number(type)) {
        case 1:
            for(i=1;i<=rows;i++) {
                for(j=1;j<=i;j++) {
                    document.querySelector('pre').innerHTML += "* ";
                }
                document.querySelector('pre').innerHTML += "\n";
            }
            break;
        case 2:
            for(i=1;i<=rows;i++) {
                for(j=i;j<rows;j++) {
                    document.querySelector('pre').innerHTML += "  ";
                }
                for(j=1;j<=i;j++) {
                    document.querySelector('pre').innerHTML += "* ";
                }
                document.querySelector('pre').innerHTML += "\n";
            }
            break;
        case 3:
            for(i=1;i<=rows;i++) {
                for(j=i;j<rows;j++) {
                    document.querySelector('pre').innerHTML += "  ";
                }
                for(j=1;j<=i;j++) {
                    if(j%2!=0)
                        document.querySelector('pre').innerHTML += "*";
                    else
                        document.querySelector('pre').innerHTML += "   *   ";
                }
                document.querySelector('pre').innerHTML += "\n";
            }
            break;
        case 4:
            for(i=1;i<=rows;i++) {
                for(j=1;j<=rows;j++) {
                    if(i==j || rows-i+1==j)
                        document.querySelector('pre').innerHTML += "* ";
                    else
                        document.querySelector('pre').innerHTML += "  ";
                }
                document.querySelector('pre').innerHTML += "\n";
            }
            break;
    }
}

let rows=prompt("Enter number of rows");
let type=prompt("Enter pattern number");
pattern(rows,type);