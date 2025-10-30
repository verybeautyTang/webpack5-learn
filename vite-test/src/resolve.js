const resolveCss = (code) => {
    const scriptDom = document.createElement('script');
    scriptDom.innerHTML = code;
    document.head.appendChild(scriptDom)
}

window.resolveCss = resolveCss;