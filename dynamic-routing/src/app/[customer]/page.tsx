"use client";
interface Params {
    customer: string;
  }
  interface CustomerProps {
    params: Params;
  }
export default function Customer({params}:CustomerProps) {
return(
    <div>
        <h1>Customer Details</h1>
        <h3>Id:{params.customer}</h3>
    </div>
)
}