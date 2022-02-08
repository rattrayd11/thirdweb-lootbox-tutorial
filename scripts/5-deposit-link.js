import { ethers } from "ethers";
import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0xFF0ae5260c7Abeb465799F1ADeDC099B2a4e54b7';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Depositing link...')

  const amount = ethers.utils.parseEther('2');

  await packModule.depositLink(amount);
  console.log('Deposited!')

  const balance = await packModule.getLinkBalance();
  console.log(balance);
}

(async () => {
  try {
    await main();
} catch (error) {
  console.error("Error depositing LINK", error);
  process.exit(1)
}
})();