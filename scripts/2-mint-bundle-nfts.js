import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main() {
  const bundleModuleAddress = '0xB5c8235F0F86e1E865e4077CE8C1CcC0399DA067';
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log('Creating NFT batch...');

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: 'Waterfall #1',
        description: 'Enjoy the view :)',
        image: readFileSync('./assets/WF1.jpg'),
        properties: {
          rarity: 'rare',
          color: 'b&w',
        }
      },
      supply: 3,
    },
    {
      metadata: {
        name: 'Waterfall #2',
        description: 'Enjoy the view :)',
        image: readFileSync('./assets/WF2.jpg'),
        properties: {
          rarity: 'rare',
          color: 'color',
        }
      },
      supply: 3,
    },
    {
      metadata: {
        name: 'Waterfall #3',
        description: 'Enjoy the view :)',
        image: readFileSync('./assets/WF3.jpg'),
        properties: {
          rarity: 'common',
          color: 'color',
        }
      },
      supply: 15,
    },
    {
      metadata: {
        name: 'Waterfall #4',
        description: 'Enjoy the view :)',
        image: readFileSync('./assets/WF4.jpg'),
        properties: {
          rarity: 'common',
          color: 'color',
        }
      },
      supply: 15,
    },
    {
      metadata: {
        name: 'Waterfall #5',
        description: 'Enjoy the view :)',
        image: readFileSync('./assets/WF5.jpg'),
        properties: {
          rarity: 'common',
          color: 'color',
        }
      },
      supply: 15,
    },
  ]);

  console.log('NFTs created!')
  console.log(JSON.stringify(created, null, 2));
}

(async () => {
  try {
    await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1)
}
})();