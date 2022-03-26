//pick one of these two
w.on("chatmod", function(e) {e.admin = true})
/*e.op is not listed as that makes you vulnerable
to malicious HTML sent in the chat*/
w.on("chatmod", function(e) {e.staff = true})
