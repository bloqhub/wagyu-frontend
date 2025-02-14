import addresses from './addresses.json'

export default {
  masterChef: {
    111: addresses[111].WAGFarm,
    106: addresses[106].WAGFarm,
  },
  sousChef: {
    111: addresses[111].WAGStakingFactory,
    106: addresses[106].WAGStakingFactory,
  },
  lotteryV2: {
    111: '0xDf4dBf6536201370F95e06A0F8a7a70fE40E388a',
    106: '0xDf4dBf6536201370F95e06A0F8a7a70fE40E388a',
  },
  multiCall: {
    106: addresses[106].Multicall2,
    111: addresses[111].Multicall2,
  },
  // not
  pancakeProfile: {
    106: '0xDf4dBf6536201370F95e06A0F8a7a70fE40E388a',
    111: '0x4B683C7E13B6d5D7fd1FeA9530F451954c1A7c8A',
  },
  //
  pancakeRabbits: {
    106: '0xDf7952B35f24aCF7fC0487D01c8d10690a60DBa07',
    111: '0x60935F36e4631F73f0f407e68642144e07aC7f5E',
  },
  //
  bunnyFactory: {
    106: '0xfa249Caa1D16f75fa159F7DFBAc0cC5EaB48CeFf',
    111: '0x707CBF373175fdB601D34eeBF2Cf665d08f01148',
  },
  //
  claimRefund: {
    106: '0xE7e53A7e9E3Cf6b840f167eF69519175c4111e149',
    111: '',
  },
  pointCenterIfo: {
    106: '0x3C6919b132462C1FEc572c6300E83191f4F0012a',
    111: '0xd2Ac1B1728Bb1C11ae02AB6e75B76Ae41A29111e3',
  },
  bunnySpecial: {
    106: '0xFee8A195570a18461146F401d6033f5ab3380849',
    111: '0x7b7b1583De1DeB32Ce6605F6deEbF24A0671c17C',
  },
  tradingCompetition: {
    106: '0xd718baa0B1F4f70dcC8458154042120FFE0DEFFA',
    111: '0xC787F45B833721ED3aC46E99b703B3E1E01abb111',
  },
  easterNft: {
    106: '0x23c41D28A239dDCAABd1bb1deF8d057189510066',
    111: '0x24ec6962dbe874F6B67B5C5085710610667fA0854F',
  },
  cakeVault: {
    106: addresses[106].WagyuVault,
    111: addresses[111].WagyuVault,
  },
  predictions: {
    106: '0x18B2A687610328590Bc8F2e5fEdDe3b582A49cdA',
    111: '',
  },
  chainlinkOracle: {
    106: '0xD276fCF34D54A926773c399eBAa772C12ec394aC',
    111: '',
  },
  bunnySpecialCakeVault: {
    106: '0x5B4a770Abe7Eafb2601CA4dF9d73EA99363E60a4',
    111: '',
  },
  bunnySpecialPrediction: {
    106: '0x342c99e9aC24157657095eC69CB04b73257e7A9C',
    111: '',
  },
  bunnySpecialLottery: {
    106: '0x24ED31d31C5868e5a96aA77fdcB890f3511fa0b2',
    111: '0x382cB4111110F398F0f152cae82821476AE51c9cF',
  },
  farmAuction: {
    106: '0xb92Ab7c1edcb273AbA24b06106cEb3681654805D2',
    111: '0x3F9602593b4f7C67ab045DB51BbDEa94E40fA9Fe',
  },
}
