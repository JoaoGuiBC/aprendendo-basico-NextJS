import Link from 'next/link';

import SEO from "@/components/SEO";

import {
  Container,
  Title,
  TextContent,
  LinkToHome,
} from '@/styles/pages/404';

export default function NotFound() {
  return (
    <Container>

      <SEO
        title="404"
        image="boost.png"
      />

      <div>
        <Title>Página não encontrada | 404</Title>
        <TextContent>Você está perdido?</TextContent>
      </div>

      <Link href="/">
        <LinkToHome>Retornar à página inicial</LinkToHome>
      </Link>
    </Container>
  );
};
