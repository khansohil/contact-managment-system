from pydantic import BaseModel
from typing import Optional


class Contact(BaseModel):
    name: str
    photoUrl: Optional[str]
    mobile: str
    email: Optional[str]
    company: Optional[str]
    title: Optional[str]
