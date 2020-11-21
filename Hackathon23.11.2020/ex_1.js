/*
nawiązując do zadania hackathon/07112020/ex_5.js
napisz funkcję która przyjmie obiekt, który zrobilas/es
i przeksztalci go na postac string - html.
*/

//
// Variables
//
const fragments = [{
    nodeName: "article", 
    attributes: {
        id: "art-2",
        className: "box",
        role: "listitem",
    },
    childNodes: [
            {
                nodeName: "h2",
                attributes: {
                    className: "box_title",
                },
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
                attributes: {
                    className: "box_content",
                },
                childNodes: [
                    {
                        text: "jakiś tekst",
                    },
                ],
            },
    ],
}];

//
// Functions
//

const nameMap = {
    className: "class",
};

const prepareAttributes = (attr = {}) => {
    return Object.entries(attr).map(([key, value]) =>{
       return `${nameMap[key] ? nameMap[key] : key}="${value}"`
    }).join(" ");
};


const createElements = (array) => {

    return array.map(element => {
       
        const {
            nodeName, 
            attributes, 
            childNodes, 
            text
        } = element;

        return nodeName ? `<${nodeName} ${prepareAttributes(attributes)}>${childNodes ? createElements(childNodes) : ""}</${nodeName}>`
        : (text || "");
    }).join(""); 

};

//
// Inits
//

const template = document.createElement("template");
template.innerHTML = createElements(fragments);

// document.querySelector("div").appendChild(template.content);