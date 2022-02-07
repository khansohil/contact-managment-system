from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from database import(
    fetch_one_contact,
    fetch_all_contacts,
    create_contact,
    update_contact,
    remove_contact,
)
from model import Contact

app = FastAPI()


# List of allowed origins
origins = ["*"]

# Adding is as 'middleware' to fast api app. Look at fastapi documentation for CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.get("/api/contact")
async def get_contact():
    response = await fetch_all_contacts()
    return response


@app.get("/api/contact{name}", response_model=Contact)
async def get_contact_by_id(name):
    response = await fetch_one_contact(name)
    if response:
        return response

    raise HTTPException(404, f"There is no contact with name: {name}")


@app.post("/api/contact", response_model=Contact, status_code=status.HTTP_201_CREATED)
async def post_contact(contact: Contact):
    response = await create_contact(contact.dict())
    if response:
        return response
    raise HTTPException(400, "Bad request")


@app.put("/api/contact{name}", response_model=Contact)
async def put_contact(name: str, photo: str, mobile: str, email: str, Company: str, Title: str):
    response = await update_contact(name, photo, mobile, email, Company, Title)
    if response:
        return response

    raise HTTPException(404, f"Contact with name: {name} does not exist")


@app.delete("/api/contact{name}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_contact(name):
    response = await remove_contact(name)
    if response:
        return "Successfully delete contact"

    raise HTTPException(404, f"Contact with name: {name} does not exist")
