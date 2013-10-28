# convert-facebook-messages
Simple [nodejs](http://nodejs.org) utility that converts messages exported from Facebook as HTML into convenient JSON format.
## Facebook export
Facebook allows you to export your user data including all messages. In order to download a copy of yur data go to your Facebook account settings and click *"Download a copy of your Facebook data."*. This will start a process that could take a while. You will be notified by E-Mail after this is done. Download the archive and unzip it. The file *"messages.htm"* is located in the *html* subfolder.
## Usage
<code>
Usage: node ./convert-facebook-messages.js -i [facebook_messages.htm] -o 
</code>
