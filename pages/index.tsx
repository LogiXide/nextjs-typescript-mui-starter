import type { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Typography, Stack } from '@mui/material'

type PropsType = {
  // Add custom props here
}

const Home: React.FC = function Home() {
  const { t } = useTranslation('common')

  return (
    <Stack display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
      <Typography variant="h1" component="h1">
        {t('hello')}
      </Typography>
    </Stack>
  )
}

export const getStaticProps: GetStaticProps<PropsType> = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || 'en', ['common'])),
    },
  }
}

export default Home
