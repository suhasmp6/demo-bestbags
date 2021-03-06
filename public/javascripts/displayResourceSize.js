function display_size_data(){
    // Check for support of the PerformanceResourceTiming.*size properties and print their values
    // if supported.
    if (performance === undefined) {
        console.log("= Display Size Data: performance NOT supported");
        return;
    }

    var list = performance.getEntriesByType("resource");
    if (list === undefined) {
        console.log("= Display Size Data: performance.getEntriesByType() is  NOT supported");
        return;
    }

    // For each "resource", display its *Size property values
    console.log("= Display Size Data");
    for (var i=0; i < list.length; i++) {
        console.log("== Resource[" + i + "] - " + list[i].name);
        if ("decodedBodySize" in list[i])
            console.log("... decodedBodySize[" + i + "] = " + list[i].decodedBodySize);
        else
            console.log("... decodedBodySize[" + i + "] = NOT supported");

        if ("encodedBodySize" in list[i])
            console.log("... encodedBodySize[" + i + "] = " + list[i].encodedBodySize);
        else
            console.log("... encodedBodySize[" + i + "] = NOT supported");

        if ("transferSize" in list[i])
            console.log("... transferSize[" + i + "] = " + list[i].transferSize);
        else
            console.log("... transferSize[" + i + "] = NOT supported");
    }
}
display_size_data();