import secrets

SECRET_KEY = secrets.token_hex(32)  # Generates a 64-character hex string
print(SECRET_KEY)
