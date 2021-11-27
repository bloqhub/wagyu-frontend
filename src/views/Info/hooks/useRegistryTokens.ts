import { useState, useEffect } from 'react'
import { request, gql } from 'graphql-request'
import { REGISTRY_CLIENT } from 'config/constants/endpoints'
import { Tags, TokenInfo, Version } from '@uniswap/token-lists/src/types'




const QUERY_REGISTIES = gql`
{
  tokens(skip:0){
    name
    symbol
    address
    decimals
    logoURI
  }
}
`



const fetchRegistries = async () => {
  try {
    const data = await request(REGISTRY_CLIENT, QUERY_REGISTIES, {})
    return {
      error: false,
      registries: data,
    }
  } catch (error) {
    console.error('Failed to fetch tokens from registry', error)
    return {
      error: true,
      registries: [],
    }
  }
}


const useGraphTokenlist = () => {

  const [registriesTokens, setRegistries] = useState({
    name:'remote-graph',
  timestamp:'',
  version: {
    'major': 3,
    'minor': 0,
    'patch': 0,
  },
    tokens: [],
  keywords: ["wagyuswap", "default"],
  tags: {},
  logoURI: '',
  })
  const [error, setError] = useState(false)



  useEffect(() => {
    const fetch = async () => {

      const { registries, error: fetchError } = await fetchRegistries()
      if (fetchError) {
        setError(true)
      } else {

        //Override for tests
        // registries.tokens[0].chainId=106;
        // registries.tokens[0].address="0xb830d8213e2c3dd621037703d05a5e594387b6be"
        registriesTokens.tokens=registries.tokens

        setRegistries(registriesTokens )
      }

    }
    if ((registriesTokens.tokens.length<1) && !error  ) {
      fetch()
    }
  })

  return registriesTokens
}
export default useGraphTokenlist
