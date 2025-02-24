# httpViewer


This is a simple iFrame viewer designed to run  as a Duet3d DWC plugin.<br>



### Version 1.0.0

[1]  Initial version

## General Description

Takes a url from a configuration file and displays the corresponding web page.

### Configuration file

The configuration file is httpViewer.config and is located in:
Files --> system --> httpViewer

There is only one option

#### -http  [url]
**Mandatory - This isrequired.** <br>

Example
```
-http  http://192.168.1.4:8090      #Causes the page at the url to be displayed
```

An example configuration file httpViewer.config.example is installed with the plugin.