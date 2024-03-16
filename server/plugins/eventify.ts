import { useEventBus } from "../utils/bus";

export default defineNitroPlugin(async (_nitroApp) => {
  const busHandler = await useEventBus()
  await busHandler?.subscribeConfigEvents()
});
