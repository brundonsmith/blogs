
const { given } = require('./utils')

module.exports = (html) => {
    let metaTags = getMetaTags(html);
    let linkTags = getLinkTags(html);

    return {
        title: given(html.match(TITLE_EXP), match => match[1].trim()),
        description: given(metaTags.find(t => (t.name && t.name.includes('description')) || (t.property && t.property.includes('description'))), tag => tag.content),
        favicon: 
            given(linkTags.find(t => t.rel && t.rel.includes('icon')), tag => tag.href) ||
            given(metaTags.find(t =>(t.name && t.name.includes('image')) || (t.property && t.property.includes('image'))), tag => tag.content),
    }
}

const getMetaTags = (html) => {
    const metaTagExp = /<meta([^>]+)>/gi;

    let propStrings = [];
    let result;
    while(result = metaTagExp.exec(html)) {
        propStrings.push(result[1]);
    }

    return propStrings.map(str => {
        const propExp = /([a-z]+)="([^"]+)"/gi;
        let obj = {};
        let propResult;
        while(propResult = propExp.exec(str)) {
            obj[propResult[1]] = propResult[2];
        }

        return obj;
    })
}

const getLinkTags = (html) => {
    const metaTagExp = /<link([^>]+)>/gi;

    let propStrings = [];
    let result;
    while(result = metaTagExp.exec(html)) {
        propStrings.push(result[1]);
    }

    return propStrings.map(str => {
        const propExp = /([a-z]+)="([^"]+)"/gi;
        let obj = {};
        let propResult;
        while(propResult = propExp.exec(str)) {
            obj[propResult[1]] = propResult[2];
        }

        return obj;
    })
}


const TITLE_EXP = /<title>([^<]*)<\/title>/im
