import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main () {
  const bundleModuleAddress = '0xB5c8235F0F86e1E865e4077CE8C1CcC0399DA067';
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  const packModuleAddress = '0xFF0ae5260c7Abeb465799F1ADeDC099B2a4e54b7';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Getting all NFTs from bundle..');
  const nftsInBundle = await bundleModule.getAll();

  console.log("NFTs in bundle:");
  console.log(nftsInBundle);

  console.log('Creating pack containing NFTs from bundle...');
  const created = await packModule.create({
    assetContract: bundleModuleAddress,
    metadata: {
      name: 'Waterfall Pack',
      image: readFileSync('./assets/wf.jpg'),
    },
    assets: nftsInBundle.map(nft => ({
      tokenId: nft.metadata.id,
      amount:nft.supply,
    })),
  });

  console.log('Pack created!')
  console.log(created);
}

(async () => {
  try {
    await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1)
}
})();