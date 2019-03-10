function convert() {
    const dependencyArea = document.getElementById('dependency')
    const implementationArea = document.getElementById('implementation')
    const dependecyText = dependencyArea.value
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(dependecyText, 'text/xml')
    let length = xmlDoc.getElementsByTagName('groupId').length
    let implementationText = ""
    for (let i = 0; i < length; i++) {
        let groupId = xmlDoc.getElementsByTagName('groupId')[i].childNodes[0].nodeValue
        let artifactId = xmlDoc.getElementsByTagName('artifactId')[i].childNodes[0].nodeValue
        implementationText += `implementation '${groupId}:${artifactId}'\r`
    }
    implementationArea.value = implementationText
}