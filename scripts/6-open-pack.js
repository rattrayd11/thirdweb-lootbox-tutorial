import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0xFF0ae5260c7Abeb465799F1ADeDC099B2a4e54b7';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('🌸 Opened the pack!');
  console.log(opened);
}

(async () => {
  try {
    await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1)
}
})();