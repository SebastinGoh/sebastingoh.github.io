function handleClick(project, action) {
    if (action == "live") {
        link = `./${project}/`;
    } else if (action == "code") {
        link = `https://github.com/SebastinGoh/sebastingoh.github.io/tree/main/${project}`
    }

    if (!(link == null)) {
        window.open(link, "_blank");
    }
}