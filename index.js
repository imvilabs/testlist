
const list = {
    Attention: {
        description: "Adminpanel för vår Attentiontest",
        link: "http://tests.imvilabs.com/attention",
        mobil: "",
        dator: "X",
        padda: "X",
    },
    MapCog: {
        description: "Adminpanel för Siegbet MapCog",
        link: "http://tests.imvilabs.com/attention",
        mobil: "",
        dator: "X",
        padda: "X",
    },
    Readtest2: {
        description: "Lästest för Bokstäver",
        link: "http://tests.imvilabs.com/v2/lc",
        mobil: "X",
        dator: "",
        padda: "",
    },
    Readtest3: {
        description: "Lästest för Ord",
        link: "http://tests.imvilabs.com/v2/wc",
        mobil: "X",
        dator: "",
        padda: "",
    },
    Readtest4: {
        description: "Lästest för Meningar",
        link: "http://tests.imvilabs.com/v2/sc",
        mobil: "X",
        dator: "",
        padda: "",
    },
    Readingcomprehension: {
        description: "Läshastighet och Förståelse",
        link: "http://tests.imvilabs.com/readingspeed",
        mobil: "",
        dator: "X",
        padda: "X",
    },
    Vergensfrågor: {
        description: "Frågor som ställs I appen",
        link: "http://tests.imvilabs.com/vercence",
        mobil: "X",
        dator: "X",
        padda: "X",
    },
    Amblyopitest1: {
        description: "Testa om man har Amblyopi",
        link: "http://tests.imvilabs.com/amblyopi",
        mobil: "X",
        dator: "X",
        padda: "X",
    },
    Amblyopitest2: {
        description: "Enkel bild",
        link: "http://tests.imvilabs.com/a.jpg",
        mobil: "X",
        dator: "",
        padda: "",
    },
};

const entries = Object.entries(list);

let table = `<table border="1">
<thead>
<tr>
<th>Test</th>
<th>Description</th>
<th>Link</th>
<th>Mobil</th>
<th>Dator</th>
<th>Padda</th>
</tr>
</thead>
<tbody>`;

entries.forEach(([key, value]) => {
    table += `<tr>
        <td>${key}</td>
        <td>${value.description}</td>
        <td><a href="${value.link}">${value.link}</a></td>
        <td>${value.mobil}</td>
        <td>${value.dator}</td>
        <td>${value.padda}</td>
    </tr>`;
});

table += "</tbody></table>";

const testlist = document.getElementById("testlist").innerHTML=table


document.getElementById("testlist").addEventListener("click", (event)=>{
   console.log("du tryckte på", event.target.innerHTML)
   let key = event.target.innerHTML
   console.log(key)
   if (list[key])
    {
    console.log(list[key].link);
    navigator.clipboard.writeText(list[key].link).then(() => {
                console.log("Text kopierad!");
            }).catch(err => {
                console.error("Kunde inte kopiera text:", err);
            });
    }
    else{
        (list[key])
    }


})





const coming = {
    Stroke: {
        description: "Frågor dubbelbild Stroke",
        link: "",
        mobil: "X",
        dator: "X",
        padda: "X",
    },
    Vergensfel: {
        description: "Frågor till optikerkunder",
        link: "",
        mobil: "X",
        dator: "X",
        padda: "X",
    },
    ADHD: {
        description: "Frågor om ADHD/ADD",
        link: "",
        mobil: "X",
        dator: "X",
        padda: "X",
    },
    COVIDutm: {
        description: "Utmattningsfrågor",
        link: "",
        mobil: "X",
        dator: "X",
        padda: "X",
    },
    Koncentration: {
        description: "Koncentrationsfrågor",
        link: "",
        mobil: "X",
        dator: "X",
        padda: "X",
    },
};


let comingTable = `<table id='comingTable' border='1'>
<thead>
<tr>
<th>Test</th>
<th>Description</th>
<th>Link</th>
<th>Mobil</th>
<th>Dator</th>
<th>Padda</th>
</tr>
</thead>
<tbody>`;

Object.entries(coming).forEach(([key, value]) => {
    comingTable += `<tr>
        <td>${key}</td>
        <td>${value.description}</td>
        <td><a href="${value.link}">${value.link}</a></td>
        <td>${value.mobil}</td>
        <td>${value.dator}</td>
        <td>${value.padda}</td>
    </tr>`;
});

comingTable += "</tbody></table>";

const comingtest= document.getElementById("comingtests").innerHTML= comingTable;

