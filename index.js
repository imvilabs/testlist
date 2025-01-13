
const list = {
    Attention: {
        description: "Adminpanel för vår Attentiontest",
        link: "http://tests.imvilabs.com/attention",
        mobil: "",
        dator: "X",
        pada: "X",
    },
    MapCog: {
        description: "Adminpanel för Siegbet MapCog",
        link: "http://tests.imvilabs.com/attention",
        mobil: "",
        dator: "X",
        pada: "X",
    },
    Readtest1: {
        description: "Lästest för B/O/M",
        link: "http://tests.imvilabs.com/lc",
        mobil: "X",
        dator: "",
        pada: "",
    },
    Readtest2: {
        description: "Lästest för Bokstäver",
        link: "http://tests.imvilabs.com/v2/lc",
        mobil: "X",
        dator: "",
        pada: "",
    },
    Readtest3: {
        description: "Lästest för Ord",
        link: "http://tests.imvilabs.com/v2/wc",
        mobil: "X",
        dator: "",
        pada: "",
    },
    Readtest4: {
        description: "Lästest för Meningar",
        link: "http://tests.imvilabs.com/v2/sc",
        mobil: "X",
        dator: "",
        pada: "",
    },
    Readingcomprehension: {
        description: "Läshastighet och Förståelse",
        link: "http://tests.imvilabs.com/readingspeed",
        mobil: "",
        dator: "X",
        pada: "X",
    },
    Vergensfrågor: {
        description: "Frågor som ställs I appen",
        link: "http://tests.imvilabs.com/vercence",
        mobil: "X",
        dator: "X",
        pada: "X",
    },
    Amblyopitest1: {
        description: "Testa om man har Amblyopi",
        link: "http://tests.imvilabs.com/amblyopi",
        mobil: "X",
        dator: "X",
        pada: "X",
    },
    Amblyopitest2: {
        description: "Enkel bild",
        link: "http://tests.imvilabs.com/a.jpg",
        mobil: "X",
        dator: "",
        pada: "",
    },
};

const entries = Object.entries(list);

let table = `<table border="1">
<thead>
<tr>
<th>Key</th>
<th>Description</th>
<th>Link</th>
<th>Mobil</th>
<th>Dator</th>
<th>Pada</th>
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
        <td>${value.pada}</td>
    </tr>`;
});

table += "</tbody></table>";

const testlist = document.getElementById("testlist").innerHTML=table



const coming = {
    Stroke: {
        description: "Frågor dubbelbild Stroke",
        link: "",
        mobil: "X",
        dator: "X",
        pada: "X",
    },
    Vergensfel: {
        description: "Frågor till optikerkunder",
        link: "",
        mobil: "X",
        dator: "X",
        pada: "X",
    },
    ADHD: {
        description: "Frågor om ADHD/ADD",
        link: "",
        mobil: "X",
        dator: "X",
        pada: "X",
    },
    COVIDutm: {
        description: "Utmattningsfrågor",
        link: "",
        mobil: "X",
        dator: "X",
        pada: "X",
    },
    Koncertration: {
        description: "Koncertrationsfrågor",
        link: "",
        mobil: "X",
        dator: "X",
        pada: "X",
    },
};


let comingTable = `<table id='comingTable' border='1'>
<thead>
<tr>
<th>Key</th>
<th>Description</th>
<th>Link</th>
<th>Mobil</th>
<th>Dator</th>
<th>Pada</th>
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
        <td>${value.pada}</td>
    </tr>`;
});

comingTable += "</tbody></table>";

const comingtest= document.getElementById("comingtests").innerHTML= comingTable;
