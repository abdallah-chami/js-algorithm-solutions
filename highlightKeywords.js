/**
 * @param {string} html
 * @param {string[]} keywords
 */
function highlightKeywords(html, keywords) {
    // your code here

    const highlighted = Array(html.length).fill(false);

    keywords.forEach(kw => {

        let matchIndex = html.indexOf(kw);

        while(matchIndex != -1){
            highlighted.fill(true, matchIndex, matchIndex + kw.length);
            matchIndex = html.indexOf(kw, matchIndex + 1);
        }
    })

    let res = ""

    if(highlighted[0]) res += "<em>"

    for(let i = 0; i < html.length; i++) {
        res += html.charAt(i);

        if(!highlighted[i] && highlighted[i + 1]){
            res += "<em>"
        }

        if(highlighted[i] && !highlighted[i+1]){
            res += "</em>"
        }
    }


    return res;

};
