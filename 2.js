//Design by Ravindra(IIITDM Kanchi 4th year)
function flames(name1, name2) {

    let a = name1.split("");
    let b = name2.split("");

    for (let t = 0; t < 15; t++) {

        for (let i = 0; i < a.length; i++) {
            let count = 0;

            for (let j = 0; j < b.length; j++) {

                if (a[i] === b[j] && count <= 1) {

                    a.splice(i, 1);
                    b.splice(j, 1);

                    count++;
                    i = -1;
                    break;
                }
            }
        }
    }

    let s = a.length + b.length;

    let l = ["F", "L", "A", "M", "E", "S"];

    while (l.length !== 1) {
        let o = l.length;
        let cut = s % o;
        if (cut === 0) cut = o;

        l.splice(cut - 1, 1);
        l = l.slice(cut - 1).concat(l.slice(0, cut - 1));
    }

    let result = l[0];

    if (result === "F") return "Friends";
    if (result === "L") return "Lovers";
    if (result === "A") return "Affection";
    if (result === "M") return "Marriage";
    if (result === "E") return "Enemies";
    if (result === "S") return "Sisters";
}

function showResult() {
    let a = document.getElementById("name").value;
    let b = document.getElementById("name2").value;

    let ans = flames(a.toLowerCase(), b.toLowerCase());
    document.getElementById("result").innerText = "Result: " + ans;
}
