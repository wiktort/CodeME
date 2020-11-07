/*
Zamienić html na obiekt JS
*/


const article = {
    nodeName: "article", 
    id: "art-2",
    className: "box",
    role: "listitem",
    childNodes: [
            {
                nodeName: "h2",
                className: "box_title",
                childNodes:[
                    {
                        text: "Tytuł",
                    },
                    {
                        nodeName: "b",
                        value: "fsfdd",
                        childNodes: [],
                    },
                ],
            },
            {
                nodeName: "div",
                className: "box_content",
                childNodes: [
                    {
                        text: "jakiś tekst",
                    },
                ],
            },
    ],
}