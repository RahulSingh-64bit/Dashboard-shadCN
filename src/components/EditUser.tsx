"Use CLient"

import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet"

import { z } from "zod"
 
const formSchema = z.object({
  username: z.string().min(2, {message:"Username must be atleast 2 characters!"}).max(50),
  email: z.string().email({message:"Invalid email address!"}),
  phone: z.string().min(10).max(15),
  location: z.string().min(2),
  role: z.enum(["admin", "user"])
})


const EditUser = () => {

    
  return (
    <SheetContent>
    <SheetHeader>
      <SheetTitle className="mb-4">Edit User</SheetTitle>
      <SheetDescription>
        
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
  )
}

export default EditUser