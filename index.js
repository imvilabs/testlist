
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
<th>Test <br /> (click to copy link)</th>
<th>Description</th>
<th>Link</th>
<th>Mobil</th>
<th>Dator</th>
<th>Padda</th>
</tr>
</thead>
<tbody>`;

entries.forEach(([key, value]) => {
    table += `<tr class="tr">
        <td class="keyer" data-key="${key}">${key}</td>
        <td>${value.description}</td>
        <td><a href="${value.link}">${value.link}</a></td>
        <td>${value.mobil}</td>
        <td>${value.dator}</td>
        <td>${value.padda}</td>
    </tr>`;
});

table += "</tbody></table>";

const testlist = document.getElementById("testlist").innerHTML=table


document.getElementById("testlist").addEventListener("click", (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("keyer")) {
        const key = clickedElement.getAttribute("data-key");
        if (list[key]) {
            
            navigator.clipboard.writeText(list[key].link).then(() => {
                console.log("Text kopierad!");
                showPopup(clickedElement);
            }).catch(err => {
                console.error("Kunde inte kopiera text:", err);
            });
        }
    }
});


function showPopup(targetElement) {
    const popup = document.getElementById("myPopup");
    const rect = targetElement.getBoundingClientRect();
    const offsetX = (rect.width - popup.offsetWidth) / 2;
    const offsetY = (rect.height - popup.offsetHeight / 2)


    popup.style.left = `${rect.left + offsetX}px`;
    popup.style.top = `${rect.height + offsetY} -25px`;

    popup.classList.add("show");


    setTimeout(() => {
        popup.classList.remove("show");
    }, 2000);
};



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
    comingTable += `<tr class="tr">
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

// function myFunction() {
//     const popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
//   }