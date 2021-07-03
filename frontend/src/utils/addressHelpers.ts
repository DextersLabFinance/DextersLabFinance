import addresses from 'config/constants/contracts'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

export const getCakeAddress = () => {
  return addresses.cake[CHAIN_ID]
}
export const getMasterChefAddress = () => {
  return addresses.masterChef[CHAIN_ID]
}
export const getMulticallAddress = () => {
  return addresses.mulltiCall[CHAIN_ID]
}
export const getWbnbAddress = () => {
  return addresses.wbnb[CHAIN_ID]
}
export const getLotteryAddress = () => {
  return addresses.lottery[CHAIN_ID]
}
export const getLotteryTicketAddress = () => {
  return addresses.lotteryNFT[CHAIN_ID]
}
