import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from "next";
import PrismicDom from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';

import SEO from "@/components/SEO";
import { client } from '@/lib/prismic';

import {
  Container,
  Title,
  Body,
  Img,
  Description,
  Price,
 } from '@/styles/pages/Products';

interface ProductProps {
  product: Document;
}

export default function Product({ product }: ProductProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>;
  };

  return (
    <Container>
      <SEO
        title={PrismicDom.RichText.asText(product.data.title)}
        image="boost.png"
      />

      <Title>{PrismicDom.RichText.asText(product.data.title)}</Title>

      <Body>
        <Img src={product.data.thumbnail.url} width="246" alt={product.uid}/>

        <div>
          <Description>{PrismicDom.RichText.asText(product.data.description)}</Description>

          <Price>R${product.data.price}</Price>
        </div>
      </Body>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
};

export const getStaticProps: GetStaticProps<ProductProps> = async (context) => {
  const { slug } = context.params;

  const product = await client().getByUID('product', String(slug), {});

  return {
    props: {
      product,
    },
    revalidate: 10,
  };
};
