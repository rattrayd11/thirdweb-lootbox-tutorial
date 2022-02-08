import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";

import dotenv from "dotenv";
dotenv.config();

const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;

if (!walletPrivateKey) {
  console.error("Wallet private key missing")
  process.exit(1)
}

export const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.WALLET_PRIVATE_KEY,
    ethers.getDefaultProvider("https://polygon-mumbai.g.alchemy.com/v2/n5dSGgEkr8dfTwy8LEHKeuWEocpWbVtC")
  ),
);

const appAddress = '0x007523E58a5Ab06Bad14e30CBdCeb0E2951B14e8';

export async function getApp() {
  const app = await sdk.getAppModule(appAddress);
  return app;
}