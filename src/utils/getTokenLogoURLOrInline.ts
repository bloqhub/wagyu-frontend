import { ChainId } from '@wagyu-swap/sdk'



const getTokenLogoURLOrInline = (address: string, iconUrl: string) => {
  const chainId = process.env.REACT_APP_CHAIN_ID

  let imageUrl="";
  if (iconUrl.indexOf("http")===-1) {
    imageUrl=`data:image/png;base64,${iconUrl}`;

  }
  else {
    imageUrl=`https://github.com/wagyuswapapp/assets/blob/master/blockchains/velas${
      parseInt(chainId, 10) === ChainId.TESTNET ? '-test' : ''
      }/assets/${address.toLowerCase()}/logo.png?raw=true`;
  }
  return imageUrl;
}

export default getTokenLogoURLOrInline
