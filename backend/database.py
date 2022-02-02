from model import Contact
from typing import Optional
# MongoDB driver
import motor.motor_asyncio

# For the connection b/w this file an mongoDB
# 27017 default port for mongoDB
client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')

# database, collection, document = schema, table, rows
database = client.ContactList
collection = database.contact

# Main functions


async def fetch_one_contact(name):
    document = await collection.find_one({"name": name})
    return document


async def fetch_all_contacts():
    contacts = []
    cursor = collection.find({})
    async for document in cursor:
        contacts.append(Contact(**document))
    return contacts


async def create_contact(contact):
    document = contact
    result = await collection.insert_one(document)
    return document


async def update_contact(name: str, mobile: str, email: Optional[str] = None):
    await collection.update_one({"name": name}, {"$set": {"mobile": mobile, "email": email}})
    document = await collection.find_one({"name": name})
    return document


async def remove_contact(name: str):
    await collection.delete_one({"name": name})
    return True
