export interface Noticia {
    id: string;
    attributes: {
      titulo: string;
      subTitulo: string;
      descripcion: Descripcion;
      imagenUrl: string;
      slug: string;
      categoria: {
        data: {
          attributes:{
            titulo: string;
          }
        }
      }
    };
  };

  type TextNode = {
    type: "text",
    text: string
}

type ParagraphNode = {
    type: "paragraph",
    children: TextNode[]
}

type Descripcion = (ParagraphNode & { children: TextNode[] })[];