import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { FormEvent, useState } from "react";
import Prismic from 'prismic-javascript';
import PrismicDom from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents'
import { FiSearch } from 'react-icons/fi';

import { client } from '@/lib/prismic';
import SEO from "@/components/SEO";
import Sidebar from '@/components/Sidebar';

import {
  Container,
  SearchContainer,
  SearchInput,
  SearchButton,
  List,
  ProductLink,
  Img,
} from '@/styles/pages/Search';

interface SearchProps {
  searchResults: Document[];
}

export default function Search({ searchResults }: SearchProps) {
  const router = useRouter();
  const [search, setSearch] = useState('');

  function handleSearch(e: FormEvent) {
    e.preventDefault();

    router.push(
      `/search?q=${encodeURIComponent(search)}`
    );

    setSearch('');
  }

  return (
    <Container>
      <SEO
        title="Busca"
        image="boost.png"
      />

      <Sidebar showHomeLink />

      <SearchContainer onSubmit={handleSearch}>
        <SearchInput type="text" value={search} onChange={e => setSearch(e.target.value)} />
        <SearchButton type="submit">
          <FiSearch/>
        </SearchButton>
      </SearchContainer>

      <List>
          {searchResults.map(product => {
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
}

export const getServerSideProps: GetServerSideProps<SearchProps> = async (context) => {
  const { q } = context.query;

  if (!q) {
    return { props: { searchResults: [] } };
  };

  const searchResults = await client().query([
    Prismic.Predicates.at('document.type', 'product'),
    Prismic.Predicates.fulltext('my.product.title', String(q)),
  ]);

  return {
    props: { searchResults: searchResults.results },
  };
};
