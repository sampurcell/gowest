/**
 * Defaults would be:
 * port – is the port to connect to (defaults to 587 if is secure is false or 465 if true)
 * host – is the hostname or IP address to connect to (defaults to ‘localhost’)
 * auth – defines authentication data (see authentication section below)
 * authMethod – defines preferred authentication method, defaults to ‘PLAIN’
 */
let transporter = nodemailer.createTransport(transport, defaults);

/**
 * Defaults would be:
 * data defines the mail content (see Message Configuration for possible options)
 * callback is an optional callback function to run once the message is delivered or it failed
 *
 * Data:
 *
 * from - The email address of the sender. All email addresses can be plain ‘sender@server.com’ or formatted ’“Sender Name” sender@server.com‘, see Address object for details
 * to - Comma separated list or an array of recipients email addresses that will appear on the To: field
 * cc - Comma separated list or an array of recipients email addresses that will appear on the Cc: field
 * bcc - Comma separated list or an array of recipients email addresses that will appear on the Bcc: field
 * subject - The subject of the email
 * text - The plaintext version of the message as an Unicode string, Buffer, Stream or an attachment-like object ({path: ‘/var/data/…’})
 * html - The HTML version of the message as an Unicode string, Buffer, Stream or an attachment-like object ({path: ‘http://…‘})
 * attachments - An array of attachment objects (see Using attachments for details). Attachments can be used for embedding images as well.
 *
 * Standard basic email example:
 *
 * const message = {
 *   from: "sender@server.com",
 *   to: "receiver@sender.com",
 *   subject: "Message title",
 *   text: "Plaintext version of the message",
 *   html: "<p>HTML version of the message</p>"
 * };
 */
transporter.sendMail(data, callback);

