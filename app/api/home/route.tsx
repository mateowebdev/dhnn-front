import { NextResponse, NextRequest } from "next/server";
import axios from "axios";
import { dataHolder } from "../../data.js";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    /* ------------------ Flujo con Strapi corriendo en Develop ----------------- */
    const apiResponse = await axios.get(`http://localhost:1337/api/notas`);
    const blogList = { data: apiResponse.data.data, serverOff: false };
    return NextResponse.json(blogList);
  } catch (error) {
    /* ---------------- Flujo si Strapi no se encuentra corriendo --------------- */
    console.log("Error de comunicación con el servidor.");
    console.log("Sirviendo data statica.");

    return NextResponse.json({ data: dataHolder.data, serverOff: true });
  }
}
