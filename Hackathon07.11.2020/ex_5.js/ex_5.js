/*
Zamienić html na obiekt JS
*/


const html = {
    article: {
        attributes: {
            id: "art-2",
            class: "box",
            role: "listitem",
        },
        value: "",
        chiildren: {
            h2: {
                attributes: {
                    class: "box_title",
                },
                value: "Tytuł",
                chiildren:{
                    b: {
                        attributes: {},
                        value: "fsfdd",
                        chiildren: {},
                    }
                }
            },
            div: {
                attributes: {
                    class: "box_content",
                },
                value: "jakiś tekst",
                chiildren: {},
            },
        }
    },
}