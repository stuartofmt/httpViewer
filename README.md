# httpViewer


This is a simple iFrame viewer designed to run  as a Duet3d DWC plugin.<br>



### Version 1.0.0

[1]  Initial version

## General Description

Takes a url from a configuration file and displays the corresponding web page.

### Configuration file

The configuration file is httpViewer.config and is located in:
Files --> system --> httpViewer

There is only one option and it is **mandatory**
There must only be one entry in the configuration file.

#### -http  [url]

Example
```
-http  http://192.168.1.4:8090      #Causes the page at the url to be displayed
```

An example configuration file httpViewer.config.example is installed with the plugin.

**Note that the method being used to display the url  is an iFrame.  This means some external web url's will not display.  However, since the intended use of this plugin is related to the use of Duet3d - the urls of interest are likely in the same domain.  So they should resolve correctly.**