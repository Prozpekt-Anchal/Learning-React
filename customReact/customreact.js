function customrender(reactelement,maincontainer){
    const domelement = document.createElement(reactelement.type);
    domelement.innerHTML(reactelement.children);
    for (const prop in reactelement.props) {
        domelement.setAttribute(prop,reactelement.props[prop])
    }
    container.appendChild(domelement);
}

const reactelement = {
    type : "a",
    props : {
        href : "https://google.com",
        target: "_blank"
    },
    children : "click here to visit google"
}
const maincontainer = document.querySelector("#root");
customrender(reactelement,maincontainer)