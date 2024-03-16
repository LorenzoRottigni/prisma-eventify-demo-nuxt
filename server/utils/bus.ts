import { BusHandler, loadEventBus } from 'prisma-eventify';

let _bus: BusHandler | null = null;

export const useEventBus = async () => {
  if (!_bus) _bus = await loadEventBus({
    outDir: './fastify',
    excludeFields: ['id'],
    excludeModels: [],
  });

  return _bus;
};