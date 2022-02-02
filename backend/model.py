from pydantic import BaseModel
from typing import Optional


class Contact(BaseModel):
    name: str
    mobile: str
    email: Optional[str] = None
