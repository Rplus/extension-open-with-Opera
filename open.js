// via [Open With Firefox](https://chrome.google.com/webstore/detail/open-with-firefox/jmjejjdalfogiopknpabihjhplfkjjjk)
// ref: [simple get](https://code.google.com/p/simple-get/)
//      [simple get @ github](https://github.com/repinel/SimpleGet/tree/master/SimpleGet)

var openInOpera = null,

    plugin = document.getElementById("openInOperaPluginId"),

    InitPlugin = function(pluginHolder) {
        openInOpera = pluginHolder.SimpleGetPlugin();
        console.log("openInOpera loaded.");
    };

openInOpera = plugin.SimpleGetPlugin();

//Initial registration
if (plugin == null) {
    console.log("Could not find element #openInOperaPluginId.");
} else {
    InitPlugin(plugin);
}

chrome.browserAction.onClicked.addListener(function(tab) {
    // console.log("Handling URL " + tab.url + " with opera");
    openInOpera.callApplication("opera -newtab " , tab.url);
    chrome.tabs.remove(tab.id);
    // console.log(tab);
});