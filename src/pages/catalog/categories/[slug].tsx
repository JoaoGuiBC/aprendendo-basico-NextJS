import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Prismic from 'prismic-javascript';
import PrismicDom from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';

import SEO from "@/components/SEO";
import { client } from '@/lib/prismic';
import Sidebar from '@/components/Sidebar';

import {
  Container,
  Body,
  Title,
  List,
  ProductLink,
  Img
} from '@/styles/pages/Categories';

interface ICategoryProps {
  category: Document;
  products: Document[];
};

export default function Category({ products, category }: ICategoryProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>;
  };

  return (
    <Container>
      <SEO
        title={PrismicDom.RichText.asText(category.data.title)}
        image="boost.png"
      />

      <Title>{PrismicDom.RichText.asText(category.data.title)}</Title>

      <Sidebar
        showSearchLink
        showHomeLink
      />

      <List>
        {products.map(product => {
          return (
            <li key={product.id}>
              <Link href={`/catalog/products/${product.uid}`}>
                <ProductLink>
                  <Img
                    src={product.data.thumbnail.url}
                    alt={product.uid}
                  />
                  {PrismicDom.RichText.asText(product.data.title)}
                </ProductLink>
              </Link>
            </li>
          );
        })}
      </List>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await client().query([
    Prismic.Predicates.at('document.type', 'category'),
  ]);

  const paths = categories.results.map(category => {
    return {
      params: { slug: category.uid },
    };
  });

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps: GetStaticProps<ICategoryProps> = async (context) => {
  const { slug } = context.params;

  const category = await client().getByUID('category', String(slug), {});

  const products = await client().query([
    Prismic.Predicates.at('document.type', 'product'),
    Prismic.Predicates.at('my.product.category', category.id),
  ]);

  return {
    props: {
      category,
      products: products.results,
    },
    revalidate: 60,
  };
};
