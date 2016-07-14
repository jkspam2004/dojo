
import hashlib
import os, binascii # include this at the top of your file

password = 'password';
# encrypt the password we provided as 32 character string

encrypted = hashlib.md5(password).hexdigest()
print("md5 encryption: " + encrypted)


salt = binascii.b2a_hex(os.urandom(15))
print("salt: " + salt)
