import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
// import { useEffect } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Add Product - Flowmazon",
};

async function addProduct(formData: FormData) {
  "use server";
  const name= formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0) ;



  if(!name || !description || !imageUrl || !price){
    throw Error("Missing required fields");
  }
  await prisma.product.create({
    data:{name, description, imageUrl , price }
  })

  redirect("/")
}



export default async function AddProductPage() {
  const session = await getServerSession(authOptions);
  
    if(session?.user?.email != "harshnasit1100@gmail.com"){
      redirect("/")
    }
 
  return (
    <div>
      <h1 className="text-lg mb-3 font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          required
          name="name"
          placeholder="Name"
          className="mb-3 w-full input input-bordered"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="mb-3 w-full input input-bordered"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="mb-3 w-full input input-bordered"
        />
        <FormSubmitButton type="submit" className="btn btn-primary btn-block">
          {" "}
          Add Product
        </FormSubmitButton>
      </form>
    </div>
  );
}
