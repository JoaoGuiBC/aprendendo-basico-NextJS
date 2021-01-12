import { GetServerSideProps } from "next";
import Link from 'next/link';
import Prismic from 'prismic-javascript';
import PrismicDom from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';

import SEO from "@/components/SEO";
import { client } from "@/lib/prismic";
import {
  Container,
  Body,
  Title,
  List,
  ProductLink,
  Img
} from "@/styles/pages/Home";

interface HomeProps {
  recommendedProducts: Document[];
};

export default function Home({ recommendedProducts }: HomeProps) {

  return (
    <Container>
      <SEO
        title="TestCommerce - o e-commerce pra aprender sobre NextJS"
        image="boost.png"
        shouldExcludeTitleSuffix
      />

      <Body>
        <Title>Produtos</Title>
        <List>
          {recommendedProducts.map(recommendedProduct => {
            return (
              <li key={recommendedProduct.id}>
                <Link href={`/catalog/products/${recommendedProduct.uid}`}>
                  <ProductLink>
                    <Img
                      src={recommendedProduct.data.thumbnail.url}
                      alt={recommendedProduct.uid}
                    />
                    {PrismicDom.RichText.asText(recommendedProduct.data.title)}
                  </ProductLink>
                </Link>
              </li>
            );
          })}
        </List>
      </Body>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const recommendedProducts = await client().query([
    Prismic.Predicates.at('document.type', 'product'),
  ]);

  return {
    props: {
      recommendedProducts: recommendedProducts.results,
    }
  }
}
