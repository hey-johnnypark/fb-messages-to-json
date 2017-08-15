var fs = require('fs')
var cheerio = require('cheerio')

var argv = require('optimist').usage(
        'Usage: $0 -i [facebook_messages.htm] -o [name_of_json_file]').demand(
        [ 'i', 'o' ]).argv;

var input = argv.i
var output = argv.o

var threads = [];

var file_read = function(err, data) {
    if (err) {
        console.log("Error while processing " + input + ": " + err)
        process.exit()
    }
    $ = cheerio.load(data);
    $("div.thread").each(function(index) {
        var thread = {}
        var messages_per_thread = []

        var thread_node = $(this)
        var text = thread_node.text()

        thread_node.children('div.message').each(function() {
            var message_tag = $(this)
            var message_header = message_tag.children().first()
            var user = message_header.children().eq(0).text()
            var date = message_header.children().eq(1).text()
            var message_text = message_tag.next().text()

            var message = {
                user : user,
                date : date,
                text : message_text
            }
            messages_per_thread.push(message)
        })
        thread.messages = messages_per_thread
        thread_node.children().remove()
        thread.users = thread_node.text()
        threads.push(thread)

    })

    fs.writeFile(output, JSON.stringify(threads));
    console.log("Formatted json messages written to " + output)

}

fs.readFile(input, "utf-8", file_read)
