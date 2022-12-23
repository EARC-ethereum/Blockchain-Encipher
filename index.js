const ethUtil = require("@metamask/eth-sig-util")
  
var encrypted = ethUtil.encrypt(
            {'publicKey':'N+ZgRzGSnHqXzu8QJ3fhQXw3Fjcl9HgIfiayPL9x2Cg=',
            'data': data,
            'version':'x25519-xsalsa20-poly1305'}
)
console.log(encrypted)
