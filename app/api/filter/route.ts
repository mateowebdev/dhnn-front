import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
import { Noticia } from "@/app/types/Noticia";

export async function GET(req: NextRequest, res: NextResponse) {
  const categoria = req.nextUrl.searchParams.get("categoria");
  const url = req.nextUrl;

  const hasValidParam =
    categoria === "nacional" || categoria === "internacional";

  if (hasValidParam) {
    const data = (
      await axios.get(`http://localhost:1337/api/notas?populate=categoria`)
    ).data.data;
    const filtered = data.filter(
      (nota: Noticia) =>
        nota.attributes.categoria.data.attributes.titulo === categoria
    );
    return NextResponse.json({ filtered });
  }

  return NextResponse.json({ hasValidParam, url });
}
