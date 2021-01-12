import Link from 'next/link';
import { useEffect, useState } from 'react';
import Prismic from 'prismic-javascript';
import PrismicDom from 'prismic-dom';
import { FiChevronRight } from 'react-icons/fi';

import { client } from '@/lib/prismic';

import {
  Container,
  Title,
  TitleLink,
  ContentSection,
  List,
  ProductLink,
} from '@/styles/components/Sidebar';

interface SidebarProps {
  showSearchLink?: boolean;
  showHomeLink?: boolean;
}

export default function Sidebar({
  showHomeLink = false,
  showSearchLink = false,
}: SidebarProps) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client().query([
      Prismic.Predicates.at('document.type', 'category'),
    ]).then(({ results }) => {
      setCategories(results);
    });

  }, []);

  return (
    <Container>

      {showHomeLink &&
        <Title>
          <Link href="/">
            <TitleLink>
              Página inicial
            </TitleLink>
          </Link>
        </Title>
      }

      {showSearchLink &&
        <Title>
          <Link href="/search">
            <TitleLink>
              Pesquisar produto
            </TitleLink>
          </Link>
        </Title>
      }

      <ContentSection>
        <Title>
          Categorias
        </Title>

        <List>
          {categories.map(category => {
            return (
              <li key={category.id}>
                <Link href={`/catalog/categories/${category.uid}`}>
                  <ProductLink>
                    <FiChevronRight />
                    {PrismicDom.RichText.asText(category.data.title)}
                  </ProductLink>
                </Link>
              </li>
            );
          })}
        </List>
      </ContentSection>

    </Container>
  );
};
