console.log("Hello World V1");

document.body.addEventListener("click", e => {
   
    const el = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    el.setAttribute("x", "250");
    el.setAttribute("y", "250");
    el.setAttribute("width", "100");
    el.setAttribute("height", "50");
    el.setAttribute("key", "whatever");

    idsvg.append(el);
});

