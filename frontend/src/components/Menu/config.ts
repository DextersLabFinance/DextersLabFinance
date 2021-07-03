import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x8f16a16eacaa15d2e17fd97657cbfaa8066626ae',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x8f16a16eacaa15d2e17fd97657cbfaa8066626ae',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x8f16a16eacaa15d2e17fd97657cbfaa8066626ae',
      },
      {
        label: 'CoinGecko (soon)',
        href: '/',
      },
      {
        label: 'CoinMarketCap (soon)',
        href: '/',
      },
      {
        label: 'DXL Chart',
        href: 'https://poocoin.app/tokens/0x8f16a16eacaa15d2e17fd97657cbfaa8066626ae',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://dexterlabfinance.gitbook.io'
      }
    ],
  },
  {
    label: 'Audit by Techrate (In Progress)',
    icon: 'AuditIcon',
    href: '/',
  },
  {
    label: 'Review by Rugdoc',
    icon: 'AuditIcon',
    href: 'https://rugdoc.io/project/dexterlab/',
  },
]

export default config
