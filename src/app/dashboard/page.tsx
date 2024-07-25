
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db/prisma";




export default async function DashBoard() {
  const session = await getServerSession(authOptions);
  
  const handleClick = (e) => {
    e.preventDefault()
    redirect("add-product")
  }
  if (session?.user?.email != "harshnasit1100@gmail.com") {
    redirect("/");
  }

  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  function redirectToAddProduct(){
    redirect("add-product")
  }
  return (
    <div>
      <div className="mb-10" >
      <h2 className="text-3xl font-bold mb-10"> Admin Dashboad </h2>
      {/* <button className="btn btn-primary" onClick={handleClick} >Add Product</button> */}
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Item Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products?.map((product, index) => {
              return (
                <>
                 <tr>
              <th>{index +1}</th>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
                </>
              )
            })}
           
            
           
          </tbody>
        </table>
      </div>
    </div>
  );
}
