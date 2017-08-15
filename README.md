# fb-messages-to-json
Simple [node](http://nodejs.org) cli util that converts messages exported from Facebook as HTM into convenient JSON format.

## Facebook export
Facebook allows you to export your user data including all messages. In order to download a copy of your data go to your Facebook account settings and click *Download a copy of your Facebook data*. This will start a process that could take a while. You will be notified by E-Mail after this is done. Download the archive and unzip it.

## Exported archive structure
The structure of the export is as follows:
```
├── html
├── photos
│   ├── 10208354638443835
│   ├── 10208354734166228
│   ├── 1628099942649
│   ├── 4226852109829
│   ├── 4530314776206
│   └── 4822351276936
└── videos
```
The file *messages.htm* is located in the *html* subfolder.
## Node dependencies
+ [cheerio](https://github.com/MatthewMueller/cheerio)
+ [optimist](https://github.com/substack/node-optimist)

```
% npm install
```

## Usage
```
Usage: node ./convert-facebook-messages.js -i [facebook_messages.htm] -o [name_of_json_file]
```
##Result
Before
```
    // Thread
    <div class="thread">You, Friend
        <div class="message">
        <div class="message_header">
            <span class="user">You</spana >
            <span class="meta">Wednesday, November 12, 2008 at 8:53pm UTC+01</span>
        </div>
        <p>
            Hey, wanna hang out?
        </p>

        <div class="message">
        <div class="message_header">
            <span class="user">Friend</spana >
            <span class="meta">Wednesday, November 12, 2008 at 8:55pm UTC+01</span>
        </div>
        <p>
            Sure, let's meet at FooBar! It's got a new pool...
        </p>
    </div>
```
After
```
    // Thread
    {
        users: "You, Friend"
        messages: [
            {
                user: "You",
                date: "Wednesday, November 12, 2008 at 8:53pm UTC+01",
                message: "Hey, wanna hang out?"
            },
            {
                user: "Friend",
                date: "Wednesday, November 12, 2008 at 8:55pm UTC+01",
                message: "Sure, let's meet at FooBar! It's got a new pool..."
            }
        ]
    }
```
